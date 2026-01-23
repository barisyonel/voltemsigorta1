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
                                        <h3 className="services-one__title"><Link href="hayat-sigortasi">Hayat Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/hayat.png" alt="Hayat Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="hayat-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="saglik-sigortasi">Sağlık Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/ozel.png" alt="Sağlık Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="saglik-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="isyeri-sigortasi">İşletme Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/yangın.png" alt="İşletme Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="isyeri-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="arac-sigortasi">Araç Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/trafik.png" alt="Araç Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-car-1"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="arac-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="konut-sigortasi">Konut Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/konut.png" alt="Konut Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-home-security"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="konut-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="aile-sigortasi">DASK Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/dask-1.png" alt="DASK Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="aile-sigortasi">Detaylar<span className="icon-next"></span></Link>
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
                                <p>Hızlı dönüş, şeffaf süreç</p>
                            </div>
                            <div className="cta-one__btn-box">
                                <Link href="iletisim" className="cta-one__btn thm-btn">ÜCRETSİZ TEKLİF AL</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA One End  */}

            </Layout>
        </>
    )
}