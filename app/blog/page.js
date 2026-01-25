
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Tokat Sigorta Blogu",
    description:
        "Tokat sigorta blogu: trafik, kasko, sağlık, konut ve işyeri sigortası hakkında rehberler, ipuçları ve güncel bilgiler. Voldem Sigorta Tokat.",
    keywords: [
        "Tokat sigorta",
        "Tokat sigorta acentesi",
        "Tokat trafik sigortası",
        "Tokat kasko",
        "Tokat tamamlayıcı sağlık sigortası",
        "Tokat özel sağlık sigortası",
        "Tokat konut sigortası",
        "Tokat DASK",
        "Tokat işyeri sigortası",
        "Tokat sigorta fiyatları",
        "Voldem Sigorta Tokat",
        "Tokat HDI Sigorta",
        "Tokat AXA Sigorta",
        "Tokat Allianz Sigorta",
        "Tokat Zurich Sigorta",
        "Tokat Türkiye Sigorta",
        "Tokat Ak Sigorta",
        "Tokat Unico Sigorta",
        "Tokat Ray Sigorta",
    ],
}

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
        image: "/assets/images/yangin.png",
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
                                                <Link href="/blog">{post.title}</Link>
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
                <section className="blog-page__seo">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">TOKAT SİGORTA BLOGU</p>
                            </div>
                            <h2 className="section-title__title">Tokat’ta Doğru Sigorta Seçimi için
                                <br/> Kapsamlı Rehber</h2>
                        </div>
                        <div className="blog-page__seo-content">
                            <p>Tokat sigorta blogu, araç, sağlık, konut ve işyeri sigortalarında en doğru poliçeyi
                                seçebilmeniz için hazırlanmıştır. Voldem Sigorta Tokat olarak; ihtiyaç analizi, risk
                                değerlendirmesi ve bütçenize uygun teklif sunma süreçlerinde şeffaf bir yaklaşım
                                benimsiyoruz. Bu sayfada, Tokat sigorta fiyatları ve teminat kapsamlarını etkileyen
                                başlıca faktörleri sade bir dille bulabilirsiniz.</p>

                            <h3>En Çok Sorulan Konular</h3>
                            <ul>
                                <li>Trafik sigortası ile kasko arasındaki farklar ve doğru teminat seçimi</li>
                                <li>Tamamlayıcı sağlık sigortası ve özel sağlık sigortası kapsamları</li>
                                <li>Konut sigortası ve DASK arasındaki zorunlu/isteğe bağlı ayrımı</li>
                                <li>İşyeri sigortasında stok, makine ve yangın teminatlarının önemi</li>
                            </ul>

                            <p>Tokat’ta en uygun sigorta, yalnızca düşük prim değil; doğru teminat, hızlı destek ve
                                güvenilir hasar yönetimiyle mümkündür. Bu nedenle blog yazılarımızı, teklif alma öncesi
                                kontrol listesi gibi düşünebilirsiniz. İhtiyaçlarınıza göre ilgili sayfalara
                                yönlendirmelerimizi kullanarak hızlıca bilgi alabilirsiniz.</p>

                            <h3>Tokat’ta Çalıştığımız Sigorta Markaları</h3>
                            <p>Tokat sigorta danışmanlığında; HDI Sigorta, AXA Sigorta, Allianz Sigorta, Zurich Sigorta,
                                Türkiye Sigorta, Ak Sigorta, Unico Sigorta ve Ray Sigorta gibi güçlü markalarla
                                çalışıyoruz. Böylece Tokat trafik sigortası, Tokat kasko, Tokat sağlık sigortası,
                                Tokat konut sigortası ve Tokat işyeri sigortası için geniş teminat seçenekleri ve
                                rekabetçi fiyatlar sunabiliyoruz.</p>

                            <p>Tokat sigorta acentesi arayışında olan müşterilerimiz için hızlı teklif, karşılaştırmalı
                                fiyat analizi ve doğru teminat eşleştirmesi sağlıyoruz. Tokat’ta en uygun sigorta
                                teklifi için bize ulaşarak ihtiyacınıza göre özel seçenekleri görebilirsiniz.</p>

                            <div className="blog-page__seo-links">
                                <Link href="/arac-sigortasi">Araç Sigortası</Link>
                                <Link href="/kasko-sigortasi">Kasko Sigortası</Link>
                                <Link href="/saglik-sigortasi">Sağlık Sigortası</Link>
                                <Link href="/konut-sigortasi">Konut Sigortası</Link>
                                <Link href="/dask-sigortasi">DASK Sigortası</Link>
                                <Link href="/isyeri-sigortasi">İşyeri Sigortası</Link>
                                <Link href="/iletisim">İletişim</Link>
                            </div>

                            <h3>Sık Sorulan Sorular</h3>
                            <p><strong>Tokat’ta sigorta primi neye göre belirlenir?</strong> Araç kullanım türü,
                                bina yaşı, sağlık geçmişi, teminat limitleri ve muafiyetler fiyatı etkiler.</p>
                            <p><strong>En uygun poliçeyi nasıl seçebilirim?</strong> Teklifleri teminat ve hizmet
                                kriterleriyle karşılaştırmak, uzun vadede daha avantajlı sonuç verir.</p>
                            <p><strong>Hasar anında destek alabilir miyim?</strong> Voldem Sigorta Tokat, hasar
                                bildirimi ve süreç yönetiminde hızlı destek sunar.</p>
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