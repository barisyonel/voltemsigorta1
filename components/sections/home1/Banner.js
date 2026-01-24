
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
            image: "/assets/images/voldem.png",
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

                                <div className="container">
                                    <div className="main-slider__content">
                                        <div className="main-slider__section-and-text">
                                            <div className="section-title text-left">
                                                <div className="section-title__tagline-box">
                                                    <p className="section-title__tagline">Voldem Sigorta</p>
                                                </div>
                                                <h2 className="section-title__title">{slide.title}
                                                    <br/> {slide.subtitle}
                                                    <br/> Hissedin!</h2>
                                            </div>
                                            <p className="main-slider__text">Hızlı ve güvenli sigortanın adresi.
                                                <br/> Tokat ve çevre illerde yanınızdayız.</p>
                                        </div>
                                        <div className="main-slider__btn-and-ratting-box">
                                            <div className="main-slider__btn-box">
                                                <Link href="sigorta" className="main-slider__btn thm-btn">Teklif Al</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
        </>
    )
}
