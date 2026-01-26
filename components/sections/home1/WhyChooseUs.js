

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
                                    <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="why-choose-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">NEDEN VOLDEM SİGORTA</p>
                                </div>
                                <h2 className="section-title__title">Bizi Farklı
                                    <br/> Kılan Nedir?</h2>
                                <p className="section-title__text">Tokat DASK, Tokat araç kasko ve Tokat sağlık sigortası
                                    süreçlerinde hızlı teklif, doğru teminat ve şeffaf bilgilendirme sunuyoruz.</p>
                            </div>
                            <ul className="why-choose-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-save-money-1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Uygun Primler</h3>
                                        <p>Bütçenize uygun çözümlerle doğru teminatı sunuyoruz.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-cashback"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Hızlı Destek</h3>
                                        <p>Hasar ve süreç yönetiminde yanınızda oluyoruz.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-bar-chart"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Şeffaf Süreç</h3>
                                        <p>Tüm adımları açık ve anlaşılır şekilde ilerletiyoruz.</p>
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
