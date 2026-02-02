import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "DASK Sigortası",
    description: "Tokat DASK sigortası çözümleri. Zorunlu deprem sigortası ile konutunuzu deprem risklerine karşı güvence altına alın. Hızlı ve uygun fiyatlı çözümler.",
    keywords: [
        "tokat dask",
        "dask sigortası tokat",
        "tokat deprem sigortası",
        "zorunlu deprem sigortası tokat",
        "dask fiyatları tokat",
        "Voldem Sigorta Tokat",
    ],
    openGraph: {
        title: "DASK Sigortası | Voldem Sigorta Tokat",
        description: "Tokat DASK sigortası çözümleri. Zorunlu deprem sigortası ile konutunuzu güvence altına alın.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608268/Gemini_Generated_Image_u55xp0u55xp0u55x_ootnnu.png",
                width: 1200,
                height: 630,
                alt: "DASK Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "DASK kimler için zorunludur?",
        answer: "Tapulu konut sahipleri için zorunludur. Satış ve abonelik işlemlerinde DASK poliçesi gereklidir."
    },
    {
        question: "DASK teminatı neleri kapsar?",
        answer: "Deprem ve deprem kaynaklı yangın, infilak ve yer kayması gibi riskleri kapsar. Poliçe limitleri yasal düzenlemelere göre belirlenir."
    },
    {
        question: "DASK yenileme süresi nedir?",
        answer: "Poliçeler genellikle 1 yıllıktır. Yenileme zamanı yaklaştığında size hatırlatma yaparız."
    },
    {
        question: "Teklif nasıl alabilirim?",
        answer: "İletişim sayfamızdan veya WhatsApp hattımızdan hızlıca teklif alabilirsiniz."
    }
]

export default function Home() {
    return (
        <>
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="DASK Sigortası"
            breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608268/Gemini_Generated_Image_u55xp0u55xp0u55x_ootnnu.png"
        >
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h1 className="insurance-details__title-1">DASK Sigortasında
                                <br/> Zorunlu Güvence</h1>
                            <p className="insurance-details__text-1">Zorunlu deprem sigortası (DASK) ile konutunuzu
                                deprem risklerine karşı güvence altına alın. Tokat'ta hızlı ve uygun fiyatlı çözümler
                                sunuyoruz.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/dask%20(1).png")} alt="DASK Sigortası" suppressHydrationWarning/>
                            </div>
                            <h2 className="insurance-details__title-2">DASK Sigortası</h2>
                            <p className="insurance-details__text-2">DASK, deprem ve deprem kaynaklı yangın, infilak,
                                yer kayması gibi risklere karşı zorunlu koruma sağlar. Poliçenizi hızlıca düzenleyelim.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h2 className="insurance-details__points-title">Öne Çıkan Avantajlar</h2>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Zorunlu deprem teminatı</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hızlı poliçe ve yenileme süreci</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Uygun prim seçenekleri</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h2>Neden Voldem Sigorta?</h2>
                                    <p>DASK sürecinizi hızlıca tamamlar, yenileme zamanlarını takip ederiz. Şeffaf ve
                                        güvenilir hizmet sunarız.</p>
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
                                        <Link href="/hayat-sigortasi">Hayat Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="/saglik-sigortasi">Sağlık Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="/arac-sigortasi">Araç Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="/konut-sigortasi">Konut Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="/dask-sigortasi">DASK Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="/isyeri-sigortasi">İş Yeri Sigortası<span
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
                                    <Link href="/iletisim" className="insurance-details__need-help-btn thm-btn">TEKLİF AL</Link>
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
