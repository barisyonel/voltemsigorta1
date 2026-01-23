
import Layout from "@/components/layout/Layout"
import Link from "next/link"

const posts = [
    {
        title: "Tokat Trafik Sigortası: Zorunlu Teminatlar ve Avantajlar",
        image: "/assets/images/trafik.png",
        tags: ["Tokat Sigorta", "Trafik Sigortası"],
    },
    {
        title: "Tokat Kasko Rehberi: Kapsam ve Poliçe Seçimi",
        image: "/assets/images/kasko.png",
        tags: ["Tokat Kasko", "Araç Sigortası"],
    },
    {
        title: "Tamamlayıcı Sağlık Sigortası ile Güvende Kalın",
        image: "/assets/images/ozel.png",
        tags: ["Sağlık Sigortası", "Tokat Sigorta"],
    },
    {
        title: "DASK (Zorunlu Deprem Sigortası) Hakkında Bilmeniz Gerekenler",
        image: "/assets/images/konutt.png",
        tags: ["DASK", "Konut Sigortası"],
    },
    {
        title: "Konut Sigortası ile Evinizi Güvence Altına Alın",
        image: "/assets/images/konut.png",
        tags: ["Konut Sigortası", "Tokat En Uygun Sigorta"],
    },
    {
        title: "İşyeri Sigortası: İşinizi ve Gelirinizi Koruyun",
        image: "/assets/images/yangın.png",
        tags: ["İşyeri Sigortası", "Tokat Sigorta"],
    },
]

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
                <section className="blog-page">
                    <div className="container">
                        <div className="row">
                            {posts.map((post) => (
                                <div className="col-xl-4 col-lg-4" key={post.title}>
                                    <div className="blog-one__single">
                                        <div className="blog-one__img-box">
                                            <div className="blog-one__img">
                                                <img src={post.image} alt={post.title}/>
                                            </div>
                                        </div>
                                        <div className="blog-one__content">
                                            <div className="blog-one__tag">
                                                {post.tags.map((tag) => (
                                                    <span key={tag}>{tag}</span>
                                                ))}
                                            </div>
                                            <h3 className="blog-one__title">
                                                <Link href="blog-detay">{post.title}</Link>
                                            </h3>
                                            <div className="blog-one__client-info">
                                                <div className="blog-one__client-img">
                                                    <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                                                </div>
                                                <div className="blog-one__client-content">
                                                    <h3>Voldem Sigorta Tokat</h3>
                                                    <p>2026</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-one cta-five">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg"
                                style={{ backgroundImage: 'url(assets/images/shapes/cta-three-bg-shape-2.png)' }} >
                            </div>
                            <div className="cta-one__title-box">
                                <h3>Hemen En Uygun <span>Teklifi</span> Al!</h3>
                                <p>Tokat ve çevre illerde hızlı sigorta teklifi</p>
                            </div>
                            <div className="cta-one__btn-box">
                                <Link href="iletisim" className="cta-one__btn thm-btn">Hemen Ara</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}