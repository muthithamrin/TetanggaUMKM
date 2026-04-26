import Link from "next/link";
import { footerColumns, whatsappOrderLink } from "@/data/site";

export function Footer() {
  return (
    <footer
      className="fade-in-only pb-10 pt-16"
      style={{ ["--fade-delay" as string]: "180ms" }}
    >
      <div className="container-shell">
        <div className="px-1 py-4 text-cocoa">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.2fr]">
            <div>
              <p className="text-4xl font-semibold leading-none tracking-[-0.05em]">
                Lokaloka Snacks
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-cocoa/68">
                Snack lokal premium dengan rasa hangat, tampilan modern, dan opsi pembelian untuk rumah, toko, sampai kebutuhan bisnis.
              </p>
              <Link
                href={whatsappOrderLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-sm font-semibold text-cocoa transition hover:text-cocoa/80"
              >
                WhatsApp
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-cocoa/55">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-cocoa/76">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                          className="transition hover:text-cocoa"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
