import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImage }) {
    // Use direct URL if provided, otherwise use cloudinaryUrl helper for fallback
    const headerImage = breadcrumbImage || cloudinaryUrl("/1045x820.png")
    
    // Ensure URL is properly formatted and encoded
    let imageUrl = headerImage ? headerImage.trim() : cloudinaryUrl("/1045x820.png")
    
    // Remove any extra quotes if present
    imageUrl = imageUrl.replace(/^["']|["']$/g, '')
    
    return (
        <>
            {/* Page Header Start */}
            <section className="page-header">
                <div className="page-header__layout">
                    <div
                        className="page-header__bg"
                        style={{
                            backgroundImage: `url("${imageUrl}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    </div>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        {breadcrumbTitle && (
                            <h2>{breadcrumbTitle}</h2>
                        )}
                    </div>
                </div>
            </section>
            {/* Page Header End */}

        </>
    )
}
