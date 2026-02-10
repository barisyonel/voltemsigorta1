import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "Kasko Sigortası",
    description: "Tokat kasko sigortası çözümleri. Aracınızı çarpma, çalınma, doğal afet ve yangın risklerine karşı güvence altına alın. Hızlı teklif ve uygun prim seçenekleri.",
    keywords: [
        "tokat kasko",
        "kasko sigortası tokat",
        "tokat kasko sigortası",
        "kasko fiyatları tokat",
        "tokat araç sigortası",
        "Voldem Sigorta Tokat",
    ],
    openGraph: {
        title: "Kasko Sigortası | Voldem Sigorta Tokat",
        description: "Tokat kasko sigortası çözümleri. Aracınızı geniş kapsamla güvence altına alın.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769607849/Gemini_Generated_Image_3mywan3mywan3myw_yxwhfg.png",
                width: 1200,
                height: 630,
                alt: "Kasko Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "Kasko hangi riskleri kapsar?",
        answer: "Çarpma, çalınma, yangın, doğal afet ve cam hasarı gibi riskler teminat kapsamında olabilir. Poliçenize göre kapsam genişler."
    },
    {
        question: "Primler nasıl belirlenir?",
        answer: "Araç bilgileri, kullanım şekli, sürücü profili ve teminat seçimine göre belirlenir. Size özel seçenekler sunarız."
    },
    {
        question: "İkame araç teminatı var mı?",
        answer: "İkame araç teminatı poliçenize eklenebilir. Süre ve kapsamı birlikte belirleyebiliriz."
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
            breadcrumbTitle="Kasko Sigortası"
            breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769607849/Gemini_Generated_Image_3mywan3mywan3myw_yxwhfg.png"
        >
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h1 className="insurance-details__title-1">Kasko Sigortasında
                                <br/> Güçlü Koruma</h1>
                            <p className="insurance-details__text-1">Aracınızı çarpma, çalınma, doğal afet ve yangın gibi
                                risklere karşı güvence altına alın. Tokat’ta hızlı teklif ve net teminatlarla yanınızdayız.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/kasko.png")} alt="Tokat kasko sigortası - araç hasar, hırsızlık, doğal afet teminatı - Voldem Sigorta" suppressHydrationWarning/>
                            </div>
                            <h2 className="insurance-details__title-2">Kasko Sigortası</h2>
                            <p className="insurance-details__text-2">Kasko, aracınızı geniş kapsamla korur ve oluşabilecek
                                maddi kayıpları en aza indirir. İhtiyacınıza uygun paketleri birlikte belirleyelim.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h2 className="insurance-details__points-title">Öne Çıkan Avantajlar</h2>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Geniş teminat ve esnek poliçe seçenekleri</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hasar süreçlerinde hızlı destek</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Uygun prim ve kişiselleştirilmiş çözümler</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h2>Neden Voldem Sigorta?</h2>
                                    <p>Aracınızın kullanım biçimine göre doğru teminatları belirler, Tokat’ta hızlı iletişim
                                        ve güvenilir hizmet sunarız.</p>
                                </div>
                            </div>
                            <InsuranceFAQ items={faqItems} />
                            <div className="insurance-details__seo-block" style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                                <h2 className="insurance-details__title-2">Tokat Kasko ve Tokat Araç Kasko Fiyatları</h2>
                                <p className="insurance-details__text-2">
                                    Tokat kasko sigortası ve Tokat araç kasko teklifi almak için Voldem Sigorta Tokat ile iletişime geçin. Dar kapsamlı ve geniş kapsamlı kasko seçeneklerini karşılaştırarak bütçenize uygun poliçe sunuyoruz. Çarpma, çalınma, yangın ve doğal afet teminatları dahil. <Link href="/arac-sigortasi">Tokat trafik sigortası</Link> ile birlikte <Link href="/kasko-sigortasi">kasko</Link> paketini değerlendirin. <Link href="/iletisim">Tokat kasko teklifi</Link> için WhatsApp veya telefon ile ulaşın.
                                </p>
                            </div>
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
                                    <li>
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
