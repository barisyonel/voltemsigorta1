'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onLCP } from 'web-vitals'

/**
 * Core Web Vitals (LCP, INP, CLS) takip bileşeni.
 * Dev'ta console'a yazar; production'da opsiyonel analytics endpoint'ine gönderebilir.
 */
function reportWebVitals(metric) {
  const { name, value, rating, id } = metric
  const payload = { name, value, rating, id }

  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`[Core Web Vitals] ${name}:`, value, `(${rating})`, payload)
  }

  const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT
  if (endpoint && typeof navigator?.sendBeacon === 'function') {
    const body = JSON.stringify(payload)
    navigator.sendBeacon(endpoint, body)
  }
}

export default function WebVitalsReporter() {
  useEffect(() => {
    onCLS(reportWebVitals)
    onINP(reportWebVitals)
    onLCP(reportWebVitals)
  }, [])

  return null
}
