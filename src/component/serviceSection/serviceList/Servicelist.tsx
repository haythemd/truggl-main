"use client";

import React from 'react'
import Servicelistelement from '../serviceListElement/Servicelistelement'
import { ServiceElementType } from '../serviceContent/Servicecontent';

interface Props {
    'serviceElementArray' : ServiceElementType[]
    'selectedIndex':number
    'onServiceClick':(serviceIndex:number)=>void
}

const Servicelist = ( {serviceElementArray,selectedIndex,onServiceClick}:Props ) => {

  return (
    <ul>
        {serviceElementArray.map((element , index) => {
            return(
                <li 
                className={selectedIndex === index ? 'selected':''}
                onClick={() => {onServiceClick(index)}}
                key={index}
                tabIndex={0}
                >

                <Servicelistelement 
                serviceTitle={element.serviceTitle} 
                serviceDescription={element.serviceDescription} 
                number={`0${index+1}`} 
                videoData={element.videoData}
                ></Servicelistelement>
                
                </li>
            )
        })}
    </ul>
  )
}

export default Servicelist