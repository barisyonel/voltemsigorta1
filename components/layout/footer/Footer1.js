import Link from "next/link"
export default function Footer1() {
    return (
        <>
            <footer className="site-footer">
            <div className="site-footer__shape-1 float-bob-x">
                <img src="assets/images/shapes/site-footer-shape-1.png" alt=""/>
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link href="/"><img src="/logo.jpeg"
                                                alt=""/></Link>
                                    </div>
                                    <p className="footer-widget__about-text">Tokat Merkez, Türkiye
                                        <br/> Gaziosmanpaşa Bulvarı No:10</p>
                                    <div className="footer-widget__emergency-call">
                                        <Link href="tel:+905433950213">+90 543 395 02 13</Link>
                                    </div>
                                    <div className="footer-widget__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-instagram-1"></span></Link>
                                        <Link href="#"><span className="icon-tik-tok"></span></Link>
                                        <Link href="#"><span className="icon-youtube"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Menü</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="/">Ana Sayfa</Link>
                                        </li>
                                        <li>
                                            <Link href="hakkimizda">Hakkımızda</Link>
                                        </li>
                                        <li>
                                            <Link href="sigorta">Hizmetler</Link>
                                        </li>
                                        <li>
                                            <Link href="iletisim">İletişim</Link>
                                        </li>
                                        <li>
                                            <Link href="blog">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__quick-link">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Hızlı Linkler</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="hakkimizda">Yardım</Link>
                                        </li>
                                        <li>
                                            <Link href="iletisim">Destek</Link>
                                        </li>
                                        <li>
                                            <Link href="musteri-yorumlari">Müşteriler</Link>
                                        </li>
                                        <li>
                                            <Link href="projeler">Projeler</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__quick-link">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Yasal</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="kvkk">KVKK Aydınlatma Metni</Link>
                                        </li>
                                        <li>
                                            <Link href="gizlilik-politikasi">Gizlilik Politikası</Link>
                                        </li>
                                        <li>
                                            <Link href="cerez-politikasi">Çerez Politikası</Link>
                                        </li>
                                        <li>
                                            <Link href="kullanim-sartlari">Kullanım Şartları</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">Copyright © 2024 Voldem Sigorta. Tüm hakları saklıdır.</p>
                        <p className="site-footer__bottom-text">
                            Media: <a href="https://bariscanyonel.com" target="_blank" rel="noreferrer">Barış Can Yönel</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
