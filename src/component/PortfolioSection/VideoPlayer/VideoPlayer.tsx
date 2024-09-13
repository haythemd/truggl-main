"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import "./VideoPlayer.css"

interface VideoPlayerProps{
    "videoId" : string;
    "onClose"?: () => void
}


const VideoPlayer = (props:VideoPlayerProps) => {
  let router = useRouter();
  let pathname = usePathname();
  return (
    <div className='videoPlayer'>

    <iframe frameBorder="0" allow="autoplay; fullscreen" src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&loop=1`} ></iframe>
    
    </div>
  )
}

export default VideoPlayer