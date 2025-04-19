import React from 'react';
import { HeaderUserProfileProps } from '../../../types';
import './UserProfile.css';

const UserProfile: React.FC<HeaderUserProfileProps> = ({
  avatarUrl,
  onClick
}) => {
  return (
    <div className="header-user-profile" onClick={onClick}>
      <div className="header-user-profile__avatar">
        <img
          src={avatarUrl}
          alt="User avatar"
          className="header-user-profile__image"
        />
      </div>
    </div>
  );
};

export default UserProfile;
