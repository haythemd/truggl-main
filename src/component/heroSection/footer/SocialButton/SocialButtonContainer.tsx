import React from 'react'
import NavigationElement, { Href } from './SocialButton';
import SocialButton from './SocialButton';
import {youtubeIconHovered , linkdinIconHovered , twitterIconHovered , instagramIconHovered} from '@/exports/svgExports'
const NavigationArray: Href[] = [
    {
        link: 'https://www.linkedin.com/company/truggl/?viewAsMember=true',
        icon: linkdinIconHovered,
        className : "linkdin"
      },
      {
        link: 'https://twitter.com/TRUGGL',
        icon: twitterIconHovered,
        className : "twitter"
      },
      {
        link: 'https://www.youtube.com/@TRUGGL',
        icon: youtubeIconHovered,
        className : "youtube"
      },
      {
        link: 'https://www.instagram.com/truggl_studio/',
        icon: instagramIconHovered,
        className : "instagram"
      },
  
];

const SocialButtonContainer = () => {


  return (
   <div className="SocialButtonContainer">
    {NavigationArray.map((item, index) => (
        <SocialButton
        key={index}
        link={item.link}
        icon={item.icon} 
        className={item.className}        />
      ))}
   </div>
  )
}

export default SocialButtonContainer