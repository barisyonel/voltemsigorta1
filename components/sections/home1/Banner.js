'use client'
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
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: { clickable: true },
}

const SLIDES = [
    { image: "/assets/saglıksigortası.png" },
    { image: "/assets/tokattarım.jpg" },
    { image: "/assets/hizmett.png" },
    { image: "/assets/konutsigortası.png" },
    { image: "/assets/arackaskoo.png" },
    { image: "/assets/afet%20sigortası.png" },
]

export default function Banner() {
    return (
        <section className="main-slider">
            <div className="item main-slider__slide-1" style={{ backgroundImage: "none" }}>
                <div className="main-slider__layout">
                    <div className="main-slider__content">
                        <h1 className="main-slider__title">
                            Tokat Sigorta Acentesi – Uygun Trafik, Kasko ve Konut Sigortası
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
                            {SLIDES.map((slide) => (
                                <SwiperSlide key={slide.image}>
                                    <div
                                        className="main-slider__media"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
