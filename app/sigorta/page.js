import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"

export const metadata = {
    title: "Sigorta Çözümleri",
    description: "Tokat sigorta çözümleri: Hayat, Sağlık, İşletme, Araç, Konut ve DASK sigortası. Tüm sigorta ihtiyaçlarınız için tek adres. Hızlı teklif ve uygun prim seçenekleri.",
    keywords: [
        "tokat sigorta",
        "tokat sigorta çözümleri",
        "tokat tüm sigorta türleri",
        "tokat sigorta acentesi",
        "Voldem Sigorta Tokat",
        "tokat sigorta teklifi",
    ],
    openGraph: {
        title: "Sigorta Çözümleri | Voldem Sigorta Tokat",
        description: "Tokat sigorta çözümleri: Hayat, Sağlık, İşletme, Araç, Konut ve DASK sigortası.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769606340/Gemini_Generated_Image_57buzw57buzw57bu_l21g3v.png",
                width: 1200,
                height: 630,
                alt: "Sigorta Çözümleri Tokat",
            },
        ],
    },
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sigorta" breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769606340/Gemini_Generated_Image_57buzw57buzw57bu_l21g3v.png">
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
                                            <img src={cloudinaryUrl("/assets/images/hayat.png")} alt="Hayat Sigortası" suppressHydrationWarning/>
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
                                            <img src={cloudinaryUrl("/assets/images/ozel.png")} alt="Sağlık Sigortası" suppressHydrationWarning/>
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
                                            <img src={cloudinaryUrl("/assets/images/yangin.png")} alt="İşletme Sigortası" suppressHydrationWarning/>
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
                                            <img src={cloudinaryUrl("/assets/images/trafik.png")} alt="Araç Sigortası" suppressHydrationWarning/>
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
                                            <img src={cloudinaryUrl("/assets/images/konut.png")} alt="Konut Sigortası" suppressHydrationWarning/>
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
                                        <h3 className="services-one__title"><Link href="dask-sigortasi">DASK Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/dask-1.png")} alt="DASK Sigortası" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="dask-sigortasi">Detaylar<span className="icon-next"></span></Link>
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
                                style={{ backgroundImage: `url(${cloudinaryUrl("assets/images/shapes/cta-three-bg-shape-2.png")})` }}
                                suppressHydrationWarning>
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