import React from 'react'
import './NavigationElement.css'
import Link from 'next/link'

export interface Href{
    "value":string,
    "link":string
    "key"? : number,
    "external"?:boolean
  }
  export interface Props{
    "navigationArray" : Href[] ;
  }

const NavigationElement = ({external,...props}:Href) => {
    if(external)return(
      <a target="_blank" href={props.link} rel="noopener noreferrer">{props.value}</a>
    )
    return (
      <Link  href={props.link}> {props.value}</Link>
      )
}

export default NavigationElement