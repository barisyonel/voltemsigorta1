'use client'

import ProductCard from './ProductCard'

export default function ProductList({ 
    products = [], 
    onAddToCart, 
    onViewDetails,
    detailLinkPrefix = '/urun-detay',
    columns = {
        xl: 3,  // 3 columns on extra large screens (col-xl-4)
        lg: 3,  // 3 columns on large screens (col-lg-4)
        md: 2,  // 2 columns on medium screens (col-md-6)
        sm: 1   // 1 column on small screens (col-sm-12)
    },
    className = '',
    emptyMessage = 'No products available'
}) {
    // Handle empty products array
    if (!products || products.length === 0) {
        return (
            <div className={`product-list product-list--empty ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-list__empty-message">
                                <p>{emptyMessage}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Calculate Bootstrap column classes based on columns prop
    const getColumnClass = () => {
        const colClasses = []
        
        if (columns.xl) {
            const xlCols = 12 / columns.xl
            colClasses.push(`col-xl-${xlCols}`)
        }
        if (columns.lg) {
            const lgCols = 12 / columns.lg
            colClasses.push(`col-lg-${lgCols}`)
        }
        if (columns.md) {
            const mdCols = 12 / columns.md
            colClasses.push(`col-md-${mdCols}`)
        }
        if (columns.sm) {
            const smCols = 12 / columns.sm
            colClasses.push(`col-sm-${smCols}`)
        }
        
        // Default to col-12 if no columns specified
        if (colClasses.length === 0) {
            colClasses.push('col-12')
        }
        
        return colClasses.join(' ')
    }

    const columnClass = getColumnClass()

    const handleAddToCart = (product) => {
        if (onAddToCart) {
            onAddToCart(product)
        } else {
            // Default behavior: log to console or show alert
            console.log('Add to cart:', product)
        }
    }

    const handleViewDetails = (product) => {
        if (onViewDetails) {
            onViewDetails(product)
        }
    }

    const getDetailLink = (product) => {
        if (detailLinkPrefix && (product.id || product._id)) {
            return `${detailLinkPrefix}/${product.id || product._id}`
        }
        return null
    }

    return (
        <>
            <div className={`product-list ${className}`}>
                <div className="container">
                    <div className="row">
                        {products.map((product, index) => (
                            <div 
                                key={product.id || product._id || index} 
                                className={columnClass}
                            >
                                <div className="product-list__item">
                                    <ProductCard
                                        product={product}
                                        onAddToCart={handleAddToCart}
                                        onViewDetails={handleViewDetails}
                                        detailLink={getDetailLink(product)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .product-list {
                    padding: 40px 0;
                }

                .product-list__item {
                    margin-bottom: 30px;
                }

                .product-list--empty {
                    padding: 60px 0;
                }

                .product-list__empty-message {
                    text-align: center;
                    padding: 40px 20px;
                }

                .product-list__empty-message p {
                    font-size: 18px;
                    color: #666;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .product-list {
                        padding: 30px 0;
                    }

                    .product-list__item {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </>
    )
}
