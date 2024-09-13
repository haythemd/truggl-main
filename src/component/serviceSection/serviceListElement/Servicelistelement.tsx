"use client";

import React, { useState } from 'react'
import Servicevid from '../serviceVid/Servicevid'
import { ServiceElementType } from '../serviceContent/Servicecontent'
import Modal from '@/component/Modal/Modal'
import LottiePlayer from '@/component/PortfolioSection/VideoPlayer/LottiePlayer';
import VideoPlayer from '@/component/PortfolioSection/VideoPlayer/VideoPlayer';
import Image from 'next/image';

interface ServiceListElementProps extends ServiceElementType {
  'number':string,
}


const Servicelistelement = ({videoData,...props}:ServiceListElementProps) => {
  const [modalOpened,setModalOpened] = useState(false);
  return (
    <>
        <div className="indicator">
          <hr />
          <span>{props.number}</span>
          <hr />
        </div>
        <span>{props.serviceTitle}</span>
        <span>{props.serviceDescription}</span>
        <Servicevid onThumbnailClick={() => setModalOpened(true)}>
        {videoData.type === 'youtube' ?<Image src={videoData.thumbnail} alt={''} /> : <LottiePlayer src={videoData.src }/>}
        </Servicevid>

    {modalOpened && 
        <Modal 
    onClose={() => {setModalOpened(false)}} 
    overflowHidden
    >
         {videoData.type === 'youtube' &&
             <VideoPlayer videoId={videoData.id} />}
         {videoData.type === 'svg' && 
             <LottiePlayer src={videoData.src}/>

         }
    </Modal> }
   </>
  )
}

export default Servicelistelement