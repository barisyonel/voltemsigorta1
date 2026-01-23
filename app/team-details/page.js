
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Ekip Detayı">
        {/* Team Details Start */}
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="team-details__top-bg">
                        <div className="team-details__top-shape-1 float-bob">
                            <img src="assets/images/shapes/team-details-top-shape-1.png" alt=""/>
                        </div>
                        <div className="team-details__top-shape-2 float-bob-y">
                            <img src="assets/images/shapes/team-details-top-shape-2.png" alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__top-img-box">
                                <div className="team-details__top-img">
                                    <img src="assets/images/team/team-details-top-img-1.jpg" alt=""/>
                                </div>
                                <span>Voldem Sigorta Tokat</span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__top-right">
                                <h3 className="team-details__top-right-title">Robert Broom</h3>
                                <p className="team-details__top-right-sub-title">Sigorta Danışmanı</p>
                                <ul className="team-details__top-points list-unstyled">
                                    <li>
                                        <span>Departman:</span>
                                        <p>Müşteri İlişkileri</p>
                                    </li>
                                    <li>
                                        <span>Deneyim:</span>
                                        <p>15 Yıl</p>
                                    </li>
                                    <li>
                                        <span>E-posta:</span>
                                        <p><Link href="mailto:info@tokatsigorta.com">info@tokatsigorta.com</Link></p>
                                    </li>
                                    <li>
                                        <span>Telefon:</span>
                                        <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </li>
                                </ul>
                                <div className="team-details__social">
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#" className="team-details__social-color-2"><span
                                            className="icon-twitter"></span></Link>
                                    <Link href="#" className="team-details__social-color-3"><span
                                            className="icon-instagram"></span></Link>
                                    <Link href="#" className="team-details__social-color-4"><span
                                            className="icon-linkedin"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-details__bottom">
                    <h3 className="team-details__title-1">Alen Walker Biyografisi</h3>
                    <p className="team-details__text-1">Müşteri ihtiyaçlarını doğru analiz ederek en uygun teminatları
                        sunan, süreç boyunca şeffaf ve hızlı hizmet anlayışıyla çalışır.</p>
                    <p className="team-details__text-2">Voldem Sigorta Tokat ekibinde bireysel ve kurumsal çözümlerle
                        müşteri memnuniyetini önceleyen bir yaklaşıma sahiptir.</p>
                    <div className="team-details__progress-and-company">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="team-details__progress-box">
                                    <ul className="team-details__progress-list list-unstyled">
                                        <li>
                                            <h4 className="team-details__progress-title">Poliçe Danışmanlığı</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="90%" style={{ width: '90%' }}>
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4 className="team-details__progress-title">Kurumsal Çözümler</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="50%" style={{ width: '50%' }}>
                                                    <div className="count-text">50%</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h4 className="team-details__progress-title">Müşteri İlişkileri</h4>
                                            <div className="bar">
                                                <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                    <div className="count-text">80%</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="team-details__company-box">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <ul className="team-details__company-list list-unstyled">
                                                <li>
                                                    <h3 className="team-details__company-title">Azent Company</h3>
                                                    <p className="team-details__company-sub-title">Sigorta Danışmanı</p>
                                                </li>
                                                <li>
                                                    <h3 className="team-details__company-title">Moove Ux</h3>
                                                    <p className="team-details__company-sub-title">Sigorta Danışmanı</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-xl-6">
                                            <ul className="team-details__company-list list-unstyled">
                                                <li>
                                                    <h3 className="team-details__company-title">Amazon Company</h3>
                                                    <p className="team-details__company-sub-title">Sigorta Danışmanı</p>
                                                </li>
                                                <li>
                                                    <h3 className="team-details__company-title">thememx Company</h3>
                                                    <p className="team-details__company-sub-title">Sigorta Danışmanı</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="team-details__title-2">Öne Çıkan Yetkinlikler</h3>
                    <p className="team-details__text-3">İhtiyaç analizi, doğru teminat seçimi ve hızlı süreç yönetimi ile
                        müşterilere güvenilir çözümler sunar.</p>
                    <div className="team-details__contact-box">
                        <h3 className="team-details__contact-title">İletişime Geçelim</h3>
                        <p className="team-details__contact-text">E-posta adresiniz paylaşılmaz. Zorunlu alanlar * ile
                            işaretlidir.</p>
                        <form action="assets/inc/sendemail.php" className="team-details__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="team-details__input-box">
                                        <input type="text" placeholder="Adınız Soyadınız*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="team-details__input-box">
                                        <input type="email" placeholder="E-posta Adresiniz*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="team-details__input-box">
                                        <input type="text" placeholder="Web sitesi" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="team-details__input-box text-message-box">
                                        <textarea name="message" placeholder="Mesajınız*"></textarea>
                                    </div>
                                    <div className="contact-two__btn-box">
                                        <button type="submit" className="thm-btn team-details__btn">MESAJ
                                            GÖNDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Team Details End */}

            </Layout>
        </>
    )
}