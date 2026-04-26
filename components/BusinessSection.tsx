import { businessPrograms, whatsappOrderLink, whatsappPricelistLink } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BusinessSection() {
  return (
    <section id="untuk-bisnis" className="section-space">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:pr-6">
            <SectionHeader
              eyebrow="Untuk Bisnis"
              title="Snack Premium untuk Kebutuhan Bisnis Anda"
              description="Kami membuka peluang kerja sama untuk reseller, toko oleh-oleh, cafe, kantor, event, dan corporate hampers."
            />

            <p className="mt-8 max-w-lg text-lg leading-9 text-cocoa/66">
              Dibuat untuk brand, toko, dan tim yang ingin produk lokal dengan
              rasa kuat, tampilan bersih, dan proses order yang lebih praktis.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappPricelistLink} external>
                Minta Pricelist
              </ButtonLink>
              <ButtonLink href={whatsappOrderLink} variant="secondary" external>
                Chat Tim B2B
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-5">
            {businessPrograms.map((program, index) => (
              <article
                key={program.title}
                className="rounded-[2.2rem] border border-cocoa/10 bg-white/62 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7"
              >
                <div className="grid gap-5 sm:grid-cols-[72px_1fr] sm:items-start">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#f2e3d2] font-serif text-2xl text-cocoa">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-4xl leading-[0.95]">{program.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-8 text-cocoa/68 sm:text-base">
                      {program.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
