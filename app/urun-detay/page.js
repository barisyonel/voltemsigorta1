'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { cloudinaryUrl } from "@/lib/cloudinary"
import { useState, useEffect } from "react"
import { Navigation, Pagination, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

export default function Home() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [showSuccess, setShowSuccess] = useState(false)
    
    // Product details
    const productName = "School Bag"
    const productPrice = 19.99
    const totalPrice = (productPrice * quantity).toFixed(2)

    const productImages = [
        cloudinaryUrl("assets/images/shop/product-details-top-img-1.jpg"),
        cloudinaryUrl("assets/images/shop/shop-product-1-1.jpg"),
        cloudinaryUrl("assets/images/shop/shop-product-1-2.jpg"),
        cloudinaryUrl("assets/images/shop/shop-product-1-3.jpg"),
    ]

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'School Bag',
                text: 'Check out this amazing product!',
                url: window.location.href,
            }).catch((err) => console.log('Error sharing', err))
        } else {
            // Fallback: Copy to clipboard
            navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }

    const handleBuyNow = () => {
        setIsModalOpen(true)
        setShowSuccess(false)
        setQuantity(1)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setShowSuccess(false)
        setQuantity(1)
    }

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value) || 1
        if (value >= 1 && value <= 10) {
            setQuantity(value)
        }
    }

    const handleQuantityDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleQuantityIncrease = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // Simulate form submission
        setShowSuccess(true)
        // Close modal after 2 seconds
        setTimeout(() => {
            setIsModalOpen(false)
            setShowSuccess(false)
            setQuantity(1)
        }, 2000)
    }

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    const handleAddToCart = () => {
        // Handle add to cart action
        alert('Product added to cart!')
    }

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Product Details">     
        {/* Product Details Start */}
        <section className="product-details">
            <div className="container">
                <div className="product-details__top">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="product-details__top-left">
                                {/* Main Product Image Carousel */}
                                <div className="product-details__carousel-wrapper">
                                    <Swiper
                                        modules={[Navigation, Pagination, Thumbs]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation={{
                                            nextEl: '.product-carousel-next',
                                            prevEl: '.product-carousel-prev',
                                        }}
                                        pagination={{
                                            clickable: true,
                                            el: '.product-carousel-pagination',
                                        }}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                        className="product-details__main-carousel"
                                    >
                                        {productImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="product-details__top-img">
                                                    <img src={image} alt={`Product image ${index + 1}`} />
                                                </div>
                                                <div className="product-details__search">
                                                    <Link href={image} className="img-popup">
                                                        <span className="icon-search"></span>
                                                    </Link>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    
                                    {/* Navigation Buttons */}
                                    <div className="product-carousel-nav">
                                        <button type="button" className="product-carousel-prev">
                                            <span>‹</span>
                                        </button>
                                        <button type="button" className="product-carousel-next">
                                            <span>›</span>
                                        </button>
                                    </div>
                                    
                                    {/* Pagination */}
                                    <div className="product-carousel-pagination"></div>

                                    {/* Thumbnail Carousel */}
                                    <Swiper
                                        modules={[Thumbs]}
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        className="product-details__thumb-carousel"
                                    >
                                        {productImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className={`product-thumb ${activeIndex === index ? 'active' : ''}`}>
                                                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="product-details__top-right">
                                <h3 className="product-details__title">School Bag</h3>
                                <div className="product-details__reveiw">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <span>(25 Customer Review)</span>
                                </div>
                                <div className="product-details__doller">
                                    <h3>$19.99</h3>
                                </div>
                                <p className="product-details__text">In today's online world, a brand's success lies in
                                    combining
                                    <br/> technological planning and social strategies to draw
                                    <br/> customers in–and keep them coming back</p>
                                <div className="product-details__quantity">
                                    <h3 className="product-details__quantity-title">Size & Fit</h3>
                                    <p className="product-details__quantity-text">The model (height 6′) is perfect for you
                                    </p>
                                    <div className="product-details__quantity-and-btn">
                                        <div className="quantity-box">
                                            <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                            <input type="number" id="4" value="4" />
                                            <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="product-details__action-buttons">
                                        <button 
                                            onClick={handleBuyNow}
                                            className="product-details__buy-now-btn thm-btn"
                                        >
                                            Buy Now
                                        </button>
                                        <button 
                                            onClick={handleAddToCart}
                                            className="product-details__cart-btn thm-btn"
                                        >
                                            Add to Cart
                                        </button>
                                        <button 
                                            onClick={handleShare}
                                            className="product-details__share-btn thm-btn"
                                        >
                                            <span className="icon-share"></span> Share
                                        </button>
                                    </div>
                                </div>
                                <div className="product-details__category">
                                    <ul className="product-details__category-list list-unstyled">
                                        <li>
                                            <p><span>SKU:</span>124224</p>
                                        </li>
                                        <li>
                                            <p><span>Category:</span>Crux Indoor Fast and Easy</p>
                                        </li>
                                        <li>
                                            <p><span>Tag:</span>accessories, business</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-details__social">
                                    <span>Share:</span>
                                    <Link href="#"><span className="icon-facebook-app-symbol"></span></Link>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-youtube"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details__text-box">
                    <h3>Our Description</h3>
                    <p className="product-details__text-box-text-1">At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                        dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                        dolorum fuga similique sunt in culpa qui officia deserunt</p>
                </div>
                <div className="product-details__client-review-box">
                    <h3 className="product-details__client-review-title">Client Reviews</h3>
                    <div className="product-details__client-review">
                        <div className="product-details__client-img">
                            <img src={cloudinaryUrl("assets/images/shop/product-details-client-img.jpg")} alt=""/>
                        </div>
                        <div className="product-details__client-content">
                            <p><span>by David Parker / </span>March 28, 2022</p>
                            <div className="product-details__client-ratting">
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                                <span className="icon-star-1"></span>
                            </div>
                            <p className="product-details__client-text">Elementum tempus egestas sed sed risus pretium quam
                                vulputate dignissim. Dictum at tempor commodo ullamcorper. Sed risus pretium
                                quam vulputate dignissim suspendisse. Habitasse platea dictumst quisque</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Product Details End */}

        {/* Start Review Form */}
        <section className="review-form-one">
            <div className="container">
                <div className="review-form-one__inner">
                    <h3 className="review-form-one__title">Add Your Review</h3>
                    <form action="assets/inc/sendemail.php" className="review-form-one__form contact-form-validated">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="review-form-one__input-box text-message-box">
                                    <textarea name="message" placeholder="Write Your Meassage"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="review-form-one__input-box">
                                    <input type="text" placeholder="Your Name" name="name"/>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="review-form-one__input-box">
                                    <input type="email" placeholder="Your Email" name="email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <button type="submit" className="thm-btn review-form-one__btn">SUBMIT</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        {/* End Review Form */}

        {/* Buy Now Modal */}
        {isModalOpen && (
            <div className="buy-now-modal-overlay" onClick={handleCloseModal}>
                <div className="buy-now-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="buy-now-modal-close" onClick={handleCloseModal}>
                        <span>×</span>
                    </button>
                    {!showSuccess ? (
                        <>
                            <h3 className="buy-now-modal-title">Buy Now</h3>
                            <form onSubmit={handleFormSubmit} className="buy-now-modal-form">
                                <div className="buy-now-form-group">
                                    <label htmlFor="product-name">Product Name</label>
                                    <input
                                        type="text"
                                        id="product-name"
                                        value={productName}
                                        readOnly
                                        className="buy-now-input-readonly"
                                    />
                                </div>
                                <div className="buy-now-form-group">
                                    <label htmlFor="quantity">Quantity</label>
                                    <div className="buy-now-quantity-box">
                                        <button
                                            type="button"
                                            className="buy-now-quantity-btn"
                                            onClick={handleQuantityDecrease}
                                            disabled={quantity <= 1}
                                        >
                                            <i className="fa fa-minus"></i>
                                        </button>
                                        <input
                                            type="number"
                                            id="quantity"
                                            min="1"
                                            max="10"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            className="buy-now-quantity-input"
                                        />
                                        <button
                                            type="button"
                                            className="buy-now-quantity-btn"
                                            onClick={handleQuantityIncrease}
                                            disabled={quantity >= 10}
                                        >
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="buy-now-form-group">
                                    <label htmlFor="total-price">Total Price</label>
                                    <input
                                        type="text"
                                        id="total-price"
                                        value={`$${totalPrice}`}
                                        readOnly
                                        className="buy-now-input-readonly buy-now-total-price"
                                    />
                                </div>
                                <button type="submit" className="thm-btn buy-now-submit-btn">
                                    Submit
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="buy-now-success-message">
                            <div className="buy-now-success-icon">
                                <i className="fa fa-check-circle"></i>
                            </div>
                            <h3>Order Placed Successfully!</h3>
                            <p>Thank you for your purchase. Your order has been received.</p>
                        </div>
                    )}
                </div>
            </div>
        )}

            </Layout>
        </>
    )
}
