'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Araç Sigortası">
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h3 className="insurance-details__title-1">Araç Sigortasında
                                <br/> Tam Güvence</h3>
                            <p className="insurance-details__text-1">Trafik ve kasko ihtiyaçlarınız için Tokat’ta
                                hızlı, şeffaf ve bütçe dostu çözümler sunuyoruz. Hasar süreçlerinde de yanınızdayız.</p>
                            <div className="insurance-details__img-1">
                                <img src="/assets/images/trafik.png" alt="Araç Sigortası"/>
                            </div>
                            <h3 className="insurance-details__title-2">Araç Sigortası</h3>
                            <p className="insurance-details__text-2">Trafik sigortası yasal zorunluluğunuzu karşılarken,
                                kasko sigortası aracınızı geniş kapsamda güvence altına alır. En uygun poliçeyi birlikte
                                belirleyelim.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h3 className="insurance-details__points-title">Öne Çıkan Avantajlar</h3>
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
                                    <h3>Neden Voldem Sigorta?</h3>
                                    <p>Araç kullanımınıza ve bütçenize uygun trafik/kasko çözümleri sunarız. Tokat’ta
                                        hızlı iletişim ve güvenilir hizmet sağlarız.</p>
                                </div>
                            </div>
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>Trafik ve kasko arasındaki fark nedir?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Trafik sigortası zorunludur ve karşı tarafın zararlarını karşılar.
                                                    Kasko ise aracınızın kendi zararlarını güvence altına alır.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Primler nasıl belirlenir?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Araç bilgileri, kullanım şekli ve teminat tercihleri gibi kriterlere
                                                    göre belirlenir. Size özel seçenekler sunarız.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Kasko teminatları neleri kapsar?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Çarpma, çalınma, yangın, doğal afet gibi riskler kapsam dahilindedir.
                                                    Ek teminatlarla poliçenizi güçlendirebilirsiniz.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Teklif nasıl alabilirim?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>İletişim sayfamızdan bize ulaşarak hızlıca teklif alabilirsiniz.
                                                    WhatsApp hattımız aktif.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="insurance-details__right">
                            <div className="insurance-details__catagories">
                                <h3 className="insurance-details__catagories-title">Kategoriler</h3>
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
                                        <Link href="aile-sigortasi">DASK Sigortası<span
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
                                    style={{ backgroundImage: 'url(assets/images/backgrounds/insurance-details-need-help-bg.jpg)' }} >
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