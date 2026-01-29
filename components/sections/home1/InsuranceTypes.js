'use client'
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"

export default function InsuranceTypes() {
    const insuranceTypes = [
        {
            title: "Trafik Sigortası",
            href: "/arac-sigortasi",
            icon: "icon-car-1",
        },
        {
            title: "Deprem Sigortası",
            subtitle: "(DASK)",
            href: "/dask-sigortasi",
            icon: "icon-home-security",
        },
        {
            title: "Kasko Sigortası",
            href: "/kasko-sigortasi",
            icon: "icon-family-insurance",
        },
        {
            title: "Sağlık Sigortası",
            href: "/saglik-sigortasi",
            icon: "icon-healthcare",
        },
        {
            title: "Yol Yardım Paketleri",
            subtitle: "(Çekici)",
            href: "/iletisim",
            icon: "icon-car-1",
        },
        {
            title: "Ferdi Kaza Sigortası",
            href: "/hayat-sigortasi",
            icon: "icon-investment",
        },
        {
            title: "Seyahat Sağlık Sigortası",
            href: "/saglik-sigortasi",
            icon: "icon-healthcare",
        },
        {
            title: "TARSİM Sigortası",
            href: "/iletisim",
            icon: "icon-protection",
        },
        {
            title: "Makine Montaj Sigortası",
            href: "/iletisim",
            icon: "icon-risk-management",
        },
        {
            title: "İş Yeri Sigortaları",
            href: "/isyeri-sigortasi",
            icon: "icon-risk-management",
        },
        {
            title: "IMM Sigortası",
            href: "/iletisim",
            icon: "icon-car-1",
        },
        {
            title: "Hayat Sigortası",
            href: "/hayat-sigortasi",
            icon: "icon-investment",
        },
    ]

    return (
        <>
            {/* Insurance Types Start */}
            <section className="insurance-types">
                <div className="container">
                    <div className="section-title text-center insurance-types__header">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline insurance-types__tagline">
                                SİGORTA ÇEŞİTLERİMİZ
                            </p>
                        </div>
                        <h2 className="section-title__title insurance-types__main-title">
                            Voldem Sigorta Tokat olarak,<br />
                            tüm sigorta branşlarında sizlere en iyi hizmeti sunuyoruz.
                        </h2>
                    </div>
                    <div className="row insurance-types__grid">
                        {insuranceTypes.map((insurance, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={index}>
                                <Link href={insurance.href} className="insurance-types__card">
                                    <div className="insurance-types__icon">
                                        <span className={insurance.icon}></span>
                                    </div>
                                    <h3 className="insurance-types__title">
                                        {insurance.title}
                                        {insurance.subtitle && (
                                            <span className="insurance-types__subtitle">
                                                {insurance.subtitle}
                                            </span>
                                        )}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Insurance Types End */}
        </>
    )
}
