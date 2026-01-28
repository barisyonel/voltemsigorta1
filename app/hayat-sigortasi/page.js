import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "Hayat Sigortası",
    description: "Tokat hayat sigortası çözümleri. Sevdiklerinizi ve geleceğinizi güvence altına alın. Esnek prim ve teminat seçenekleri ile Voldem Sigorta Tokat.",
    keywords: [
        "tokat hayat sigortası",
        "hayat sigortası tokat",
        "tokat en uygun hayat sigortası",
        "hayat sigortası fiyatları tokat",
        "Voldem Sigorta Tokat",
        "tokat sigorta acentesi",
    ],
    openGraph: {
        title: "Hayat Sigortası | Voldem Sigorta Tokat",
        description: "Tokat hayat sigortası çözümleri. Sevdiklerinizi ve geleceğinizi güvence altına alın.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608021/Gemini_Generated_Image_7qwvqa7qwvqa7qwv_ulwkuz.png",
                width: 1200,
                height: 630,
                alt: "Hayat Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "Hayat sigortası kimler için uygundur?",
        answer: "Geleceğini güvence altına almak isteyen herkes için uygundur. Kişisel ihtiyaç ve bütçeye göre poliçe seçenekleri sunuyoruz."
    },
    {
        question: "Primler nasıl belirlenir?",
        answer: "Yaş, sağlık durumu ve teminat kapsamı gibi kriterlere göre belirlenir. Size uygun seçenekleri birlikte netleştiririz."
    },
    {
        question: "Poliçe kapsamı neleri içerir?",
        answer: "Vefat, maluliyet ve kritik hastalık teminatları gibi temel kapsamlar sunulur. İhtiyaca göre ek teminatlar eklenebilir."
    },
    {
        question: "Teklif nasıl alabilirim?",
        answer: "İletişim sayfamızdan bize ulaşarak hızlıca teklif alabilirsiniz. WhatsApp hattımız da aktiftir."
    }
]

export default function Home() {
    return (
        <>
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="Hayat Sigortası"
            breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608021/Gemini_Generated_Image_7qwvqa7qwvqa7qwv_ulwkuz.png"
        >
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h3 className="insurance-details__title-1">Hayat Sigortasında
                                <br/> Güvenli Gelecek</h3>
                            <p className="insurance-details__text-1">Voldem Sigorta Tokat olarak hayat sigortasında
                                sevdiklerinizi ve geleceğinizi güvence altına alıyoruz. İhtiyacınıza uygun, şeffaf ve
                                hızlı çözümler sunuyoruz.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/hayat.png")} alt="Hayat Sigortası"/>
                            </div>
                            <h3 className="insurance-details__title-2">Hayat Sigortası</h3>
                            <p className="insurance-details__text-2">Hayat sigortası, beklenmedik durumlarda ailenizin
                                finansal güvencesini sağlar. Tokat ve çevre illerde size özel prim ve teminat seçenekleri
                                ile yanınızdayız.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h3 className="insurance-details__points-title">Öne Çıkan Avantajlar</h3>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Esnek prim ve teminat seçenekleri</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hızlı teklif ve poliçe süreci</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Vefat, maluliyet ve hastalık teminatları</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h3>Neden Voldem Sigorta?</h3>
                                    <p>İhtiyacınızı doğru analiz eder, aileniz için en uygun hayat sigortasını
                                        planlarız. Şeffaf fiyatlandırma ve güçlü müşteri desteği sunarız.</p>
                                </div>
                            </div>
                            <InsuranceFAQ items={faqItems} />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="insurance-details__right">
                            <div className="insurance-details__catagories">
                                <h3 className="insurance-details__catagories-title">Kategoriler</h3>
                                <ul className="insurance-details__catagories-list list-unstyled">
                                    <li className="active">
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
                                    <li>
                                        <Link href="isyeri-sigortasi">İş Yeri Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="insurance-details__need-help">
                                <div className="insurance-details__need-help-bg"
                                    style={{ backgroundImage: `url(${cloudinaryUrl("assets/images/backgrounds/insurance-details-need-help-bg.jpg")})` }} >
                                </div>
                                <h3 className="insurance-details__need-help-title">Her Türlü
                                    <br/> Sigorta
                                    <br/> İçin</h3>
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