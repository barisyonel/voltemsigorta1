
import Link from "next/link"
export default function Blog() {
    return (
        <>
            {/* Blog One Start */}
        <section className="blog-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">GÜNCEL YAZILAR</p>
                    </div>
                    <h2 className="section-title__title">Sigorta Rehberi ve İpuçları</h2>
                </div>
                <div className="row">
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="/assets/images/trafik.png" alt="Trafik Sigortası"/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Sigorta</span>
                                    <span>Acenta</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-detay">Trafik Sigortasında
                                        Dikkat Edilmesi Gerekenler</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Voldem Sigorta</h3>
                                        <p>3 Ağustos 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="/assets/images/kasko.png" alt="Kasko Sigortası"/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Sigorta</span>
                                    <span>Acenta</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-detay">Kasko Seçerken
                                        Nelere Dikkat Etmeli?</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Voldem Sigorta</h3>
                                        <p>3 Ağustos 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="/assets/images/konut.png" alt="Konut Sigortası"/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Sigorta</span>
                                    <span>Acenta</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-detay">Konut Sigortası ile
                                        Evinizi Güvence Altın</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Voldem Sigorta</h3>
                                        <p>3 Ağustos 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BLog One Single End */}
                </div>
            </div>
        </section>
        {/* Blog One End */}
        </>
    )
}
