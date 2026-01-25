/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/hakkimizda", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/faq", destination: "/sikca-sorulan-sorular", permanent: true },
      { source: "/insurance", destination: "/sigorta", permanent: true },
      { source: "/life-insurance", destination: "/hayat-sigortasi", permanent: true },
      { source: "/health-insurance", destination: "/saglik-sigortasi", permanent: true },
      { source: "/car-insurance", destination: "/arac-sigortasi", permanent: true },
      { source: "/home-insurance", destination: "/konut-sigortasi", permanent: true },
      { source: "/family-insurance", destination: "/dask-sigortasi", permanent: true },
      { source: "/aile-sigortasi", destination: "/dask-sigortasi", permanent: true },
      { source: "/business-insurance", destination: "/isyeri-sigortasi", permanent: true },
      { source: "/team", destination: "/ekibimiz", permanent: true },
      { source: "/team-details", destination: "/ekip-detay", permanent: true },
      { source: "/testimonial", destination: "/yorumlar", permanent: true },
      { source: "/portfolio", destination: "/portfoy", permanent: true },
      { source: "/portfolio-details", destination: "/portfoy-detay", permanent: true },
      { source: "/pricing", destination: "/fiyatlar", permanent: true },
      { source: "/products", destination: "/urunler", permanent: true },
      { source: "/product-details", destination: "/urun-detay", permanent: true },
      { source: "/shop", destination: "/magaza", permanent: true },
      { source: "/blog-details", destination: "/blog", permanent: true },
      { source: "/blog-sidebar", destination: "/blog", permanent: true },
    ]
  },
}

module.exports = nextConfig
