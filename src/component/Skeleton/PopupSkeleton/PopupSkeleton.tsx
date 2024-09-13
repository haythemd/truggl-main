import React from 'react'
import './PopupSkeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SKELETON_THEME } from '@/exports/themes'

const PopupSkeleton = () => {
  return (
    <>
    <SkeletonTheme {...SKELETON_THEME}>
        <Skeleton width={366} height={516}></Skeleton>
    </SkeletonTheme>
    </>

  )
}

export default PopupSkeleton