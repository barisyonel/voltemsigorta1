import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "Sağlık Sigortası",
    description: "Tokat sağlık sigortası çözümleri. TARSIM ve özel sağlık sigortası ile muayene, tetkik ve tedavi masraflarınızı kontrol altına alın. Voldem Sigorta Tokat.",
    keywords: [
        "tokat sağlık sigortası",
        "sağlık sigortası tokat",
        "tokat TARSIM",
        "tokat özel sağlık sigortası",
        "tokat tamamlayıcı sağlık sigortası",
        "Voldem Sigorta Tokat",
    ],
    openGraph: {
        title: "Sağlık Sigortası | Voldem Sigorta Tokat",
        description: "Tokat sağlık sigortası çözümleri. TARSIM ve özel sağlık sigortası ile kesintisiz koruma.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608114/Gemini_Generated_Image_jplo75jplo75jplo_oymqfx.png",
                width: 1200,
                height: 630,
                alt: "Sağlık Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "Özel ve tamamlayıcı sağlık arasındaki fark nedir?",
        answer: "Özel sağlık sigortası geniş kapsam sunarken, TARSIM SGK anlaşmalı kurumlarda fark ücretlerini karşılar. İhtiyacınıza göre öneride bulunuruz."
    },
    {
        question: "Poliçe kapsamı nasıl belirlenir?",
        answer: "Yaş, sağlık geçmişi ve tercih edilen kapsamlar dikkate alınır. Size en uygun teminatları seçeriz."
    },
    {
        question: "Hangi hastanelerle anlaşmalı?",
        answer: "Anlaşmalı kurum listesi poliçeye göre değişir. Size en uygun ağı birlikte belirleyebiliriz."
    },
    {
        question: "Teklif nasıl alabilirim?",
        answer: "İletişim kanallarımız üzerinden hızlıca teklif alabilirsiniz. WhatsApp hattımız 7/24 aktiftir."
    }
]

export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sağlık Sigortası" breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608114/Gemini_Generated_Image_jplo75jplo75jplo_oymqfx.png">
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h1 className="insurance-details__title-1">Sağlık Sigortasında
                                <br/> Kesintisiz Koruma</h1>
                            <p className="insurance-details__text-1">Voldem Sigorta Tokat, TARSIM ve özel sağlık
                                çözümleriyle ihtiyaçlarınıza uygun kapsamlar sunar. Hızlı provizyon ve güçlü destekle
                                yanınızdayız.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/ozel.png")} alt="Sağlık Sigortası" suppressHydrationWarning/>
                            </div>
                            <h2 className="insurance-details__title-2">Sağlık Sigortası</h2>
                            <p className="insurance-details__text-2">Özel sağlık sigortası ve TARSIM ile muayene,
                                tetkik ve tedavi masraflarınızı kontrol altına alın. Tokat ve çevre illerde uygun prim
                                seçenekleri sunuyoruz.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h2 className="insurance-details__points-title">Öne Çıkan Avantajlar</h2>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Geniş hastane ve anlaşmalı kurum ağı</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hızlı provizyon ve dijital takip</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>İhtiyaca göre esnek teminat yapısı</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h2>Neden Voldem Sigorta?</h2>
                                    <p>Sağlık ihtiyaçlarınızı analiz eder, bütçenize uygun poliçeyi birlikte belirleriz.
                                        Şeffaf fiyatlandırma ve hızlı destek sunarız.</p>
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
                                    <li className="active">
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
