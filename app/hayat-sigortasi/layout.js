import { cloudinaryUrl } from "@/lib/cloudinary"

export const metadata = {
    title: "Hayat Sigortası | Voldem Sigorta Tokat",
    description: "Tokat hayat sigortası çözümleri. Sevdiklerinizi ve geleceğinizi güvence altına alın. Esnek prim ve teminat seçenekleri ile Voldem Sigorta Tokat.",
    keywords: [
        "tokat hayat sigortası",
        "hayat sigortası tokat",
        "tokat en uygun hayat sigortası",
        "hayat sigortası fiyatları tokat",
        "Voldem Sigorta Tokat",
        "tokat sigorta acentesi",
        "tokat hayat sigortası teklifi",
    ],
    openGraph: {
        title: "Hayat Sigortası | Voldem Sigorta Tokat",
        description: "Tokat hayat sigortası çözümleri. Sevdiklerinizi ve geleceğinizi güvence altına alın.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608021/Gemini_Generated_Image_7qwvqa7qwvqa7qwv_ulwkuz.png",
                width: 1200,
                height: 630,
                alt: "Hayat Sigortası Tokat",
            },
        ],
    },
    alternates: {
        canonical: "/hayat-sigortasi",
    },
}

export default function HayatSigortasiLayout({ children }) {
    return <>{children}</>
}
