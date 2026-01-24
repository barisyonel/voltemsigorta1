import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImage }) {
    const headerImage = breadcrumbImage || "/1045x820.png"
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div
                    className="page-header__bg"
                    style={{
                        backgroundImage: `url(${headerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
                <div className="container">
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
                </div>
            </section>
            {/* Page Header End */}

        </>
    )
}
