"use client";

import { useState } from "react";
import { products } from "@/data/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { VisualCard } from "@/components/ui/VisualCard";

export function CategoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProducts = Array.from({ length: 3 }, (_, offset) => {
    return products[(activeIndex + offset) % products.length];
  });

  return (
    <section className="section-space pt-4">
      <div className="container-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Pilihan Sesuai Momen"
            title="Pilih Snack Sesuai Momen"
            description="List product yang bisa digeser manual untuk mencari snack yang paling pas untuk santai, hadiah, sampai kebutuhan jual ulang."
            titleClassName="font-extrabold"
            descriptionClassName="font-normal"
          />

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-cocoa/10 bg-white/70 px-4 py-2 text-sm text-cocoa/66">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(products.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (current) => (current - 1 + products.length) % products.length
                )
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/10 bg-white/70 text-cocoa transition hover:bg-white"
              aria-label="Produk sebelumnya"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => (current + 1) % products.length)
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/10 bg-white/70 text-cocoa transition hover:bg-white"
              aria-label="Produk berikutnya"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid gap-6 xl:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className={`transition duration-300 ${
                  index === 0
                    ? "block"
                    : index === 1
                    ? "hidden md:block"
                    : "hidden xl:block"
                }`}
              >
                <VisualCard
                  title={product.name}
                  subtitle={product.category}
                  tone={product.accent}
                  compact
                  imageUrl={product.imageUrl}
                />
                <div className="pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cocoa/46">
                    {product.category}
                  </p>
                  <h3 className="mt-4 text-[2rem] font-semibold leading-[0.96] tracking-[-0.04em] text-cocoa">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-cocoa/68">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cocoa/52">
                      {product.price}
                    </p>
                    <ButtonLink
                      href="/product"
                      variant="ghost"
                      className="px-0 py-0"
                    >
                      Lihat Detail
                    </ButtonLink>
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
