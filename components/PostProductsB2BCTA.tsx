import { ButtonLink } from "@/components/ui/ButtonLink";
import { whatsappOrderLink, whatsappPricelistLink } from "@/data/site";

export function PostProductsB2BCTA() {
  return (
    <section className="pb-10">
      <div className="container-shell">
        <div className="overflow-hidden p-1 sm:p-2 lg:p-3">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cocoa/46">
                Untuk Reseller & Wholesale
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[0.92] text-cocoa sm:text-5xl lg:text-[4.2rem] font-semibold">
                Ingin jual ulang, supply toko, atau request corporate hampers?
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-8 text-cocoa/68 sm:text-base">
                Setelah menemukan produk yang cocok, Anda bisa lanjut ke jalur
                B2B untuk request pricelist grosir, kebutuhan cafe, toko,
                kantor, event, atau paket hampers yang lebih curated.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={whatsappPricelistLink} external>
                  Minta Pricelist
                </ButtonLink>
                <ButtonLink
                  href={whatsappOrderLink}
                  variant="secondary"
                  external
                >
                  Chat Tim B2B
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
