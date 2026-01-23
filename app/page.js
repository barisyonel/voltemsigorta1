import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Feature from "@/components/sections/home1/Feature"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Service from "@/components/sections/home1/Service"
import Blog from "@/components/sections/home1/Blog"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Service />
                <WhyChooseUs />
                <Blog />
                
            </Layout>

        </>
    )
}