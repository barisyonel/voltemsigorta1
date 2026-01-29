import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

const HEADER_IMG_URL = "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769696797/Gemini_Generated_Image_mp0vump0vump0vum_1_hvczvn.png"

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
            breadcrumbImage={HEADER_IMG_URL}
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
                                        <Image src={HEADER_IMG_URL} alt="TARSIM Tarım Sigortası" width={640} height={360} className="insurance-details__why-voldem-img" style={{ display: "block", maxWidth: "320px", width: "100%", height: "auto", marginTop: "20px", borderRadius: "8px" }} />
                                    </div>
                                </div>

                                <h2 className="insurance-details__title-2" style={{ marginTop: "32px" }}>Geniş Kapsamlı TARSIM Teminatları</h2>
                                <p className="insurance-details__text-2">
                                    TARSIM; bitkisel ürün, sera, büyükbaş ve küçükbaş hayvan, kümes hayvanları, arıcılık ve su ürünleri sigortalarını tek çatı altında toplar. Her branşta doğal afet, yangın, hastalık gibi risklere karşı geniş kapsamlı teminat imkânı sunar.
                                </p>

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
