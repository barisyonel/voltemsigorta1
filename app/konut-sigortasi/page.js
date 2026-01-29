import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "Konut Sigortası",
    description: "Tokat konut sigortası çözümleri. Evinizi ve eşyalarınızı yangın, hırsızlık ve doğal afetlere karşı güvence altına alın. Hızlı teklif ve uygun prim seçenekleri.",
    keywords: [
        "tokat konut sigortası",
        "konut sigortası tokat",
        "tokat ev sigortası",
        "konut sigortası fiyatları tokat",
        "tokat yangın sigortası",
        "Voldem Sigorta Tokat",
    ],
    openGraph: {
        title: "Konut Sigortası | Voldem Sigorta Tokat",
        description: "Tokat konut sigortası çözümleri. Evinizi ve eşyalarınızı tam koruma ile güvence altına alın.",
        images: [
            {
                url: cloudinaryUrl("/assets/images/konutt.png"),
                width: 1200,
                height: 630,
                alt: "Konut Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "Konut sigortası neleri kapsar?",
        answer: "Yangın, hırsızlık, su baskını ve doğal afetler gibi riskler kapsam dahilindedir. Ek teminatlarla poliçeyi genişletebilirsiniz."
    },
    {
        question: "Primler nasıl belirlenir?",
        answer: "Konutun özellikleri ve teminat kapsamına göre belirlenir. Size uygun seçenekleri birlikte planlarız."
    },
    {
        question: "Deprem teminatı dahil mi?",
        answer: "Deprem teminatı DASK ile zorunlu kapsamda sunulur. Konut sigortasında ek teminatlarla desteklenebilir."
    },
    {
        question: "Teklif nasıl alabilirim?",
        answer: "İletişim sayfamızdan bize ulaşarak hızlıca teklif alabilirsiniz. WhatsApp hattımız aktiftir."
    }
]

export default function Home() {
    return (
        <>
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="Konut Sigortası"
            breadcrumbImage={cloudinaryUrl("/assets/images/konutt.png")}
        >
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h1 className="insurance-details__title-1">Konut Sigortasında
                                <br/> Tam Koruma</h1>
                            <p className="insurance-details__text-1">Evinizi ve eşyalarınızı yangın, hırsızlık ve doğal
                                afetlere karşı güvence altına alın. Tokat’ta hızlı teklif ve güvenilir destek sağlarız.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/konut.png")} alt="Konut Sigortası" suppressHydrationWarning/>
                            </div>
                            <h2 className="insurance-details__title-2">Konut Sigortası</h2>
                            <p className="insurance-details__text-2">Konut sigortası, evinizi ve eşyalarınızı geniş
                                kapsamla güvence altına alır. İhtiyacınıza göre teminat ve prim seçenekleri sunarız.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h2 className="insurance-details__points-title">Öne Çıkan Avantajlar</h2>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Yangın, hırsızlık ve su baskını teminatları</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Doğal afetlere karşı güçlü koruma</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hızlı teklif ve poliçe süreci</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h2>Neden Voldem Sigorta?</h2>
                                    <p>Konutunuzun ihtiyaçlarını doğru analiz eder, size en uygun poliçeyi oluştururuz.
                                        Tokat’ta hızlı iletişim ve güvenilir hizmet sağlarız.</p>
                                </div>
                            </div>
                            <InsuranceFAQ items={faqItems} />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="insurance-details__right">
                            <div className="insurance-details__catagories">
                                <h2 className="insurance-details__catagories-title">Kategoriler</h2>
                                <ul className="insurance-details__catagories-list list-unstyled">
                                    <li>
                                        <Link href="hayat-sigortasi">Hayat Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="saglik-sigortasi">Sağlık Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="arac-sigortasi">Araç Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="konut-sigortasi">Konut Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="dask-sigortasi">DASK Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="isyeri-sigortasi">İş Yeri Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="insurance-details__need-help">
                                <div className="insurance-details__need-help-bg"
                                    style={{ backgroundImage: `url(${cloudinaryUrl("assets/images/backgrounds/insurance-details-need-help-bg.jpg")})` }}
                                    suppressHydrationWarning >
                                </div>
                                <h2 className="insurance-details__need-help-title">Her Türlü
                                    <br/> Sigorta
                                    <br/> İçin</h2>
                                <div className="insurance-details__need-help-btn-box">
                                    <Link href="iletisim" className="insurance-details__need-help-btn thm-btn">TEKLİF AL</Link>
                                </div>
                            </div>
                            <div className="insurance-details__contact">
                                <div className="insurance-details__contact-icon">
                                    <span className="icon-telephone-1"></span>
                                </div>
                                <div className="insurance-details__contact-content">
                                    <span>Dilediğiniz zaman arayın</span>
                                    <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Insurance Details End */}

            </Layout>
        </>
    )
}