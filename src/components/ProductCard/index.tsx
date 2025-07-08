"use client";

import React, { useMemo } from "react";
import "./index.scss";
import { Product } from "@/model/Product";

// Default currency symbol
const DEFAULT_CURRENCY = "$";

interface ProductCardProps {
  dataProduct: Product;
  onClick?: () => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  dataProduct,
  onClick,
  className = "",
}) => {
  // Extract data with defaults for missing dataProduct
  const id = dataProduct?.id;
  const image = dataProduct?.image;
  const title = dataProduct?.title || "";
  const rating = dataProduct?.rating || 0;
  const price = dataProduct?.price;
  const originalPrice = dataProduct?.originalPrice;
  const discountPercentage = dataProduct?.discountPercentage;

  // Memoize stars to prevent unnecessary re-renders
  const stars = useMemo(() => {
    if (!id) return []; // Return empty array if no id

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    const result = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      result.push(
        <svg
          key={`full-${i}`}
          className="star star-full"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    // Half star
    if (hasHalfStar) {
      const halfStarId = `half-star-${id}`;
      result.push(
        <svg key="half" className="star star-half" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={halfStarId}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#${halfStarId})`}
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      result.push(
        <svg
          key={`empty-${i}`}
          className="star star-empty"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    return result;
  }, [id, rating]);

  // Render nothing if critical data is missing
  if (!dataProduct || !image || !price) {
    return null;
  }

  return (
    <div
      className={`product-card ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-rating">
          <div className="stars-container">{stars}</div>
          <span className="rating-text">{rating}/5</span>
        </div>

        <div className="product-pricing">
          <span className="current-price">
            {DEFAULT_CURRENCY}
            {price}
          </span>
          {originalPrice && (
            <span className="original-price">
              {DEFAULT_CURRENCY}
              {originalPrice}
            </span>
          )}
          {discountPercentage && (
            <span className="discount-badge">-{discountPercentage}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
