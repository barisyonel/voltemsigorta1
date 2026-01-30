import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
export default function Footer1() {
    return (
        <>
            <footer className="site-footer footer-modern">
            <div className="site-footer__shape-1 float-bob-x"></div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="site-footer__top-inner">
                        <div className="row footer-modern__grid">
                            <div className="col-xl-4 col-lg-6 col-md-6 footer-brand-col wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about footer-brand-card">
                                    <div className="footer-widget__logo">
                                        <Link href="/"><img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769554223/logo_cg5jek.png"
                                                alt="Voldem Sigorta Tokat logo" style={{ width: "140px", height: "auto" }} /></Link>
                                    </div>
                                    <p className="footer-widget__brand-title">Voldem Sigorta Tokat</p>
                                    <p className="footer-widget__about-text">Tokat Merkez, Türkiye
                                        <br/> Gop Bulvarı No:192
                                        <br/> Tüfekçiler İş Hanı Kat:3 D:25</p>
                                    <div className="footer-widget__emergency-call">
                                        <Link href="tel:+905433950213">+90 543 395 02 13</Link>
                                    </div>
                                    <div className="footer-widget__emergency-call">
                                        <Link href="mailto:info@voldemsigorta.com">info@voldemsigorta.com</Link>
                                    </div>
                                    <div className="footer-widget__cta">
                                        <Link href="https://wa.me/905433950213" className="thm-btn footer-cta-btn">
                                            WhatsApp’tan Yazın
                                        </Link>
                                    </div>
                                    <div className="footer-widget__social">
                                        <Link href="https://www.instagram.com/voldemsigorta" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="icon-instagram-1"></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Yasal</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="/kvkk">KVKK Aydınlatma</Link>
                                        </li>
                                        <li>
                                            <Link href="/gizlilik">Gizlilik Politikası</Link>
                                        </li>
                                        <li>
                                            <Link href="/cerez-politikasi">Çerez Politikası</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Menü</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="/">Ana Sayfa</Link>
                                        </li>
                                        <li>
                                            <Link href="/hakkimizda">Hakkımızda</Link>
                                        </li>
                                        <li>
                                            <Link href="/sigorta">Hizmetler</Link>
                                        </li>
                                        <li>
                                            <Link href="/iletisim">İletişim</Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__navigation">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Sigortalar</h3>
                                    </div>
                                    <ul className="footer-widget__navigation-list list-unstyled">
                                        <li>
                                            <Link href="/sigorta">Sigortalar</Link>
                                        </li>
                                        <li>
                                            <Link href="/hayat-sigortasi">Hayat Sigortası</Link>
                                        </li>
                                        <li>
                                            <Link href="/saglik-sigortasi">Sağlık Sigortası</Link>
                                        </li>
                                        <li>
                                            <Link href="/arac-sigortasi">Araç Sigortası</Link>
                                        </li>
                                        <li>
                                            <Link href="/konut-sigortasi">Konut Sigortası</Link>
                                        </li>
                                        <li>
                                                        <Link href="/dask-sigortasi">DASK Sigortası</Link>
                                        </li>
                                        <li>
                                            <Link href="/isyeri-sigortasi">İşletme Sigortası</Link>
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
                        <p className="site-footer__bottom-text">© 2025 Voldem Sigorta Tokat. Kurumsal Sigorta Danışmanlığı.</p>
                        <p className="site-footer__bottom-text">
                            Media: <a href="https://bariscanyonel.com" target="_blank" rel="noopener noreferrer">Barış Can Yönel</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
