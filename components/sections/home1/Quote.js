'use client'
import { useState } from "react"

export default function Quote() {
    const [activeIndex, setActiveIndex] = useState(1)
    const whatsappNumber = "905433950213"
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const handleSubmit = (event, insuranceType) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = (formData.get("name") || "").toString().trim()
        const email = (formData.get("email") || "").toString().trim()
        const phone = (formData.get("phone") || "").toString().trim()
        const type = (formData.get("insuranceType") || "").toString().trim() || insuranceType

        const messageLines = [
            "Merhaba, teklif almak istiyorum.",
            `Sigorta türü: ${type}`,
            name ? `Ad Soyad: ${name}` : "",
            phone ? `Telefon: ${phone}` : "",
            email ? `E-posta: ${email}` : "",
        ].filter(Boolean)

        const message = encodeURIComponent(messageLines.join("\n"))
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
        event.currentTarget.reset()
    }
    return (
        <>
            {/* Get Quote Start  */}
        <section className="get-quote">
            <div className="get-quote__shape-4 float-bob-x">
                <img src="assets/images/shapes/get-quote-shape-4.png" alt=""/>
            </div>
            <div className="get-quote__shape-5 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-5.png" alt=""/>
            </div>
            <div className="get-quote__shape-7 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-7.png" alt=""/>
            </div>
            <div className="get-quote__shape-8 float-bob-x">
                <img src="assets/images/shapes/get-quote-shape-8.png" alt=""/>
            </div>
            <div className="get-quote__shape-9 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-9.png" alt=""/>
            </div>
            <div className="get-quote__shape-10 float-bob-x">
                <img src="assets/images/shapes/get-quote-shape-10.png" alt=""/>
            </div>
            <div className="get-quote__shape-11 float-bob-y">
                <img src="assets/images/shapes/get-quote-shape-11.png" alt=""/>
            </div>
            <div className="get-quote__img-1">
                <img src="assets/images/yangın.png" alt=""/>
            </div>
            <div className="get-quote__img-2">
                <img src="assets/images/hayat.png" alt=""/>
            </div>
            <div className="container">
                <div className="get-quote__inner">
                    <div className="row tabs-box">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-quote__left clearfix">
                                <div className="get-quote__shape-6 float-bob-y">
                                    <img src="assets/images/shapes/get-quote-shape-6.png" alt=""/>
                                </div>
                                <div className="get-quote__tab-box clearfix">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-life-insurance-1"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Hayat</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-insurance-1"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Araç</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-home-insurance"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Konut</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-briefcase"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">İşletme</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                            <div className="get-quote__tab-btn-content">
                                                <div className="get-quote__tab-icon">
                                                    <span className="icon-health-insurance"></span>
                                                </div>
                                                <div className="get-quote__tab-text-box">
                                                    <p className="get-quote__tab-text">Sağlık</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="get-quote__right">
                                <div className="get-quote__shape-1">
                                    <img src="assets/images/shapes/get-quote-shape-1.png" alt=""/>
                                </div>
                                <div className="get-quote__shape-2">
                                    <img src="assets/images/shapes/get-quote-shape-2.png" alt=""/>
                                </div>
                                <div className="get-quote__shape-3">
                                    <img src="assets/images/shapes/get-quote-shape-3.png" alt=""/>
                                </div>
                                <div className="tabs-content">
                                    {/* tab */}
                                    <div  className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">ÜCRETSİZ TEKLİF ALIN</p>
                                            <h2 className="get-quote__title">Hayat Sigortası</h2>
                                            <form className="get-quote__form" onSubmit={(event) => handleSubmit(event, "Hayat Sigortası")}>
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Adınız Soyadınız" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="E-posta Adresi" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Telefon Numarası" name="phone"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Sigorta Türü" name="insuranceType"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">WHATSAPP'TAN
                                                        TEKLİF AL</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">ÜCRETSİZ TEKLİF ALIN</p>
                                            <h2 className="get-quote__title">Araç Sigortası</h2>
                                            <form className="get-quote__form" onSubmit={(event) => handleSubmit(event, "Araç Sigortası")}>
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Adınız Soyadınız" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="E-posta Adresi" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Telefon Numarası" name="phone"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Sigorta Türü" name="insuranceType"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">WHATSAPP'TAN
                                                        TEKLİF AL</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">ÜCRETSİZ TEKLİF ALIN</p>
                                            <h2 className="get-quote__title">Konut Sigortası</h2>
                                            <form className="get-quote__form" onSubmit={(event) => handleSubmit(event, "Konut Sigortası")}>
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Adınız Soyadınız" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="E-posta Adresi" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Telefon Numarası" name="phone"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Sigorta Türü" name="insuranceType"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">WHATSAPP'TAN
                                                        TEKLİF AL</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 4 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">ÜCRETSİZ TEKLİF ALIN</p>
                                            <h2 className="get-quote__title">İşletme Sigortası</h2>
                                            <form className="get-quote__form" onSubmit={(event) => handleSubmit(event, "İşletme Sigortası")}>
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Adınız Soyadınız" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="E-posta Adresi" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Telefon Numarası" name="phone"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Sigorta Türü" name="insuranceType"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">WHATSAPP'TAN
                                                        TEKLİF AL</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* tab */}
                                    <div  className={activeIndex == 5 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                        <div className="get-quote__content">
                                            <p className="get-quote__tagline">ÜCRETSİZ TEKLİF ALIN</p>
                                            <h2 className="get-quote__title">Sağlık Sigortası</h2>
                                            <form className="get-quote__form" onSubmit={(event) => handleSubmit(event, "Sağlık Sigortası")}>
                                                <div className="get-quote__content-box">
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Adınız Soyadınız" name="name"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="email" placeholder="E-posta Adresi" name="email"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Telefon Numarası" name="phone"/>
                                                    </div>
                                                    <div className="get-quote__input-box">
                                                        <input type="text" placeholder="Sigorta Türü" name="insuranceType"/>
                                                    </div>
                                                </div>
                                                <div className="get-quote__content-bottom">
                                                    <button type="submit" className="thm-btn get-quote__btn">WHATSAPP'TAN
                                                        TEKLİF AL</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Get Quote End  */}
        </>
    )
}
