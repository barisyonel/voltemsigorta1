export const metadata = {
    title: "Konut Sigortası | Voldem Sigorta Tokat",
    description: "Tokat konut sigortası. Evinizi ve eşyalarınızı yangın, hırsızlık ve doğal afetlere karşı güvence altına alın. Hızlı teklif ve güvenilir destek.",
    keywords: [
        "tokat konut sigortası",
        "konut sigortası tokat",
        "tokat ev sigortası",
        "tokat konut sigortası fiyatları",
        "tokat en uygun konut sigortası",
        "Voldem Sigorta Tokat",
        "tokat sigorta acentesi",
        "tokat konut sigortası teklifi",
    ],
    openGraph: {
        title: "Konut Sigortası | Voldem Sigorta Tokat",
        description: "Tokat konut sigortası. Evinizi ve eşyalarınızı geniş kapsamla güvence altına alın.",
        images: [
            {
                url: cloudinaryUrl("/assets/images/konutt.png", { width: 1200, quality: 80 }),
                width: 1200,
                height: 630,
                alt: "Konut Sigortası Tokat",
            },
        ],
    },
    alternates: {
        canonical: "/konut-sigortasi",
    },
}

export default function KonutSigortasiLayout({ children }) {
    return <>{children}</>
}
