import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden pb-24">
      {/* Hero placeholder - build sections in components/sections/ */}
      <section className="max-w-7xl mx-auto px-6 py-32 relative text-center">
        <div className="inline-block relative">
          <span className="absolute -top-12 -left-8 font-handwritten text-tertiary -rotate-6 text-xl">
            v.0.1.0-ALPHA
          </span>
          <h1 className="font-headline font-black text-6xl md:text-8xl tracking-tighter uppercase mb-6 leading-[0.9] text-on-surface">
            Nothing is{" "}
            <span className="bg-primary-container px-4 py-1 -rotate-1 inline-block">
              Perfect
            </span>
            .<br />
            That's the point.
          </h1>
        </div>
        <p className="font-handwritten text-2xl md:text-3xl max-w-2xl mx-auto text-on-secondary-container mb-12 -rotate-1">
          Start simple. Try things. Fix what breaks. That&apos;s the work.
        </p>
        <Link href="/blueprints.html" className="relative inline-block group">
          <span className="bg-surface relative z-10 font-headline font-black text-xl px-10 py-5 wiggly-border hover:bg-primary-container transition-none active:scale-95 inline-block">
            START YOUR FIRST KIT
          </span>
          <div className="absolute inset-0 bg-on-surface translate-x-2 translate-y-2 -z-10 wiggly-border opacity-10 group-hover:opacity-100 transition-none" />
        </Link>
      </section>
    </main>
  );
}
