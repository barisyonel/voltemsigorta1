
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Detayı">
            {/* Blog Details Start */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="blog-details__left">
                                <div className="blog-details__img-1">
                                    <img src="assets/images/blog/blog-details-img-1.jpg" alt=""/>
                                </div>
                                <div className="blog-details__content">
                                    <h3 className="blog-details__title-1">Güncel ve Güvenilir İçerik</h3>
                                    <ul className="list-unstyled blog-details__meta">
                                        <li><Link href="blog-details"><i className="fas fa-user-circle"></i> Yönetici</Link>
                                        </li>
                                        <li><Link href="blog-details"><i className="fas fa-comments"></i> 2 Yorum</Link>
                                        </li>
                                    </ul>
                                    <p className="blog-details__text-1">Sigorta ihtiyaçları kişiye ve işletmeye göre değişir.
                                        Bu yazıda doğru teminatı seçmenin yollarını, poliçe kapsamını ve fiyatlandırmayı
                                        nasıl değerlendirebileceğinizi anlatıyoruz. Voldem Sigorta Tokat, size özel
                                        çözümler sunar.</p>
                                </div>
                                <div className="blog-details__img-box">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blog-details__img-box-img">
                                                <img src="assets/images/blog/blog-details-img-box-img-1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blog-details__img-box-img">
                                                <img src="assets/images/blog/blog-details-img-box-img-2.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="blog-details__title-2">Güncel Yazılar</h3>
                                <p className="blog-details__text-2">Sigorta dünyasındaki yenilikleri ve ipuçlarını düzenli
                                    olarak paylaşıyoruz. Güncel içerikler için bizi takip edin.</p>
                                <div className="blog-details__quote-box">
                                    <div className="blog-details__quote-icon">
                                        <span className="icon-quote-1"></span>
                                    </div>
                                    <p className="blog-details__quote-text">“Doğru sigorta, doğru zamanda doğru teminatla
                                        güven sağlar.”</p>
                                    <span className="blog-details__quote-sub-title">Voldem Sigorta Tokat</span>
                                </div>
                                <div className="blog-details__tag-and-share">
                                    <div className="blog-details__tag">
                                        <span>Kategori:</span>
                                        <Link href="#">Geliştirme</Link>
                                        <Link href="#">Dijital</Link>
                                        <Link href="#">Teknoloji</Link>
                                    </div>
                                    <div className="blog-details__share">
                                        <Link href="#"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                                <div className="comment-one">
                                    <h3 className="comment-one__title">1 Yorum</h3>
                                    <div className="comment-one__single">
                                        <div className="comment-one__image">
                                            <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="comment-one__content">
                                            <p className="comment-one__date">6 Eylül 2022, 13:28</p>
                                            <h3>Saiful Islam</h3>
                                            <p>Sigorta seçimi sürecinde çok yardımcı oldular, hızlı dönüş sağladılar.</p>
                                            <Link href="blog-details" className="comment-one__btn"><span
                                                    className="icon-reply"></span>Yanıtla</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h3 className="comment-one__title">İletişime Geçelim</h3>
                                    <p>E-posta adresiniz paylaşılmaz. Zorunlu alanlar * ile işaretlidir.</p>
                                    <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Adınız Soyadınız*" name="name"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="comment-form__input-box">
                                                    <input type="email" placeholder="E-posta Adresiniz*" name="email"/>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="comment-form__input-box">
                                                    <input type="text" placeholder="Web sitesi" name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
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
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <h3 className="sidebar__title">Arama</h3>
                                    <form action="#" className="sidebar__search-form">
                                        <input type="search" placeholder="Anahtar kelime..."/>
                                        <button type="submit"><i className="icon-search"></i></button>
                                    </form>
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Son Yazılar</h3>
                                    <ul className="sidebar__post-list list-unstyled">
                                        <li>
                                            <div className="sidebar__post-image">
                                                <img src="assets/images/blog/lp-1-1.jpg" alt=""/>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    <Link href="blog-details">İşletmenizi Güvende
                                                        Tutmanın Yolları</Link>
                                                    <span className="sidebar__post-content-meta"><i className="icon-clock"></i>21
                                                        Nisan 2023</span>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                <img src="assets/images/blog/lp-1-2.jpg" alt=""/>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    <Link href="blog-details">Sigortada Stratejik
                                                        Yaklaşımlar</Link>
                                                    <span className="sidebar__post-content-meta"><i className="icon-clock"></i>21
                                                        Nisan 2023</span>
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar__post-image">
                                                <img src="assets/images/blog/lp-1-3.jpg" alt=""/>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h3>
                                                    <Link href="blog-details">Haftanın Öne
                                                        Çıkan Başlıkları</Link>
                                                    <span className="sidebar__post-content-meta"><i className="icon-clock"></i>21
                                                        Nisan 2023</span>
                                                </h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Kategoriler</h3>
                                    <ul className="insurance-details__catagories-list list-unstyled">
                                        <li>
                                            <Link href="blog-details">Sağlık Sigortası<span className="icon-next"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details">Konut Sigortası<span className="icon-next"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details">Hayat Sigortası <span className="icon-next"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details">Araç Sigortası<span className="icon-next"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details">Yangın Sigortası<span className="icon-next"></span></Link>
                                        </li>
                                        <li>
                                            <Link href="blog-details">İşletme Sigortası<span
                                                    className="icon-next"></span></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Etiketler</h3>
                                    <div className="sidebar__tags-list">
                                        <Link href="#">Bilişim</Link>
                                        <Link href="#">Yazılım</Link>
                                        <Link href="#">Tasarım</Link>
                                        <Link href="#">Hizmet</Link>
                                        <Link href="#">Geliştirme</Link>
                                        <Link href="#">Dijital</Link>
                                        <Link href="#">Siber</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Details End */}

            </Layout>
        </>
    )
}