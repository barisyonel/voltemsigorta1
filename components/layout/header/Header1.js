import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { cloudinaryUrl } from "@/lib/cloudinary"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            
        <header className={`main-header transparent-header ${scroll ? "fixed-header" : ""}`}>
            <div className="main-header__top">
                <div className="main-header__top-inner">
                    <ul className="list-unstyled main-header__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-maps-and-flags"></i>
                            </div>
                            <div className="text">
                                <p>Tokat Merkez, Türkiye</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-envelope"></i>
                            </div>
                            <div className="text">
                                <p><Link href="mailto:info@voldemsigorta.com">info@voldemsigorta.com</Link></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-telephone"></i>
                            </div>
                            <div className="text">
                                <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                            </div>
                        </li>
                    </ul>
                    <div className="main-header__top-social-box">
                        <p className="main-header__top-social-title">Bizi takip edin:</p>
                        <div className="main-header__top-social">
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link href="/"><img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769554223/logo_cg5jek.png" alt="Voldem Sigorta Tokat logo"/></Link>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                <Menu />
                            </div>
                        </div>
                        <div className="main-menu__right">
                            <div className="main-menu__btn-box">
                                <Link href="/iletisim" className="main-menu__btn thm-btn">Teklif Al</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} />

        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769554223/logo_cg5jek.png" alt="Voldem Sigorta Tokat logo"/></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu />
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__btn-box">
                                    <Link href="/iletisim" className="main-menu__btn thm-btn">Teklif Al</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}
