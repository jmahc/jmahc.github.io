import React from 'react'

// import Flex from '@/components/Flex'

import image from '%/assets/images/profile-picture.png'

import './styles.css'

export default () => (
  <div className="ProfilePicture">
    <img
      alt="Site owner: Jordan McArdle."
      className="ProfilePicture-image"
      src={image}
    />
  </div>
)

// export default () => (
//   <Flex fill alignCenter justifyContent>
//     <div className="ProfilePicture">
//       <img
//         alt="Site owner: Jordan McArdle."
//         className="ProfilePicture-image"
//         src={image}
//       />
//     </div>
//   </Flex>
// )
