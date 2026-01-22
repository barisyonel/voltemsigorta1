import Menu from "../Menu"
import Link from "next/link"
import MobileMenu from "../MobileMenu"
export default function Header5({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="main-header-four main-header-five">
                <div className="main-header-four__top">
                    <div className="container">
                        <div className="main-header-four__top-inner">
                            <div className="main-header-four__top-left">
                                <div className="main-header-four__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-5.png" alt=""/></Link>
                                </div>
                                <div className="main-header-four__search-box">
                                    <form action="#" className="main-header-four__search-form">
                                        <input type="search" placeholder="Search...."/>
                                        <button type="submit"><i className="icon-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <ul className="list-unstyled main-header-four__contact-list">
                                <li>
                                    <div className="text">
                                        <span>email</span>
                                        <p><Link href="mailto:info@tokatsigorta.com">info@tokatsigorta.com</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text">
                                        <span>PHONE</span>
                                        <p><Link href="tel:+905433950213">+90 543 395 02 13 </Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-four main-menu-five">
                    <div className="main-menu-four__wrapper">
                        <div className="container">
                            <div className="main-menu-four__wrapper-inner">
                                <div className="main-menu-four__left">
                                    <div className="main-menu-four__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>
                                </div>
                                <div className="main-menu-four__right">
                                    <div className="main-menu-four__btn-box">
                                        <Link href="iletisim" className="main-menu-five__btn thm-btn">GET A QUOTE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} />

            <div className={`stricky-header stricked-menu main-menu main-menu-four main-menu-five ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu main-menu-four main-menu-five">
                        <div className="main-menu-four__wrapper">
                            <div className="container">
                                <div className="main-menu-four__wrapper-inner">
                                    <div className="main-menu-four__left">
                                        <div className="main-menu-four__main-menu-box">
                                            <Link href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></Link>
                                            <Menu />
                                        </div>
                                    </div>
                                    <div className="main-menu-four__right">
                                        <div className="main-menu-four__btn-box">
                                            <Link href="iletisim" className="main-menu-five__btn thm-btn">GET A QUOTE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>{/*  /.sticky-header__content  */}
            </div>{/*  /.stricky-header  */}

        </>
    )
}
