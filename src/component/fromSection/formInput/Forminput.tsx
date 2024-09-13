"use client";

import React, { useState } from 'react';

export enum InputStates {
    initial="INIT",
    valid="VALID",
    invalid="ERROR.INVALID",
    empty="ERROR.EMPTY"


} 

export type formInput = {
  label: string;
  type: 'input';
  name:string,
  inputValue:string,
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  onBlur : (event:React.FocusEvent<HTMLInputElement>) =>  void;
  state:InputStates
} | {
    label: string;
    type: 'input' | 'textArea';
    name:string,
    inputValue:string,
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>) =>void;
    onBlur : (event:React.FocusEvent<HTMLTextAreaElement>) =>  void;
    state:InputStates
  };


const hasError = (inputState:InputStates) => {
    if(inputState === InputStates.empty || inputState === InputStates.invalid)return true
    return false;
}

const createErrorMessage = (error:InputStates,field_name:string) => {
    if(error === InputStates.empty)return `Please input your ${field_name}.`
    
    return `Please enter a valid ${field_name}.`

}



const Forminput = ({ inputValue,onChange,onBlur, ...props }: formInput) => {
  

  
  const className = `${inputValue ? 'hasText' : ''} ${hasError(props.state) ? 'error' : ''}`

  

  if (props.type === 'input') {
    return (
      
      <div className="formInput">
        {hasError(props.state) && <span>{createErrorMessage(props.state,props.name)}</span>}
        <input
          type="text"
          onChange={onChange as (event:React.ChangeEvent<HTMLInputElement>) => void}
          onBlur={onBlur as (event:React.FocusEvent<HTMLInputElement>) => void} 
          className={className}
          value={inputValue}
        />
        <label htmlFor="">{props.label}</label>
      </div>
    );
  } else {
    return (
      <div className="formInput">
        <textarea
          onChange={onChange as (event:React.ChangeEvent<HTMLTextAreaElement>) => void}
          onBlur={onBlur as (event:React.FocusEvent<HTMLTextAreaElement>) => void}
          className={className}
          value={inputValue}
        ></textarea>
        <label htmlFor="">{props.label}</label>
      </div>
    );
  }
};

export default Forminput;
