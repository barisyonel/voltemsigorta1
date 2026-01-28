'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
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
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function ClientSlider1() {
    const logos = [
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540919/hdi_logo_j3gmjj.png",
            alt: "HDI Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540908/ak-sigorta_nshxel.png",
            alt: "Ak Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540909/Axa_tahn02.png",
            alt: "AXA Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540908/allianz_logo_rhlrmh.webp",
            alt: "Allianz Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540908/108_v2rgdb.png",
            alt: "Anadolu Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540927/t_kd2iji.jpg",
            alt: "Türkiye Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540934/unico_sigorta_logo_sibers.jpg",
            alt: "Unico Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540936/zurich-sigorta_a0fvlh.png",
            alt: "Zurich Sigorta",
        },
        {
            src: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540926/ray_uq6bbi.png",
            alt: "Ray Sigorta",
        },
    ]

    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {logos.map((logo) => (
                    <SwiperSlide className="slide-item" key={logo.src}>
                        <figure className="image-box">
                            <Link href="#"><img src={logo.src} alt={logo.alt} /></Link>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
