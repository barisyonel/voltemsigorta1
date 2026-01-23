'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }



}




export default function Brand() {
    return (
        <>
        {/* Brand One Start */}
        <section className="brand-one">
            <div className="container">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/kasko.png" alt="Kasko Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/trafik.png" alt="Trafik Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/konut.png" alt="Konut Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/tarsim.png" alt="TARSİM Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/voldem.png" alt="Voldem Sigorta Tokat"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/kasko.png" alt="Kasko Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/trafik.png" alt="Trafik Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/konut.png" alt="Konut Sigortası"/>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <img src="/assets/images/tarsim.png" alt="TARSİM Sigortası"/>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
        {/* Brand One End */}
        </>
    )
}
