import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "İşletme Sigortası",
    description: "Tokat işletme sigortası çözümleri. İş yerinizi yangın, hırsızlık, doğal afet ve sorumluluk risklerine karşı koruyun. İşletmenize özel poliçeler.",
    keywords: [
        "tokat işletme sigortası",
        "işletme sigortası tokat",
        "tokat işyeri sigortası",
        "işyeri sigortası tokat",
        "tokat yangın sigortası",
        "Voldem Sigorta Tokat",
    ],
    openGraph: {
        title: "İşletme Sigortası | Voldem Sigorta Tokat",
        description: "Tokat işletme sigortası çözümleri. İş yerinizi güçlü koruma ile güvence altına alın.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608282/Gemini_Generated_Image_j9v2h4j9v2h4j9v2_tj33cq.png",
                width: 1200,
                height: 630,
                alt: "İşletme Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "İş yeri sigortası neleri kapsar?",
        answer: "Bina, demirbaş, stok, yangın ve hırsızlık gibi riskleri kapsar. İhtiyaca göre ek teminatlar eklenebilir."
    },
    {
        question: "Primler nasıl belirlenir?",
        answer: "İşletme türü, büyüklük ve teminat kapsamına göre belirlenir. Size özel seçenekler sunarız."
    },
    {
        question: "İş durması teminatı var mı?",
        answer: "Talebe göre iş durması teminatı eklenebilir. Detayları birlikte planlarız."
    },
    {
        question: "Teklif nasıl alabilirim?",
        answer: "İletişim sayfamızdan bize ulaşarak hızlıca teklif alabilirsiniz. WhatsApp hattımız aktiftir."
    }
]

export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="İş Yeri Sigortası" breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608282/Gemini_Generated_Image_j9v2h4j9v2h4j9v2_tj33cq.png">
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h1 className="insurance-details__title-1">İş Yeri Sigortasında
                                <br/> Güçlü Koruma</h1>
                            <p className="insurance-details__text-1">İş yerinizi yangın, hırsızlık, doğal afet ve
                                sorumluluk risklerine karşı koruyun. Tokat'ta işletmenize özel poliçeler sunuyoruz.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/yangin.png")} alt="İş Yeri Sigortası"/>
                            </div>
                            <h2 className="insurance-details__title-2">İş Yeri Sigortası</h2>
                            <p className="insurance-details__text-2">İş yeri sigortası; bina, demirbaş ve stokları
                                güvence altına alır. Faaliyet alanınıza göre kapsam ve teminatları birlikte planlarız.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h2 className="insurance-details__points-title">Öne Çıkan Avantajlar</h2>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Yangın ve hırsızlığa karşı kapsamlı teminat</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>İş durması ve sorumluluk teminatları</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>İşletmenize özel esnek poliçe yapısı</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h2>Neden Voldem Sigorta?</h2>
                                    <p>İşletmenizin ihtiyaçlarını analiz eder, riskleri minimize eden çözümler üretiriz.
                                        Tokat'ta hızlı ve güvenilir hizmet sağlarız.</p>
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
                                    <li>
                                        <Link href="konut-sigortasi">Konut Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="dask-sigortasi">DASK Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="isyeri-sigortasi">İş Yeri Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="insurance-details__need-help">
                                <div className="insurance-details__need-help-bg"
                                    style={{ backgroundImage: `url(${cloudinaryUrl("assets/images/backgrounds/insurance-details-need-help-bg.jpg")})` }} >
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
