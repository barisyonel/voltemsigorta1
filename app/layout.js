import "@/node_modules/react-modal-video/css/modal-video.css"
import "@/public/assets/css/voldem.css"
import "@/public/assets/css/voldem-responsive.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {syne, dm_sans} from '@/lib/font'
export const metadata = {
    metadataBase: new URL("https://tokatsigorta.com"),
    title: {
        default: "Voldem Sigorta Tokat",
        template: "%s | Voldem Sigorta Tokat",
    },
    description: "Tokat'ta A'dan Z'ye sigorta çözümleri sunan Voldem Sigorta Tokat; hızlı teklif, güvenilir danışmanlık ve uygun fiyatlarla yanınızda.",
    keywords: [
        "Tokat sigorta",
        "tokat ucuz sigorta",
        "tokat en uygun sigorta",
        "Tokat allianz sigorta",
        "tokat hdi sigorta",
        "tokat türkiye sigorta",
        "tokat tamamlayıcı sağlık sigortası",
        "tokat özel sağlık sigortası",
        "tokat sağlık sigortası",
        "tokat konut sigortası",
        "tokat dask",
        "tokat trafik sigortası",
        "tokat kasko",
        "tokat iş yeri sigortası",
        "tokat yangın sigortası",
        "tokat tarsim",
        "tokat tarım sigortası",
        "sigorta acentesi tokat",
        "kasko tokat",
        "konut sigortası tokat",
        "hayat sigortası tokat",
        "işyeri sigortası tokat",
    ],
    openGraph: {
        title: "Voldem Sigorta Tokat",
        description: "Tokat'ta A'dan Z'ye sigorta çözümleri sunan Voldem Sigorta Tokat; hızlı teklif ve güvenilir hizmet.",
        url: "https://tokatsigorta.com",
        siteName: "Voldem Sigorta Tokat",
        locale: "tr_TR",
        type: "website",
        images: [
            {
                url: "/logo.jpeg",
                width: 1024,
                height: 1024,
                alt: "Voldem Sigorta Tokat Logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Voldem Sigorta Tokat",
        description: "Tokat'ta A'dan Z'ye sigorta çözümleri sunan Voldem Sigorta Tokat; hızlı teklif ve güvenilir hizmet.",
        images: ["/logo.jpeg"],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className={`${dm_sans.variable} ${syne.variable}`}>
            <body>{children}</body>
        </html>
    )
}
