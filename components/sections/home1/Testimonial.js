'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { cloudinaryUrl } from "@/lib/cloudinary"


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
            <div className="testimonial-one__shape-1 img-bounce">
                <img src={cloudinaryUrl("assets/images/shapes/testimonial-one-shape-1.png")} alt="" suppressHydrationWarning/>
            </div>
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
                                        <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                    </div>
                                    <div className="testimonial-one__text-box">
                                        <p className="testimonial-one__text">Hızlı teklif, net bilgi ve çözüm odaklı yaklaşım
                                            sayesinde süreci kolayca tamamladık.</p>
                                    </div>
                                    <div className="testimonial-one__client-info">
                                        <div className="testimonial-one__client-img">
                                            <img src={cloudinaryUrl("/assets/images/kasko.png")} alt="Kasko Sigortası" suppressHydrationWarning/>
                                        </div>
                                        <h3 className="testimonial-one__client-name"><Link href="yorumlar">Ayşe K.</Link>
                                        </h3>
                                        <p className="testimonial-one__client-sub-title">Müşteri</p>
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
                                    <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Hızlı teklif, net bilgi ve çözüm odaklı yaklaşım
                                        sayesinde süreci kolayca tamamladık.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src={cloudinaryUrl("/assets/images/kasko.png")} alt="Kasko Sigortası" suppressHydrationWarning/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="yorumlar">Ayşe K.</Link>
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
                                    <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Doğru poliçeyi hızlıca bulmamı sağladılar, süreç
                                        boyunca hep ulaşılabilirlerdi.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src={cloudinaryUrl("/assets/images/trafik.png")} alt="Trafik Sigortası" suppressHydrationWarning/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="yorumlar">Mehmet T.</Link>
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
                                    <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Konut sigortası için en uygun teminatları
                                        anlaşılır şekilde sundular.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src={cloudinaryUrl("/assets/images/konut.png")} alt="Konut Sigortası" suppressHydrationWarning/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="yorumlar">Elif D.</Link></h3>
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
                                    <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Hasar sürecinde hızlı destek aldım, her şey
                                        sorunsuz ilerledi.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src={cloudinaryUrl("/assets/images/hayat.png")} alt="Hayat Sigortası" suppressHydrationWarning/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="yorumlar">Ahmet Y.</Link>
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
                                    <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Açıklayıcı ve güven veren bir yaklaşım; tekrar
                                        tercih ederim.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src={cloudinaryUrl("/assets/images/tarsim.png")} alt="TARSİM Sigortası" suppressHydrationWarning/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="yorumlar">Zeynep A.</Link>
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
                                    <img src={cloudinaryUrl("assets/images/icon/quote-icon-1.png")} alt="" suppressHydrationWarning/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Teklifler hızlı geldi, poliçem aynı gün
                                        tamamlandı.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src={cloudinaryUrl("/assets/images/voldem.png")} alt="Voldem Sigorta Tokat" suppressHydrationWarning/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="yorumlar">Murat S.</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
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
