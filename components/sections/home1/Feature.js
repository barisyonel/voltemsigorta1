
import Link from "next/link"
export default function Feature() {
    return (
        <>


            <section className="feature-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-protection"></span>
                            </div>
                            <div className="feature-one__media">
                                <img src="assets/images/kasko.png" alt="Trafik ve Kasko"/>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Sigorta Acentesi</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Önce Güven</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">DETAYLAR<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInUp">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-investment"></span>
                            </div>
                            <div className="feature-one__media">
                                <img src="assets/images/konut.png" alt="Konut ve DASK"/>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Sigorta Acentesi</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Birikiminizi Koruyun</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">DETAYLAR<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeInRight">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <div className="feature-one__media">
                                <img src="assets/images/hayat.png" alt="Sağlık ve Hayat"/>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Sigorta Acentesi</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Sigortanızı Hemen Başlatın</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">DETAYLAR<span
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
