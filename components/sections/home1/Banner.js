'use client'
import Image from "next/image"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css/effect-fade"
import QuickQuoteForm from "./QuickQuoteForm"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, EffectFade, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoHeight: false,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: { clickable: true },
}

const SLIDES = [
    { image: "/assets/slider/slider1.jpg", width: 1080, height: 1350, alt: "Araç Sigortası - Voldem Sigorta", title: "Araç Sigortası | Voldem Sigorta" },
    { image: "/assets/arackasko.png", width: 1080, height: 1920, alt: "Araç Kasko - Voldem Sigorta", title: "Araç Kasko | Voldem Sigorta" },
    { image: "/assets/slider/slider5.jpg", width: 1131, height: 1600, alt: "Yeni Nesil Tarımcılık - Voldem Sigorta", title: "Yeni Nesil Tarımcılık | Voldem Sigorta" },
    { image: "/assets/hizmett.png", width: 1080, height: 1920, alt: "Hizmetlerimiz - Voldem Sigorta", title: "Hizmetlerimiz | Voldem Sigorta" },
    { image: "/assets/tarımsigorta.jpg", width: 448, height: 557, alt: "Tarım Sigortası - Voldem Sigorta", title: "Tarım Sigortası | Voldem Sigorta" },
]

export default function Banner() {
    return (
        <section className="main-slider">
            <div className="item main-slider__slide-1" style={{ backgroundImage: "none" }}>
                <div className="main-slider__layout">
                    <div className="main-slider__content">
                        <h1 className="main-slider__title">
                            Tokat Trafik Sigortası ve Kasko Teklifi
                        </h1>
                        <p className="main-slider__text">
                            Trafik, kasko, konut, sağlık, hayat, DASK ve işletme sigortası için
                            Tokat'ın en güvenilir sigorta acentesi. Hızlı teklif, uygun prim,
                            güvenilir hizmet. Voldem Sigorta Tokat ile hayatınızı güvence altına alın.
                        </p>
                        <QuickQuoteForm />
                    </div>
                    <div className="main-slider__media-wrapper">
                        <Swiper {...swiperOptions} className="banner-media-carousel">
                            {SLIDES.map((slide, index) => (
                                <SwiperSlide key={slide.image}>
                                    <div className="main-slider__media main-slider__media--img" style={{ backgroundColor: "#f5f5f8" }}>
                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            title={slide.title}
                                            width={slide.width}
                                            height={slide.height}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 700px"
                                            priority={index === 0}
                                            fetchPriority={index === 0 ? "high" : "auto"}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                display: "block",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
