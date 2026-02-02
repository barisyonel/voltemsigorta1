'use client'
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle="Sıkça Sorulan Sorular"
                breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540886/1045x820_pwgxg9.png"
            >
                <div>
                    {/* FAQ Page Start */}
                    <section className="faq-page">
                        <div className="container">
                            <div className="faq-page__text-box">
                                <div className="faq-page__text-box-shape-1">
                                    <img src={cloudinaryUrl("assets/images/shapes/faq-page-text-box-shape-1.png")} alt="SSS dekoratif şekil"/>
                                </div>
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <p className="section-title__tagline">SİGORTA REHBERİ</p>
                                    </div>
                                    <h2 className="section-title__title">Sıkça Sorulan Sorular
                                        <br/> ve Kısa Yanıtlar</h2>
                                    <p className="faq-page__text">Tokat sigorta ihtiyaçlarınız için en çok merak edilen
                                        soruları tek sayfada topladık. Trafik sigortası, kasko, DASK, konut ve sağlık
                                        poliçelerinde doğru seçim yapmak için temel bilgileri burada bulabilirsiniz.</p>
                                </div>
                            </div>
                            <div className="faq-page__bottom">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-5">
                                        <div className="faq-page__bottom-left">
                                            <div className="faq-page__bottom-left-img-box">
                                                <div className="faq-page__bottom-left-img">
                                                    <img src={cloudinaryUrl("/sigorta.jpg")} alt="Voldem Sigorta Tokat"/>
                                                </div>
                                                <h3 className="faq-page__bottom-left-img-text">Voldem Sigorta Tokat
                                                    <br/> Güvenilir Sigorta Danışmanlığı</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-7">
                                        <div className="faq-page__bottom-right">
                                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                                    <div className="accrodion-title">
                                                        <h4>Tokat sigorta teklifini nasıl alabilirim?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>İletişim sayfamızdan arayarak ya da WhatsApp hattımızdan
                                                                ulaşarak hızlı teklif alabilirsiniz. Tokat en uygun sigorta
                                                                seçeneklerini ihtiyaçlarınıza göre karşılaştırıp sunarız.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                                    <div className="accrodion-title">
                                                        <h4>Tokat trafik sigortası ile kasko arasındaki fark nedir?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Trafik sigortası zorunludur ve karşı tarafın zararlarını
                                                                karşılar. Kasko ise aracınızı çarpma, çalınma, doğal afet
                                                                gibi risklere karşı korur. Tokat kasko çözümlerinde teminat
                                                                kapsamını ihtiyaca göre belirleriz.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                                    <div className="accrodion-title">
                                                        <h4>DASK sigortası (zorunlu deprem) neden gereklidir?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Tokat DASK poliçesi, deprem ve deprem kaynaklı yangın,
                                                                infilak, yer kayması gibi risklere karşı zorunlu güvence sağlar.
                                                                Konut sigortasıyla birlikte daha geniş koruma elde edilir.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                                    <div className="accrodion-title">
                                                        <h4>Konut sigortası neleri kapsar?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Tokat konut sigortası; yangın, hırsızlık, su baskını ve
                                                                doğal afet gibi riskleri kapsar. Eviniz ve eşyalarınız için
                                                                kapsamlı koruma sağlar, ek teminatlarla genişletilebilir.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                                    <div className="accrodion-title">
                                                        <h4>Sağlık sigortasında tamamlayıcı mı özel mi seçilmeli?</h4>
                                                    </div>
                                                    <div className="accrodion-content">
                                                        <div className="inner">
                                                            <p>Tokat sağlık sigortası ihtiyacınıza göre değişir. Tamamlayıcı
                                                                sağlık, SGK ile birlikte çalışır ve daha ekonomik olabilir.
                                                                Özel sağlık sigortası ise geniş hastane ağı ve yüksek limit sunar.
                                                                İhtiyacınıza göre en uygun planı belirleyebiliriz.</p>
                                                        </div>{/*  /.inner  */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* FAQ Page End */}


                    {/* CTA One Start  */}
                    <section className="cta-one cta-five">
                        <div className="container">
                            <div className="cta-one__inner">
                                <div className="cta-one__bg"
                                    style={{ backgroundImage: `url(${cloudinaryUrl("assets/images/shapes/cta-three-bg-shape-2.png")})` }} >
                                </div>
                                <div className="cta-one__title-box">
                                    <h3>Hemen <span>Teklif</span> Alın</h3>
                                    <p>Tokat ve çevre illerde hızlı ve şeffaf sigorta teklifi</p>
                                </div>
                                <div className="cta-one__btn-box">
                                    <Link href="/iletisim" className="cta-one__btn thm-btn">HEMEN ARA</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* CTA One End  */}
                </div>

            </Layout>
        </>
    )
}