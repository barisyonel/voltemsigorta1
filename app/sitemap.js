export default function sitemap() {
    const baseUrl = "https://tokatsigorta.com"
    const now = new Date()

    const routes = [
        "/",
        "/hakkimizda",
        "/sigorta",
        "/hayat-sigortasi",
        "/saglik-sigortasi",
        "/arac-sigortasi",
        "/konut-sigortasi",
        "/aile-sigortasi",
        "/isyeri-sigortasi",
        "/iletisim",
        "/blog",
        "/blog-detay",
        "/blog-kenar-cubuklu",
        "/sss",
        "/ekibimiz",
        "/ekip-detay",
        "/musteri-yorumlari",
        "/projeler",
        "/proje-detay",
        "/fiyatlandirma",
        "/urunler",
        "/urun-detay",
        "/magaza",
        "/kvkk",
        "/gizlilik-politikasi",
        "/cerez-politikasi",
        "/kullanim-sartlari",
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.7,
    }))
}
