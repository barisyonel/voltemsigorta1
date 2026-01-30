import Link from "next/link"

const FEATURED = [
    {
        title: "Sağlık Sigortası",
        desc: "Özel sağlık, tamamlayıcı ve seyahat sağlık sigortası teklifleri. Geniş hastane ağı, hızlı teklif.",
        href: "/saglik-sigortasi",
        image: "/assets/saglıksigortası.png",
    },
    {
        title: "Konut Sigortası",
        desc: "Yangın, hırsızlık, su baskını teminatları. Evinizi ve eşyalarınızı güvence altına alın.",
        href: "/konut-sigortasi",
        image: "/assets/konutsigortası.png",
    },
    {
        title: "Kasko Sigortası",
        desc: "Aracınızı çarpma, çizilme, doğal afet ve hırsızlığa karşı koruyun. Karşılaştırmalı teklif.",
        href: "/kasko-sigortasi",
        image: "/assets/arackaskoo.png",
    },
    {
        title: "DASK Sigortası",
        desc: "Zorunlu deprem sigortası. Konutunuzu deprem riskine karşı güvence altına alın.",
        href: "/dask-sigortasi",
        image: "/assets/afet%20sigortası.png",
    },
]

export default function FeaturedServices() {
    return (
        <section className="featured-services">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">ÖNE ÇIKAN HİZMETLER</p>
                    </div>
                    <h2 className="section-title__title">En Çok Tercih Edilen Sigortalar</h2>
                    <p className="section-title__text">Tokat&apos;ta trafik, kasko, konut, sağlık ve DASK sigortası için karşılaştırmalı teklif alın. 20 yıllık deneyimle yanınızdayız.</p>
                </div>
                <div className="row g-4">
                    {FEATURED.map((item) => (
                        <div className="col-xl-6 col-lg-6 col-md-6" key={item.title}>
                            <Link href={item.href} className="featured-services__card">
                                <div className="featured-services__img">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                </div>
                                <div className="featured-services__content">
                                    <h3 className="featured-services__title">{item.title}</h3>
                                    <p className="featured-services__desc">{item.desc}</p>
                                    <span className="featured-services__link">Detaylı Bilgi <i className="fas fa-arrow-right"></i></span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
