import { benefits } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BenefitsSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Keunggulan Partner"
          title="Kenapa Bermitra dengan Kami?"
          description="Dukungan yang dibuat praktis untuk partner yang ingin bergerak cepat, tetap rapi, dan mudah menjual."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[2rem] border border-cocoa/10 bg-white/75 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="h-1.5 w-14 rounded-full bg-caramel" />
              <h3 className="mt-6 text-3xl leading-none">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cocoa/72">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
