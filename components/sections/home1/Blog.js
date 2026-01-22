
import Link from "next/link"
export default function Blog() {
    return (
        <>
            {/* Blog One Start */}
        <section className="blog-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">GÜNCEL BLOG YAZILARI</p>
                    </div>
                    <h2 className="section-title__title">En Son Blog Yazılarımız</h2>
                </div>
                <div className="row">
                    {/* BLog One Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="/anasayfa3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Sigorta</span>
                                    <span>Acentesi</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-detay">Seyahat Sigortasında
                                        Doğru Teminatı Seçmek</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
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
                                    <img src="/anasayfa4..jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Sigorta</span>
                                    <span>Acentesi</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-detay">Sigorta Ufukları:
                                        Sunulan Teminatlar</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
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
                                    <img src="/anasayfa1.png" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <div className="blog-one__tag">
                                    <span>Sigorta</span>
                                    <span>Acentesi</span>
                                </div>
                                <h3 className="blog-one__title"><Link href="blog-detay">Geleceği Güvenceye Almak:
                                        Voldem Sigorta Yaklaşımı</Link></h3>
                                <div className="blog-one__client-info">
                                    <div className="blog-one__client-img">
                                        <img src="assets/images/blog/blog-one__client-img-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-one__client-content">
                                        <h3>Janes Cooper</h3>
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
