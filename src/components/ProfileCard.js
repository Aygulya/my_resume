import React from 'react';
import SocialLinks from './SocialLinks';
import myPhoto from './images/myPhoto.jpg'

function ProfileCard() {
  return (
    <div className="profile">
      <img
        src={myPhoto}
        alt="Maya Nelson"
        className="profile-img"
      />
      <h2>Aigul Hurbanova</h2>
      <p className="title">Frontend developer</p>
      <SocialLinks />
    </div>
  );
}

export default ProfileCard;