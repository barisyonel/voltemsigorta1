
import { cloudinaryUrl } from "@/lib/cloudinary"

export default function WhyChooseUs() {
    return (
        <>

     {/* Why Choose One Start  */}
        <section className="why-choose-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__left">
                            <div className="why-choose-one__img-box">
                                <div className="why-choose-one__img">
                                    <img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540940/voldem_hcbgxk.png" alt="Voldem Sigorta Tokat"/>
                                </div>
                            </div>
                            <div className="why-choose-one__content-article">
                                <article className="why-choose-one__seo-content">
                                    <h3 className="why-choose-one__article-title">Tokat'ta Güvenilir Sigorta Danışmanlığı</h3>
                                    <p className="why-choose-one__article-text">
                                        <strong>Voldem Sigorta Tokat</strong> olarak 2006'dan beri Tokat ve çevre illerde sigorta danışmanlığı hizmeti veriyoruz. 20 senedir insanlara güvenle sigorta hizmeti sunuyoruz. Müşterilerimize <strong>trafik sigortası</strong>, <strong>kasko sigortası</strong>, <strong>konut sigortası</strong>, <strong>DASK</strong>, <strong>sağlık sigortası</strong>, <strong>hayat sigortası</strong> ve <strong>işletme sigortası</strong> gibi tüm sigorta branşlarında hızlı teklif ve şeffaf fiyatlandırma sunuyoruz.
                                    </p>
                                    <p className="why-choose-one__article-text">
                                        Tokat'ta sigorta acentesi arayışında olan müşterilerimiz için <strong>HDI Sigorta</strong>, <strong>AXA Sigorta</strong>, <strong>Allianz Sigorta</strong>, <strong>Zurich Sigorta</strong> ve daha birçok önde gelen sigorta şirketiyle çalışıyoruz. Bu sayede <strong>Tokat sigorta fiyatları</strong> konusunda geniş bir karşılaştırma imkânı sunarak size en uygun prim ve teminat seçeneklerini buluyoruz.
                                    </p>
                                    <p className="why-choose-one__article-text">
                                        Tokat'ta <strong>en uygun sigorta</strong> arayışınızda yanınızdayız. Hasar süreçlerinde güçlü destek, poliçe yenileme zamanlarında hatırlatma ve 7/24 ulaşılabilir hizmet anlayışımızla müşteri memnuniyetini ön planda tutuyoruz. <strong>Tokat sigorta teklifi</strong> almak için bize ulaşın, size özel çözümler sunalım.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">NEDEN VOLDEM SİGORTA</p>
                                </div>
                                <h2 className="section-title__title">Neden Voldem Sigorta?</h2>
                                <p className="section-title__text">Voldem Sigorta olarak, müşterilerimize en uygun ve kapsamlı sigorta çözümlerini sunmak için buradayız. Trafik sigortasından kaskoya, özel sağlık sigortasından konut sigortasına kadar geniş bir ürün yelpazesiyle, siz ve sevdikleriniz için en iyi korumayı sağlıyoruz.</p>
                            </div>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-save-money-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>En Uygun Fiyatlar</h3>
                                        <p>Tüm sigorta şirketlerinden karşılaştırmalı teklifler alarak size en uygun fiyatı sunuyoruz.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cashback"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Hızlı ve Kolay Teklif</h3>
                                        <p>Sigorta ihtiyacınızı belirlemek için hızlı araştırma yapılır ve teklifleriniz aynı gün hazırlanır.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-bar-chart"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Güvenilir Hizmet</h3>
                                        <p>2006'dan beri Tokat'ta güvenilir sigorta hizmetleri sunuyoruz. 20 senedir insanlara güvenle sigorta hizmeti veriyoruz. Müşteri memnuniyeti önceliğimizdir.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-protection"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Geniş Kapsamlı Poliçeler</h3>
                                        <p>Trafik, kasko, konut, sağlık, hayat, DASK ve işletme sigortası gibi tüm branşlarda hizmet veriyoruz.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-healthcare"></span>
                                    </div>
                                    <div className="content">
                                        <h3>7/24 Hizmet Anlayışı</h3>
                                        <p>Hasar durumunda ve poliçe yenileme zamanlarında size destek oluyoruz.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Why Choose One End  */}
           
        </>
    )
}
