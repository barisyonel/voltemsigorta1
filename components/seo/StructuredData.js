export default function StructuredData() {
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    )
}
