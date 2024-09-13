import React from 'react'

interface IFromRadio {
    label: string;

}

const FromRadio = ( props:IFromRadio ) => {
  return (
    <label>
        <input type="radio" name='budget'/>
        <span>{props.label}</span>
    </label>
  )
}

export default FromRadio