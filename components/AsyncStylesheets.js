'use client'

/* Sadece animasyon stilleri async - ikon fontları (Font Awesome, sonchoy-icon) 
   sync yüklenmeli, yoksa mobilde görünmezler */
const STYLES = [
    '/assets/vendors/animate/animate.min.css',
    '/assets/vendors/animate/custom-animate.css',
]

export default function AsyncStylesheets() {
    return (
        <>
            {STYLES.map((href) => (
                <link
                    key={href}
                    rel="stylesheet"
                    href={href}
                    media="print"
                    onLoad={(e) => { e.currentTarget.media = 'all'; }}
                />
            ))}
            <noscript>
                {STYLES.map((href) => (
                    <link key={href} rel="stylesheet" href={href} />
                ))}
            </noscript>
        </>
    )
}
