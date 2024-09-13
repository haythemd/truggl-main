"use client";

import React, { useState } from 'react'
import "./PopupInput.css"
import Linearbtn from '@/component/heroSection/LinearBtn/Linearbtn'
import isEmail from 'validator/lib/isEmail'
import axios from 'axios';

interface PopupInputProps{
  "onSuccess"?:(email:string)=>void;
}

const PopupInput = ({onSuccess,...props}:PopupInputProps) => {
  const [email,setEmail] = useState('');
  const [isLoading,setIsLoading] = useState(false);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const new_value = event.target.value;
    setEmail(new_value);

  }

  const handleClick = async () =>  {
    if(!isEmail(email))return

    setIsLoading(true);
    const response = await axios.post('/api/ebook',{
      'email':email,
    })

    /* If the API call succeeds */
    if(response.status === 200 && onSuccess)onSuccess(email)
    /* If the API call fails */
    else 
      console.log();

    setIsLoading(false);


  }
  return (
    <>
    <div className="inputContainer">
        <input 
        type="email" 
        placeholder='Enter your email'
        value={email} 
        onChange={handleChange}
        onKeyDown={(event)=>{
          console.log(event.key);
          if(event.key==='Enter')handleClick()}}
        />
        <div className="bookingBtn">
            <Linearbtn btnValue={"Get it now"} onClick={handleClick} loading={isLoading}></Linearbtn>
        </div>
     
    </div>
    <Linearbtn btnValue={"Get it now"} onClick={handleClick} loading={isLoading}></Linearbtn>
    </>
  )
}

export default PopupInput