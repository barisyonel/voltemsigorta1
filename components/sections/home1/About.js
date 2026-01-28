'use client'
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"

export default function About() {
    return (
        <>

        {/* About One Start  */}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <img src="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540886/1045x820_pwgxg9.png" alt="Voldem Sigorta Tokat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">Sigortanın Adresi</p>
                                </div>
                                <h1 className="section-title__title">Sigortanızla
                                    Hayatınızı Koruyun!</h1>
                            </div>
                            <p className="about-one__text-1">Sigorta, belirli bir risk karşısında kişilerin veya
                                kuruluşların maddi zararlarını korumak için yapılan sözleşmeye dayalı
                                bir finansal üründür.</p>
                            <p className="about-one__text-1">Voldem Sigorta olarak hızlı, kolay ve güvenli hizmet
                                sunmayı hedefliyoruz. <strong>Tokat DASK</strong>, <strong>Tokat araç kasko</strong> ve
                                <strong> Tokat sağlık sigortası</strong> gibi ihtiyaçlarda, Tokat ve çevre illerde en
                                doğru sigorta çözümlerini karşılaştırarak sizin için uygun seçeneği belirliyoruz.</p>
                            <div className="about-one__text-box">
                                <div className="about-one__text-box-icon">
                                    <span className="icon-file-1"></span>
                                </div>
                                <p className="about-one__text-box-text">Voldem Sigorta olarak hızın, işlemleri kolayca
                                    yapmanın ve her zaman yanınızda olmanın ne kadar önemli olduğunu biliyoruz.</p>
                            </div>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Hızlı ve Güvenli İşlem</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>İhtiyaca Uygun Çözümler</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Güvenilir Hizmet</p>
                                </li>
                            </ul>
                            <div className="about-one__btn-and-contact">
                                <div className="about-one__btn-box">
                                    <Link href="hakkimizda" className="about-one__btn thm-btn">Daha Fazlası</Link>
                                </div>
                                <div className="about-one__contact">
                                    <div className="icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="content">
                                    <span>Bizi Arayın</span>
                                    <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About One End  */}
        </>
    )
}
