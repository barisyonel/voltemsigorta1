import Layout from "@/components/layout/Layout"
import SeoIntro from "@/components/sections/home1/SeoIntro"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import InsuranceTypes from "@/components/sections/home1/InsuranceTypes"
import StatsSection from "@/components/sections/home1/StatsSection"
import FeaturedServices from "@/components/sections/home1/FeaturedServices"
import Brand from "@/components/sections/home1/Brand"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Testimonial from "@/components/sections/home1/Testimonial"
import Blog from "@/components/sections/home1/Blog"
import HomeCta from "@/components/sections/home1/HomeCta"
import { cloudinaryUrl } from "@/lib/cloudinary"

export const metadata = {
    title: "Tokat Trafik Sigortası | Kasko, Konut Teklifi - Voldem Sigorta",
    description: "Tokat trafik sigortası, kasko ve konut sigortası teklifi. Voldem Sigorta - 20 yıllık deneyim, açılışa özel indirimler, hızlı teklif. Ücretsiz karşılaştırma.",
    keywords: [
        "tokat trafik sigortası",
        "trafiksigortası tokat",
        "tokat sigorta",
        "tokat sigorta acentesi",
        "tokat en uygun sigorta",
        "tokat kasko",
        "tokat kasko sigortası",
        "tokat konut sigortası",
        "tokat sağlık sigortası",
        "tokat özel sağlık sigortası",
        "tokat hayat sigortası",
        "tokat dask",
        "tokat DASK deprem sigortası",
        "tokat işletme sigortası",
        "tokat TARSIM",
        "tokat tarım sigortası",
        "tokat seyahat sigortası",
        "Voldem Sigorta Tokat",
        "tokat sigorta fiyatları",
        "tokat sigorta teklifi",
        "tokat sigorta indirim",
    ],
    openGraph: {
        title: "Tokat Trafik Sigortası | Kasko, Konut Teklifi - Voldem Sigorta",
        description: "Tokat trafik sigortası, kasko ve konut sigortası teklifi. Voldem Sigorta - 20 yıllık deneyim, hızlı teklif.",
        images: [
            {
                url: cloudinaryUrl("/logo.jpeg"),
                width: 1200,
                height: 630,
                alt: "Voldem Sigorta Tokat - Tokat sigorta acentesi",
            },
        ],
    },
    alternates: { canonical: "/" },
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <SeoIntro />
                <InsuranceTypes />
                <StatsSection />
                <FeaturedServices />
                <Brand />
                <About />
                <Service />
                <WhyChooseUs />
                <Testimonial />
                <Blog />
                <HomeCta />
                
            </Layout>

        </>
    )
}