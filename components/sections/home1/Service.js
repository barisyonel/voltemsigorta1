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
                </div>
                <div className="services-one__bottom">
                    <Swiper {...swiperOptions} className="services-one__carousel">
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="arac-sigortasi">Kasko Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/kasko.png" alt="Kasko Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="arac-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="arac-sigortasi">Trafik Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/trafik.png" alt="Trafik Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="arac-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="konut-sigortasi">Konut Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/konut.png" alt="Konut Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="konut-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="konut-sigortasi">DASK Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/dask-1.png" alt="DASK Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-family-insurance"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="konut-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="hayat-sigortasi">Hayat Sigortası</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/hayat.png" alt="Hayat Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-healthcare"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="hayat-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                            {/* Services One Single Start */}
                            <SwiperSlide className="item">
                                <div className="services-one__single">
                                    <div className="services-one__title-box">
                                        <h3 className="services-one__title"><Link href="saglik-sigortasi">Özel Sağlık</Link>
                                        </h3>
                                    </div>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src="/assets/images/ozel.png" alt="Özel Sağlık Sigortası"/>
                                        </div>
                                        <div className="services-one__icon">
                                            <span className="icon-risk-management"></span>
                                        </div>
                                    </div>
                                    <div className="services-one__read-more">
                                        <Link href="saglik-sigortasi">Detaylar<span className="icon-next"></span></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* Services One Single End */}
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Services One End  */}
        </>
    )
}
