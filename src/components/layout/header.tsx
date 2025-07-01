"use client";
import { Role } from "@/model/RoleEnum";
import "@/styles/clerk-buttons.scss";
import { setCookie } from "@/utils/client/getCookie";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { Layout } from "antd";
import React, { useEffect } from "react";
import AuthButtons from "../auth/AuthButtons";
import "./index.scss";

const { Header } = Layout;

interface HeaderProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = () => {
  const { isSignedIn } = useAuth();
  // const t = useTranslations("Header");

  // const menuItems = [];

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

  return (
    <Header>
      <div className="header-content">
        {/* <div className="desktop-menu">
          <Menu mode="horizontal" className="main-menu" items={menuItems} />
        </div> */}
        <div className="header-right">
          {/* <LocaleSwitcher /> */}
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10",
                  userButtonTrigger: "cursor-pointer focus:shadow-none",
                },
              }}
              userProfileUrl="/profile"
              userProfileMode="navigation"
              showName={false}
            />
          </SignedIn>

          <SignedOut>
            <AuthButtons signUpRole={Role.Customer} />
          </SignedOut>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
