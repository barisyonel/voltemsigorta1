import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Feature from "@/components/sections/home1/Feature"
import Funfacts from "@/components/sections/home1/Funfacts"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Work from "@/components/sections/home1/Work"
import Brand from "@/components/sections/home1/Brand"
import Blog from "@/components/sections/home1/Blog"
import Faq from "@/components/sections/home1/Faq"
import Quote from "@/components/sections/home1/Quote"
import Testimonial from "@/components/sections/home1/Testimonial"
import CtaContact from "@/components/sections/home1/CtaContact"

export const metadata = {
    title: "Voldem Sigorta Tokat",
    description: "Tokat ve çevre illerde A'dan Z'ye sigorta çözümleri. Tamamlayıcı sağlık, özel sağlık, konut, DASK, trafik, kasko, iş yeri, yangın ve TARSİM sigortalarında hızlı teklif.",
    keywords: [
        "Tokat sigorta",
        "tokat ucuz sigorta",
        "tokat en uygun sigorta",
        "Tokat allianz sigorta",
        "tokat hdi sigorta",
        "tokat türkiye sigorta",
        "tamamlayıcı sağlık sigortası tokat",
        "özel sağlık sigortası tokat",
        "konut sigortası tokat",
        "dask tokat",
        "trafik sigortası tokat",
        "kasko tokat",
        "iş yeri sigortası tokat",
        "yangın sigortası tokat",
        "tarsim sigortası tokat",
        "sigorta acentesi tokat",
    ],
}

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "name": "Voldem Sigorta Tokat",
        "url": "https://tokatsigorta.com",
        "telephone": "+90 543 395 02 13",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tokat",
            "addressCountry": "TR",
        },
        "areaServed": ["Tokat", "Amasya", "Sivas", "Yozgat", "Ordu", "Samsun"],
        "serviceType": [
            "Tamamlayıcı Sağlık Sigortası",
            "Özel Sağlık Sigortası",
            "Konut Sigortası",
            "DASK",
            "Trafik Sigortası",
            "Kasko",
            "İş Yeri Sigortası",
            "Yangın Sigortası",
            "TARSİM",
        ],
        "logo": "https://tokatsigorta.com/logo.jpeg",
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Funfacts />
                <Service />
                <CtaContact />
                <WhyChooseUs />
                <Work />
                <Faq />
                <Testimonial />
                <Quote />
                <Brand />
                <Blog />
                
            </Layout>

        </>
    )
}