
'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { cloudinaryUrl } from "@/lib/cloudinary"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
}

export default function Banner() {
    const slides = [
        {
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540891/voldem_npvikt.png",
        },
    ]
    return (
        <>
            <section className="main-slider">
                <Swiper {...swiperOptions} className="banner-carousel">
                    {slides.map((slide) => (
                        <SwiperSlide className="slide-item" key={slide.image}>
                            <div
                                className="item main-slider__slide-1"
                                style={{ backgroundImage: "none" }}
                            >
                                <div className="main-slider__layout">
                                    <div className="main-slider__content">
                                        <h1 className="main-slider__title">
                                            Tokat'ta Güvenilir Sigorta Çözümleri
                                        </h1>
                                        <p className="main-slider__text">
                                            Trafik, kasko, konut, sağlık, hayat, DASK ve işletme sigortası için 
                                            Tokat'ın en güvenilir sigorta acentesi. Hızlı teklif, uygun prim, 
                                            güvenilir hizmet. Voldem Sigorta Tokat ile hayatınızı güvence altına alın.
                                        </p>
                                    </div>
                                    <div
                                        className="main-slider__media"
                                        style={{ backgroundImage: `url(${slide.image})` }}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}
