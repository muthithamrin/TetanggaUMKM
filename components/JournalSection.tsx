import Link from "next/link";
import { journals } from "@/data/site";

export function JournalSection() {
  return (
    <section id="journal" className="section-space">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="text-[clamp(3rem,9vw,7rem)] font-extrabold uppercase leading-none tracking-[-0.07em] text-cocoa">
              Journal
            </p>
          </div>
          <div className="pt-2 lg:text-right">
            <span className="mb-1 block text-right text-sm text-cocoa/72">
              {journals.length}
            </span>
            <Link
              href="#kontak"
              className="inline-block border-b border-cocoa/35 pb-1 text-sm font-medium text-cocoa/84 transition hover:border-cocoa hover:text-cocoa"
            >
              Read all stories
            </Link>
          </div>
        </div>

        <div className="mt-14">
          {journals.map((journal, index) => (
            <article
              key={journal.title}
              className={`grid gap-6 border-b border-cocoa/18 py-8 transition duration-300 hover:border-cocoa/35 ${
                index === 0 ? "border-t border-cocoa/40 pt-7" : ""
              } md:grid-cols-[220px_1fr_80px] md:items-center`}
            >
              <p className="text-xl font-normal tracking-[-0.02em] text-cocoa/84">
                {journal.date}
              </p>
              <div className="max-w-3xl">
                <h3 className="text-[1.8rem] font-medium leading-[1.15] tracking-[-0.03em] text-cocoa sm:text-[2.1rem]">
                  {journal.title}
                </h3>
              </div>
              <div className="hidden justify-self-end md:block">
                <div className="h-12 w-12 rounded-2xl border border-cocoa/55" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
