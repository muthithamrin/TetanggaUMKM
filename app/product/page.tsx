import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { products } from "@/data/site";

export default function ProductPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <section className="section-space pb-12 pt-10 sm:pt-14">
          <div className="container-shell">
            <Link
              href="/"
              className="text-sm font-medium text-cocoa/72 transition hover:text-cocoa"
            >
              ← Kembali ke Home
            </Link>

            <div className="mt-8">
              <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold uppercase leading-none tracking-[-0.06em] text-cocoa">
                Product
              </h1>
            </div>

            <div className="mt-10 grid gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-12">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group"
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="aspect-square w-full rounded-[1.9rem] object-cover"
                  />

                  <div className="pt-4">
                    <h2 className="text-[1.55rem] font-extrabold uppercase leading-[0.95] tracking-[0.01em] text-cocoa sm:text-[1.7rem]">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                      Flavor: {product.description}
                    </p>
                    <p className="mt-3 text-[1.2rem] font-medium tracking-[-0.02em] text-cocoa/42">
                      {product.price}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
