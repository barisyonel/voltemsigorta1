'use client'

import Link from 'next/link'

export default function ProductCard({ product, onAddToCart, onViewDetails, detailLink }) {
    const { name, price, image, description, id } = product || {}

    const handleAddToCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (onAddToCart) {
            onAddToCart(product)
        }
    }

    const handleViewDetails = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (onViewDetails) {
            onViewDetails(product)
        }
    }

    return (
        <>
            <div className="product-card">
                <div className="product-card__inner">
                    {/* Product Image */}
                    <div className="product-card__image-box">
                        <div className="product-card__image">
                            {image ? (
                                <img 
                                    src={image} 
                                    alt={name || 'Product'} 
                                    className="product-card__img"
                                />
                            ) : (
                                <div className="product-card__placeholder">
                                    <i className="fas fa-image"></i>
                                </div>
                            )}
                        </div>
                        {/* Hover overlay with buttons */}
                        <div className="product-card__overlay">
                            <div className="product-card__actions">
                                <button 
                                    className="product-card__btn product-card__btn--add"
                                    onClick={handleAddToCart}
                                    aria-label="Add to cart"
                                >
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Add to Cart</span>
                                </button>
                                {detailLink ? (
                                    <Link 
                                        href={detailLink}
                                        className="product-card__btn product-card__btn--view"
                                        aria-label="View details"
                                    >
                                        <i className="fas fa-eye"></i>
                                        <span>View Details</span>
                                    </Link>
                                ) : (
                                    <button 
                                        className="product-card__btn product-card__btn--view"
                                        onClick={handleViewDetails}
                                        aria-label="View details"
                                    >
                                        <i className="fas fa-eye"></i>
                                        <span>View Details</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Product Content */}
                    <div className="product-card__content">
                        <h4 className="product-card__title">
                            {name || 'Product Name'}
                        </h4>
                        {price && (
                            <p className="product-card__price">
                                ${typeof price === 'number' ? price.toFixed(2) : price}
                            </p>
                        )}
                        {description && (
                            <p className="product-card__description">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .product-card {
                    position: relative;
                    display: block;
                    background-color: #fff;
                    border-radius: 8px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    height: 100%;
                }

                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                }

                .product-card__inner {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .product-card__image-box {
                    position: relative;
                    width: 100%;
                    padding-top: 75%;
                    overflow: hidden;
                    background-color: #f5f5f5;
                }

                .product-card__image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .product-card__img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .product-card:hover .product-card__img {
                    transform: scale(1.05);
                }

                .product-card__placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    color: #ccc;
                    font-size: 48px;
                }

                .product-card__overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    z-index: 2;
                }

                .product-card:hover .product-card__overlay {
                    opacity: 1;
                }

                .product-card__actions {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 20px;
                    width: 100%;
                }

                .product-card__btn {
                    background-color: #fff;
                    color: #333;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-decoration: none;
                }

                .product-card__btn:hover {
                    background-color: var(--sonchoy-base);
                    color: #fff;
                    transform: translateY(-2px);
                }

                .product-card__btn--add {
                    background-color: var(--sonchoy-base);
                    color: #fff;
                }

                .product-card__btn--add:hover {
                    background-color: #4a1fa0;
                }

                .product-card__content {
                    padding: 20px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .product-card__title {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--sonchoy-black);
                    margin: 0 0 12px 0;
                    line-height: 1.4;
                }

                .product-card__price {
                    font-size: 20px;
                    font-weight: 700;
                    color: var(--sonchoy-base);
                    margin: 0 0 12px 0;
                }

                .product-card__description {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                    margin: 0;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (max-width: 768px) {
                    .product-card__actions {
                        flex-direction: row;
                        padding: 15px;
                    }

                    .product-card__btn {
                        flex: 1;
                        padding: 10px 16px;
                        font-size: 12px;
                    }

                    .product-card__content {
                        padding: 16px;
                    }

                    .product-card__title {
                        font-size: 16px;
                    }

                    .product-card__price {
                        font-size: 18px;
                    }
                }

                @media (max-width: 480px) {
                    .product-card__actions {
                        flex-direction: column;
                    }

                    .product-card__btn {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    )
}
