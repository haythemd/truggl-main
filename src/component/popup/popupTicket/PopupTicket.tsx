import React from 'react'
import './popupticket.css'
import Reveal from '@/component/reveal/Reveal'

interface PopupTicketProps{
    'onClick':()=>void
}

const PopupTicket = ({onClick,...props}:PopupTicketProps) => {
  return (
    <button className="popupticket" onClick={onClick}>
        <span>Get Our 100% Free eBook.</span>
    </button>
  )
}

export default PopupTicket