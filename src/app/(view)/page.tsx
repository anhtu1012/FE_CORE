"use client";
import "./index.scss";
import ProductCard from "@/components/ProductCard";
import heroImage from "/public/assets/image/trendy-fashionable-posing.jpg";
import versaceLogo from "/public/assets/image/versace-logo.png";
import zaraLogo from "/public/assets/image/zara-logo.png";
import gucciLogo from "/public/assets/image/gucci-logo.png";
import pradaLogo from "/public/assets/image/prada-logo.png";
import calvinKleinLogo from "/public/assets/image/calvinklein-logo.png";

// Product Images
import tshirtTapeDetails from "/public/assets/image/T-SHIRT-WITH-TAPE-DETAILS.png";
import skinnyFitJeans from "/public/assets/image/SKINNY-FIT-JEANS.png";
import checkeredShirt from "/public/assets/image/CHECKERED-SHIRT.png";
import sleeveStripedTshirt from "/public/assets/image/SLEEVE-STRIPED-T-SHIRT.png";
import verticalStripedShirt from "/public/assets/image/VERTICAL-STRIPED-SHIRT.png";
import courageGraphicTshirt from "/public/assets/image/COURAGE-GRAPHIC-T-SHIRT.png";
import looseFitBermudaShorts from "/public/assets/image/LOOSE-FIT-BERMUDA-SHORTS.png";
import fadedSkinnyJeans from "/public/assets/image/FADED-SKINNY-JEANS.png";

// Style Images
import casualStyle from "/public/assets/image/Casual-STYLE.png";
import formalStyle from "/public/assets/image/Formal-STYLE.png";
import partyStyle from "/public/assets/image/Party-STYLE.png";
import gymStyle from "/public/assets/image/Gym-STYLE.png";
import { useState } from "react";
import { Product } from "@/components/ProductCard/types";

export default function Page() {
  const [newArrivalsProducts] = useState<Product[]>([
    {
      id: 1,
      image: tshirtTapeDetails.src,
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
    },
    {
      id: 2,
      image: skinnyFitJeans.src,
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discountPercentage: 20,
    },
    {
      id: 3,
      image: checkeredShirt.src,
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
    },
    {
      id: 4,
      image: sleeveStripedTshirt.src,
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discountPercentage: 30,
    },
  ]);

  const topSellingProducts = [
    {
      id: 5,
      image: verticalStripedShirt.src,
      title: "Vertical Striped Shirt",
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discountPercentage: 20,
      onClick: () => console.log("Product 5 clicked"),
    },
    {
      id: 6,
      image: courageGraphicTshirt.src,
      title: "Courage Graphic T-shirt",
      rating: 4.0,
      price: 145,
      onClick: () => console.log("Product 6 clicked"),
    },
    {
      id: 7,
      image: looseFitBermudaShorts.src,
      title: "Loose Fit Bermuda Shorts",
      rating: 3.0,
      price: 80,
      onClick: () => console.log("Product 7 clicked"),
    },
    {
      id: 8,
      image: fadedSkinnyJeans.src,
      title: "Faded Skinny Jeans",
      rating: 4.5,
      price: 210,
      onClick: () => console.log("Product 8 clicked"),
    },
  ];

  const handleStyleClick = (styleName: string) => {
    console.log(`${styleName} style clicked`);
    // Here you can add navigation to category pages
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                FIND CLOTHES
                <br />
                THAT MATCHES
                <br />
                YOUR STYLE
              </h1>
              <p className="hero-description">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="hero-cta-btn">Shop Now</button>

              {/* Statistics */}
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">International Brands</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">2,000+</span>
                  <span className="stat-label">High-Quality Products</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">30,000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <div className="hero-image-container">
                <img
                  src={heroImage.src}
                  alt="Stylish couple wearing trendy fashion"
                  className="hero-main-image"
                />

                {/* Decorative Stars */}
                <div className="star-decoration star-1">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="star-decoration star-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="brands-container">
          <div className="brands-content">
            <div className="brand-item">
              <img src={versaceLogo.src} alt="Versace" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src={zaraLogo.src} alt="Zara" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src={gucciLogo.src} alt="Gucci" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img src={pradaLogo.src} alt="Prada" className="brand-logo" />
            </div>
            <div className="brand-item">
              <img
                src={calvinKleinLogo.src}
                alt="Calvin Klein"
                className="brand-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="new-arrivals-container">
          <div className="section-header">
            <h2 className="section-title">NEW ARRIVALS</h2>
          </div>
          <div className="products-grid">
            {newArrivalsProducts.map((product) => (
              <ProductCard
                onClick={() => console.log("Product 1 clicked")}
                key={product.id}
                dataProduct={product}
              />
            ))}
          </div>
          <div className="section-footer">
            <button className="view-all-btn">View All</button>
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="top-selling-section">
        <div className="top-selling-container">
          <div className="section-header">
            <h2 className="section-title">TOP SELLING</h2>
          </div>
          <div className="products-grid">
            {topSellingProducts.map((product) => (
              <ProductCard key={product.id} dataProduct={product} />
            ))}
          </div>
          <div className="section-footer">
            <button className="view-all-btn">View All</button>
          </div>
        </div>
      </section>

      {/* Browse by Dress Style Section */}
      <section className="browse-styles-section">
        <div className="browse-styles-container">
          <div className="section-header">
            <h2 className="section-title">BROWSE BY DRESS STYLE</h2>
          </div>
          <div className="styles-grid">
            <div
              className="style-card style-casual"
              onClick={() => handleStyleClick("Casual")}
            >
              <div className="style-image">
                <img src={casualStyle.src} alt="Casual style" />
              </div>
              <div className="style-overlay">
                <h3 className="style-name">Casual</h3>
              </div>
            </div>

            <div
              className="style-card style-formal"
              onClick={() => handleStyleClick("Formal")}
            >
              <div className="style-image">
                <img src={formalStyle.src} alt="Formal style" />
              </div>
              <div className="style-overlay">
                <h3 className="style-name">Formal</h3>
              </div>
            </div>

            <div
              className="style-card style-party"
              onClick={() => handleStyleClick("Party")}
            >
              <div className="style-image">
                <img src={partyStyle.src} alt="Party style" />
              </div>
              <div className="style-overlay">
                <h3 className="style-name">Party</h3>
              </div>
            </div>

            <div
              className="style-card style-gym"
              onClick={() => handleStyleClick("Gym")}
            >
              <div className="style-image">
                <img src={gymStyle.src} alt="Gym style" />
              </div>
              <div className="style-overlay">
                <h3 className="style-name">Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="customer-reviews-section">
        <div className="customer-reviews-container">
          <div className="section-header">
            <h2 className="section-title">OUR HAPPY CUSTOMERS</h2>
            <div className="navigation-arrows">
              <button
                className="nav-arrow nav-prev"
                onClick={() => console.log("Previous reviews")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="nav-arrow nav-next"
                onClick={() => console.log("Next reviews")}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star star-filled"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="customer-info">
                <span className="customer-name">Sarah M.</span>
                <svg
                  className="verified-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="review-text">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations."
              </p>
            </div>

            <div className="review-card">
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star star-filled"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="customer-info">
                <span className="customer-name">Alex K.</span>
                <svg
                  className="verified-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="review-text">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions."
              </p>
            </div>

            <div className="review-card">
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star star-filled"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="customer-info">
                <span className="customer-name">James L.</span>
                <svg
                  className="verified-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="review-text">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
