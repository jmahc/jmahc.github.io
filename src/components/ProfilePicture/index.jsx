import React from 'react'

import image from './profile-picture.png'
import './ProfilePicture.css'

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
