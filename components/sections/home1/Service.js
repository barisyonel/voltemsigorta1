'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}

export default function Service() {
    const services = [
        {
            title: "Trafik Sigortası",
            href: "arac-sigortasi",
            image: "/assets/images/aracsigorta.png",
            icon: "icon-car-1",
        },
        {
            title: "Kasko",
            href: "kasko-sigortasi",
            image: "/assets/images/kasko.png",
            icon: "icon-family-insurance",
        },
        {
            title: "Tamamlayıcı Sağlık",
            href: "saglik-sigortasi",
            image: "/assets/images/tamamlayici.png",
            icon: "icon-healthcare",
        },
        {
            title: "Özel Sağlık",
            href: "saglik-sigortasi",
            image: "/assets/images/ozel.png",
            icon: "icon-healthcare",
        },
        {
            title: "Seyahat Sağlık",
            href: "saglik-sigortasi",
            image: "/assets/images/services/insurence-1-4.jpg",
            icon: "icon-healthcare",
        },
        {
            title: "DASK",
            href: "dask-sigortasi",
            image: "/assets/images/dask-1.png",
            icon: "icon-home-security",
        },
        {
            title: "Konut Sigortası",
            href: "konut-sigortasi",
            image: "/assets/images/konut.png",
            icon: "icon-home-security",
        },
        {
            title: "İşyeri Sigortası",
            href: "isyeri-sigortasi",
            image: "/assets/images/yangin.png",
            icon: "icon-risk-management",
        },
        {
            title: "Ferdi Kaza",
            href: "hayat-sigortasi",
            image: "/assets/images/hayat.png",
            icon: "icon-investment",
        },
        {
            title: "TARSİM",
            href: "sigorta",
            image: "/assets/images/tarsim.png",
            icon: "icon-protection",
        },
    ]
    return (
        <>

     {/* Services One Start  */}
        <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/services-one-shape-1.png" alt=""/>
            </div>
            <div className="services-one__shape-2 rotate-me">
                <img src="assets/images/shapes/services-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">HİZMETLERİMİZ</p>
                    </div>
                    <h2 className="section-title__title">Sigorta,
                        <br/> hayatınızın yatırımıdır!</h2>
                    <p className="section-title__text">Voldem Sigorta olarak hızlı, kolay ve güvenli bir hizmet sunuyoruz.
                        Tokat ve çevre illerde ihtiyaçlarınıza uygun sigorta seçeneklerini karşılaştırıyoruz.
                        Tokat DASK, Tokat araç kasko ve Tokat sağlık sigortası gibi kritik alanlarda net karşılaştırmalar
                        sunarak doğru poliçeyi seçmenize yardımcı oluyoruz.</p>
                </div>
                <div className="services-one__bottom">
                    <Swiper {...swiperOptions} className="services-one__carousel">
                            {services.map((service) => (
                                <SwiperSlide className="item" key={`${service.title}-${service.image}`}>
                                    <div className="services-one__single">
                                        <div className="services-one__title-box">
                                            <h3 className="services-one__title"><Link href={service.href}>{service.title}</Link>
                                            </h3>
                                        </div>
                                        <div className="services-one__img-box">
                                            <div className="services-one__img">
                                                <img src={service.image} alt={service.title}/>
                                            </div>
                                            <div className="services-one__icon">
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                        <div className="services-one__read-more">
                                            <Link href={service.href}>Detaylar<span className="icon-next"></span></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Services One End  */}
        </>
    )
}
