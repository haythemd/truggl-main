import SectionTitle from '@/component/sectionTitle/SectionTitle'
import React from 'react'
import svg1 from '../../../../public/assets/whyus/gg.png'
import img768 from 'public/assets/whyus/Frame 66.png'
import './whyusElement.css'
import Image from 'next/image';
import Titlebtn from '@/component/sectionTitle/titleBtn/Titlebtn';
import { WHY_US_SECTION_TEXT } from '@/exports/copywriting/headers'
const WhyusElement = () => {
return (
<div className="whyUsElementContainer">
  <div className="descriptionConatiner">
      <h3>{WHY_US_SECTION_TEXT.REASON_1.TITLE}</h3>
      <p>{WHY_US_SECTION_TEXT.REASON_1.DESCRIPTION}</p>
      <Titlebtn btnValue={WHY_US_SECTION_TEXT.REASON_1.BUTTON} link={true} href={WHY_US_SECTION_TEXT.REASON_1.BUTTON_HREF}></Titlebtn>
  </div>
  <div className="imgContainer">
      <Image src={svg1} height={400} width={500} alt=''></Image>
      <Image src={img768} height={400} width={500} alt='' layout='responsive' objectFit="contain"></Image>
  </div>
</div>
);
};
export default WhyusElement