"use client"
import React from 'react'

const ScrollUp = () => {
  return (
    <span onClick={() => {window.scrollTo(0, 0);}}>Scroll Up ↑</span>
  )
}

export default ScrollUp