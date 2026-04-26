import { products, whatsappOrderLink } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BestSellerSection() {
  const featuredProduct = products[0];

  return (
    <section id="collection" className="section-space">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Top 1 Sales"
          title="Produk yang Paling Sering Dipilih"
          description="Satu produk utama yang kami tampilkan sebagai spotlight agar halaman tetap fokus dan nyaman dilihat."
          titleClassName="font-extrabold"
          descriptionClassName="font-normal"
        />

        <div className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <img
              src={featuredProduct.imageUrl}
              alt={featuredProduct.name}
              className="fade-media aspect-square w-full rounded-[2.3rem] object-cover lg:h-[380px] lg:aspect-auto"
            />

            <div>
              <span className="rounded-full bg-[#f3e6d5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cocoa/68">
                {featuredProduct.category}
              </span>
              <h3 className="mt-5 text-[2.5rem] font-semibold leading-[0.94] tracking-[-0.05em] text-cocoa sm:text-[3.6rem]">
                {featuredProduct.name}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-8 text-cocoa/68 sm:text-base">
                {featuredProduct.description} Ini adalah produk yang paling
                sering dipilih untuk pembelian langsung, hampers, sampai jadi
                pintu masuk untuk order partner baru.
              </p>

              <div className="mt-8 border-t border-cocoa/10 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cocoa/52">
                  {featuredProduct.price}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappOrderLink} external>
                    Order via WhatsApp
                  </ButtonLink>
                  <ButtonLink href="#tentang-kami" variant="ghost">
                    Lihat Detail
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
