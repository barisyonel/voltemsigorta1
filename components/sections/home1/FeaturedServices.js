import Link from "next/link"

const FEATURED = [
    {
        title: "Sağlık Sigortası",
        desc: "Özel sağlık, tamamlayıcı ve seyahat sağlık sigortası teklifleri. Geniş hastane ağı, hızlı teklif.",
        href: "/saglik-sigortasi",
        image: "/assets/saglıksigortası.png",
        alt: "Tokat sağlık sigortası - Özel sağlık, tamamlayıcı ve seyahat sağlık sigortası. Voldem Sigorta teklifi",
        metaTitle: "Tokat Sağlık Sigortası | Voldem Sigorta",
    },
    {
        title: "Konut Sigortası",
        desc: "Yangın, hırsızlık, su baskını teminatları. Evinizi ve eşyalarınızı güvence altına alın.",
        href: "/konut-sigortasi",
        image: "/assets/konutsigortası.png",
        alt: "Tokat konut sigortası - Yangın, hırsızlık, su baskını teminatları. Voldem Sigorta ev sigortası teklifi",
        metaTitle: "Tokat Konut Sigortası | Voldem Sigorta",
    },
    {
        title: "Kasko Sigortası",
        desc: "Aracınızı çarpma, çizilme, doğal afet ve hırsızlığa karşı koruyun. Karşılaştırmalı teklif.",
        href: "/kasko-sigortasi",
        image: "/assets/arackaskoo.png",
        alt: "Tokat trafik sigortası ve kasko - Voldem Sigorta araç sigortası teklifi",
        metaTitle: "Tokat Kasko Sigortası | Voldem Sigorta",
    },
    {
        title: "DASK Sigortası",
        desc: "Zorunlu deprem sigortası. Konutunuzu deprem riskine karşı güvence altına alın.",
        href: "/dask-sigortasi",
        image: "/assets/afet%20sigortası.png",
        alt: "Tokat DASK sigortası - Zorunlu deprem sigortası. Voldem Sigorta DASK teklifi",
        metaTitle: "Tokat DASK Sigortası | Voldem Sigorta",
    },
]

export default function FeaturedServices() {
    return (
        <section className="featured-services" aria-labelledby="featured-services-title">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">ÖNE ÇIKAN HİZMETLER</p>
                    </div>
                    <h2 id="featured-services-title" className="section-title__title">Trafik Sigortası ve En Çok Tercih Edilen Sigortalar</h2>
                    <p className="section-title__text">Tokat&apos;ta trafik, kasko, konut, sağlık ve DASK sigortası için karşılaştırmalı teklif alın. 20 yıllık deneyimle yanınızdayız.</p>
                </div>
                <div className="row g-4">
                    {FEATURED.map((item) => (
                        <div className="col-xl-6 col-lg-6 col-md-6" key={item.title}>
                            <Link href={item.href} className="featured-services__card" title={item.metaTitle || item.title} aria-label={`${item.title} - ${item.desc}`}>
                                <div className="featured-services__img">
                                    <img src={item.image} alt={item.alt || item.title} title={item.metaTitle || item.title} loading="lazy" />
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
