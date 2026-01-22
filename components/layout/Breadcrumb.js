import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, backgroundImage, hideText }) {
    const backgroundUrl = backgroundImage || "/assets/images/backgrounds/page-header-bg.jpg"
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div className="page-header__bg">
                    <img src={backgroundUrl} alt="" />
                </div>
                <div className="container">
                    {!hideText && (
                        <div className="page-header__inner">
                            <h2>{breadcrumbTitle}</h2>
                            <div className="thm-breadcrumb__box">
                                <ul className="thm-breadcrumb list-unstyled">
                                    <li><Link href="/">Ana Sayfa</Link></li>
                                    <li><span> - </span></li>
                                    <li>{breadcrumbTitle}</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* Page Header End */}

        </>
    )
}
