import React, { Children } from 'react'
import { videoPlayerLogo } from '@/exports/svgExports'

export type VideoDataType = {
  type: 'youtube';
  id: string;
  src?: any;
  thumbnail? : any,
} | {
  type: 'svg';
  src: any;
}

interface ServiceVidProps{
  onThumbnailClick:()=>void
  children?: React.ReactNode
}

const Servicevid = ({children,...props}:ServiceVidProps) => {
  return (
    <div className="serviceVid">
        <div className="vidIndicator"><span></span><span></span><span></span></div>
        <div className="serviceVidContainer" onClick={props.onThumbnailClick}>
          <div className="vidHolderBluredBg"></div>
          <div className="vidHolderHover"></div>
            {videoPlayerLogo}
            {children}
        </div>
    </div>
  )
}

export default Servicevid