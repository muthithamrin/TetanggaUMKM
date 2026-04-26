import { heroHighlights, products, whatsappOrderLink } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  const heroProduct = products[0];

  return (
    <section className="section-space overflow-hidden pb-10 pt-10 sm:pt-14">
      <div className="container-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="pt-6 lg:sticky lg:top-28">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.36em] text-cocoa/48">
              Snack Lokal Premium
            </p>
            <h1 className="max-w-2xl text-[3.4rem] leading-[0.88] sm:text-[4.7rem] lg:text-[6.2rem] font-bold">
              Snack Lokal Premium untuk Setiap Momen
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-cocoa/68 sm:text-lg">
              Camilan khas Indonesia dengan rasa modern, kemasan elegan, dan
              pilihan pembelian untuk konsumen, reseller, hingga kebutuhan
              bisnis.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/product">Lihat Koleksi</ButtonLink>
              <ButtonLink href={whatsappOrderLink} variant="secondary" external>
                Chat WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-cocoa/65">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cocoa/10 bg-white/65 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <img
              src={heroProduct.imageUrl}
              alt={heroProduct.name}
              className="fade-media aspect-square w-full rounded-[2.4rem] object-cover lg:h-[560px] lg:aspect-auto"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.78fr_1.22fr_1fr]">
          <div className="p-1">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cocoa/46">
              Detail brand
            </p>
            <p className="mt-3 text-2xl font-semibold leading-[0.95] tracking-[-0.04em] text-cocoa">
              4 pilihan best seller dengan rasa lokal yang lebih modern.
            </p>
          </div>
          <div className="p-1">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cocoa/46">
              Join Retail
            </p>
            <p className="mt-3 text-sm leading-7 text-cocoa/70">
              Cocok untuk pembelian satuan, hampers, stok rumah, dan rak retail
              yang butuh produk rapi serta siap display.
            </p>
          </div>
          <div className="p-1">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cocoa/46">
              Join B2B
            </p>
            <p className="mt-3 text-sm leading-7 text-cocoa/70">
              Untuk reseller, cafe, toko, event, dan corporate order dengan alur
              yang lebih fokus dan detail di bawah hero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
