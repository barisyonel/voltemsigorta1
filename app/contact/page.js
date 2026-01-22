
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="İletişim">
        {/* Contact Page Start */}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__left">
                            <h3 className="contact-page__title">Bize Ulaşın</h3>
                            <p className="contact-page__text">Voldem Sigorta Tokat ile ihtiyaçlarınıza uygun sigorta
                                çözümleri için iletişime geçin. Size hızlıca dönüş sağlayalım.</p>
                            <div className="contact-page__contact-info">
                                <h4 className="contact-page__contact-info-title">İletişim Bilgileri</h4>
                                <ul className="contact-page__contact-list list-unstyled">
                                    <li>
                                        <h5>Adres</h5>
                                        <p>Tokat Merkez, Gaziosmanpaşa Bulvarı No:10</p>
                                    </li>
                                    <li>
                                        <h5>Telefon</h5>
                                        <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </li>
                                    <li>
                                        <h5>WhatsApp</h5>
                                        <p><Link href="https://wa.me/905433950213">+90 543 395 02 13</Link></p>
                                    </li>
                                    <li>
                                        <h5>E-posta</h5>
                                        <p><Link href="mailto:info@tokatsigorta.com">info@tokatsigorta.com</Link></p>
                                    </li>
                                </ul>
                                <Link href="#" className="contact-page__link">www.tokatsigorta.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="contact-page__right">
                            <div className="contact-page__img">
                                <img src="assets/images/resources/contact-page-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-page__bottom">
                    <div className="comment-form">
                        <h3 className="comment-one__title">İletişime Geçelim</h3>
                        <p>E-posta adresiniz paylaşılmaz. Zorunlu alanlar * ile işaretlidir.</p>
                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                        <input type="text" placeholder="Adınız Soyadınız*" name="name"/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="comment-form__input-box">
                                        <input type="email" placeholder="E-posta Adresiniz*" name="email"/>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="comment-form__input-box">
                                        <input type="text" placeholder="Web sitesi" name="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12">
                                    <div className="comment-form__input-box text-message-box">
                                        <textarea name="message" placeholder="Mesajınız*"></textarea>
                                    </div>
                                    <div className="comment-form__btn-box">
                                        <button type="submit" className="thm-btn comment-form__btn">Mesaj
                                            Gönder</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Page End */} 

            </Layout>
        </>
    )
}