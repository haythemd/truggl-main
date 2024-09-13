"use client";

import React , {useEffect, useState} from 'react'
import "./modal.css"
import { usePathname, useRouter } from 'next/navigation';
import { ModalIsOpenContext } from '@/exports/contexts/modalContext';

interface ModalProps {
    'children' : React.ReactNode,
    'routeBased'? : boolean;
    'onClose'?: () => void;
    'overflowHidden'?:boolean;
    'cantCloseWithKeyboard'?:boolean;
}

const Modal = ({overflowHidden,onClose,cantCloseWithKeyboard,...props}:ModalProps) => {
  const router = useRouter();
  const pathname = usePathname();

  //Handles closing the modal
  const handleModalClose = () => {
    if(props.routeBased === true){
      router.push(pathname, {scroll: false});
    }else if(onClose !== undefined){
      onClose();
    }
  }


  //Escape button pressed handler
  const handleEscapeKeyDown = (event:KeyboardEvent)  => {

      //Check if key pressed is the escape button
      if(event.key === 'Escape'){
        handleModalClose();
      }
      
    }
  
  

    localStorage.setItem('MODAL_IS_OPEN','true');

  //UseEffect

  useEffect(() => {
    localStorage.setItem('MODAL_IS_OPEN','true');
    return () => {
      localStorage.setItem('MODAL_IS_OPEN','false');
    };
  }, []);

  useEffect(() => {
    
    if(overflowHidden){
    document.body.style.overflowY = "hidden";
    }

    if(!cantCloseWithKeyboard){
    document.addEventListener('keydown', handleEscapeKeyDown);
    }
    
    return () => {

      if(!cantCloseWithKeyboard){
        document.removeEventListener('keydown',handleEscapeKeyDown);
      }

      if(overflowHidden){
        document.body.style.overflowY = "visible";
        }

    }
  }, [])
  

  return (
    <>
  
        <div className="modalContainer">
            <div className="backgroundBlur" onClick={handleModalClose}></div>
            <button onClick={handleModalClose}>X</button>
            <div className="modal">
                {props.children}
            </div>
        </div>
  
    </>
  )
}

export default Modal