import React from "react";
import { Bell } from "lucide-react";
import { CustomNotificationButtonProps } from "../../../types";
import "./CustomNotificationButton.css";

const CustomNotificationButton: React.FC<CustomNotificationButtonProps> = ({
  Icon = <Bell size={18} />,
  hasNotifications = false,
  onClick,
}) => {
  return (
    <button
      className="notification-button"
      onClick={onClick}
      aria-label="Notifications"
    >
      {Icon}
      {hasNotifications && <span className="notification-button__indicator" />}
    </button>
  );
};

export default CustomNotificationButton;
