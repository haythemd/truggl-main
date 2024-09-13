
import React from 'react';
import './NavigationElement.css'
import NavigationElement from './NavigationElement';
import { Href } from "./NavigationElement"

 const NavigationArray: Href[] = [
  {
    link: 'https://www.linkedin.com/company/truggl/?viewAsMember=true',
    value: 'Linkedin',
  },
  {
    link: 'https://twitter.com/TRUGGL',
    value: 'Twitter',
  },
  {
    link: 'https://www.youtube.com/@TRUGGL',
    value: 'Youtube',
  },
  {
    link: 'https://www.instagram.com/truggl_studio/',
    value: 'Instagram',
  },
];
 const SocialContainer = () => {
  return (
    <div className='SocialContainer'>
      <label htmlFor="subscribeNews">Socials</label>
     <input type='checkbox' id="subscribeNews"></input>
      <ul>
        {NavigationArray.map((item, index) => (
          <li className='navigationElement' key={index}>
            <NavigationElement
            value={item.value}
            link={item.link}
            external
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
 export default SocialContainer;