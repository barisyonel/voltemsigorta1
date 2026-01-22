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
                        <a href="index" aria-label="logo image"><img src="assets/images/resources/logo-2.png" width="150"
                                alt="" /></a>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li><Link href="/">Ana Sayfa</Link></li>
                                <li><Link href="/about/">Hakkımızda</Link></li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Sigorta</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="insurance">Sigorta</Link></li>
                                        <li><Link href="life-insurance">Hayat Sigortası</Link></li>
                                        <li><Link href="health-insurance">Sağlık Sigortası</Link></li>
                                        <li><Link href="car-insurance">Araç Sigortası</Link></li>
                                        <li><Link href="home-insurance">Konut Sigortası</Link></li>
                                        <li><Link href="family-insurance">Aile Sigortası</Link></li>
                                        <li><Link href="business-insurance">İşletme Sigortası</Link></li>
                                    </ul>

                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="blog-sidebar">Blog Kenar Çubuklu</Link></li>
                                        <li><Link href="blog-details">Blog Detayı</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>

                                <li><Link href="/contact">İletişim</Link></li>
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
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
