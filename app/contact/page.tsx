"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";
import { CtaBand } from "@/components/ui/CtaBand";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : "https://formspree.io/f/xeaorgjw";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMsg(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const detail = data?.errors?.map((err: { message: string }) => err.message).join(", ");
        throw new Error(detail || "Could not send your message.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error && err.message !== "Could not send your message."
          ? err.message
          : "Your message could not be sent. Please check your connection and try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-8 sm:py-12 bg-neutral-50">
      {/* Header */}
        <section className="pt-8 pb-[82px] sm:pt-12 sm:pb-[98px]">
        <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for freelance / fulltime
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 sm:text-5xl lg:text-6xl">
                Let’s Build Products That Make an Impact.
              </h1>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
              Have a product, website, or idea that needs thoughtful UX and
              <br />
              polished UI? <span className="font-semibold text-brand">Let’s talk.</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Contact Form */}
      <Section className="pt-[-2px] sm:pt-[14px] lg:pt-[30px]">
        <div className="flex flex-col items-center justify-center">
          <div
            id="form"
            className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 md:p-10"
          >
              <h2 className="text-xl font-bold text-neutral-900">
                Send a Message
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Fill out the fields below and I will get back to you shortly.
              </p>

              {status === "success" ? (
                <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-emerald-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-700">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 bg-white"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  {status === "error" && (
                    <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-5 text-center">
                      <h3 className="text-base font-semibold text-red-900">
                        Something went wrong.
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-red-700">{errorMsg}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 bg-white"
                        onClick={() => setStatus("idle")}
                      >
                        Try Again
                      </Button>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-neutral-700 mb-1.5"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-neutral-700 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-neutral-700 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-neutral-700 mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and scope..."
                      className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
                </>
              )}
          </div>
        </div>
      </Section>

      <CtaBand />
    </div>
  );
}

