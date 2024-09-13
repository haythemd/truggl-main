import { VideoData } from '@/types/videos'
import { type } from 'os'
import React, { Children } from 'react'

type gridTypes = "4-4-4" | "12" | "5-7" | "7-5"| "6-6"
export enum GridEnum {
    FourFourFour = "4-4-4",
    Twelve = "12",
    FiveSeven = "5-7",
    SevenFive = "7-5",
    SixSix = "6-6",
  }

export const GRID_VARIATIONS = [
    GridEnum.Twelve,
    GridEnum.SixSix,
    GridEnum.FiveSeven,
    GridEnum.SevenFive,
    GridEnum.FourFourFour
] 

interface Props {
    gridTypes : GridEnum
    children : React.ReactNode
}

const VideoGrid = (props:Props) => {
  console.log(props);

  if(Children.count(props.children) === 2 && (props.gridTypes === GridEnum.FourFourFour))return(
    <div className={`d-grid grid-4-4-4`}>
        {props.children}
    </div>
  )

  else if(Children.count(props.children) === 1 && (props.gridTypes === GridEnum.FiveSeven || props.gridTypes === GridEnum.SevenFive || props.gridTypes === GridEnum.SixSix || GridEnum.FourFourFour))return (
    <div className={`d-grid grid-12`}>
        {props.children}
    </div>
  )
  else return (
    <div className={`d-grid grid-${props.gridTypes}`}>
        {props.children}
    </div>
  )
}

export default VideoGrid