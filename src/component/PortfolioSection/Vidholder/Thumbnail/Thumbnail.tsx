"use client"

import React ,{useState,useEffect} from 'react'
import Image from 'next/image'
import { youtube_v3 } from 'googleapis'
import { url } from 'inspector'

interface ThumbnailProps{
    'alt':string,
    'thumbnails':youtube_v3.Schema$ThumbnailDetails
}


const Thumbnail = (props:ThumbnailProps) => {
  const thumbnail_max = props.thumbnails?.maxres?.url as string;
  const thumbnail_small = props.thumbnails?.default?.url as string;

  const [thumbnailHasLoaded,setThumbnailHasLoaded] = useState(false);



  return (
    <>
    {!thumbnailHasLoaded &&
    <Image
      src={thumbnail_small}
      alt={`Loading image for ${props.alt}`}
      width={24}
      height={24}
      style={
              {
                maxWidth:'100%',
                height:'auto',
                objectFit:'cover',
              }}
      className='image-loader'
    />
    }
    <Image 
            src={thumbnail_max} 
            alt={thumbnail_max}
            width={props.thumbnails?.maxres?.width ? props.thumbnails?.maxres?.width : 1920}
            height={props.thumbnails?.maxres?.height ? props.thumbnails?.maxres?.height : 1080}
            style={
              {
                maxWidth:'100%',
                height:'auto',
                visibility:thumbnailHasLoaded?'visible':'hidden',
                objectFit:"fill"
              }
            }
            onLoadingComplete={() => {setThumbnailHasLoaded(true)}}
    />
    </>
    
  )
}

export default Thumbnail