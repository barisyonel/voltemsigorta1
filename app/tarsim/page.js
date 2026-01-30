import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

const faqItems = [
    {
        question: "TARSIM nedir?",
        answer: "TARSIM (Tarım Sigortası Havuzu), tarımsal üretimi doğal afetler, hastalık ve diğer risklere karşı güvence altına alan devlet destekli sigorta sistemidir. Üreticilerin yanında olmak için geniş kapsamlı poliçe seçenekleri sunar."
    },
    {
        question: "TARSIM hangi riskleri kapsar?",
        answer: "Dolu, don, fırtına, yangın, deprem, su baskını, kuraklık, hastalık ve zararlılar gibi birçok risk TARSIM kapsamındadır. Ürün ve poliçe türüne göre teminatlar değişir; size uygun kapsamı birlikte belirleriz."
    },
    {
        question: "Devlet desteği var mı?",
        answer: "Evet. TARSIM poliçelerinde primin belirli bir oranı devlet tarafından desteklenir. Böylece üretici daha uygun maliyetle geniş kapsamlı güvence elde eder."
    },
    {
        question: "TARSIM teklifi nasıl alınır?",
        answer: "Bize iletisim sayfamızdan veya WhatsApp hattımızdan ulaşarak ürününüz, araziniz ve ihtiyacınızı paylaşın. En uygun TARSIM poliçesini hızlıca tekliflendiriyoruz."
    }
]

const coverageItems = [
    { title: "Bitkisel Ürün Sigortası", desc: "Tarla bitkileri, meyve, sebze; dolu, don, fırtına, yangın ve daha fazlası." },
    { title: "Sera Sigortası", desc: "Örtü altı üretim; doğal afet ve yangın teminatı." },
    { title: "Büyükbaş / Küçükbaş Hayvan Sigortası", desc: "Sığır, koyun, keçi; ölüm, hastalık ve doğal afet riskleri." },
    { title: "Kümes Hayvanları Sigortası", desc: "Tavuk, hindi vb.; yangın, hastalık ve belirli doğal afetler." },
    { title: "Arıcılık Sigortası", desc: "Kovan ve arılık; yangın, hırsızlık, doğal afet teminatı." },
    { title: "Su Ürünleri Sigortası", desc: "Yetiştiricilik tesisleri; fırtına, kirlilik, hastalık ve benzeri riskler." },
]

export default function TarsimPage() {
    return (
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="TARSIM Tarım Sigortası"
            breadcrumbImage="/assets/tokattarım.jpg"
            breadcrumbImageFullSize
        >
            <section className="insurance-details tarsim-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="insurance-details__left">
                                <h1 className="insurance-details__title-1">
                                    Geniş Kapsamlı TARSIM ile
                                    <br /> Tarımınızı Güvence Altına Alın
                                </h1>
                                <p className="insurance-details__text-1">
                                    Voldem Sigorta Tokat olarak TARSIM (Tarım Sigortası Havuzu) kapsamında bitkisel ürün, sera, hayvancılık, kümes hayvanları, arıcılık ve su ürünleri sigortalarında geniş kapsamlı çözümler sunuyoruz. Devlet destekli primlerle üreticinin yanındayız.
                                </p>

                                <div className="insurance-details__points-and-text-box" style={{ marginTop: "24px" }}>
                                    <div className="insurance-details__points-box">
                                        <h2 className="insurance-details__points-title">TARSIM Neden Önemli?</h2>
                                        <ul className="insurance-details__points list-unstyled">
                                            <li>
                                                <div className="icon"><span className="icon-check-mark-1"></span></div>
                                                <p>Devlet destekli prim; uygun maliyetle güvence</p>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-check-mark-1"></span></div>
                                                <p>Dolu, don, fırtına, yangın, hastalık ve daha fazlası</p>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-check-mark-1"></span></div>
                                                <p>Bitkisel üründen su ürünlerine geniş ürün yelpazesi</p>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="icon-check-mark-1"></span></div>
                                                <p>Hızlı hasar süreci ve güvenilir tazminat</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="insurance-details__text-box">
                                        <h2>Neden Voldem Sigorta?</h2>
                                        <p>Tokat ve çevre illerde TARSIM konusunda deneyimli ekibimizle ürününüze ve ihtiyacınıza uygun, geniş kapsamlı poliçe seçeneklerini sunuyoruz. Teklif ve hasar süreçlerinde yanınızdayız.</p>
                                        <img src="/assets/tarımsigorta.jpg" alt="Tokat TARSIM Tarım Sigortası" className="insurance-details__why-voldem-img" style={{ display: "block", maxWidth: "100%", width: "320px", height: "auto", marginTop: "20px", borderRadius: "12px" }} />
                                    </div>
                                </div>

                                <h2 className="insurance-details__title-2" style={{ marginTop: "32px" }}>Geniş Kapsamlı TARSIM Teminatları</h2>
                                <p className="insurance-details__text-2">
                                    TARSIM; bitkisel ürün, sera, büyükbaş ve küçükbaş hayvan, kümes hayvanları, arıcılık ve su ürünleri sigortalarını tek çatı altında toplar. Her branşta doğal afet, yangın, hastalık gibi risklere karşı geniş kapsamlı teminat imkânı sunar.
                                </p>

                                <div className="tarsim-weather-risks" style={{ marginTop: "28px", padding: "24px", background: "linear-gradient(135deg, #f8faf5 0%, #f0f7ec 100%)", borderRadius: "16px", border: "1px solid rgba(22, 163, 74, 0.15)" }}>
                                    <h3 className="insurance-details__title-2" style={{ fontSize: "22px", marginBottom: "20px", color: "#166534" }}>Dolu, Don ve Aşırı Yağmur – Tarımda En Sık Karşılaşılan Riskler</h3>
                                    <p className="insurance-details__text-2" style={{ marginBottom: "16px" }}>
                                        Çiftçi için yağmurun anlamı farklıdır; yağmur bereket demektir. Ancak aşırı yağış, don ve dolu hasat öncesi ürünü bir gecede sıfırlayabilir. TARSIM, bu doğal risklere karşı üreticiyi güvence altına alır.
                                    </p>
                                    <div className="row g-3" style={{ marginTop: "20px" }}>
                                        <div className="col-md-4">
                                            <div style={{ padding: "16px", background: "#fff", borderRadius: "12px", height: "100%", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                                                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#166534", marginBottom: "8px" }}>Dolu Sigortası</h4>
                                                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
                                                    Dolu, meyve bahçeleri ve tarla ürünlerinde dakikalar içinde büyük kayıplara yol açar. TARSIM dolu hasarlarını kapsar; hasar tespiti sonrası tazminat hızlıca ödenir.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{ padding: "16px", background: "#fff", borderRadius: "12px", height: "100%", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                                                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#166534", marginBottom: "8px" }}>Don Riski Teminatı</h4>
                                                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
                                                    İlkbahar geç donları ve sonbahar erken donları, özellikle meyve ve sebze üreticilerini zor durumda bırakır. Don teminatı ile ürününüz soğuk hava dalgalarına karşı korunur.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{ padding: "16px", background: "#fff", borderRadius: "12px", height: "100%", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                                                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#166534", marginBottom: "8px" }}>Aşırı Yağış ve Su Baskını</h4>
                                                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#4b5563", margin: 0 }}>
                                                    Aşırı yağmur ve su baskını tarlada su birikmesine, kök çürümesine ve verim kaybına neden olur. TARSIM su baskını teminatı ile bu riskleri karşılar.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row tarsim-coverage-grid">
                                    {coverageItems.map((item, i) => (
                                        <div key={i} className="col-md-6 col-sm-6">
                                            <div className="tarsim-coverage-card">
                                                <h3 className="tarsim-coverage-card__title">{item.title}</h3>
                                                <p className="tarsim-coverage-card__desc">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <InsuranceFAQ items={faqItems} />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="insurance-details__right">
                                <div className="insurance-details__catagories">
                                    <h2 className="insurance-details__catagories-title">Kategoriler</h2>
                                    <ul className="insurance-details__catagories-list list-unstyled">
                                        <li><Link href="/hayat-sigortasi">Hayat Sigortası<span className="icon-next"></span></Link></li>
                                        <li><Link href="/saglik-sigortasi">Sağlık Sigortası<span className="icon-next"></span></Link></li>
                                        <li><Link href="/arac-sigortasi">Araç Sigortası<span className="icon-next"></span></Link></li>
                                        <li><Link href="/konut-sigortasi">Konut Sigortası<span className="icon-next"></span></Link></li>
                                        <li><Link href="/dask-sigortasi">DASK Sigortası<span className="icon-next"></span></Link></li>
                                        <li className="active"><Link href="/tarsim">TARSIM (Tarım Sigortası)<span className="icon-next"></span></Link></li>
                                        <li><Link href="/isyeri-sigortasi">İşletme Sigortası<span className="icon-next"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="insurance-details__tarsim-visual" style={{ marginBottom: "24px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
                                    <img src="/assets/tarım.jpg" alt="Tokat tarım sigortası" style={{ width: "100%", height: "auto", display: "block" }} />
                                </div>
                                <div className="insurance-details__need-help">
                                    <div className="insurance-details__need-help-bg"
                                        style={{ backgroundImage: `url(${cloudinaryUrl("assets/images/backgrounds/insurance-details-need-help-bg.jpg")})` }}
                                        suppressHydrationWarning >
                                    </div>
                                    <h2 className="insurance-details__need-help-title">TARSIM
                                        <br /> Teklifi Alın</h2>
                                    <div className="insurance-details__need-help-btn-box">
                                        <Link href="/iletisim" className="insurance-details__need-help-btn thm-btn">TEKLİF AL</Link>
                                    </div>
                                </div>
                                <div className="insurance-details__contact">
                                    <div className="insurance-details__contact-icon">
                                        <span className="icon-telephone-1"></span>
                                    </div>
                                    <div className="insurance-details__contact-content">
                                        <span>TARSIM için hemen arayın</span>
                                        <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
