import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Tokat Sigorta Blogu | Trafik, Kasko, Konut Rehberleri",
    description: "Tokat sigorta blogu: trafik, kasko, sağlık, konut ve işyeri sigortası hakkında rehberler, ipuçları ve güncel bilgiler. Voldem Sigorta Tokat.",
    keywords: [
        "Tokat sigorta", "Tokat sigorta acentesi", "Tokat trafik sigortası", "Tokat kasko",
        "Tokat TARSIM", "Tokat özel sağlık sigortası", "Tokat konut sigortası", "Tokat DASK",
        "Tokat işyeri sigortası", "Tokat sigorta fiyatları", "Voldem Sigorta Tokat",
    ],
    alternates: { canonical: "/blog" },
}

const formatDate = (dateStr) => {
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
    const [y, m, d] = dateStr.split("-").map(Number)
    return `${d} ${months[m - 1]} ${y}`
}

const POSTS = [
    {
        title: "Tokat Trafik Sigortası: Zorunlu Teminatlar ve Avantajlar",
        excerpt: "Trafik sigortası zorunlu bir poliçedir. Karşı tarafın maddi ve bedeni zararlarını karşılar. Tokat'ta en uygun trafik sigortası teklifi nasıl alınır?",
        image: "/assets/arackaskoo.png",
        href: "/arac-sigortasi",
        tags: ["Trafik Sigortası", "Araç Sigortası"],
        date: "2025-02-01",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "Tokat Kasko Rehberi: Kapsam ve Poliçe Seçimi",
        excerpt: "Kasko kendi aracınızı korur. Çarpma, çizilme, doğal afet ve hırsızlık teminatları. Dar ve geniş kapsamlı kasko farkları.",
        image: "/assets/arackaskoo.png",
        href: "/kasko-sigortasi",
        tags: ["Kasko", "Araç Sigortası"],
        date: "2025-01-28",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "Sağlık Sigortalarında Sonbahar Kampanyası",
        excerpt: "Özel sağlık sigortası, tamamlayıcı sağlık ve seyahat sağlık sigortası teklifleri. Aile bütçesine uygun prim seçenekleri.",
        image: "/assets/saglıksigortası.png",
        href: "/saglik-sigortasi",
        tags: ["Sağlık Sigortası", "Özel Sağlık"],
        date: "2025-01-20",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "DASK (Zorunlu Deprem Sigortası) Hakkında Bilmeniz Gerekenler",
        excerpt: "DASK zorunlu deprem sigortasıdır. Konut sahipleri için şart. Prim hesaplama, vade takibi ve ekspertiz süreçleri.",
        image: "/assets/afet%20sigortası.png",
        href: "/dask-sigortasi",
        tags: ["DASK", "Deprem Sigortası"],
        date: "2025-01-15",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "Konut Sigortası ile Evinizi Güvence Altına Alın",
        excerpt: "Yangın, hırsızlık, su baskını, cam kırılması. Konut sigortası DASK'tan farklı olarak ek riskleri de kapsar.",
        image: "/assets/konutsigortası.png",
        href: "/konut-sigortasi",
        tags: ["Konut Sigortası", "Ev Sigortası"],
        date: "2025-01-10",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "İşyeri Sigortası: İşinizi ve Gelirinizi Koruyun",
        excerpt: "Yangın, hırsızlık, elektronik cihaz ve iş kesintisi teminatları. Stok, makine ve operasyonel riskler için poliçe.",
        image: "/assets/hizmett.png",
        href: "/isyeri-sigortasi",
        tags: ["İşyeri Sigortası", "İşletme"],
        date: "2025-01-05",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "Hayat Sigortası ve Ferdi Kaza: Geleceğinizi Koruyun",
        excerpt: "Hayat sigortası ailenize mali güvence sağlar. Ferdi kaza günlük yaşamda kaza risklerini kapsar.",
        image: "/assets/saglıksigortası.png",
        href: "/hayat-sigortasi",
        tags: ["Hayat Sigortası", "Ferdi Kaza"],
        date: "2024-12-28",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "TARSIM Tarım Sigortası: Ürünlerinizi Koruyun",
        excerpt: "Dolu, don, kuraklık ve yangın risklerine karşı tarım ürünlerinizi sigortalamak. TARSIM teşvikleri.",
        image: "/assets/tarımsigorta.jpg",
        href: "/tarsim",
        tags: ["TARSIM", "Tarım Sigortası"],
        date: "2024-12-20",
        author: "Voldem Sigorta Uzmanı",
    },
    {
        title: "Tokat'ta En Uygun Sigorta Nasıl Bulunur?",
        excerpt: "Karşılaştırmalı teklif, teminat analizi ve doğru acente seçimi. 5 adımda en uygun poliçeyi bulma rehberi.",
        image: "/assets/konutsigortası.png",
        href: "/iletisim",
        tags: ["Rehber", "Teklif"],
        date: "2024-12-15",
        author: "Voldem Sigorta Uzmanı",
    },
]

export default function BlogPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                {/* Hero */}
                <section className="blog-hero">
                    <div className="container">
                        <div className="blog-hero__inner">
                            <div className="blog-hero__content">
                                <p className="blog-hero__tagline">TOKAT SİGORTA BLOGU</p>
                                <h1 className="blog-hero__title">Sigorta Rehberleri ve İpuçları</h1>
                                <p className="blog-hero__desc">
                                    Trafik, kasko, konut, sağlık ve işyeri sigortası hakkında güncel bilgiler, karşılaştırma ipuçları ve doğru poliçe seçimi rehberleri. Voldem Sigorta Tokat uzmanları tarafından hazırlanmıştır.
                                </p>
                                <p className="blog-hero__byline" style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.9 }}>
                                    <strong>Yazar:</strong> Voldem Sigorta Uzmanı · 20 yıllık sektör deneyimi
                                </p>
                                <div className="blog-hero__links">
                                    <Link href="/arac-sigortasi">Araç Sigortası</Link>
                                    <Link href="/saglik-sigortasi">Sağlık</Link>
                                    <Link href="/konut-sigortasi">Konut</Link>
                                    <Link href="/iletisim">İletişim</Link>
                                </div>
                            </div>
                            <div className="blog-hero__img">
                                <img src="/assets/hizmett.png" alt="Tokat sigorta hizmetleri - trafik kasko konut sağlık TARSIM rehberleri - Voldem Sigorta blog" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="blog-grid-section">
                    <div className="container">
                        <div className="section-title text-center">
                            <p className="section-title__tagline">SON YAZILAR</p>
                            <h2 className="section-title__title">Sigorta Rehberleri</h2>
                        </div>
                        <div className="row g-4">
                            {POSTS.map((post) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={post.title}>
                                    <Link href={post.href} className="blog-card">
                                        <div className="blog-card__img">
                                            <img src={post.image} alt={post.title} loading="lazy" />
                                        </div>
                                        <div className="blog-card__content">
                                            <div className="blog-card__tags">
                                                {post.tags.map((tag) => (
                                                    <span key={tag}>{tag}</span>
                                                ))}
                                            </div>
                                            <h3 className="blog-card__title">{post.title}</h3>
                                            <p className="blog-card__excerpt">{post.excerpt}</p>
                                            <div className="blog-card__meta" style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "var(--thm-text)", opacity: 0.8 }}>
                                                <span>{post.author}</span> · <time dateTime={post.date}>{formatDate(post.date)}</time>
                                            </div>
                                            <span className="blog-card__read">Devamını Oku <i className="fas fa-arrow-right"></i></span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO Content */}
                <section className="blog-page__seo">
                    <div className="container">
                        <div className="section-title text-center">
                            <p className="section-title__tagline">TOKAT SİGORTA BLOGU</p>
                            <h2 className="section-title__title">Tokat&apos;ta Doğru Sigorta Seçimi için Kapsamlı Rehber</h2>
                        </div>
                        <div className="blog-page__seo-content">
                            <p>Tokat sigorta blogu, araç, sağlık, konut ve işyeri sigortalarında en doğru poliçeyi seçebilmeniz için hazırlanmıştır. Voldem Sigorta Tokat olarak; ihtiyaç analizi, risk değerlendirmesi ve bütçenize uygun teklif sunma süreçlerinde şeffaf bir yaklaşım benimsiyoruz.</p>

                            <h3>En Çok Sorulan Konular</h3>
                            <ul>
                                <li>Trafik sigortası ile kasko arasındaki farklar ve doğru teminat seçimi</li>
                                <li>TARSIM ve özel sağlık sigortası kapsamları</li>
                                <li>Konut sigortası ve DASK arasındaki zorunlu/isteğe bağlı ayrımı</li>
                                <li>İşyeri sigortasında stok, makine ve yangın teminatlarının önemi</li>
                            </ul>

                            <p>Tokat&apos;ta en uygun sigorta, yalnızca düşük prim değil; doğru teminat, hızlı destek ve güvenilir hasar yönetimiyle mümkündür.</p>

                            <h3>Tokat&apos;ta Çalıştığımız Sigorta Markaları</h3>
                            <p>HDI Sigorta, AXA Sigorta, Allianz Sigorta, Zurich Sigorta, Türkiye Sigorta, Ak Sigorta, Unico Sigorta ve Ray Sigorta ile çalışıyoruz.</p>

                            <div className="blog-page__seo-links">
                                <Link href="/arac-sigortasi">Araç Sigortası</Link>
                                <Link href="/kasko-sigortasi">Kasko</Link>
                                <Link href="/saglik-sigortasi">Sağlık</Link>
                                <Link href="/konut-sigortasi">Konut</Link>
                                <Link href="/dask-sigortasi">DASK</Link>
                                <Link href="/isyeri-sigortasi">İşyeri</Link>
                                <Link href="/iletisim">İletişim</Link>
                            </div>

                            <h3>Sık Sorulan Sorular</h3>
                            <p><strong>Tokat&apos;ta sigorta primi neye göre belirlenir?</strong> Araç kullanım türü, bina yaşı, sağlık geçmişi, teminat limitleri ve muafiyetler fiyatı etkiler.</p>
                            <p><strong>En uygun poliçeyi nasıl seçebilirim?</strong> Teklifleri teminat ve hizmet kriterleriyle karşılaştırmak, uzun vadede daha avantajlı sonuç verir.</p>
                            <p><strong>Hasar anında destek alabilir miyim?</strong> Voldem Sigorta Tokat, hasar bildirimi ve süreç yönetiminde hızlı destek sunar.</p>

                            <p style={{ marginTop: "2rem", fontSize: "0.9rem", opacity: 0.85 }}>
                                <strong>Son güncelleme:</strong> 3 Şubat 2025 · Voldem Sigorta Tokat Uzmanları
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-one cta-five">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg" style={{ backgroundImage: "url(https://res.cloudinary.com/dznv8z7wo/image/upload/assets/images/shapes/cta-three-bg-shape-2.png)" }} />
                            <div className="cta-one__title-box">
                                <h3>Hemen En Uygun <span>Teklifi</span> Al!</h3>
                                <p>Tokat ve çevre illerde hızlı sigorta teklifi</p>
                            </div>
                            <div className="cta-one__btn-box">
                                <a href="https://wa.me/905433950213" target="_blank" rel="noopener noreferrer" className="cta-one__btn thm-btn">WhatsApp ile Teklif Al</a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
