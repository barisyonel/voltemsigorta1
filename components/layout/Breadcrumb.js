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
                    </div>
                </div>
            </section>
            {/* Page Header End */}

        </>
    )
}
