'use client'
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 6,
    spaceBetween: 24,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 22,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    }
}




export default function Brand() {
    const partners = [
        { src: "/assets/images/brand/brand-1-1.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-1-2.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-1-3.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-1-4.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-1-5.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-1-6.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-2-1.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-2-2.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-2-3.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-2-4.png", alt: "Çözüm Ortağı" },
        { src: "/assets/images/brand/brand-2-5.png", alt: "Çözüm Ortağı" },
    ]
    return (
        <>
        {/* Brand One Start */}
        <section className="brand-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">ÇÖZÜM ORTAKLARIMIZ</p>
                    </div>
                    <h2 className="section-title__title">Güçlü iş ortaklarımızla
                        <br/> birlikte güvence sağlıyoruz</h2>
                </div>
                <Swiper {...swiperOptions} className="partner-slider">
                    {partners.map((partner, index) => (
                        <SwiperSlide className="partner-slide" key={`${partner.src}-${index}`}>
                            <div className="partner-card">
                                <img src={partner.src} alt={partner.alt}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        {/* Brand One End */}
        </>
    )
}
