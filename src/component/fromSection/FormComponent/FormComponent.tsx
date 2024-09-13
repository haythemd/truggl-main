"use client";

import Titlebtn from '@/component/sectionTitle/titleBtn/Titlebtn';
import React, { useState } from 'react'
import Forminput, { InputStates } from '../formInput/Forminput';
import validator from 'validator';
import axios from 'axios';

interface FormComponentProps {
  "onSuccess":()=>void;
  "onLoading"?:()=>void;
}

enum ButtonStates {
  "default"=0,
  "loading"=1,
}

const FormComponent = ({onSuccess,...props}:FormComponentProps) => {
  
  // Component State Declarations
  const [name,setName] = useState("");
  const [nameState,setNameState] = useState(InputStates.initial);
  const [email,setEmail] = useState("");
  const [emailState,setEmailState] = useState(InputStates.initial);
  const [message,setMessage] = useState("");
  const [messageState,setMessageState] = useState(InputStates.initial);


  const [buttonState,setButtonState] = useState(ButtonStates.default);
  

  // Check if the given input is invalid
  const checkInputError = (
    event:React.ChangeEvent<HTMLInputElement>,
    setState:React.Dispatch<React.SetStateAction<InputStates>>,
    checkEmpty:boolean,
    checkEmail:boolean) => {

    const inputValue = event.target.value;
    if(checkEmpty && validator.isEmpty(inputValue)){
        setState(InputStates.empty);
        return;
    }
    if(checkEmail && !validator.isEmail(inputValue)){
        setState(InputStates.invalid);
        return;
    }

    setState(InputStates.valid);

  }


  // Check if the given input is valid
  const checkInputValidity = (
    event:React.ChangeEvent<HTMLInputElement>,
    state:InputStates,
    setState:React.Dispatch<React.SetStateAction<InputStates>>,
    checkEmpty:boolean,
    checkEmail:boolean) => {

        const inputValue = event.target.value;

        if(checkEmpty && validator.isEmpty(inputValue)){
            if(state !==InputStates.valid && state !== InputStates.initial)setState(InputStates.empty);
            return;
        }
        if(checkEmail && !validator.isEmail(inputValue)){
            if(state !==InputStates.valid && state !== InputStates.initial)setState(InputStates.invalid);
            return;
        };


        setState(InputStates.valid);

    }

  
  
  // Change event handlers
  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    checkInputValidity(event,nameState,setNameState,true,false);

  }

  const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    checkInputValidity(event,emailState,setEmailState,true,true);

  }


  // Blur event handlers
  const handleNameBlur = (event:React.FocusEvent<HTMLInputElement>) => {
    checkInputError(event,setNameState,true,false);
  }
  const handleEmailBlur = (event:React.FocusEvent<HTMLInputElement>) => {
    checkInputError(event,setEmailState,true,true);
  }



  // Form Submission Logic

  const handleFormValidity = async () => {

    setButtonState(ButtonStates.loading);
    if(props.onLoading)props.onLoading();

    const response = await axios.post('/api/contact',{
        'name':name,
        'email':email,
        'message':message
    })

    /* Successfull API Call */
    if(response.status === 200){
        onSuccess();
    
    /* Failed on API Call */
    }else {
        setButtonState(ButtonStates.default);
    }

  }

  const handleFormFailure = () => {


  }

  const formIsValid = () => {
    if(nameState !== InputStates.valid)return false;
    if(emailState !== InputStates.valid)return false;
    if(messageState !== InputStates.valid && messageState !== InputStates.initial)return false;

    return true;

  }
  const handleFormSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    if(formIsValid()){
        handleFormValidity();
    }
    else{
        handleFormFailure();
    };
  }


  return (
    <form action="" onSubmit={handleFormSubmit}>
                <div className="inputGrp">

                    <Forminput 
                    label={'Your Name'} 
                    name={'name'}
                    type={"input"}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    inputValue={name}
                    state={nameState}
                    ></Forminput>

                    <Forminput 
                    label={'Your Email'} 
                    name={'email'}
                    type={"input"}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    inputValue={email}
                    state={emailState}
                    ></Forminput>
                    
                </div>

                    <Forminput 
                    label={'Your Message'} 
                    type="textArea"
                    name='message'
                    onChange={(event) => {setMessage(event.target.value)}}
                    onBlur={(event) => {}}
                    inputValue={message}
                    state={messageState}
                    ></Forminput>
    
                <Titlebtn btnValue="Send Request" loading={buttonState === ButtonStates.loading}></Titlebtn>
            </form>
  )
}

export default FormComponent