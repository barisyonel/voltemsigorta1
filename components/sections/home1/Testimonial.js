'use client'
import { useState, useEffect } from "react"
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
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <>

     {/* Testimonial One Start  */}
        <section className="testimonial-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">MÜŞTERİ YORUMLARI</p>
                    </div>
                    <h2 className="section-title__title">Müşterilerimiz Ne Diyor?</h2>
                    <p className="section-title__text" style={{ marginTop: '16px', fontSize: '18px', fontWeight: '600', color: 'var(--sonchoy-primary)' }}>
                        <strong>1.000+</strong> memnun müşteri bize güveniyor
                    </p>
                </div>
                <div className="testimonial-one__bottom">
                    {!isMounted ? (
                        <div className="testimonial-one__carousel">
                            {/* Static fallback for SSR */}
                            <div className="item">
                                <div className="testimonial-one__single">
                                    <div className="testimonial-one__quote">
                                        <i className="fas fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <div className="testimonial-one__text-box">
                                        <p className="testimonial-one__text">Hızlı teklif, net bilgi ve çözüm odaklı yaklaşım
                                            sayesinde süreci kolayca tamamladık.</p>
                                    </div>
                                    <div className="testimonial-one__client-info">
                                        <h3 className="testimonial-one__client-name"><Link href="/iletisim">Uğur Çoban</Link>
                                        </h3>
                                        <p className="testimonial-one__client-sub-title">Karavan Firma Sahibi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                    <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel thm-owl__carousel">
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <i className="fas fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Hızlı teklif, net bilgi ve çözüm odaklı yaklaşım
                                        sayesinde süreci kolayca tamamladık.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3 className="testimonial-one__client-name"><Link href="/iletisim">Uğur Çoban</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Karavan Firma Sahibi</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <i className="fas fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Doğru poliçeyi hızlıca bulmamı sağladılar, süreç
                                        boyunca hep ulaşılabilirlerdi.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3 className="testimonial-one__client-name"><Link href="/iletisim">Ramazan Zincirci</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Buğra Otomotiv LPG Oto Bakım Servis Yetkilisi Sahibi</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <i className="fas fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Konut sigortası için en uygun teminatları
                                        anlaşılır şekilde sundular.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3 className="testimonial-one__client-name"><Link href="/iletisim">Özgür Reis</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Okul Servis Sigortası</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                    
                    </Swiper>
                    )}
                </div>
            </div>
        </section>
        {/* Testimonial One End  */}

            
        </>
    )
}
