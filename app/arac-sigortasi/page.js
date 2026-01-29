import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import InsuranceFAQ from "@/components/elements/InsuranceFAQ"

export const metadata = {
    title: "Araç Sigortası",
    description: "Tokat araç sigortası çözümleri. Trafik ve kasko sigortası ile aracınızı güvence altına alın. Hızlı teklif, uygun prim ve güçlü hasar desteği.",
    keywords: [
        "tokat araç sigortası",
        "araç sigortası tokat",
        "tokat trafik sigortası",
        "tokat kasko",
        "araç sigortası fiyatları tokat",
        "Voldem Sigorta Tokat",
    ],
    openGraph: {
        title: "Araç Sigortası | Voldem Sigorta Tokat",
        description: "Tokat araç sigortası çözümleri. Trafik ve kasko ile tam güvence.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769607780/Gemini_Generated_Image_1vl8y01vl8y01vl8_vc8f3p.png",
                width: 1200,
                height: 630,
                alt: "Araç Sigortası Tokat",
            },
        ],
    },
}

const faqItems = [
    {
        question: "Trafik ve kasko arasındaki fark nedir?",
        answer: "Trafik sigortası zorunludur ve karşı tarafın zararlarını karşılar. Kasko ise aracınızın kendi zararlarını güvence altına alır."
    },
    {
        question: "Primler nasıl belirlenir?",
        answer: "Araç bilgileri, kullanım şekli ve teminat tercihleri gibi kriterlere göre belirlenir. Size özel seçenekler sunarız."
    },
    {
        question: "Kasko teminatları neleri kapsar?",
        answer: "Çarpma, çalınma, yangın, doğal afet gibi riskler kapsam dahilindedir. Ek teminatlarla poliçenizi güçlendirebilirsiniz."
    },
    {
        question: "Teklif nasıl alabilirim?",
        answer: "İletişim sayfamızdan bize ulaşarak hızlıca teklif alabilirsiniz. WhatsApp hattımız aktif."
    }
]

export default function Home() {
    return (
        <>
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="Araç Sigortası"
            breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769607780/Gemini_Generated_Image_1vl8y01vl8y01vl8_vc8f3p.png"
        >
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h1 className="insurance-details__title-1">Araç Sigortasında
                                <br/> Tam Güvence</h1>
                            <p className="insurance-details__text-1">Trafik ve kasko ihtiyaçlarınız için Tokat’ta
                                hızlı, şeffaf ve bütçe dostu çözümler sunuyoruz. Hasar süreçlerinde de yanınızdayız.</p>
                            <div className="insurance-details__img-1">
                                <img src={cloudinaryUrl("/assets/images/trafik.png")} alt="Araç Sigortası"/>
                            </div>
                            <h2 className="insurance-details__title-2">Araç Sigortası</h2>
                            <p className="insurance-details__text-2">Trafik sigortası yasal zorunluluğunuzu karşılarken,
                                kasko sigortası aracınızı geniş kapsamda güvence altına alır. En uygun poliçeyi birlikte
                                belirleyelim.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h2 className="insurance-details__points-title">Öne Çıkan Avantajlar</h2>
                                    <ul className="insurance-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Uygun prim, geniş teminat seçenekleri</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hızlı teklif ve poliçe düzenleme</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check-mark-1"></span>
                                            </div>
                                            <p>Hasar süreçlerinde güçlü destek</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="insurance-details__text-box">
                                    <h2>Neden Voldem Sigorta?</h2>
                                    <p>Araç kullanımınıza ve bütçenize uygun trafik/kasko çözümleri sunarız. Tokat’ta
                                        hızlı iletişim ve güvenilir hizmet sağlarız.</p>
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
                                    <li className="active">
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