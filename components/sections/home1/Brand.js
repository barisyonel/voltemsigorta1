'use client'
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 6,
    spaceBetween: 24,
    speed: 5000,
    autoplay: {
        delay: 0,
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
        { src: "/assets/images/zurich-sigorta.png", alt: "Zurich Sigorta" },
        { src: "/assets/images/unico_sigorta_logo.jpg", alt: "Unico Sigorta" },
        { src: "/assets/images/ray.png", alt: "Ray Sigorta" },
        { src: "/assets/images/ak-sigorta.png", alt: "Ak Sigorta" },
        { src: "/assets/images/Axa.png", alt: "AXA Sigorta" },
        { src: "/assets/images/hdi_logo.png", alt: "HDI Sigorta" },
        { src: "/assets/images/t.jpg", alt: "Türkiye Sigorta" },
        { src: "/assets/images/108.png", alt: "Sigorta Logosu" },
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
