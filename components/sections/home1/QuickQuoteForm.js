'use client'
import { useState } from "react"

const WHATSAPP_NUMBER = "905433950213"

const SIGORTA_CESITLERI = [
    { value: "", label: "Sigorta türü seçin" },
    { value: "Trafik Sigortası", label: "Trafik Sigortası" },
    { value: "Kasko Sigortası", label: "Kasko Sigortası" },
    { value: "DASK (Deprem)", label: "DASK (Deprem Sigortası)" },
    { value: "Konut Sigortası", label: "Konut Sigortası" },
    { value: "Sağlık Sigortası", label: "Sağlık Sigortası" },
    { value: "Hayat Sigortası", label: "Hayat Sigortası" },
    { value: "İş Yeri Sigortası", label: "İş Yeri Sigortası" },
    { value: "TARSİM (Tarım)", label: "TARSİM (Tarım Sigortası)" },
    { value: "Yol Yardım / Çekici", label: "Yol Yardım Paketleri" },
    { value: "Seyahat Sağlık", label: "Seyahat Sağlık Sigortası" },
    { value: "Ferdi Kaza", label: "Ferdi Kaza Sigortası" },
    { value: "Diğer", label: "Diğer" },
]

export default function QuickQuoteForm() {
    const [ad, setAd] = useState("")
    const [soyad, setSoyad] = useState("")
    const [telefon, setTelefon] = useState("")
    const [sigortaTuru, setSigortaTuru] = useState("")

    const goToWhatsApp = (e) => {
        e?.preventDefault?.()
        const lines = ["Merhaba, sigorta teklifi almak istiyorum."]
        if (sigortaTuru) lines.push(`Sigorta türü: ${sigortaTuru}`)
        if (ad || soyad) lines.push(`Ad Soyad: ${ad} ${soyad}`.trim())
        if (telefon) lines.push(`Telefon: ${telefon}`)
        const msg = encodeURIComponent(lines.join("\n\n"))
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
        if (typeof window !== "undefined") {
            window.location.assign(url)
        }
    }

    return (
        <form className="quick-quote-form" onSubmit={goToWhatsApp} aria-label="Hızlı sigorta teklifi formu">
            <label htmlFor="quick-quote-sigorta-turu" className="visually-hidden">Sigorta türü</label>
            <select
                id="quick-quote-sigorta-turu"
                className="quick-quote-form__select"
                value={sigortaTuru}
                onChange={(e) => setSigortaTuru(e.target.value)}
                aria-label="Sigorta türü seçin"
            >
                {SIGORTA_CESITLERI.map((opt) => (
                    <option key={opt.value || "default"} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Ad"
                value={ad}
                onChange={(e) => setAd(e.target.value)}
            />
            <input
                type="text"
                placeholder="Soyad"
                value={soyad}
                onChange={(e) => setSoyad(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Telefon"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
            />
            <button type="submit" className="thm-btn quick-quote-form__btn">
                Teklif Al
            </button>
        </form>
    )
}
