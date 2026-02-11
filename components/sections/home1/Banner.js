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
    autoHeight: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: { clickable: true },
}

const SLIDES = [
    { image: "/assets/slider/voldemm.jpeg", width: 1200, height: 800, alt: "Voldem Sigorta açılış kampanyası - Tüm sigorta branşlarında %10 indirim. Trafik, kasko, sağlık, konut, seyahat, TARSIM sigortası. Tokat sigorta acentesi.", title: "Voldem Sigorta Açılışa Özel %10 İndirim | Trafik, Kasko, Sağlık - Tokat" },
    { image: "/assets/saglıksigortası.png", width: 1200, height: 800, alt: "Tokat sağlık sigortası - Voldem Sigorta acentesi özel sağlık, tamamlayıcı sağlık sigortası teklifi", title: "Tokat Sağlık Sigortası | Voldem Sigorta" },
    { image: "/assets/slider/voldemsigortaa.jpeg", width: 1200, height: 800, alt: "Tokat trafik sigortası - Voldem Sigorta açılış indirimleri, trafik kasko konut sağlık TARSIM sigortası teklifi", title: "Tokat Trafik Sigortası | Voldem Sigorta" },
    { image: "/assets/slider/tarsimsigorta.png", width: 1200, height: 800, alt: "Voldem Sigorta ile TARSIM Sigortasında %30 İndirim - Tokat tarım sigortası teklifi", title: "TARSIM Sigortasında %30 İndirim | Voldem Sigorta Tokat" },
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
                                                height: "auto",
                                                display: "block",
                                                objectFit: "contain",
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
