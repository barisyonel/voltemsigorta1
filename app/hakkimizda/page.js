import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"

export const metadata = {
    title: "Hakkımızda",
    description: "Voldem Sigorta Tokat hakkında. 2022'den beri Tokat ve çevre illerde sigorta aracılık ve danışmanlık hizmetleri sunuyoruz. Maksimum müşteri memnuniyeti ilkemizle hizmet veriyoruz.",
    keywords: [
        "voldem sigorta tokat",
        "tokat sigorta acentesi",
        "tokat sigorta firması",
        "tokat sigorta danışmanlığı",
        "Voldem Sigorta hakkında",
        "tokat sigorta şirketi",
    ],
    openGraph: {
        title: "Hakkımızda | Voldem Sigorta Tokat",
        description: "Voldem Sigorta Tokat hakkında. 2022'den beri güvenilir sigorta hizmetleri.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540889/hakk%C4%B1m%C4%B1zda_kudnpv.png",
                width: 1200,
                height: 630,
                alt: "Voldem Sigorta Tokat Hakkımızda",
            },
        ],
    },
}

const partners = [
    "AXA Sigorta",
    "Allianz",
    "Unico Sigorta",
    "Ray Sigorta",
    "Zurich Sigorta",
    "Doğa Sigorta",
    "Mapfre Sigorta",
    "Quick Sigorta",
    "Corpus Sigorta",
    "Koru Sigorta",
    "Bereket Sigorta",
    "HDI Sigorta",
    "Türkiye Sigorta",
    "Ankara Sigorta",
    "Sompo Sigorta",
    "Referans Sigorta",
    "Ak Sigorta",
    "Neova Sigorta",
    "Anadolu Sigorta",
    "Hepiyi Sigorta",
    "Magdeburger Sigorta",
]

export default function About() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle="Hakkımızda"
                breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540889/hakk%C4%B1m%C4%B1zda_kudnpv.png"
            >
                <section className="about-three about-six">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-three__left">
                                    <div className="about-three__img-box wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-three__img">
                                        <img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769554506/sigorta_bl8jr0.jpg" alt="Voldem Sigorta Tokat"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-three__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">Voldem Sigorta Tokat</p>
                                        </div>
                                        <h2 className="section-title__title">Kurumsal ve bireysel
                                            <br/> sigorta danışmanlığı</h2>
                                    </div>
                                    <p className="about-three__text">
                                        Voldem Sigorta aracılık hizmetleri; sigortacılık alanında kurumsal veya bireysel olarak
                                        aracılık ve danışmanlık hizmetleri vermek üzere 2022 tarihinde kurulmuştur.
                                    </p>
                                    <p className="about-three__text">
                                        Bu tarihten itibaren tüm branşlarda sigorta taleplerini karşılamak adına
                                        “Maksimum Müşteri Memnuniyeti” anlayışını benimseyip, sigortalılarımıza en iyi şekilde
                                        hizmet vermeyi kendimize ilke edindik. Tokat ve çevre illerde hızlı, güvenilir ve
                                        şeffaf bir hizmet sunuyoruz.
                                    </p>
                                    <div className="about-three__btn-and-client">
                                        <div className="about-three__btn-box">
                                            <Link href="iletisim" className="about-three__btn thm-btn">İletişime Geçin</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-choose-three why-choose-five">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">Vizyonumuz ve Misyonumuz</p>
                            </div>
                            <h2 className="section-title__title">Güvenilir iş ortağınız</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__content">
                                        <h3>Vizyonumuz</h3>
                                        <p>
                                            Sigortacılık sektöründe lider bir aracı kurum olmak, müşterilerimize sunduğumuz
                                            hizmetlerle sektördeki farkımızı ortaya koymak ve müşterilerimizin güvenilir,
                                            uzun vadeli iş ortağı olarak tercih ettiği bir şirket olmaktır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="why-choose-three__single">
                                    <div className="why-choose-three__content">
                                        <h3>Misyonumuz</h3>
                                        <p>
                                            Voldem Sigorta olarak müşterilerimizin ihtiyaçlarına en uygun ve kaliteli sigorta
                                            ürünlerini sunarak aracılık ve danışmanlık hizmetleri vermek, müşteri memnuniyetini
                                            en üst düzeyde tutmak ve güvenilir bir iş ortağı olarak hizmet vermek. Ayrıca,
                                            müşterilerimizin haklarını korumak ve risk yönetiminde doğru kararlar almalarına
                                            yardımcı olmak da misyonumuzun önemli bir parçasıdır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feature-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">Çalıştığımız Şirketler</p>
                            </div>
                            <h2 className="section-title__title">Güçlü iş ortaklarımız</h2>
                        </div>
                        <div className="row">
                            {partners.map((partner) => (
                                <div className="col-xl-3 col-lg-4 col-md-6" key={partner}>
                                    <div className="feature-one__single">
                                        <div className="feature-one__content">
                                            <h3 className="feature-one__title">{partner}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}