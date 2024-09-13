import React from 'react'
import './NavigationElement.css'
import NavigationElement from './NavigationElement';
import { Href } from "./NavigationElement"

 const NavigationArray: Href[] = [
  {
    link: '/#hero',
    value: 'Home',
  },
  {
    link: '/#service',
    value: 'Service',
  },
  {
    link: '/#about',
    value: 'About',
  },
  {
    link: '/portfolio',
    value: 'Portfolio',
  },
];

const NavigationContainer = () => {
  return (
    <div className='NavigationContainer'>
     <label htmlFor="Navigationcheckbox">Navigation</label>
     <input type='checkbox' id="Navigationcheckbox"></input>
        <ul>
        {NavigationArray.map((item, index) => (
          <li className='navigationElement' key={index}>
            <NavigationElement
            value={item.value}
            link={item.link}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavigationContainer