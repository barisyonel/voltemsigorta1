'use client'
import { useState } from 'react'
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

            {/* FAQ One Start  */}
            <section className="faq-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="faq-one__left">
                                    <div className="faq-one__shape-1 float-bob-x">
                                        <img src={cloudinaryUrl("assets/images/shapes/faq-one-shape-1.png")} alt=""/>
                                    </div>
                                    <div className="faq-one__img-box">
                                    <div className="faq-one__img">
                                        <img src={cloudinaryUrl("/assets/images/tarsim.png")} alt="TARSİM Sigortası"/>
                                    </div>
                                        <div className="faq-one__quick-box">
                                            <div className="faq-one__quick-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__quick-text">Hızlı, Kolay
                                                <br/> ve Zahmetsiz</h4>
                                        </div>
                                        <div className="faq-one__policy">
                                            <div className="faq-one__policy-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__policy-text">Doğru poliçede
                                                <br/> maksimum tasarruf</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="faq-one__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">SIKÇA SORULANLAR</p>
                                        </div>
                                        <h2 className="section-title__title">Sigorta
                                            <br/> Çözümlerimiz</h2>
                                    </div>
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>Sigorta teklifi almak ne kadar sürer?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Bilgilerinizi paylaştığınızda size hızlıca geri dönüş yapar ve
                                                        en uygun teklifleri sunarız.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>Hangi sigorta türü benim için uygun?</h4>
                                            </div>
                                            <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                                <div className="inner">
                                                    <p>İhtiyaçlarınıza göre konut, araç, sağlık, hayat veya tarım
                                                        sigortaları arasından seçim yapmanıza yardımcı oluruz.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>Poliçe kapsamı nasıl belirleniyor?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Risk profili ve ihtiyaçlarınıza göre teminatları netleştirir,
                                                        bütçenize uygun seçenekler sunarız.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                            <div className="accrodion-title">
                                                <h4>Hasar sürecinde destek veriyor musunuz?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Evet, hasar bildiriminden sürecin takibine kadar yanınızdayız.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* FAQ One End  */}
            
        </>
    )
}
