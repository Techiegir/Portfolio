"use client";

import React, { useEffect, useRef } from "react";

type BubbleKind = "pill" | "circle";

interface BubbleDef {
  label: string;
  kind: BubbleKind;
}

interface BubbleColor {
  bg: string;
  text: string;
  border: string;
}

const SKILLS: BubbleDef[] = [
  { label: "USER RESEARCH", kind: "pill" },
  { label: "DESIGN SYSTEMS", kind: "pill" },
  { label: "PROTOTYPING", kind: "pill" },
  { label: "VISUAL DESIGN", kind: "circle" },
  { label: "UX TESTING", kind: "circle" },
  { label: "STORYTELLING", kind: "pill" },
  { label: "ACCESSIBILITY", kind: "pill" },
  { label: "PRODUCT STRATEGY", kind: "pill" },
  { label: "INTERACTION DESIGN", kind: "pill" },
  { label: "IMPROVING UX", kind: "circle" },
];

const BUBBLE_COLORS: BubbleColor[] = Array.from({ length: 8 }, (_, i) => ({
  bg: `var(--bubble-${i}-bg)`,
  text: `var(--bubble-${i}-text)`,
  border: `var(--bubble-${i}-border)`,
}));

type PhysicsState = "entry" | "interactive";

export const SkillBubbles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let dispose: (() => void) | undefined;

    const init = async () => {
      const Matter = await import("matter-js");
      const {
        Engine,
        Runner,
        Composite,
        Bodies,
        Body,
        Events,
      } = Matter;

      const engine = Engine.create();
      const world = engine.world;
      const runner = Runner.create();

      const clampNum = (n: number, min: number, max: number) =>
        Math.max(min, Math.min(max, n));

      const rect = container.getBoundingClientRect();
      let viewW = rect.width;
      let viewH = rect.height;

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const defs = isMobile ? SKILLS.slice(0, 5) : SKILLS;

      const wallOffset = 80;

      const leftWall = Bodies.rectangle(-wallOffset, viewH / 2, wallOffset * 2, viewH * 3, {
        isStatic: true,
        restitution: 0.4,
      });
      const rightWall = Bodies.rectangle(viewW + wallOffset, viewH / 2, wallOffset * 2, viewH * 3, {
        isStatic: true,
        restitution: 0.4,
      });
      const floor = Bodies.rectangle(viewW / 2, viewH - 14, viewW + wallOffset * 2, 80, {
        isStatic: true,
        restitution: 0.55,
        friction: 0.35,
      });

      Composite.add(world, [leftWall, rightWall, floor]);

      interface Bubble {
        body: Matter.Body;
        element: HTMLDivElement;
        width: number;
        height: number;
      }

      const bubbles: Bubble[] = [];

      let dragState:
        | {
            body: Matter.Body;
            element: HTMLDivElement;
            pointerId: number;
            offsetX: number;
            offsetY: number;
            lastX: number;
            lastY: number;
            lastTime: number;
            velX: number;
            velY: number;
          }
        | null = null;

      const handlePointerDown = (e: PointerEvent) => {
        const index = bubbles.findIndex((b) => b.element === e.currentTarget);
        if (index < 0) return;
        const bubble = bubbles[index];
        const rect = container.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        bubble.element.setPointerCapture(e.pointerId);
        bubble.element.style.cursor = "grabbing";
        Body.setVelocity(bubble.body, { x: 0, y: 0 });
        Body.setAngularVelocity(bubble.body, 0);
        dragState = {
          body: bubble.body,
          element: bubble.element,
          pointerId: e.pointerId,
          offsetX: px - bubble.body.position.x,
          offsetY: py - bubble.body.position.y,
          lastX: px,
          lastY: py,
          lastTime: performance.now(),
          velX: 0,
          velY: 0,
        };
        e.preventDefault();
      };

      const handlePointerMove = (e: PointerEvent) => {
        if (!dragState || e.pointerId !== dragState.pointerId) return;
        const rect = container.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        const now = performance.now();
        const dtMs = Math.max(1, now - dragState.lastTime);
        dragState.velX = (px - dragState.lastX) / dtMs;
        dragState.velY = (py - dragState.lastY) / dtMs;
        Body.setPosition(dragState.body, {
          x: px - dragState.offsetX,
          y: py - dragState.offsetY,
        });
        Body.setVelocity(dragState.body, { x: 0, y: 0 });
        dragState.lastX = px;
        dragState.lastY = py;
        dragState.lastTime = now;
      };

      const handlePointerUp = (e: PointerEvent) => {
        if (!dragState || e.pointerId !== dragState.pointerId) return;
        const { element, body } = dragState;
        Body.setVelocity(body, {
          x: clampNum(dragState.velX * 16.67, -14, 14),
          y: clampNum(dragState.velY * 16.67, -14, 14),
        });
        if (element.hasPointerCapture(dragState.pointerId)) {
          element.releasePointerCapture(dragState.pointerId);
        }
        element.style.cursor = "";
        dragState = null;
      };

      const createBubble = (def: BubbleDef) => {
        const color = BUBBLE_COLORS[bubbles.length % BUBBLE_COLORS.length];
        const width =
          def.kind === "circle"
            ? clampNum(def.label.length * 4.4 + 44, 76, 112)
            : clampNum(def.label.length * 8.6 + 64, 108, 216);
        const height = def.kind === "circle" ? width : 46;

        const x = 70 + Math.random() * Math.max(120, viewW - 140);
        const y = -(40 + Math.random() * 260);

        const options = {
          restitution: 0.55,
          friction: 0.5,
          frictionStatic: 0.6,
          frictionAir: 0.012 + Math.random() * 0.02,
          density: 0.0013,
          chamfer: def.kind === "pill" ? { radius: height / 2 } : undefined,
          angle: (Math.random() - 0.5) * 0.5,
        };

        const body =
          def.kind === "circle"
            ? Bodies.circle(x, y, width / 2, options)
            : Bodies.rectangle(x, y, width, height, options);

        Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 0.8,
          y: Math.random() * 0.4,
        });

        const element = document.createElement("div");
        element.textContent = def.label;
        element.style.cssText = `position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:${width}px;height:${height}px;border-radius:${def.kind === "circle" ? "50%" : "999px"};background:${color.bg};color:${color.text};border:1px solid ${color.border};font-size:${def.kind === "circle" ? "10px" : "11px"};font-weight:700;letter-spacing:0.05em;white-space:nowrap;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;box-shadow:var(--bubble-shadow),inset 0 1px 0 var(--bubble-inset);will-change:transform;z-index:1;`;
        container.appendChild(element);
        element.addEventListener("pointerdown", handlePointerDown);
        element.addEventListener("pointermove", handlePointerMove);
        element.addEventListener("pointerup", handlePointerUp);
        element.addEventListener("pointercancel", handlePointerUp);

        Composite.add(world, body);
        bubbles.push({ body, element, width, height });
      };

      defs.forEach((def, i) => {
        window.setTimeout(() => {
          if (!cancelled) createBubble(def);
        }, i * 135);
      });

      let state: PhysicsState = "entry";

      const settleTimer = window.setTimeout(() => {
        engine.gravity.y = 0.05;
        state = "interactive";
      }, defs.length * 135 + 3800);

      const impulseId = window.setInterval(() => {
        if (state !== "interactive" || bubbles.length === 0) return;
        const count = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < count; i++) {
          const b = bubbles[Math.floor(Math.random() * bubbles.length)];
          const v = b.body.velocity;
          const max = 2.8;
          Body.setVelocity(b.body, {
            x: clampNum(v.x + (Math.random() - 0.5) * 0.7, -max, max),
            y: clampNum(v.y + (Math.random() - 0.5) * 0.7 - 0.22, -max, max),
          });
        }
      }, 550);

      const resize = () => {
        const r = container.getBoundingClientRect();
        viewW = r.width;
        viewH = r.height;
        Body.setPosition(leftWall, { x: -wallOffset, y: viewH / 2 });
        Body.setPosition(rightWall, { x: viewW + wallOffset, y: viewH / 2 });
        Body.setPosition(floor, { x: viewW / 2, y: viewH - 14 });
      };
      window.addEventListener("resize", resize);

      const sync = () => {
        for (const b of bubbles) {
          const { body, element, width, height } = b;
          element.style.transform = `translate3d(${body.position.x - width / 2}px, ${body.position.y - height / 2}px, 0) rotate(${body.angle}rad)`;
        }
      };

      Events.on(engine, "afterUpdate", () => {
        for (const b of bubbles) {
          const { body, height } = b;
          if (state === "interactive" && body.position.y - height / 2 < 8) {
            Body.setPosition(body, { x: body.position.x, y: 8 + height / 2 });
            Body.setVelocity(body, { x: body.velocity.x, y: Math.abs(body.velocity.y) * 0.5 });
          }
        }
        sync();
      });

      Runner.run(runner, engine);

      return () => {
        window.clearTimeout(settleTimer);
        window.clearInterval(impulseId);
        window.removeEventListener("resize", resize);
        Runner.stop(runner);
        Composite.clear(world, false);
        container.innerHTML = "";
      };
    };

    init().then((cleanup) => {
      if (cancelled) {
        cleanup();
        return;
      }
      dispose = cleanup;
    });

    return () => {
      cancelled = true;
      if (dispose) dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    />
  );
};