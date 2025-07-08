"use client";
import React, { useState } from "react";
import "./index.scss";

// Import product images
import gradientGraphicTshirt from "/public/assets/image/Gradient-Graphic-T-shirt.png";
import checkeredShirt from "/public/assets/image/CHECKERED-SHIRT.png";
import skinnyFitJeans from "/public/assets/image/SKINNY-FIT-JEANS.png";
import Link from "next/link";

const initialCartItems = [
  {
    id: 1,
    image: gradientGraphicTshirt.src,
    title: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
  },
  {
    id: 2,
    image: checkeredShirt.src,
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
  },
  {
    id: 3,
    image: skinnyFitJeans.src,
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = -(subtotal * 0.2);
  const deliveryFee = 15;
  const total = subtotal + discount + deliveryFee;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="breadcrumbs">
          <Link href="/">Home</Link> &gt; <span>Cart</span>
        </div>
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-layout">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <h4>${item.price}</h4>
                </div>
                <div className="item-actions">
                  <button
                    className="delete-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                  <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="summary-item">
              <span>Discount (-20%)</span>
              <span className="discount-amount">-${Math.abs(discount)}</span>
            </div>
            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <div className="promo-code">
              <div className="promo-input">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"></path>
                  <circle cx="7" cy="7" r="2"></circle>
                </svg>
                <input type="text" placeholder="Add promo code" />
              </div>
              <button>Apply</button>
            </div>
            <button className="checkout-btn">
              Go to Checkout
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
