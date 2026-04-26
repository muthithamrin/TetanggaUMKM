import { whatsappOrderLink, whatsappPricelistLink } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCTASection() {
  return (
    <section id="kontak" className="section-space pt-8">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2.6rem] border border-cocoa/10 bg-gradient-to-br from-[#ddd7c9] via-[#f6f2eb] to-[#a2a891] p-8 shadow-soft sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cocoa/48">
              Siap Order?
            </p>
            <h2 className="mt-4 text-5xl leading-[0.95] sm:text-6xl">
              Siap Mencoba atau Mulai Kerja Sama?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cocoa/72 sm:text-lg">
              Untuk pembelian satuan, reseller, grosir, atau corporate order, tim kami siap membantu.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappOrderLink} external>
              Order via WhatsApp
            </ButtonLink>
            <ButtonLink href={whatsappPricelistLink} variant="secondary" external>
              Request B2B Pricelist
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
