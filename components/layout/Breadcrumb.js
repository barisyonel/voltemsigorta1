'use client'

import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import { useEffect, useState } from "react"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImage }) {
    const [imageSrc, setImageSrc] = useState(null)
    
    // Get the image URL
    const getImageUrl = () => {
        if (!breadcrumbImage) {
            return "/1045x820.png" // Local fallback
        }
        
        // If it's already a full URL (http/https), use it directly
        if (typeof breadcrumbImage === 'string' && (breadcrumbImage.startsWith('http://') || breadcrumbImage.startsWith('https://'))) {
            return breadcrumbImage
        }
        
        // If it starts with /, it's a local path - use directly
        if (breadcrumbImage.startsWith('/')) {
            return breadcrumbImage
        }
        
        // Otherwise, try Cloudinary
        return cloudinaryUrl(breadcrumbImage)
    }
    
    useEffect(() => {
        const imageUrl = getImageUrl()
        setImageSrc(imageUrl)
    }, [breadcrumbImage])
    
    const handleImageError = (e) => {
        // Silently handle image errors with fallback - use warn instead of error since fallback exists
        // Fallback to default image
        if (imageSrc !== "/1045x820.png") {
            setImageSrc("/1045x820.png")
        } else {
            // Use background-image as last resort
            e.target.style.display = 'none'
            e.target.parentElement.style.backgroundImage = `url("/1045x820.png")`
            e.target.parentElement.style.backgroundSize = 'cover'
            e.target.parentElement.style.backgroundPosition = 'center center'
            e.target.parentElement.style.backgroundRepeat = 'no-repeat'
        }
    }
    
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div className="page-header__layout">
                    <div className="page-header__bg">
                        {imageSrc && (
                            <img 
                                src={imageSrc} 
                                alt="" 
                                className="page-header__image"
                                style={{ 
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'center center',
                                    display: 'block',
                                    zIndex: 1,
                                }}
                                onError={handleImageError}
                            />
                        )}
                    </div>
                </div>
            </section>
            {/* Page Header End */}
            <style jsx>{`
                /* Mobil: görsel tam genişlikte, kesilmeden tam görünsün */
                @media only screen and (max-width: 767px) {
                    .page-header {
                        height: 320px !important;
                        min-height: 320px !important;
                        max-height: 320px !important;
                        overflow: hidden !important;
                        width: 100% !important;
                        max-width: 100vw !important;
                    }
                    .page-header__layout {
                        height: 320px !important;
                        min-height: 320px !important;
                        max-height: 320px !important;
                        overflow: hidden !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .page-header__bg {
                        height: 320px !important;
                        min-height: 320px !important;
                        max-height: 320px !important;
                        overflow: hidden !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        left: 0 !important;
                        right: 0 !important;
                    }
                    .page-header__image {
                        width: 100% !important;
                        height: 100% !important;
                        min-height: 320px !important;
                        max-width: 100% !important;
                        object-fit: contain !important;
                        object-position: center center !important;
                        display: block !important;
                    }
                }
                
                /* Tablet: görsel tam genişlikte, kesilmeden */
                @media only screen and (min-width: 768px) and (max-width: 991px) {
                    .page-header {
                        height: 400px !important;
                        min-height: 400px !important;
                        max-height: 400px !important;
                        overflow: hidden !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .page-header__layout {
                        height: 400px !important;
                        min-height: 400px !important;
                        max-height: 400px !important;
                        overflow: hidden !important;
                        width: 100% !important;
                    }
                    .page-header__bg {
                        height: 400px !important;
                        min-height: 400px !important;
                        max-height: 400px !important;
                        overflow: hidden !important;
                        width: 100% !important;
                    }
                    .page-header__image {
                        width: 100% !important;
                        height: 100% !important;
                        max-width: 100% !important;
                        object-fit: contain !important;
                        object-position: center center !important;
                        display: block !important;
                    }
                }
            `}</style>
        </>
    )
}
