

import Link from "next/link"
export default function Work() {
    return (
        <>
            {/* Work Step One Start  */}
                <section className="work-step-one">
                    <div className="work-step-one__bg-shape"
                        style={{ backgroundImage: 'url(assets/images/shapes/work-step-one-bg-shape.png)' }} ></div>
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">KOLAY ÇALIŞMA ADIMLARIMIZ</p>
                            </div>
                            <h2 className="section-title__title">4 Adımda
                                <br/> Kolay Süreç</h2>
                        </div>
                        <div className="row">
                            {/* Work Stpe One Single Start */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div className="work-step-one__single">
                                    <div className="work-step-one__icon">
                                        <span className="icon-risk-management"></span>
                                        <div className="work-step-one__shape-1">
                                            <img src="assets/images/shapes/work-step-one-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__hover-shape-1">
                                            <img src="assets/images/shapes/work-step-one-hover-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-2">
                                            <img src="assets/images/shapes/work-step-one-shape-2.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-3">
                                            <img src="assets/images/shapes/work-step-one-shape-3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="work-step-one__thumb">
                                        <img src="assets/images/kasko.png" alt="Araç Sigortası"/>
                                    </div>
                                    <h3 className="work-step-one__title"><Link href="hakkimizda">Sigortanı Seç</Link></h3>
                                </div>
                            </div>
                            {/* Work Stpe One Single End */}
                            {/* Work Stpe One Single Start */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                                <div className="work-step-one__single">
                                    <div className="work-step-one__icon">
                                        <span className="icon-talk"></span>
                                        <div className="work-step-one__shape-1">
                                            <img src="assets/images/shapes/work-step-one-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__hover-shape-1">
                                            <img src="assets/images/shapes/work-step-one-hover-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-2">
                                            <img src="assets/images/shapes/work-step-one-shape-2.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-3">
                                            <img src="assets/images/shapes/work-step-one-shape-3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="work-step-one__thumb">
                                        <img src="assets/images/konut.png" alt="Konut Sigortası"/>
                                    </div>
                                    <h3 className="work-step-one__title"><Link href="hakkimizda">Görüşme Planla</Link></h3>
                                </div>
                            </div>
                            {/* Work Stpe One Single End */}
                            {/* Work Stpe One Single Start */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div className="work-step-one__single">
                                    <div className="work-step-one__icon">
                                        <span className="icon-problem-solving"></span>
                                        <div className="work-step-one__shape-1">
                                            <img src="assets/images/shapes/work-step-one-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__hover-shape-1">
                                            <img src="assets/images/shapes/work-step-one-hover-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-2">
                                            <img src="assets/images/shapes/work-step-one-shape-2.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-3">
                                            <img src="assets/images/shapes/work-step-one-shape-3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="work-step-one__thumb">
                                        <img src="assets/images/tarsim.png" alt="TARSİM Sigortası"/>
                                    </div>
                                    <h3 className="work-step-one__title"><Link href="hakkimizda">Çözümünü Al</Link></h3>
                                </div>
                            </div>
                            {/* Work Stpe One Single End */}
                            {/* Work Stpe One Single Start */}
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                                <div className="work-step-one__single">
                                    <div className="work-step-one__icon">
                                        <span className="icon-healthcare"></span>
                                        <div className="work-step-one__shape-1">
                                            <img src="assets/images/shapes/work-step-one-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__hover-shape-1">
                                            <img src="assets/images/shapes/work-step-one-hover-shape-1.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-2">
                                            <img src="assets/images/shapes/work-step-one-shape-2.png" alt=""/>
                                        </div>
                                        <div className="work-step-one__shape-3">
                                            <img src="assets/images/shapes/work-step-one-shape-3.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="work-step-one__thumb">
                                        <img src="assets/images/hayat.png" alt="Sağlık Sigortası"/>
                                    </div>
                                    <h3 className="work-step-one__title"><Link href="hakkimizda">Poliçeni Başlat</Link></h3>
                                </div>
                            </div>
                            {/* Work Stpe One Single End */}
                        </div>
                    </div>
                </section>
            {/* Work Step One End  */}  
        </>
    )
}
