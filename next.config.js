/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            { source: "/about", destination: "/hakkimizda", permanent: true },
            { source: "/contact", destination: "/iletisim", permanent: true },
            { source: "/insurance", destination: "/sigorta", permanent: true },
            { source: "/life-insurance", destination: "/hayat-sigortasi", permanent: true },
            { source: "/health-insurance", destination: "/saglik-sigortasi", permanent: true },
            { source: "/car-insurance", destination: "/arac-sigortasi", permanent: true },
            { source: "/home-insurance", destination: "/konut-sigortasi", permanent: true },
            { source: "/family-insurance", destination: "/aile-sigortasi", permanent: true },
            { source: "/business-insurance", destination: "/isyeri-sigortasi", permanent: true },
            { source: "/faq", destination: "/sss", permanent: true },
            { source: "/team", destination: "/ekibimiz", permanent: true },
            { source: "/team-details", destination: "/ekip-detay", permanent: true },
            { source: "/blog-details", destination: "/blog-detay", permanent: true },
            { source: "/blog-sidebar", destination: "/blog-kenar-cubuklu", permanent: true },
            { source: "/portfolio", destination: "/projeler", permanent: true },
            { source: "/portfolio-details", destination: "/proje-detay", permanent: true },
            { source: "/testimonial", destination: "/musteri-yorumlari", permanent: true },
            { source: "/pricing", destination: "/fiyatlandirma", permanent: true },
            { source: "/products", destination: "/urunler", permanent: true },
            { source: "/product-details", destination: "/urun-detay", permanent: true },
            { source: "/shop", destination: "/magaza", permanent: true },
            { source: "/index-2", destination: "/", permanent: true },
            { source: "/index-3", destination: "/", permanent: true },
            { source: "/index-4", destination: "/", permanent: true },
            { source: "/index-5", destination: "/", permanent: true },
        ]
    },
}

module.exports = nextConfig
