
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import Header1 from "./header/Header1"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, breadcrumbImage, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        // Dynamic import for WOW.js to reduce initial bundle size
        import('wowjs').then((WOW) => {
            window.wow = new WOW.default.WOW({
                live: false
            })
            window.wow.init()
        }).catch((err) => {
            console.warn('WOW.js failed to load:', err)
        })

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener("scroll", handleScroll)
        
        // Cleanup
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {(breadcrumbTitle || breadcrumbImage) && <Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbImage={breadcrumbImage} />}

                {children}

                <Footer1 />
            </div>
            <a
                className="whatsapp-float"
                href="https://wa.me/905433950213"
                aria-label="WhatsApp ile sohbet"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp"></i>
            </a>
            <BackToTop scroll={scroll} />
        </>
    )
}
