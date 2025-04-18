import React from 'react';
import { ChevronDown } from 'lucide-react';
import { UserProfileProps } from '../../../types';
import './UserProfile.css';

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  avatarUrl,
  onProfileClick
}) => {
  return (
    <div className="user-profile">
      <div
        className="user-profile__container"
        onClick={() => onProfileClick?.()}
      >
        <div className="user-profile__avatar">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
          />
        </div>
        <div className="user-profile__info">
          <h3 className="user-profile__name">{name}</h3>
          <p className="user-profile__email">{email}</p>
        </div>
        <button className="user-profile__button" aria-label="User menu">
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
