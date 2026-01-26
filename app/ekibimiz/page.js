
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle="Ekibimiz"
                breadcrumbImage="/anasayfa2.jpg"
            >
                {/* Team Two Start  */}
                <section className="team-page">
                    <div className="container">
                        <div className="row">
                            {/* Team Two Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="ekip-detay">Hayrullah Çitil</Link></h3>
                                        <p className="team-two__sub-title">Kurucu Ortak</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="ekip-detay"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="ekip-detay"><span className="icon-google-plus-logo"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-vimeo"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-instagram-1"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team Two Single End */}
                            {/* Team Two Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="ekip-detay">Nilay Çitil</Link></h3>
                                        <p className="team-two__sub-title">Müşteri İlişkileri</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="ekip-detay"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="ekip-detay"><span className="icon-google-plus-logo"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-vimeo"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-instagram-1"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team Two Single End */}
                            {/* Team Two Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__title"><Link href="ekip-detay">Barış Can Yönel</Link></h3>
                                        <p className="team-two__sub-title">Kurumsal İletişim</p>
                                        <div className="team-two__share-and-social">
                                            <div className="team-two__share">
                                                <Link href="ekip-detay"><span className="icon-share"></span></Link>
                                            </div>
                                            <div className="team-two__social">
                                                <Link href="ekip-detay"><span className="icon-google-plus-logo"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-vimeo"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-instagram-1"></span></Link>
                                                <Link href="ekip-detay"><span className="icon-facebook"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Team Two Single End */}
                        </div>
                    </div>
                </section>
                {/* Team Two End  */}

                {/* CTA One Start  */}
                <section className="cta-one cta-five">
                    <div className="container">
                        <div className="cta-one__inner">
                            <div className="cta-one__bg"
                                style={{ backgroundImage: 'url(assets/images/shapes/cta-three-bg-shape-2.png)' }} >
                            </div>
                            <div className="cta-one__title-box">
                                <h3>Hemen <span>Teklif</span> Alın</h3>
                                <p>Tokat ve çevre illerde hızlı ve şeffaf sigorta teklifi</p>
                            </div>
                            <div className="cta-one__btn-box">
                                <Link href="iletisim" className="cta-one__btn thm-btn">HEMEN ARA</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA One End  */}

            </Layout>
        </>
    )
}