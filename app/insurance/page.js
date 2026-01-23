import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sigorta">
                {/* Insurence Page Start */}
                <section className="insurence-page">
                    <div className="container">
                        <div className="row">
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="life-insurance">Hayat Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                    <div className="services-one__img">
                                            <img src="assets/images/hayat.png" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="life-insurance">DETAYLAR<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="health-insurance">Sağlık Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                    <div className="services-one__img">
                                            <img src="assets/images/tarsim.png" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="health-insurance">DETAYLAR<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="business-insurance">İşletme Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                    <div className="services-one__img">
                                            <img src="assets/images/yangın.png" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="business-insurance">DETAYLAR<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="car-insurance">Araç Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                    <div className="services-one__img">
                                            <img src="assets/images/kasko.png" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-car-1"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="car-insurance">DETAYLAR<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="home-insurance">Konut Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                    <div className="services-one__img">
                                            <img src="assets/images/konut.png" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-home-security"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="home-insurance">DETAYLAR<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="family-insurance">Aile Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                    <div className="services-one__img">
                                            <img src="assets/images/hayat.png" alt=""/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="family-insurance">DETAYLAR<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                        </div>
                    </div>
                </section>
                {/* Insurence Page End */}


                {/* CTA One Start  */}
                <section className="cta-one cta-five">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg"
                                style={{ backgroundImage: 'url(assets/images/shapes/cta-three-bg-shape-2.png)' }} >
                            </div>
                            <div className="cta-one__title-box">
                                <h3>Hemen <span>Teklif</span> Alın</h3>
                                <p>Risk almadan deneyin - iptal ücreti yok</p>
                            </div>
                            <div className="cta-one__btn-box">
                                <Link href="contact" className="cta-one__btn thm-btn">HEMEN ÜCRETSİZ TEKLİF AL</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA One End  */}

            </Layout>
        </>
    )
}