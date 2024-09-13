import React from 'react'
import './whyusElement.css'
import Image from 'next/image';
interface Props{
    titleSecondelment:string,
    description:string,
    image:any

}
const WhyusSecondElement = ({ titleSecondelment,description,image}:Props) => {
  return (

  <div className="WhyusSecondElementtContainer">
    <div className="WhyusSecondElementPrimaryBg"></div>
    <div className="WhyusSecondElementSecondaryBg"></div>
      <div className="whyusContentSecond">
        <div className="descriptionConatinerSecond">
          <h3>{titleSecondelment}</h3>
          <p>{description}</p>
           
        </div>
        <div className="whyusContentSecondimg">
          <div className="WhyusSecondElementPrimaryBg"></div>
          <div className="WhyusSecondElementSecondaryBg"></div>
          <Image src={image} width={533} height={360} alt="" layout='responsive'></Image></div>
        
      </div>
  </div>

  );
};

export default WhyusSecondElement