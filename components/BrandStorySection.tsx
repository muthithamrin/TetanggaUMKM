import { storyHighlights } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BrandStorySection() {
  return (
    <section id="tentang-kami" className="section-space">
      <div className="container-shell">
        <div className="max-w-4xl">
          <SectionHeader
            eyebrow="Cerita Brand"
            title="Rasa Lokal, Dikemas untuk Gaya Hidup Modern"
            description="Kami menghadirkan snack lokal Indonesia dengan pilihan rasa autentik, proses higienis, dan kemasan premium yang cocok untuk konsumsi pribadi maupun kebutuhan bisnis."
          />

          <div className="mt-8 max-w-2xl">
            <p className="text-lg leading-9 text-cocoa/67 sm:text-[1.2rem]">
              Lokaloka lahir dari ide sederhana: snack lokal tidak harus terlihat
              biasa. Rasa yang familiar tetap bisa tampil lebih rapi, lebih hangat,
              dan lebih layak hadir di rumah, cafe, meja meeting, atau gift box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
