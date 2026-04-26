"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, whatsappOrderLink } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fade-in-only sticky top-0 z-50 bg-[#FFFCFB] backdrop-blur-xl"
      style={{ ["--fade-delay" as string]: "90ms" }}
    >
      <div className="container-shell pt-3">
        <nav className="flex items-center justify-between bg-[#FFFCFB] py-4" aria-label="Navigasi utama">
          <Link href="/" className="text-[1.45rem] font-semibold tracking-[-0.03em] text-cocoa">
            Lokaloka
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-[0.01em] text-cocoa/68 transition hover:text-cocoa"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href={whatsappOrderLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-cocoa px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3f291d]"
            >
              WhatsApp
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/15 text-cocoa md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </nav>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 pb-5" : "max-h-0"
          }`}
        >
          <div className="glass-panel space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-cocoa/80 transition hover:bg-white hover:text-cocoa"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={whatsappOrderLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-cocoa px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3f291d]"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
