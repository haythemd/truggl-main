"use client";

import React, { useEffect } from 'react'

const LocalStorageProvider = () => {
  useEffect( () => {
    localStorage.setItem('MODAL_IS_OPEN','false')
  },[])
  return (
    <></>
  )
}

export default LocalStorageProvider