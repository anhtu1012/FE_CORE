"use client";
import { Role } from "@/model/RoleEnum";
import "@/styles/clerk-buttons.scss";
import { setCookie } from "@/utils/client/getCookie";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import AuthButtons from "../auth/AuthButtons";
import "./index.scss";

interface HeaderProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = () => {
  const { isSignedIn } = useAuth();
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { getToken } = useAuth();

  const fetchUserData = async () => {
    try {
      const clerkToken = await getToken({ template: "token" });
      console.log("Clerk Token:", clerkToken);
      setCookie("token", clerkToken, 9999);
    } catch (error) {
      console.error("Error fetching token and claims:", error);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      fetchUserData();
    }
  }, [isSignedIn]);

  const handleCloseBanner = () => {
    setShowTopBanner(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", searchValue);
    // Handle search logic here
  };

  return (
    <header className="main-header">
      {/* Top Banner */}
      {showTopBanner && (
        <div className="top-banner">
          <div className="banner-content">
            <span className="banner-text">
              Sign up and get 20% off to your first order.{" "}
              <a href="#" className="banner-link">
                Sign Up Now
              </a>
            </span>
            <button className="banner-close" onClick={handleCloseBanner}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="header-main">
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <a href="/" className="logo-link">
              SHOP.CO
            </a>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Shop
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="dropdown-icon"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Brands
                </a>
              </li>
            </ul>
          </nav>

          {/* Search Bar */}
          <div className="header-search">
            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-input-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="search-icon"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m21 21-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchValue}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="header-right">
            {/* Shopping Cart */}
            <button className="header-icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* User Account */}
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "h-6 w-6",
                    userButtonTrigger: "cursor-pointer focus:shadow-none",
                  },
                }}
                userProfileUrl="/profile"
                userProfileMode="navigation"
                showName={false}
              />
            </SignedIn>

            <SignedOut>
              <button className="header-icon-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
