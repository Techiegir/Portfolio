import { Container } from "@/components/ui/Container";

export default function WorkCollectionLoading() {
  return (
    <div className="py-10 sm:py-16">
      <Container>
        <div className="h-4 w-40 animate-pulse rounded-full bg-neutral-200" />
        <div className="mt-8 sm:mt-12">
          <div className="h-3 w-32 animate-pulse rounded-full bg-neutral-200" />
          <div className="mt-4 h-9 w-72 animate-pulse rounded-xl bg-neutral-200" />
          <div className="mt-4 h-4 w-64 animate-pulse rounded-full bg-neutral-100" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/5] animate-pulse rounded-3xl bg-neutral-200/70"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}