"use client"
import React, {  useEffect, useState } from 'react'
import "./popup.css"
import Lottie from 'react-lottie-player'
import PopupInput from './popupInput/PopupInput'
import Linearbtn from '../heroSection/LinearBtn/Linearbtn'
import PopupSkeleton from '../Skeleton/PopupSkeleton/PopupSkeleton'
import PopupTicket from './popupTicket/PopupTicket'


const TIME_TO_LOAD = 15;


enum PopupStates {
  WAITING = -1,
  CLOSED = 0,
  FIRST_STEP = 1,
  SECOND_STEP = 2,
  SUCCESS = 3
}

const Popup = () => {


  /* Component State */
  const [popupState,setPopupState] = useState<PopupStates>(PopupStates.WAITING);
  const [lottieAnimation , setLottieAnimation] = useState<any>(null) ;

  const [successAnimation,setSuccessAnimation] = useState<any>(null);

  
  const [currentTime,setCurrentTime] = useState(0);


  /* USE EFFECTS */

  // Use effect to create the timer for loading the popup
  useEffect(()=>{
    
    if(lottieAnimation === null)import('../../../public/assets/lottie/ebook.json').then(setLottieAnimation);

    const timer = setInterval(() => {
        if(popupState === PopupStates.WAITING && currentTime<TIME_TO_LOAD)setCurrentTime( (prevTime) => prevTime+1 );
      }, 1000); // Update the time every 1000ms (1 second)
    
    
      // Clean up the timer when the component unmounts
      return () =>{
    clearInterval(timer);

    if(currentTime>TIME_TO_LOAD)clearInterval(timer);
    
    };
    
  } , []);

  // Use effect to load the popup on the specified time
  useEffect(()=> {
    
    if(popupState === PopupStates.WAITING && currentTime>TIME_TO_LOAD && localStorage.getItem('MODAL_IS_OPEN') === 'false')setPopupState(PopupStates.FIRST_STEP);

  } , [currentTime])


  // Use effect to manage body overflow when popup appears/dissapears
  useEffect(() => {
    if(popupState === PopupStates.WAITING || popupState === PopupStates.CLOSED)document.body.style.overflowY = ""
    else document.body.style.overflowY = "hidden"

    if(popupState === PopupStates.SECOND_STEP)import('../../../public/assets/lottie/success.json').then(setSuccessAnimation);
  },[popupState])


  
  const handleSuccess = (email:string) => {
    setPopupState(PopupStates.SUCCESS);
  }

  /* Waiting State */
  if(popupState === PopupStates.WAITING)return (
    <div></div>
  )


  /* Popup is Closed State */
  if(popupState === PopupStates.CLOSED)return (
    <PopupTicket onClick={() => {setPopupState(PopupStates.FIRST_STEP)}}></PopupTicket>
  )


  /* Popup confirmation state */
  if(popupState === PopupStates.FIRST_STEP)
  return (
    <>
      <div className="bluredBG"></div>
      <div className="popupContainer">
          <div>
              {lottieAnimation === null ? 
              <PopupSkeleton></PopupSkeleton>
               : 
              <Lottie 
              loop={false} 
              animationData={lottieAnimation}
              play ></Lottie>}

              <div className="popupContent">
                  <h3>Want our free e-book ?</h3>
                  <span>Drive free traffic and make people interested in your product. They&apos;ll be asking for your software not the other way around. Make the funnel that gurus charge <b>$2999</b> for, but get it here for free! Invest 40 mins reading this 7000-word ebook and save more than a year on trial and error.</span>
                  <div className="bookingBtn">
                      <Linearbtn btnValue={'Get e-book for free'} onClick={(event) => {setPopupState(PopupStates.SECOND_STEP)}}></Linearbtn>
                  </div>
                  <button onClick={() => {setPopupState(PopupStates.CLOSED)}}>No thanks , i don&apos;t want to improve my MRR</button>
              </div>
          </div>
      </div>
 
    </>
  )

  /* Popup Email Input State */
  else if(popupState === PopupStates.SECOND_STEP)
  return(
    <>
    <div className="bluredBG"></div>
    <div className="popupContainer">
        <div>
            <Lottie loop={false} animationData={lottieAnimation} play ></Lottie>
            <div className="popupContent">
                <h3>Want our free e-book ?</h3>
                <span>Drive free traffic and make people interested in your product. They&apos;ll be asking for your software not the other way around. Make the funnel that gurus charge <b>$2999</b> for, but get it here for free! Invest 40 mins reading this 7000-word ebook and save more than a year on trial and error.</span>
                <PopupInput onSuccess={handleSuccess}></PopupInput>
                <button onClick={() => {setPopupState(PopupStates.CLOSED)}}>No thanks , i don&apos;t want to improve my MRR</button>
            </div>
        </div>
    </div>
    </>
    )

    /* Popup Success State */
    else if(popupState === PopupStates.SUCCESS)return(
      <>
      <div className="bluredBG"></div>
      <div className="popupContainer">
          <div>
              <Lottie loop={false} animationData={lottieAnimation} play ></Lottie>
              <div className="popupContent">
              
                  <h3>Thumbs Up!</h3>
                  <span>Congratulations, your ebook copy is being readied for delivery to your email. Soon, the industry secrets will be yours.</span>
                  <button onClick={() => {setPopupState(PopupStates.CLOSED)}}>You can click here to close this popup.</button>
              </div>
          </div>
      </div>
    </>
    )
   
  
}

export default Popup