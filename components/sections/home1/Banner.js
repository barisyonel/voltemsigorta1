
'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            image: "/1045x820.png",
            title: "Trafik Sigortasında",
            subtitle: "Güvenli Sürüş",
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
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >

                                <div className="container"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}
