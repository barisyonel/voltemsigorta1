import { Syne, DM_Sans } from 'next/font/google'

// display: 'swap' - font yüklenene kadar fallback gösterir, LCP iyileştirir
export const dm_sans = DM_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    variable: "--sonchoy-font",
    display: 'swap',
    preload: true,
})
export const syne = Syne({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: "--sonchoy-font-two",
    display: 'swap',
    preload: true,
})
