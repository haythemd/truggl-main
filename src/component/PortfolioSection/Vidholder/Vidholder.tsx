import React, { useState , useEffect } from 'react'
import "./vidholder.css"
import vidCover from "public/assets/vidCover.png"
import { VideoData } from '@/types/videos'
import Thumbnail from './Thumbnail/Thumbnail'
import { youtube_v3 } from 'googleapis'
import { videoPlayerLogo2 } from '@/exports/svgExports'
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Link from 'next/link'

const Vidholder = ( props:VideoData ) => {

  


  return (
    <div className="vidHolder">
        <Link href={`?video=${props.id}`} scroll={false}>
        <div className="vidHolderContainer">
          <Thumbnail alt={props.title as string} thumbnails={props.thumbnails as youtube_v3.Schema$ThumbnailDetails}/>
          <div className="vidHolderHover"></div>
          <div className="vidHolderTicket">Watch Video {videoPlayerLogo2} </div>
        </div>
        </Link>
        <div className="vidInfo">
            <h3>{props.title}</h3>
            <span>{props.description?.length as number >200 ? `${props.description?.slice(0,200)}...` : props.description}</span>
        </div>

    </div>
  )
}

export default Vidholder