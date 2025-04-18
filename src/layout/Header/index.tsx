import React from "react";

import Breadcrumb from "../../components/Header/Breadcrumb";
import SearchInput from "../../components/Header/SearchInput";
import CustomNotificationButton from "../../components/Header/CustomNotificationButton";
import UserProfile from "../../components/Header/UserProfile";
import { HeaderProps } from "../../types";
import "./Header.css";
import { Settings } from "lucide-react";

const Header: React.FC<HeaderProps> = ({ children }) => {
  // Default breadcrumb items - in a real app, these would be props
  const breadcrumbItems = [
    { label: "Dashboard", href: "#" },
    { label: "Sales", href: "#", active: true },
  ];

  return (
    <header className="header">
      <div className="header__container">
        {/* Left side: Menu button (from children) and Breadcrumb */}
        <div className="header__left">
          {children}
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Right side: Search, Notifications, Profile */}
        <div className="header__right">
          <SearchInput
            placeholder="Search..."
            onChange={(value) => console.log("Search:", value)}
          />
          <UserProfile
            avatarUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
            onClick={() => console.log("Profile clicked")}
          />

          <CustomNotificationButton
            Icon=<Settings size={20} />
            onClick={() => console.log("Notifications clicked")}
          />

          <CustomNotificationButton
            hasNotifications={true}
            onClick={() => console.log("Notifications clicked")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
