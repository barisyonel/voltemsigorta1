'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Faq() {
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="S.S.S.">
                <div>
                    {/* FAQ Page Start */}
                    <section className="faq-page">
                        <div className="container">
                            <div className="faq-page__text-box">
                                <div className="faq-page__text-box-shape-1">
                                    <img src="assets/images/shapes/faq-page-text-box-shape-1.png" alt=""/>
                                </div>
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">Soru ve Cevaplar</p>
                                    </div>
                                    <h2 className="section-title__title">Sıkça Sorulan Sorular
                                        <br/> ve Yanıtlar</h2>
                                </div>
                            </div>
                            <div className="faq-page__bottom">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="faq-page__bottom-left">
                                            <div className="faq-page__search">
                                                <form action="#" className="faq-page__search-form">
                                                    <input type="search" placeholder="Ara..." />
                                                    <button type="submit"><i className="icon-search-1"></i></button>
                                                </form>
                                            </div>
                                            <div className="faq-page__bottom-left-img-box">
                                                <div className="faq-page__bottom-left-img">
                                                    <img src="assets/images/resources/faq-page-bottom-left-img-1.jpg" alt=""/>
                                                </div>
                                                <h3 className="faq-page__bottom-left-img-text">Voldem Sigorta Tokat
                                                    <br/> Sigorta Acentesi</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="faq-page__bottom-right">
                                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                            <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                    <div className="accrodion-title">
                                                        <h4>Başvurumda değişiklik yapabilir miyim?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Evet. Bilgilerinizi güncellemek için bizimle iletişime geçmeniz
                                                                yeterlidir.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>Ücretsiz teklif alabilir miyim?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Elbette. İhtiyacınıza uygun ücretsiz teklif sunuyoruz.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>Sigorta poliçesi seçerken nelere dikkat etmeliyim?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Teminat kapsamı, limitler ve prim tutarını birlikte değerlendiririz.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                    <div className="accrodion-title">
                                                        <h4>Poliçemi nasıl yenilerim?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Yenileme zamanı geldiğinde sizi bilgilendirir ve süreci hızlıca
                                                                tamamlarız.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                                    <div className="accrodion-title">
                                                        <h4>Hasar süreçlerinde destek sağlıyor musunuz?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Evet. Hasar bildiriminden sonuca kadar yanınızdayız.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* FAQ Page End */}


                    {/* CTA One Start  */}
                    <section className="cta-one cta-five">
                        <div className="container">
                            <div className="cta-one__inner">
                                <div className="cta-one__bg"
                                    style={{ backgroundImage: 'url(assets/images/shapes/cta-three-bg-shape-2.png)' }} >
                                </div>
                                <div className="cta-one__title-box">
                                    <h3>Hemen <span>Teklif</span> Alın</h3>
                                    <p>Risk almadan deneyin - iptal ücreti yok</p>
                                </div>
                                <div className="cta-one__btn-box">
                                    <Link href="contact" className="cta-one__btn thm-btn">HEMEN ÜCRETSİZ TEKLİF AL</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* CTA One End  */}
                </div>

            </Layout>
        </>
    )
}