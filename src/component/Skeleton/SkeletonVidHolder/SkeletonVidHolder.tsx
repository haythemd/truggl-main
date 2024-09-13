import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "@/component/PortfolioSection/Vidholder/vidholder.css"
import 'react-loading-skeleton/dist/skeleton.css'
import { SKELETON_THEME } from '@/exports/themes'


const SkeletonVidHolder = () => {
  return (
    <div className="skeletonVidHolder">
        <SkeletonTheme {...SKELETON_THEME} borderRadius={16}>
            <Skeleton className='zeby' height={391}></Skeleton>
        </SkeletonTheme>
    </div>
  )
}

export default SkeletonVidHolder