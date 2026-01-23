
import Link from "next/link"
export default function Feature() {
    return (
        <>


            <section className="feature-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-protection"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Voldem Sigorta</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Doğru Tespit</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">Detaylar<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInUp">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-investment"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Voldem Sigorta</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Uygun Fiyat</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">Detaylar<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInRight">
                        <div className="feature-one__single">
                            <div className="feature-one__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Voldem Sigorta</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Destek Hattı</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">Detaylar<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
