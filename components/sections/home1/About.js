'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/* About One Start  */}
        <section className="about-one">
            <div className="about-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/about-one-shape-2.png" alt=""/>
            </div>
            <div className="about-one__shape-3 float-bob-x">
                <img src="assets/images/shapes/about-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src="assets/images/resources/about-one-img-1.jpg" alt=""/>
                                </div>
                                <div className="about-one__img-2">
                                    <img src="assets/images/resources/about-one-img-2.jpg" alt=""/>
                                </div>
                                <div className="about-one__client-box">
                                    <div className="about-one__client-box-bg"
                                        style={{ backgroundImage: 'url(assets/images/shapes/about-one-client-box-bg-shape.png)' }} >
                                    </div>
                                    <div className="about-one__client-img">
                                        <img src="assets/images/resources/about-one-client-img.jpg" alt=""/>
                                    </div>
                                    <div className="about-one__client-content">
                                        <div className="about-one__count count-box">
                                            <h3 className="count-text">4.2</h3>
                                            <span>K</span>
                                        </div>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                <div className="about-one__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="about-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="about-one__shape-1 float-bob-x">
                                    <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">VOLDEM SİGORTA TOKAT'I TANIYIN</p>
                                </div>
                                <h2 className="section-title__title">Uzmanlarımızla
                                    Sigorta Çözümü Alın</h2>
                            </div>
                            <p className="about-one__text-1">Voldem Sigorta Tokat, bireysel ve kurumsal ihtiyaçlar için
                                A'dan Z'ye sigorta çözümleri sunar. Tokat genelinde hızlı, şeffaf ve güvenilir hizmet
                                verir.</p>
                            <div className="about-one__text-box">
                                <div className="about-one__text-box-shape">
                                    <img src="assets/images/shapes/about-one-text-box-shape.png" alt=""/>
                                </div>
                                <div className="about-one__text-box-icon">
                                    <span className="icon-file-1"></span>
                                </div>
                                <p className="about-one__text-box-text">İhtiyaç analizinden poliçe yönetimine kadar her
                                    adımda yanınızdayız.</p>
                            </div>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Ücretsiz Sigorta Teklifi</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Deneyimli ve Yetkin Danışmanlar</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Geniş Poliçe Seçenekleri</p>
                                </li>
                            </ul>
                            <div className="about-one__btn-and-contact">
                                <div className="about-one__btn-box">
                                    <Link href="about" className="about-one__btn thm-btn">Daha Fazlası</Link>
                                </div>
                                <div className="about-one__contact">
                                    <div className="icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="content">
                                        <span>Bizi Arayın</span>
                                        <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> 
        {/* About One End  */}
        </>
    )
}
