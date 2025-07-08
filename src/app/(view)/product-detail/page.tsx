"use client";

import React, { useState } from "react";
import { Image as AntImage } from "antd";
import Link from "next/link";
import "./index.scss";
import ProductCard from "@/components/ProductCard";

// Import product images
import mainImage from "/public/assets/image/One-Life-Graphic-T-shirt-main.png";
import frontImage from "/public/assets/image/One-Life-Graphic-T-shirt-little-front.png";
import backImage from "/public/assets/image/One-Life-Graphic-T-shirt-little-back.png";
import thirdImage from "/public/assets/image/One-Life-Graphic-T-shirt-little-3.png";

// Import related product images
import poloContrastImage from "/public/assets/image/Polo-with-Contrast-Trims.png";
import gradientGraphicImage from "/public/assets/image/Gradient-Graphic-T-shirt.png";
import poloTippingImage from "/public/assets/image/Polo-with-Tipping-Details.png";
import blackStripedImage from "/public/assets/image/Black-Striped-T-shirt.png";
import { Product } from "@/components/ProductCard/types";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(mainImage.src);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("#5F6F52");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("reviews");

  const colors = [
    { name: "Olive", value: "#5F6F52" },
    { name: "Forest", value: "#2C3639" },
    { name: "Navy", value: "#2B2A4C" },
  ];

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const thumbnails = [
    { src: mainImage.src, alt: "Main view" },
    { src: frontImage.src, alt: "Front view" },
    { src: backImage.src, alt: "Back view" },
    { src: thirdImage.src, alt: "Side view" },
  ];

  // Related products data
  const [relatedProducts] = useState<Product[]>([
    {
      id: "polo-contrast",
      image: poloContrastImage.src,
      title: "Polo with Contrast Trims",
      rating: 4.0,
      price: 212,
      originalPrice: 242,
      discountPercentage: 20,
    },
    {
      id: "gradient-graphic",
      image: gradientGraphicImage.src,
      title: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: 145,
    },
    {
      id: "polo-tipping",
      image: poloTippingImage.src,
      title: "Polo with Tipping Details",
      rating: 4.5,
      price: 180,
    },
    {
      id: "black-striped",
      image: blackStripedImage.src,
      title: "Black Striped T-shirt",
      rating: 5.0,
      price: 120,
      originalPrice: 150,
      discountPercentage: 30,
    },
  ]);

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 4.5,
      verified: true,
      date: "August 14, 2023",
      content:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      id: 2,
      name: "Alex M.",
      rating: 5,
      verified: true,
      date: "August 15, 2023",
      content:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: 4,
      verified: true,
      date: "August 16, 2023",
      content:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: 5,
      verified: true,
      date: "August 17, 2023",
      content:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      id: 5,
      name: "Liam K.",
      rating: 5,
      verified: true,
      date: "August 18, 2023",
      content:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 4.5,
      verified: true,
      date: "August 19, 2023",
      content:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    },
  ];

  const handleThumbnailClick = (src: string, index: number): void => {
    setSelectedImage(src);
    setSelectedThumbnailIndex(index);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="filled">
          ★
        </span>
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="half-filled">
          ★
        </span>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="separator">&gt;</span>
          <Link href="/category">Shop</Link>
          <span className="separator">&gt;</span>
          <Link href="/category">Men</Link>
          <span className="separator">&gt;</span>
          <span className="current">T-shirts</span>
        </div>

        <div className="product-content">
          {/* Product Gallery */}
          <div className="product-gallery">
            {/* Thumbnails on left */}
            <div className="gallery-thumbs vertical">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`thumb-item ${
                    selectedThumbnailIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleThumbnailClick(thumb.src, index)}
                >
                  <img src={thumb.src} alt={thumb.alt} />
                </div>
              ))}
            </div>

            {/* Main gallery */}
            <div className="gallery-main">
              <AntImage
                src={selectedImage}
                alt="ONE LIFE GRAPHIC T-SHIRT"
                className="gallery-image"
                preview={{ mask: "Click to preview" }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-title">ONE LIFE GRAPHIC T-SHIRT</h1>

            {/* Product Rating */}
            <div className="product-rating">
              <div className="stars">
                <span className="filled">★</span>
                <span className="filled">★</span>
                <span className="filled">★</span>
                <span className="filled">★</span>
                <span className="half-filled">★</span>
                <span className="rating-text">4.5/5</span>
              </div>
            </div>

            {/* Product Price */}
            <div className="product-pricing">
              <span className="current-price">$260</span>
              <span className="original-price">$300</span>
              <span className="discount-badge">-40%</span>
            </div>

            {/* Product Description */}
            <div className="product-description">
              <p>
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>

            {/* Color Selection */}
            <div className="color-selection">
              <h3>Select Colors</h3>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-btn ${
                      selectedColor === color.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    aria-label={`Color ${color.name}`}
                  >
                    {selectedColor === color.value && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6 9 17l-5-5"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="size-selection">
              <h3>Choose Size</h3>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  className="qty-btn decrease"
                  onClick={decrementQuantity}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="qty-btn increase"
                  onClick={incrementQuantity}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-btn ${activeTab === "details" ? "active" : ""}`}
              onClick={() => setActiveTab("details")}
            >
              Product Details
            </button>
            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Rating & Reviews
            </button>
            <button
              className={`tab-btn ${activeTab === "faqs" ? "active" : ""}`}
              onClick={() => setActiveTab("faqs")}
            >
              FAQs
            </button>
          </div>

          {/* Reviews Tab Content */}
          {activeTab === "reviews" && (
            <div className="reviews-section">
              <div className="reviews-header">
                <h2 className="reviews-title">
                  All Reviews <span className="reviews-count">(451)</span>
                </h2>

                <div className="reviews-actions">
                  <div className="filter-dropdown">
                    <button className="filter-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                      </svg>
                    </button>
                  </div>

                  <div className="sort-dropdown">
                    <button className="sort-btn">
                      Latest
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </div>

                  <button className="write-review-btn">Write a Review</button>
                </div>
              </div>

              <div className="reviews-grid">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="review-stars">
                        {renderStars(review.rating)}
                      </div>
                      <button className="review-options">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="6" cy="12" r="1" />
                          <circle cx="18" cy="12" r="1" />
                        </svg>
                      </button>
                    </div>

                    <div className="reviewer-info">
                      <h4 className="reviewer-name">
                        {review.name}
                        {review.verified && (
                          <span className="verified-badge">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </span>
                        )}
                      </h4>
                    </div>

                    <div className="review-content">
                      <p>{review.content}</p>
                    </div>

                    <div className="review-date">
                      <p>Posted on {review.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="load-more">
                <button className="load-more-btn">Load More Reviews</button>
              </div>
            </div>
          )}

          {/* Product Details Tab Content */}
          {activeTab === "details" && (
            <div className="details-section">
              <h3>Product Details</h3>
              <p>
                This premium graphic t-shirt features a unique design printed on
                high-quality fabric. The shirt is made from 100% organic cotton,
                providing exceptional comfort and durability.
              </p>
              <h4>Features:</h4>
              <ul>
                <li>100% organic cotton</li>
                <li>Ribbed crew neck</li>
                <li>Regular fit</li>
                <li>Machine washable</li>
                <li>Designed and printed in the USA</li>
              </ul>
            </div>
          )}

          {/* FAQs Tab Content */}
          {activeTab === "faqs" && (
            <div className="faqs-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>What sizes are available?</h4>
                <p>
                  Our t-shirts come in Small, Medium, Large, and X-Large sizes.
                </p>
              </div>
              <div className="faq-item">
                <h4>How do I care for this t-shirt?</h4>
                <p>
                  Machine wash cold with similar colors. Tumble dry low. Do not
                  bleach.
                </p>
              </div>
              <div className="faq-item">
                <h4>Is this t-shirt true to size?</h4>
                <p>
                  Yes, our t-shirts are designed with a regular fit thats true
                  to standard sizing.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* You Might Also Like Section */}
        <div className="related-products-section">
          <h2 className="section-title">YOU MIGHT ALSO LIKE</h2>
          <div className="related-products-grid">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                dataProduct={product}
                onClick={() => {
                  // Navigate to product detail would go here
                  console.log(`Clicked on product: ${product.title}`);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
