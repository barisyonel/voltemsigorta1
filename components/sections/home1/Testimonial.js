'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}


export default function Testimonial() {
    return (
        <>

     {/* Testimonial One Start  */}
        <section className="testimonial-one">
            <div className="testimonial-one__shape-1 img-bounce">
                <img src="assets/images/shapes/testimonial-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">MÜŞTERİLERİMİZDEN YORUMLAR</p>
                    </div>
                    <h2 className="section-title__title">Müşterilerimiz Neden
                        <br/> Bizi Tercih Ediyor?</h2>
                </div>
                <div className="testimonial-one__bottom">
                
                    <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel thm-owl__carousel">
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Ononto Khan</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Smith S.R</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-3.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Alisha
                                            Martin</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-4.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">David Koper</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-5.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Jecika Brown</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-6.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="testimonial">Harbert
                                            Spenser</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                    
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Testimonial One End  */}

            
        </>
    )
}
