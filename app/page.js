import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Blog from "@/components/sections/home1/Blog"
import Brand from "@/components/sections/home1/Brand"
import { cloudinaryUrl } from "@/lib/cloudinary"

export const metadata = {
    title: "Voldem Sigorta Tokat - Tokat Sigorta Çözümleri",
    description: "Tokat'ta tüm sigorta ihtiyaçlarınız için tek adres. Trafik, kasko, konut, sağlık, hayat, DASK ve işletme sigortası. Hızlı teklif, uygun prim, güvenilir hizmet. Voldem Sigorta Tokat.",
    keywords: [
        "tokat sigorta",
        "tokat sigorta acentesi",
        "tokat en uygun sigorta",
        "tokat trafik sigortası",
        "tokat kasko",
        "tokat konut sigortası",
        "tokat sağlık sigortası",
        "tokat hayat sigortası",
        "tokat dask",
        "tokat işletme sigortası",
        "Voldem Sigorta Tokat",
        "tokat sigorta fiyatları",
        "tokat sigorta teklifi",
    ],
    openGraph: {
        title: "Voldem Sigorta Tokat - Tokat Sigorta Çözümleri",
        description: "Tokat'ta tüm sigorta ihtiyaçlarınız için tek adres. Hızlı teklif, uygun prim, güvenilir hizmet.",
        images: [
            {
                url: cloudinaryUrl("/logo.jpeg"),
                width: 1200,
                height: 630,
                alt: "Voldem Sigorta Tokat",
            },
        ],
    },
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Brand />
                <About />
                <Service />
                <WhyChooseUs />
                <Blog />
                
            </Layout>

        </>
    )
}