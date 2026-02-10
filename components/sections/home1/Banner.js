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
    { image: "/assets/saglıksigortası.png", width: 1200, height: 800, alt: "Tokat sağlık sigortası - Voldem Sigorta acentesi özel sağlık, tamamlayıcı sağlık sigortası teklifi", title: "Tokat Sağlık Sigortası | Voldem Sigorta" },
    { image: "/assets/slider/voldemsigortaa.jpeg", width: 1200, height: 800, alt: "Voldem Sigorta Tokat açılış - 14 Şubat açılışa özel tüm sigorta branşlarında %10 indirim, trafik kasko konut sağlık TARSIM", title: "Voldem Sigorta Açılış %10 İndirim | Tokat Sigorta" },
    { image: "/assets/slider/voldemm.jpeg", width: 1200, height: 800, alt: "Voldem Sigorta Tokat - Açılışa özel indirim, trafik kasko konut sağlık seyahat TARSIM sigortası teklifi", title: "Tokat Sigorta Teklifi | Voldem Sigorta Acentesi" },
    { image: "/assets/slider/slider3..jpg", width: 800, height: 1200, alt: "Tokat TARSIM tarım sigortası - Dolu, don, su baskını, ürün sigortası. Yeni nesil tarımcılık, Voldem Sigorta", title: "Tokat TARSIM Tarım Sigortası | Voldem Sigorta" },
    { image: "/assets/slider/slider5.jpg", width: 800, height: 1200, alt: "Tokat kasko sigortası - Açılışa özel %10 indirim, yol yardım, taksit, 7/24 destek. Voldem Sigorta araç sigortası", title: "Tokat Kasko ve Araç Sigortası | Voldem Sigorta" },
    { image: "/assets/slider/slider1.jpg", width: 800, height: 1200, alt: "Geleceğine yatırım yap - Tokat sigorta acentesi Voldem Sigorta, açılışa özel %10 indirim", title: "Geleceğine Yatırım Yap | Voldem Sigorta Tokat" },
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
                            {SLIDES.map((slide, index) => (
                                <SwiperSlide key={slide.image}>
                                    <div className="main-slider__media main-slider__media--img" style={{ backgroundColor: "#f5f5f8" }}>
                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            title={slide.title}
                                            width={slide.width}
                                            height={slide.height}
                                            sizes="(max-width: 991px) 100vw, 50vw"
                                            priority={index === 0}
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
