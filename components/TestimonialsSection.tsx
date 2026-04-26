import { testimonials } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Testimoni"
          title="Disukai Pelanggan, Dipercaya Partner"
          description="Ulasan singkat dari pelanggan retail sampai kebutuhan bisnis."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.role}
              className="rounded-[2.2rem] border border-cocoa/10 bg-white/56 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoa/46">
                {testimonial.role}
              </p>
              <p className="mt-6 font-serif text-[2rem] leading-[1.08] text-cocoa sm:text-[2.3rem]">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
