import React from 'react'

import image from '%/assets/images/profile-picture.png'

import './styles.css'

const ProfilePicture = () => (
  <div className="ProfilePicture">
    <img
      alt="Site owner: Jordan McArdle."
      className="ProfilePicture-image"
      src={image}
    />
  </div>
)

export default ProfilePicture