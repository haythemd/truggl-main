"use client";

import React, { useState,useEffect } from 'react'
import "./formsection.css"
import Image from 'next/image'
import handWave from "/public/assets/waving_hand_compressed.png"
import pattern from "/public/assets/Pattern.svg"
import FormComponent from './FormComponent/FormComponent'
import Reveal from '../reveal/Reveal'
import Titlebtn from '../sectionTitle/titleBtn/Titlebtn';
import Link from 'next/link';
import Lottie from 'react-lottie-player';

enum FormStates {
    default = 0,
    loading = 1,
    success = 2,
    failed  = 3,
}


const Formsection = () => {

  const [formState,setFormState] = useState(FormStates.default);
  
  const [successAnimation,setSuccessAnimation] = useState<any>(null);
  
  
  useEffect(()=>{
    
    //if(formState === FormStates.success)setIsLoading(false);
    
    if(formState === FormStates.success && successAnimation === null)import('../../../public/assets/lottie/success.json').then(setSuccessAnimation);
    
  },[formState])

  const handleSuccess = () => {
    setFormState(FormStates.success);
  }

  //const handleLoading = () => {
  //  setIsLoading(true);
  //};

  
  /* Default Form State */
  if(formState === FormStates.default)
  return (
    <>
    <Reveal>
        <div className="gridBoxesForm">
            <Image 
            src={pattern} 
            alt={''}
            style={{minHeight: '644px' , maxWidth: '100vw'}}></Image>
        </div>
        <section className="formsection" id='form'>

            <div className="formTitle">
                <h3>
                    <span>Intrested? Let’s Talk</span>
                    <Image src={handWave} alt={'a hand waving'}  width={48} height={48}></Image>
                </h3>
                <span>Just fill this simple form in and we will contact you <br />promptly to discuss your project.</span>
            </div>
            <FormComponent onSuccess={handleSuccess} />
        </section>
    </Reveal>
    </>
  )
  /* Success Form State */
  if(formState === FormStates.success)
  return (
    <div>
        <div className="gridBoxesForm">
            <Image 
            src={pattern} 
            alt={''}
            style={{minHeight: '644px' , maxWidth: '100vw'}}></Image>
        </div>
      <section className="formsection" id='form'>

      
        <div className="successConatiner">
        <Lottie loop={false} animationData={successAnimation} play style={{display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:"2rem"
    }}></Lottie>
                <h3>
                    <span>Thank you for reaching out! Well be in touch shortly</span>
                </h3>
                <span>Feel free to watch some of our recent <Link  href={"/portfolio"}>projects.</Link> <br />Or you can read some of our client feedback on <a 
                        target='_blank'
                        rel="noopener noreferrer"
                        href={'https://www.trustpilot.com/review/truggl.com'}>Trustpilot
                        </a></span>
                <Titlebtn btnValue="Our Trustpilot Reviews" ></Titlebtn>
        </div>
</section>
    </div>
  )
}

export default Formsection