import "@/node_modules/react-modal-video/css/modal-video.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { syne, dm_sans } from "@/lib/font"
import { cloudinaryUrl } from "@/lib/cloudinary"
import WebVitalsReporter from "@/components/WebVitalsReporter"
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
        "tokat araç sigortası",
        "tokat araç kasko",
        "tokat en uygun araç sigortası",
        "tokat araç kasko fiyat",
        "tokat araç kasko",
        "tokat zorunlu trafik sigortası",
        "tokat konut sigortası",
        "tokat dask",
        "tokat dask sigortası",
        "tokat sağlık sigortası",
        "tokat TARSIM",
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
        icon: cloudinaryUrl("/logo.jpeg"),
        shortcut: cloudinaryUrl("/logo.jpeg"),
        apple: cloudinaryUrl("/logo.jpeg"),
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
        title: "Voldem Sigorta Tokat",
        description: "Tokat sigorta çözümleri: trafik, kasko, konut, sağlık ve daha fazlası.",
        images: [
            {
                url: cloudinaryUrl("/logo.jpeg"),
                width: 1024,
                height: 1024,
                alt: "Voldem Sigorta Tokat logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Voldem Sigorta Tokat",
        description: "Tokat sigorta çözümleri: trafik, kasko, konut, sağlık ve daha fazlası.",
        images: [cloudinaryUrl("/logo.jpeg")],
    },
    alternates: {
        canonical: "/",
    },
}

export default function RootLayout({ children }) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "name": "Voldem Sigorta Tokat",
        "alternateName": "Voldem Sigorta",
        "url": "https://tokatsigorta.com",
        "logo": "https://res.cloudinary.com/dznv8z7wo/image/upload/logo.jpeg",
        "description": "Tokat sigorta çözümleri: trafik, kasko, konut, sağlık, hayat, DASK ve işletme sigortası. Hızlı teklif, uygun prim, güvenilir hizmet.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gop Bulvarı No:192 Tüfekçiler İş Hanı Kat:3 D:25",
            "addressLocality": "Tokat",
            "addressRegion": "Tokat",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.3167",
            "longitude": "36.5500"
        },
        "telephone": "+905433950213",
        "email": "info@voldemsigorta.com",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            }
        ],
        "areaServed": {
            "@type": "City",
            "name": "Tokat"
        },
        "serviceType": [
            "Trafik Sigortası",
            "Kasko Sigortası",
            "Konut Sigortası",
            "DASK Sigortası",
            "Sağlık Sigortası",
            "Hayat Sigortası",
            "İşletme Sigortası"
        ],
        "sameAs": [
            "https://wa.me/905433950213"
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Voldem Sigorta Tokat",
        "image": "https://res.cloudinary.com/dznv8z7wo/image/upload/logo.jpeg",
        "@id": "https://tokatsigorta.com",
        "url": "https://tokatsigorta.com",
        "telephone": "+905433950213",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Gop Bulvarı No:192 Tüfekçiler İş Hanı Kat:3 D:25",
            "addressLocality": "Tokat",
            "addressRegion": "Tokat",
            "postalCode": "60000",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.3167",
            "longitude": "36.5500"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    }

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </head>
            <body>
                <WebVitalsReporter />
                {children}
            </body>
        </html>
    )
}
