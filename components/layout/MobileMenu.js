'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <a href="/" aria-label="logo image"><img src="/logo.jpeg"
                                style={{ maxWidth: "180px", height: "auto", display: "block", margin: "0 auto" }}
                                alt="" /></a>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/">Ana Sayfa</Link></li>
                                <li><Link href="/hakkimizda">Hakkımızda</Link></li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Ürünlerimiz</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="arac-sigortasi">Trafik Sigortası</Link></li>
                                        <li><Link href="arac-sigortasi">Kasko</Link></li>
                                        <li><Link href="saglik-sigortasi">Tamamlayıcı Sağlık Sigortası</Link></li>
                                        <li><Link href="saglik-sigortasi">Özel Sağlık Sigortası</Link></li>
                                        <li><Link href="saglik-sigortasi">Seyahat Sağlık Sigortası</Link></li>
                                        <li><Link href="konut-sigortasi">DASK</Link></li>
                                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                                        <li><Link href="isyeri-sigortasi">İşyeri Sigortası</Link></li>
                                        <li><Link href="hayat-sigortasi">Ferdi Kaza Sigortası</Link></li>
                                        <li><Link href="isyeri-sigortasi">Nakliyat Sigortası</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Aracınız</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="arac-sigortasi">Trafik Sigortası</Link></li>
                                        <li><Link href="arac-sigortasi">Kasko</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Sağlığınız</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="saglik-sigortasi">Tamamlayıcı Sağlık Sigortası</Link></li>
                                        <li><Link href="saglik-sigortasi">Özel Sağlık Sigortası</Link></li>
                                        <li><Link href="saglik-sigortasi">Seyahat Sağlık Sigortası</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#">Konutunuz</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li><Link href="konut-sigortasi">DASK</Link></li>
                                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                                        <li><Link href="isyeri-sigortasi">İşyeri Sigortası</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}><Link href="/#">Diğer</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <li><Link href="hayat-sigortasi">Ferdi Kaza Sigortası</Link></li>
                                        <li><Link href="isyeri-sigortasi">Nakliyat Sigortası</Link></li>
                                    </ul>
                                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li><Link href="/iletisim">İletişim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:info@tokatsigorta.com">info@tokatsigorta.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:+905433950213">+90 543 395 02 13</a>
                        </li>
                        <li>
                            <i className="fab fa-whatsapp"></i>
                            <a href="https://wa.me/905433950213">WhatsApp: +90 543 395 02 13</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-facebook-square"></a>
                            <a href="#" className="fab fa-pinterest-p"></a>
                            <a href="#" className="fab fa-instagram"></a>
                        </div>
                    </div>
                    <div className="mobile-nav__media" style={{ marginTop: "16px" }}>
                        <a href="https://bariscanyonel.com" target="_blank" rel="noreferrer" style={{ color: "#ff7a00", fontWeight: 600 }}>
                            Media: Barış Can Yönel
                        </a>
                    </div>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
