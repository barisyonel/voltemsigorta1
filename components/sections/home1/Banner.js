
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="main-slider">
                <Swiper {...swiperOptions} className="banner-carousel">
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-1">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt=""/>
                            </div>
                            <div className="main-slider__img">
                                <img src="1045x820.png" alt=""/>
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">GÜVENİLİR. İLGİLİ. HIZLI</p>
                                            </div>
                                            <h2 className="section-title__title">Geleceğinizi
                                                <br/> Güvenceye Alan
                                                <br/> Sigorta</h2>
                                        </div>
                                        <p className="main-slider__text">Tokat'ta A'dan Z'ye sigorta çözümleriyle yanınızdayız.
                                            <br/> İhtiyaçlarınıza uygun poliçeleri hızlıca sunuyoruz.</p>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="about" className="main-slider__btn thm-btn">Hemen Başlayın</Link>
                                        </div>
                                        <div className="main-slider__ratting">
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span>5/5 Puan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-1">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt=""/>
                            </div>
                            <div className="main-slider__img">
                                <img src="1045x820.png" alt=""/>
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">GÜVENİLİR. İLGİLİ. HIZLI</p>
                                            </div>
                                            <h2 className="section-title__title">Geleceğinizi
                                                <br/> Güvenceye Alan
                                                <br/> Sigorta</h2>
                                        </div>
                                        <p className="main-slider__text">Tokat'ta A'dan Z'ye sigorta çözümleriyle yanınızdayız.
                                            <br/> İhtiyaçlarınıza uygun poliçeleri hızlıca sunuyoruz.</p>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="about" className="main-slider__btn thm-btn">Hemen Başlayın</Link>
                                        </div>
                                        <div className="main-slider__ratting">
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span>5/5 Puan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item">
                        <div className="item main-slider__slide-1">
                            <div className="main-slider__shape-1 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-1.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-2 img-bounce">
                                <img src="assets/images/shapes/main-slider-shape-2.png" alt=""/>
                            </div>
                            <div className="main-slider__shape-3 float-bob-y">
                                <img src="assets/images/shapes/main-slider-shape-3.png" alt=""/>
                            </div>
                            <div className="main-slider__img">
                                <img src="1045x820.png" alt=""/>
                            </div>

                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__section-and-text">
                                        <div className="section-title text-left">
                                            <div className="section-title__tagline-box">
                                                <p className="section-title__tagline">GÜVENİLİR. İLGİLİ. HIZLI</p>
                                            </div>
                                            <h2 className="section-title__title">Geleceğinizi
                                                <br/> Güvenceye Alan
                                                <br/> Sigorta</h2>
                                        </div>
                                        <p className="main-slider__text">Tokat'ta A'dan Z'ye sigorta çözümleriyle yanınızdayız.
                                            <br/> İhtiyaçlarınıza uygun poliçeleri hızlıca sunuyoruz.</p>
                                    </div>
                                    <div className="main-slider__btn-and-ratting-box">
                                        <div className="main-slider__btn-box">
                                            <Link href="about" className="main-slider__btn thm-btn">Hemen Başlayın</Link>
                                        </div>
                                        <div className="main-slider__ratting">
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <i className="icon-star-1"></i>
                                            <span>5/5 Puan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
