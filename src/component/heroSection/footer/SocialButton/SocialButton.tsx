"use client"
import React, { useState } from 'react'
import './SocialButton.css'
import Link from 'next/link'
import Image from 'next/image'

export interface Href{
  "icon":any,
  "link":string,
  "className" : string
}
interface Props{
  "navigationArray" : Href[] ;
}


const SocialButton = (Props:Href) => {
  return (
    
    <a target="_blank" className='socialbutton' href={Props.link} rel="noopener noreferrer"> 
      <div className={`socialMediaIcon ${Props.className}`}>
        {Props.icon}
      </div>
    </a>
  )
}

export default SocialButton