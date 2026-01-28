export const CLOUDINARY_BASE_URL =
    "https://res.cloudinary.com/dznv8z7wo/image/upload"

/**
 * Cloudinary URL helper with optimization options
 * @param {string} path - Image path
 * @param {Object} options - Optimization options
 * @param {number} options.width - Image width in pixels
 * @param {number} options.height - Image height in pixels
 * @param {number} options.quality - Image quality (1-100, default: 80)
 * @param {string} options.format - Image format (auto, webp, avif, jpg, png)
 * @param {string} options.crop - Crop mode (fill, fit, scale, etc.)
 * @param {boolean} options.autoFormat - Auto format based on browser support (default: true)
 * @returns {string} Optimized Cloudinary URL
 */
export const cloudinaryUrl = (path, options = {}) => {
    if (!path) return path
    
    // If already a full URL, return as is (but can still add optimizations)
    if (path.startsWith("http://") || path.startsWith("https://")) {
        // If it's already a Cloudinary URL, we can add transformations
        if (path.includes("res.cloudinary.com")) {
            // Extract the path after /upload/
            const uploadIndex = path.indexOf("/upload/")
            if (uploadIndex !== -1) {
                const baseUrl = path.substring(0, uploadIndex + 8)
                const imagePath = path.substring(uploadIndex + 8)
                const transforms = buildTransforms(options)
                return transforms ? `${baseUrl}/${transforms}/${imagePath}` : path
            }
        }
        return path
    }

    const normalizedPath = path.startsWith("/") ? path.slice(1) : path
    const transforms = buildTransforms(options)
    
    return transforms 
        ? `${CLOUDINARY_BASE_URL}/${transforms}/${normalizedPath}`
        : `${CLOUDINARY_BASE_URL}/${normalizedPath}`
}

/**
 * Build Cloudinary transformation string
 * @param {Object} options - Transformation options
 * @returns {string} Transformation string
 */
function buildTransforms(options) {
    const transforms = []
    
    // Auto format for modern browsers (WebP/AVIF)
    if (options.autoFormat !== false) {
        transforms.push("f_auto")
    }
    
    // Quality (default: 80 for good balance)
    const quality = options.quality || 80
    transforms.push(`q_${quality}`)
    
    // Width
    if (options.width) {
        transforms.push(`w_${options.width}`)
    }
    
    // Height
    if (options.height) {
        transforms.push(`h_${options.height}`)
    }
    
    // Crop mode
    if (options.crop) {
        transforms.push(`c_${options.crop}`)
    } else if (options.width && options.height) {
        // Auto crop if both width and height specified
        transforms.push("c_fill")
    }
    
    // Format override
    if (options.format && options.format !== "auto") {
        // Replace f_auto if format is specified
        const autoIndex = transforms.indexOf("f_auto")
        if (autoIndex !== -1) {
            transforms[autoIndex] = `f_${options.format}`
        } else {
            transforms.push(`f_${options.format}`)
        }
    }
    
    return transforms.length > 0 ? transforms.join(",") : null
}

/**
 * Responsive image URL helper - returns optimized URL based on screen size
 * @param {string} path - Image path
 * @param {Object} sizes - Size options for different breakpoints
 * @returns {string} Optimized Cloudinary URL
 */
export const cloudinaryUrlResponsive = (path, sizes = {}) => {
    // Default sizes if not provided
    const defaultSizes = {
        mobile: 400,
        tablet: 800,
        desktop: 1200,
        ...sizes
    }
    
    // For now, return desktop size (can be enhanced with srcset)
    return cloudinaryUrl(path, {
        width: defaultSizes.desktop,
        quality: 80,
        autoFormat: true
    })
}
