'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SonchoyPackCard({ 
    product, 
    onAddToCart, 
    onViewDetails, 
    detailLink,
    showBadge = true,
    badgeText = 'SONCHOY PACK'
}) {
    const { name, price, image, description, id, features, discount, originalPrice } = product || {}
    const [isFavorite, setIsFavorite] = useState(false)

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

    const toggleFavorite = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsFavorite(!isFavorite)
    }

    const hasDiscount = discount && originalPrice

    return (
        <>
            <div className="sonchoy-pack-card">
                <div className="sonchoy-pack-card__inner">
                    {/* Badge */}
                    {showBadge && (
                        <div className="sonchoy-pack-card__badge">
                            <span className="sonchoy-pack-card__badge-text">{badgeText}</span>
                        </div>
                    )}

                    {/* Discount Badge */}
                    {hasDiscount && (
                        <div className="sonchoy-pack-card__discount">
                            <span>{discount}% OFF</span>
                        </div>
                    )}

                    {/* Favorite Button */}
                    <button 
                        className={`sonchoy-pack-card__favorite ${isFavorite ? 'active' : ''}`}
                        onClick={toggleFavorite}
                        aria-label="Add to favorites"
                    >
                        <i className={`fas ${isFavorite ? 'fa-heart' : 'fa-heart'}`}></i>
                    </button>

                    {/* Product Image */}
                    <div className="sonchoy-pack-card__image-box">
                        <div className="sonchoy-pack-card__image">
                            {image ? (
                                <img 
                                    src={image} 
                                    alt={name || 'Sonchoy Pack Product'} 
                                    className="sonchoy-pack-card__img"
                                />
                            ) : (
                                <div className="sonchoy-pack-card__placeholder">
                                    <i className="fas fa-box"></i>
                                </div>
                            )}
                        </div>
                        {/* Hover overlay with buttons */}
                        <div className="sonchoy-pack-card__overlay">
                            <div className="sonchoy-pack-card__actions">
                                <button 
                                    className="sonchoy-pack-card__btn sonchoy-pack-card__btn--add"
                                    onClick={handleAddToCart}
                                    aria-label="Add to cart"
                                >
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Add to Cart</span>
                                </button>
                                {detailLink ? (
                                    <Link 
                                        href={detailLink}
                                        className="sonchoy-pack-card__btn sonchoy-pack-card__btn--view"
                                        aria-label="View details"
                                    >
                                        <i className="fas fa-eye"></i>
                                        <span>View Details</span>
                                    </Link>
                                ) : (
                                    <button 
                                        className="sonchoy-pack-card__btn sonchoy-pack-card__btn--view"
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
                    <div className="sonchoy-pack-card__content">
                        <h4 className="sonchoy-pack-card__title">
                            {name || 'Sonchoy Pack Product'}
                        </h4>
                        
                        {/* Features List */}
                        {features && Array.isArray(features) && features.length > 0 && (
                            <ul className="sonchoy-pack-card__features">
                                {features.slice(0, 3).map((feature, index) => (
                                    <li key={index} className="sonchoy-pack-card__feature-item">
                                        <i className="fas fa-check-circle"></i>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {description && (
                            <p className="sonchoy-pack-card__description">
                                {description}
                            </p>
                        )}

                        {/* Price Section */}
                        <div className="sonchoy-pack-card__price-section">
                            {hasDiscount && (
                                <span className="sonchoy-pack-card__original-price">
                                    ${typeof originalPrice === 'number' ? originalPrice.toFixed(2) : originalPrice}
                                </span>
                            )}
                            {price && (
                                <span className="sonchoy-pack-card__price">
                                    ${typeof price === 'number' ? price.toFixed(2) : price}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .sonchoy-pack-card {
                    position: relative;
                    display: block;
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 20px rgba(98, 34, 204, 0.1);
                    height: 100%;
                    border: 2px solid transparent;
                }

                .sonchoy-pack-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px rgba(98, 34, 204, 0.2);
                    border-color: var(--sonchoy-base);
                }

                .sonchoy-pack-card__inner {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    position: relative;
                }

                /* Badge */
                .sonchoy-pack-card__badge {
                    position: absolute;
                    top: 16px;
                    left: 16px;
                    z-index: 10;
                    background: linear-gradient(135deg, var(--sonchoy-base) 0%, #7c4dff 100%);
                    padding: 6px 14px;
                    border-radius: 20px;
                    box-shadow: 0 4px 12px rgba(98, 34, 204, 0.3);
                }

                .sonchoy-pack-card__badge-text {
                    color: #fff;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                /* Discount Badge */
                .sonchoy-pack-card__discount {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    z-index: 10;
                    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
                    padding: 6px 12px;
                    border-radius: 20px;
                    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
                }

                .sonchoy-pack-card__discount span {
                    color: #fff;
                    font-size: 12px;
                    font-weight: 700;
                }

                /* Favorite Button */
                .sonchoy-pack-card__favorite {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    z-index: 10;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.95);
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }

                .sonchoy-pack-card__discount ~ .sonchoy-pack-card__favorite {
                    top: 64px;
                }

                .sonchoy-pack-card__favorite:hover {
                    transform: scale(1.1);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .sonchoy-pack-card__favorite i {
                    color: #ccc;
                    font-size: 18px;
                    transition: all 0.3s ease;
                }

                .sonchoy-pack-card__favorite.active i,
                .sonchoy-pack-card__favorite:hover i {
                    color: #ff6b6b;
                }

                .sonchoy-pack-card__image-box {
                    position: relative;
                    width: 100%;
                    padding-top: 75%;
                    overflow: hidden;
                    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8f0 100%);
                }

                .sonchoy-pack-card__image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .sonchoy-pack-card__img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .sonchoy-pack-card:hover .sonchoy-pack-card__img {
                    transform: scale(1.08);
                }

                .sonchoy-pack-card__placeholder {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    color: #ccc;
                    font-size: 48px;
                }

                .sonchoy-pack-card__overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(98, 34, 204, 0.9) 0%, rgba(124, 77, 255, 0.9) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: 2;
                }

                .sonchoy-pack-card:hover .sonchoy-pack-card__overlay {
                    opacity: 1;
                }

                .sonchoy-pack-card__actions {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 20px;
                    width: 100%;
                }

                .sonchoy-pack-card__btn {
                    background-color: #fff;
                    color: var(--sonchoy-base);
                    border: none;
                    padding: 14px 28px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    text-decoration: none;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .sonchoy-pack-card__btn:hover {
                    background-color: var(--sonchoy-base);
                    color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(98, 34, 204, 0.3);
                }

                .sonchoy-pack-card__btn--add {
                    background: linear-gradient(135deg, var(--sonchoy-base) 0%, #7c4dff 100%);
                    color: #fff;
                }

                .sonchoy-pack-card__btn--add:hover {
                    background: linear-gradient(135deg, #7c4dff 0%, var(--sonchoy-base) 100%);
                    transform: translateY(-2px);
                }

                .sonchoy-pack-card__content {
                    padding: 24px;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .sonchoy-pack-card__title {
                    font-size: 20px;
                    font-weight: 700;
                    color: var(--sonchoy-black);
                    margin: 0 0 16px 0;
                    line-height: 1.4;
                }

                .sonchoy-pack-card__features {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 16px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .sonchoy-pack-card__feature-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    color: #555;
                }

                .sonchoy-pack-card__feature-item i {
                    color: var(--sonchoy-base);
                    font-size: 16px;
                    flex-shrink: 0;
                }

                .sonchoy-pack-card__description {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                    margin: 0 0 16px 0;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .sonchoy-pack-card__price-section {
                    display: flex;
                    align-items: baseline;
                    gap: 12px;
                    margin-top: auto;
                    padding-top: 16px;
                    border-top: 1px solid #eee;
                }

                .sonchoy-pack-card__price {
                    font-size: 28px;
                    font-weight: 800;
                    color: var(--sonchoy-base);
                    margin: 0;
                }

                .sonchoy-pack-card__original-price {
                    font-size: 18px;
                    font-weight: 500;
                    color: #999;
                    text-decoration: line-through;
                    margin: 0;
                }

                @media (max-width: 768px) {
                    .sonchoy-pack-card__actions {
                        flex-direction: row;
                        padding: 15px;
                    }

                    .sonchoy-pack-card__btn {
                        flex: 1;
                        padding: 12px 20px;
                        font-size: 12px;
                    }

                    .sonchoy-pack-card__content {
                        padding: 20px;
                    }

                    .sonchoy-pack-card__title {
                        font-size: 18px;
                    }

                    .sonchoy-pack-card__price {
                        font-size: 24px;
                    }

                    .sonchoy-pack-card__badge {
                        top: 12px;
                        left: 12px;
                        padding: 5px 12px;
                    }

                    .sonchoy-pack-card__badge-text {
                        font-size: 10px;
                    }
                }

                @media (max-width: 480px) {
                    .sonchoy-pack-card__actions {
                        flex-direction: column;
                    }

                    .sonchoy-pack-card__btn {
                        width: 100%;
                    }

                    .sonchoy-pack-card__price-section {
                        flex-direction: column;
                        gap: 6px;
                    }
                }
            `}</style>
        </>
    )
}
