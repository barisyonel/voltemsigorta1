'use client'
import { useState } from 'react'
 
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
                                        <img src="assets/images/shapes/faq-one-shape-1.png" alt=""/>
                                    </div>
                                    <div className="faq-one__img-box">
                                    <div className="faq-one__img">
                                        <img src="assets/images/konut.png" alt=""/>
                                    </div>
                                        <div className="faq-one__quick-box">
                                            <div className="faq-one__quick-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__quick-text">Hızlı, Kolay ve
                                                <br/> Sorunsuz</h4>
                                        </div>
                                        <div className="faq-one__policy">
                                            <div className="faq-one__policy-icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <h4 className="faq-one__policy-text">Tüm poliçelerde
                                                <br/> %50'ye varan avantaj</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="faq-one__right">
                                    <div className="section-title text-left">
                                        <div className="section-title__tagline-box">
                                            <p className="section-title__tagline">SIK SORULAN SORULAR</p>
                                        </div>
                                        <h2 className="section-title__title">Güçlü
                                            <br/> Sigorta Çözümleri</h2>
                                    </div>
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>Hayat sigortasında teminatlar neleri kapsar?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>Teminat kapsamını ihtiyaçlarınıza göre belirler, size en uygun
                                                        poliçe seçeneklerini sunarız.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>Poliçemi nasıl yenileyebilirim?</h4>
                                            </div>
                                            <div className="accrodion-content" onClick={() => handleToggle(2)}>
                                                <div className="inner">
                                                    <p>Yenileme zamanı yaklaşırken sizi bilgilendirir, tüm süreci hızlıca
                                                        yönetiriz.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>Teklif almak için hangi bilgilere ihtiyaç var?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>İletişim bilgileriniz ve sigorta türüne göre temel bilgiler yeterlidir.
                                                        Detayları birlikte netleştiririz.</p>
                                                </div>{/*  /.inner  */}
                                            </div>
                                        </div>
                                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                            <div className="accrodion-title">
                                                <h4>Sigorta planımda hangi ek teminatlar var?</h4>
                                            </div>
                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>İhtiyacınıza göre ek teminatlar sunar, risklerinizi kapsamlı şekilde
                                                        güvence altına alırız.</p>
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
