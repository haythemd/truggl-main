import React from 'react'
import Lottie from 'react-lottie-player';

interface LottiePlayerProps{
    'src':any;
}

const LottiePlayer = (props:LottiePlayerProps) => {
  return (
    <Lottie loop animationData={props.src} play ></Lottie>
  )
}

export default LottiePlayer