/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Layout } from "antd";
import React, { useState } from "react";
import "./index.scss";

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <Footer className="site-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              STAY UPTO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
            <div className="newsletter-form-container">
              <form
                onSubmit={handleNewsletterSubmit}
                className="newsletter-form"
              >
                <div className="newsletter-input-container">
                  <svg
                    className="email-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="newsletter-input"
                    required
                  />
                </div>
                <button type="submit" className="newsletter-submit-btn">
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links-section">
        <div className="footer-container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-column footer-brand">
              <h3 className="footer-brand-logo">SHOP.CO</h3>
              <p className="footer-brand-description">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">COMPANY</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">HELP</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">FAQ</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="footer-column">
              <h4 className="footer-column-title">RESOURCES</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="footer-payment-methods">
              <div className="payment-method">
                <svg viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#1A1F71" />
                  <path d="M16.5 8.5h7v7h-7z" fill="white" />
                  <text
                    x="20"
                    y="14"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    fontWeight="bold"
                  >
                    VISA
                  </text>
                </svg>
              </div>
              <div className="payment-method">
                <svg viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#EB001B" />
                  <circle cx="15" cy="12" r="6" fill="#FF5F00" />
                  <circle cx="25" cy="12" r="6" fill="#F79E1B" />
                </svg>
              </div>
              <div className="payment-method">
                <svg viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#003087" />
                  <path
                    d="M8 8h5l3 8h-5l-3-8zm8 0h4l-1 8h-4l1-8zm6 0h5v8h-5V8z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="payment-method">
                <svg viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#000" />
                  <text
                    x="20"
                    y="14"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    fontWeight="bold"
                  >
                    Pay
                  </text>
                </svg>
              </div>
              <div className="payment-method">
                <svg viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#4285F4" />
                  <text
                    x="20"
                    y="14"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                    fontWeight="bold"
                  >
                    GPay
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
