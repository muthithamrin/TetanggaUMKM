export const whatsappOrderLink =
  "https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20produk%20Lokaloka%20Snacks";

export const whatsappPricelistLink =
  "https://wa.me/6281234567890?text=Halo%20saya%20ingin%20minta%20pricelist%20grosir%20Lokaloka%20Snacks";

export const navItems = [
  { label: "Product", href: "/product" },
  { label: "About Us", href: "/#tentang-kami" },
  { label: "Contact", href: "/#kontak" },
] as const;

export const heroHighlights = [
  "Halal",
  "Dikemas Fresh",
  "Siap Grosir",
] as const;

export const categories = [
  {
    title: "Relax Snack",
    description: "Untuk santai, nonton, dan teman kerja.",
    tone: "from-[#e2dbc8] via-[#f5f1e8] to-[#c7c1ab]",
  },
  {
    title: "Spicy Snack",
    description: "Untuk pecinta rasa pedas dan gurih.",
    tone: "from-[#d9d2bd] via-[#f4efe6] to-[#b9b08f]",
  },
  {
    title: "Gift Snack",
    description: "Untuk hampers, hadiah, dan oleh-oleh.",
    tone: "from-[#e4ddcf] via-[#f7f3ec] to-[#c9c0b1]",
  },
  {
    title: "Business Snack",
    description: "Untuk reseller, cafe, toko, dan corporate order.",
    tone: "from-[#d7d0c3] via-[#f2eee7] to-[#aba68f]",
  },
] as const;

export const products = [
  {
    name: "Basreng Daun Jeruk",
    category: "Spicy Snack",
    description: "Renyah, gurih, pedas, dengan aroma daun jeruk.",
    price: "Mulai Rp18.000",
    accent: "from-[#d8d1bf] via-[#f7f3eb] to-[#a7ab8f]",
    imageUrl: "/products/beth-macdonald-r4d1XkXhFTU-unsplash.jpg",
  },
  {
    name: "Makaroni Chili Oil",
    category: "Spicy Snack",
    description: "Makaroni kriuk dengan rasa chili oil modern.",
    price: "Mulai Rp16.000",
    accent: "from-[#ddd4c5] via-[#f7f2ea] to-[#b2aa92]",
    imageUrl: "/products/chris-wu-5-PdHSX86LU-unsplash.jpg",
  },
  {
    name: "Keripik Pisang Caramel",
    category: "Sweet Snack",
    description: "Manis ringan, cocok untuk teman kopi dan teh.",
    price: "Mulai Rp20.000",
    accent: "from-[#e3dbc7] via-[#f8f5ee] to-[#b9b094]",
    imageUrl: "/products/ink-pond-xB_fBILJFW0-unsplash.jpg",
  },
  {
    name: "Snack Hampers Box",
    category: "Gift Snack",
    description: "Paket snack premium untuk hadiah dan corporate gift.",
    price: "Mulai Rp75.000",
    accent: "from-[#ddd5c9] via-[#f8f3ec] to-[#9da28a]",
    imageUrl: "/products/jepretualang--24YDKCBY8w-unsplash.jpg",
  },
] as const;

export const storyHighlights = [
  "Rasa Lokal",
  "Kemasan Premium",
  "Siap Retail & Grosir",
] as const;

export const businessPrograms = [
  {
    title: "Reseller Program",
    description:
      "Harga khusus dan produk siap jual untuk memulai bisnis snack.",
  },
  {
    title: "Wholesale Supply",
    description: "Solusi grosir untuk toko, cafe, stockist, dan distributor.",
  },
  {
    title: "Corporate Hampers",
    description:
      "Paket snack premium untuk event, meeting, dan hadiah perusahaan.",
  },
] as const;

export const benefits = [
  {
    title: "Low MOQ",
    description: "Minimum order terjangkau untuk mulai kerja sama.",
  },
  {
    title: "Premium Packaging",
    description: "Kemasan menarik, rapi, dan siap jual.",
  },
  {
    title: "Halal & Hygienic",
    description: "Diproduksi dengan proses higienis dan standar kualitas.",
  },
  {
    title: "B2B Support",
    description: "Tim kami siap membantu kebutuhan reseller dan grosir.",
  },
] as const;

export const testimonials = [
  {
    role: "Review Pelanggan",
    quote: "Snack-nya enak, packaging rapi, cocok untuk stok di rumah.",
  },
  {
    role: "Review Reseller",
    quote: "Produknya mudah dijual, varian menarik, dan timnya responsif.",
  },
  {
    role: "Review Corporate",
    quote: "Cocok untuk hampers kantor dan kebutuhan event.",
  },
] as const;

export const journals = [
  {
    date: "Jun 8, 2023",
    label: "Hampers",
    title: "Ide Snack untuk Hampers Kantor",
    excerpt:
      "Rekomendasi susunan snack premium yang praktis, rapi, dan cocok untuk hadiah tim.",
  },
  {
    date: "May 4, 2023",
    label: "Bisnis",
    title: "Cara Menjadi Reseller Snack Lokal",
    excerpt:
      "Langkah awal membangun bisnis snack dengan pilihan produk yang mudah dipasarkan.",
  },
  {
    date: "Mar 6, 2023",
    label: "Event",
    title: "Tips Memilih Snack untuk Event",
    excerpt:
      "Panduan memilih camilan yang aman, menarik, dan pas untuk berbagai jenis acara.",
  },
] as const;

export const footerColumns = [
  {
    title: "Collection",
    links: [
      { label: "Best Seller", href: "#collection" },
      { label: "Spicy Snack", href: "#collection" },
      { label: "Gift Pack", href: "#collection" },
      { label: "Business Pack", href: "#untuk-bisnis" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Reseller Program", href: "#untuk-bisnis" },
      { label: "Wholesale Supply", href: "#untuk-bisnis" },
      { label: "Corporate Hampers", href: "#untuk-bisnis" },
      { label: "Request Pricelist", href: whatsappPricelistLink },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#journal" },
      { label: "Shipping", href: "#kontak" },
      { label: "Contact", href: "#kontak" },
      { label: "WhatsApp", href: whatsappOrderLink },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#kontak" },
      { label: "TikTok", href: "#kontak" },
      { label: "Shopee", href: "#kontak" },
      { label: "Tokopedia", href: "#kontak" },
    ],
  },
] as const;
