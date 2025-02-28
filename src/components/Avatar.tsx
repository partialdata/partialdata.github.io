import React from "react";
import "../styles/global.css"; // Ensure this is correctly imported

interface AvatarProps {
  className?: string; // Allow optional className prop
}

const Avatar: React.FC<AvatarProps> = ({ className = "" }) => {
  return (
    <div className={`avatar-container`}>
      <img
        className={`avatar ${className}`} // Uses the .avatar class from global.css
        src="/src/public/avatar.jpg"
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
