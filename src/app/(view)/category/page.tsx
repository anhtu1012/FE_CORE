"use client";
import React, { useState } from "react";
import "./index.scss";

// Import product images
import gradientGraphicTshirt from "/public/assets/image/Gradient-Graphic-T-shirt.png";
import poloTippingDetails from "/public/assets/image/Polo-with-Tipping-Details.png";
import blackStripedTshirt from "/public/assets/image/Black-Striped-T-shirt.png";
import skinnyFitJeans from "/public/assets/image/SKINNY-FIT-JEANS.png";
import checkeredShirt from "/public/assets/image/CHECKERED-SHIRT.png";
import sleeveStripedTshirt from "/public/assets/image/SLEEVE-STRIPED-T-SHIRT.png";
import verticalStripedShirt from "/public/assets/image/VERTICAL-STRIPED-SHIRT.png";
import courageGraphicTshirt from "/public/assets/image/COURAGE-GRAPHIC-T-SHIRT.png";
import looseFitBermudaShorts from "/public/assets/image/LOOSE-FIT-BERMUDA-SHORTS.png";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/model/Product";

const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const CategoryPage = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      image: gradientGraphicTshirt.src,
      title: "Gradient Graphic T-shirt",
      rating: 4.5,
      price: 120,
    },
    {
      id: 2,
      image: poloTippingDetails.src,
      title: "Polo with Tipping Details",
      rating: 4.0,
      price: 150,
    },
    {
      id: 3,
      image: blackStripedTshirt.src,
      title: "Black Striped T-shirt",
      rating: 3.5,
      price: 180,
    },
    {
      id: 4,
      image: skinnyFitJeans.src,
      title: "Skinny Fit Jeans",
      rating: 4.2,
      price: 220,
    },
    {
      id: 5,
      image: checkeredShirt.src,
      title: "Checkered Shirt",
      rating: 4.8,
      price: 250,
    },
    {
      id: 6,
      image: sleeveStripedTshirt.src,
      title: "Sleeve Striped T-shirt",
      rating: 4.3,
      price: 200,
    },
    {
      id: 7,
      image: verticalStripedShirt.src,
      title: "Vertical Striped Shirt",
      rating: 4.1,
      price: 230,
    },
    {
      id: 8,
      image: courageGraphicTshirt.src,
      title: "Courage Graphic T-shirt",
      rating: 4.6,
      price: 280,
    },
    {
      id: 9,
      image: looseFitBermudaShorts.src,
      title: "Loose Fit Bermuda Shorts",
      rating: 4.4,
      price: 300,
    },
  ]);

  const [activeFilters, setActiveFilters] = useState<string[]>([
    "Price",
    "Colors",
    "Size",
    "Dress Style",
  ]);
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [selectedColor, setSelectedColor] = useState<string>("#063AF5");

  const toggleFilter = (filter: string) => {
    setActiveFilters(
      activeFilters.includes(filter)
        ? activeFilters.filter((f) => f !== filter)
        : [...activeFilters, filter]
    );
  };

  return (
    <div className="category-page">
      <div className="category-container">
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filters</h3>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="filters-list">
            {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((cat) => (
              <a href="#" key={cat} className="filter-category-item">
                {cat}{" "}
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path
                    d="m9 18 6-6-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            ))}
          </div>

          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleFilter("Price")}>
              <h4>Price</h4>
              <svg
                className={`chevron ${
                  activeFilters.includes("Price") ? "up" : "down"
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="m6 9 6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {activeFilters.includes("Price") && (
              <div className="price-slider">
                <input
                  type="range"
                  min="50"
                  max="200"
                  defaultValue="50"
                  className="slider"
                />
                <div className="price-values">
                  <span>$50</span>
                  <span>$200</span>
                </div>
              </div>
            )}
          </div>

          <div className="filter-section">
            <div
              className="filter-title"
              onClick={() => toggleFilter("Colors")}
            >
              <h4>Colors</h4>
              <svg
                className={`chevron ${
                  activeFilters.includes("Colors") ? "up" : "down"
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="m6 9 6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {activeFilters.includes("Colors") && (
              <div className="color-swatches">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`color-swatch ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && (
                      <svg
                        className="checkmark"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6 9 17l-5-5"
                          stroke={color === "#FFFFFF" ? "#000" : "#FFF"}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <div className="filter-title" onClick={() => toggleFilter("Size")}>
              <h4>Size</h4>
              <svg
                className={`chevron ${
                  activeFilters.includes("Size") ? "up" : "down"
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="m6 9 6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {activeFilters.includes("Size") && (
              <div className="size-selector">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="filter-section">
            <div
              className="filter-title"
              onClick={() => toggleFilter("Dress Style")}
            >
              <h4>Dress Style</h4>
              <svg
                className={`chevron ${
                  activeFilters.includes("Dress Style") ? "up" : "down"
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="m6 9 6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {activeFilters.includes("Dress Style") && (
              <div className="filters-list-inner">
                {["Casual", "Formal", "Party", "Gym"].map((cat) => (
                  <a href="#" key={cat} className="filter-category-item">
                    {cat}{" "}
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        d="m9 18 6-6-6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          <button className="apply-filter-btn">Apply Filter</button>
        </aside>

        <main className="products-content">
          <div className="category-header">
            <h1 className="category-title">Casual</h1>
            <div className="category-meta">
              <span className="product-count">
                Showing 1-10 of 100 Products
              </span>
              <div className="sort-by">
                <label>Sort by:</label>
                <select>
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                dataProduct={product}
                onClick={() => console.log(`Product ${product.id} clicked`)}
              />
            ))}
          </div>
          <div className="pagination">
            <button className="page-nav prev">Previous</button>
            <button className="page-num active">1</button>
            <button className="page-num">2</button>
            <button className="page-num">3</button>
            <span className="page-ellipsis">...</span>
            <button className="page-num">8</button>
            <button className="page-num">9</button>
            <button className="page-num">10</button>
            <button className="page-nav next">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
