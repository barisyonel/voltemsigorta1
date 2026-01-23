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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="İş Yeri Sigortası">
        {/* Insurance Details Start */}
        <section className="insurance-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="insurance-details__left">
                            <h3 className="insurance-details__title-1">İş Yeri Sigortasında
                                <br/> Güçlü Koruma</h3>
                            <p className="insurance-details__text-1">İş yerinizi yangın, hırsızlık, doğal afet ve
                                sorumluluk risklerine karşı koruyun. Tokat’ta işletmenize özel poliçeler sunuyoruz.</p>
                            <div className="insurance-details__img-1">
                                <img src="/assets/images/yangın.png" alt="İş Yeri Sigortası"/>
                            </div>
                            <h3 className="insurance-details__title-2">İş Yeri Sigortası</h3>
                            <p className="insurance-details__text-2">İş yeri sigortası; bina, demirbaş ve stokları
                                güvence altına alır. Faaliyet alanınıza göre kapsam ve teminatları birlikte planlarız.</p>
                            <div className="insurance-details__points-and-text-box">
                                <div className="insurance-details__points-box">
                                    <h3 className="insurance-details__points-title">Öne Çıkan Avantajlar</h3>
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
                                    <h3>Neden Voldem Sigorta?</h3>
                                    <p>İşletmenizin ihtiyaçlarını analiz eder, riskleri minimize eden çözümler üretiriz.
                                        Tokat’ta hızlı ve güvenilir hizmet sağlarız.</p>
                                </div>
                            </div>
                            <div className="insurance-details__faq">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>İş yeri sigortası neleri kapsar?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Bina, demirbaş, stok, yangın ve hırsızlık gibi riskleri kapsar.
                                                    İhtiyaca göre ek teminatlar eklenebilir.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Primler nasıl belirlenir?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>İşletme türü, büyüklük ve teminat kapsamına göre belirlenir. Size özel
                                                    seçenekler sunarız.</p>
                                            </div>{/*  /.inner  */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>İş durması teminatı var mı?</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Talebe göre iş durması teminatı eklenebilir. Detayları birlikte
                                                    planlarız.</p>
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
                                                    WhatsApp hattımız aktiftir.</p>
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
                                    <li>
                                        <Link href="arac-sigortasi">Araç Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="konut-sigortasi">Konut Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="aile-sigortasi">DASK Sigortası<span
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