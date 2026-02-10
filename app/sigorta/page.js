import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"

export const metadata = {
    title: "Tokat Sigorta | Trafik, Kasko, TARSIM - Voldem Sigorta Tokat",
    description: "Tokat sigorta: Tokat trafik sigortası, Tokat kasko, Tokat TARSIM, araç, konut, sağlık ve DASK. 15+ şirketten karşılaştırmalı teklif. Voldem Sigorta Tokat.",
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
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769696797/Gemini_Generated_Image_mp0vump0vump0vum_1_hvczvn.png",
                width: 1200,
                height: 630,
                alt: "Sigorta Çözümleri Tokat",
            },
        ],
    },
    alternates: { canonical: "/sigorta" },
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Sigorta" breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769696797/Gemini_Generated_Image_mp0vump0vump0vum_1_hvczvn.png">
                {/* Insurence Page Start */}
                <section className="insurence-page">
                    <div className="container">
                        <div className="row">
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/hayat-sigortasi">Hayat Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/hayat.png")} alt="Tokat hayat sigortası ve ferdi kaza sigortası - Voldem Sigorta ailesine mali güvence" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/hayat-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/saglik-sigortasi">Sağlık Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/ozel.png")} alt="Tokat özel sağlık sigortası - Voldem Sigorta tamamlayıcı ve seyahat sağlık sigortası teklifi" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/saglik-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/isyeri-sigortasi">İşletme Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/yangin.png")} alt="Tokat işyeri sigortası - yangın, hırsızlık, iş kesintisi teminatı - Voldem Sigorta" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/isyeri-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start - Kasko */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/kasko-sigortasi">Tokat Kasko</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/kasko.png")} alt="Tokat kasko sigortası - aracınızı çarpma, hırsızlık, doğal afet risklerine karşı koruma - Voldem Sigorta" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-car-1"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/kasko-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start - TARSIM */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/tarsim">Tokat TARSIM</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/tarımsigorta.jpg" alt="Tokat TARSIM tarım sigortası - dolu, don, kuraklık, ürün sigortası - Voldem Sigorta" />
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-protection"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/tarsim">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/arac-sigortasi">Araç Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/trafik.png")} alt="Tokat trafik sigortası ve araç sigortası - zorunlu teminat, Voldem Sigorta hızlı teklif" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-car-1"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/arac-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/konut-sigortasi">Konut Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/konut.png")} alt="Tokat konut sigortası - yangın, hırsızlık, su baskını teminatı - Voldem Sigorta ev sigortası" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-home-security"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/konut-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <div className="col-xl-4 col-lg-4">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="/dask-sigortasi">DASK Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={cloudinaryUrl("/assets/images/dask-1.png")} alt="Tokat DASK deprem sigortası - zorunlu deprem teminatı - Voldem Sigorta" suppressHydrationWarning/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="/dask-sigortasi">Detaylar<span className="icon-next"></span></Link>
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
                                <Link href="/iletisim" className="cta-one__btn thm-btn">ÜCRETSİZ TEKLİF AL</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA One End  */}

            </Layout>
        </>
    )
}