'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cloudinaryUrl } from "@/lib/cloudinary"

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar, isMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const pathname = usePathname()

  useEffect(() => {
    if (isMobileMenu) handleMobileMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

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
    const handleWrapperClick = (e) => {
        if (!e.target.closest('.mobile-nav__content')) {
            handleMobileMenu()
        }
    }

    return (
        <>
            <div className="mobile-nav__wrapper" onClick={handleWrapperClick}>
                <div className="mobile-nav__overlay mobile-nav__toggler"></div>
                <div className="mobile-nav__content" onClick={(e) => e.stopPropagation()}>
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769554223/logo_cg5jek.png" width="150"
                                alt="Voldem Sigorta Tokat logo" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className="current"><Link href="/">Ana Sayfa</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Kurumsal</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="hakkimizda">Hakkımızda</Link></li>
                                        <li><Link href="ekibimiz">Ekibimiz</Link></li>
                                        <li><Link href="sikca-sorulan-sorular">SSS</Link></li>
                                        <li><Link href="iletisim">İletişim</Link></li>
                                        <li><Link href="blog">Blog</Link></li>
                                    </ul>
                                    <div
                                        className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"}
                                        onClick={() => handleToggle(2)}
                                    >
                                        <span className="fa fa-chevron-down" />
                                    </div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Araç</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="arac-sigortasi">Trafik Sigortası</Link></li>
                                        <li><Link href="kasko-sigortasi">Kasko Sigortası</Link></li>
                                    </ul>
                                    <div
                                        className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"}
                                        onClick={() => handleToggle(3)}
                                    >
                                        <span className="fa fa-chevron-down" />
                                    </div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Konut</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="dask-sigortasi">DASK Sigortası</Link></li>
                                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                                        <li><Link href="isyeri-sigortasi">İşyeri Sigortası</Link></li>
                                    </ul>
                                    <div
                                        className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"}
                                        onClick={() => handleToggle(4)}
                                    >
                                        <span className="fa fa-chevron-down" />
                                    </div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#">Sigorta</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="hayat-sigortasi">Hayat Sigortası</Link></li>
                                        <li><Link href="saglik-sigortasi">Sağlık Sigortası</Link></li>
                                        <li><Link href="arac-sigortasi">Araç Sigortası</Link></li>
                                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                                        <li><Link href="dask-sigortasi">DASK Sigortası</Link></li>
                                        <li><Link href="/tarsim">TARSİM (Tarım Sigortası)</Link></li>
                                        <li><Link href="isyeri-sigortasi">İşletme Sigortası</Link></li>
                                    </ul>
                                    <div
                                        className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"}
                                        onClick={() => handleToggle(5)}
                                    >
                                        <span className="fa fa-chevron-down" />
                                    </div>
                                </li>
                                <li className="main-menu__item--tarsim"><Link href="/tarsim">TARSIM</Link></li>
                                <li><Link href="iletisim">İletişim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:info@voldemsigorta.com">info@voldemsigorta.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <a href="tel:+905433950213">+90 543 395 02 13</a>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <a href="https://www.instagram.com/voldemsigorta" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" aria-label="Instagram"></a>
                        </div>
                    </div>
                    <div className="mobile-nav__footer">
                        <span>Media: </span>
                        <a href="https://bariscanyonel.com" target="_blank" rel="noopener noreferrer">Barış Can Yönel</a>
                    </div>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
