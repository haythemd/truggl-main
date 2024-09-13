import VideoGrid, { GridEnum } from '@/component/PortfolioSection/VideoGrid/VideoGrid'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import React from 'react'
import SkeletonVidHolder from '@/component/Skeleton/SkeletonVidHolder/SkeletonVidHolder'

const loading = () => {
  return (
    <section className="porfolioSection">
        <VideoGrid gridTypes={GridEnum.Twelve}>
            <SkeletonVidHolder></SkeletonVidHolder>
        </VideoGrid>
        <VideoGrid gridTypes={GridEnum.SixSix}>
            <SkeletonVidHolder></SkeletonVidHolder>
            <SkeletonVidHolder></SkeletonVidHolder>
        </VideoGrid>
        <VideoGrid gridTypes={GridEnum.SevenFive}>
            <SkeletonVidHolder></SkeletonVidHolder>
            <SkeletonVidHolder></SkeletonVidHolder>
        </VideoGrid>
        <VideoGrid gridTypes={GridEnum.FiveSeven}>
            <SkeletonVidHolder></SkeletonVidHolder>
            <SkeletonVidHolder></SkeletonVidHolder>
        </VideoGrid>
        <VideoGrid gridTypes={GridEnum.FourFourFour}>
            <SkeletonVidHolder></SkeletonVidHolder>
            <SkeletonVidHolder></SkeletonVidHolder>
            <SkeletonVidHolder></SkeletonVidHolder>
        </VideoGrid>
    </section>
  )
}

export default loading