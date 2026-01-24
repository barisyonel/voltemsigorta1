import "@/node_modules/react-modal-video/css/modal-video.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {syne, dm_sans} from '@/lib/font'
export const metadata = {
    title: {
        default: "Voldem Sigorta Tokat",
        template: "%s | Voldem Sigorta Tokat",
    },
    description: "Tokat sigorta çözümleri: trafik, kasko, konut, sağlık ve daha fazlası.",
    metadataBase: new URL("https://tokatsigorta.com"),
    applicationName: "Voldem Sigorta Tokat",
    keywords: [
        "tokat sigorta",
        "tokat en uygun sigorta",
        "tokat trafik sigortası",
        "tokat kasko",
        "tokat kasko fiyatları",
        "tokat zorunlu trafik sigortası",
        "tokat konut sigortası",
        "tokat dask",
        "tokat dask sigortası",
        "tokat sağlık sigortası",
        "tokat tamamlayıcı sağlık sigortası",
        "tokat özel sağlık sigortası",
        "tokat seyahat sağlık sigortası",
        "tokat ferdi kaza sigortası",
        "tokat işyeri sigortası",
        "tokat nakliyat sigortası",
        "tokat sigorta acentesi",
        "tokat sigorta firması",
        "tokat sigorta danışmanlığı",
        "tokat sigorta teklifi",
        "tokat sigorta fiyatları",
        "tokat konut sigortası fiyatları",
    ],
    icons: {
        icon: "/logo.jpeg",
        shortcut: "/logo.jpeg",
        apple: "/logo.jpeg",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
        title: "Voldem Sigorta Tokat",
        description: "Tokat sigorta çözümleri: trafik, kasko, konut, sağlık ve daha fazlası.",
        images: [
            {
                url: "/logo.jpeg",
                width: 1024,
                height: 1024,
                alt: "Voldem Sigorta Tokat logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Voldem Sigorta Tokat",
        description: "Tokat sigorta çözümleri: trafik, kasko, konut, sağlık ve daha fazlası.",
        images: ["/logo.jpeg"],
    },
    alternates: {
        canonical: "/",
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className={`${dm_sans.variable} ${syne.variable}`}>
            <head>
                <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
                <link rel="stylesheet" href="/assets/vendors/animate/custom-animate.css" />
                <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
                <link rel="stylesheet" href="/assets/vendors/sonchoy-icon/style.css" />
                <link rel="stylesheet" href="/assets/css/sonchoy.css" />
                <link rel="stylesheet" href="/assets/css/sonchoy-responsive.css" />
            </head>
            <body>{children}</body>
        </html>
    )
}
