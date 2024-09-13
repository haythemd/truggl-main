"use client"
import React from 'react'
import "./herosection.css"
import Maintitle from './maintitle/Maintitle'
import HeroButtons from './herobutton/HeroButtons'
import Videocontainer from './videoContainer/Videocontainer'
import DescriptionSection from '../descriptionSection/DescriptionSection'
import { gridBoxes } from '@/exports/svgExports'
import RevealVidCont from '../reveal/RevealVidCont'
import Reveal from '../reveal/Reveal'


const Herosection = () => {
  return (
    <>
      <div className="gridBoxes">
        {gridBoxes}
      </div>
      <section className="heroSection" id='hero' >
        <Maintitle></Maintitle>
        <HeroButtons></HeroButtons>

        <Videocontainer></Videocontainer>

        <DescriptionSection></DescriptionSection>

      </section>
    </>

    
  )
}

export default Herosection