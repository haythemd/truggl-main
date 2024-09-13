import React from 'react'
import "./linearbtn.css"

interface LinearBtnProps {
  "btnValue" : string
  "onClick"? : (event:React.MouseEvent<HTMLButtonElement>) => void
  "isLink"?:false,
  "loading"?:boolean
}

interface LinearLinkProps {
  "btnValue" : string
  "href"? : string
  "isLink":true
  "loading"?:boolean
  "onClick"? : (event:React.MouseEvent<HTMLAnchorElement>) => void
}

type LinearBtn = LinearBtnProps | LinearLinkProps

const Linearbtn = ({btnValue , ...props}:LinearBtn) => {
  
  return (
    <>
    
    <div className="linearBtn">
        <div className="boxShadow"></div>
        {props.isLink ? 

        /* Button is a link */
        props.loading ?
        <a target="_blank" href={'https://calendly.com/ahmedyassin__-'} rel="noopener noreferrer"  aria-disabled className='disabled' style={{opacity:'0.5',cursor:'not-allowed'}}>
            <div className="primaryBG"></div>
            <div className="btnValue">{'Loading...'}</div>
        </a>
         : 
          <a target="_blank" href={'https://calendly.com/ahmedyassin__-'} rel="noopener noreferrer"  onClick={props.onClick}>
            <div className="primaryBG"></div>
            <div className="btnValue">{btnValue}</div>
        </a> 
        
        :

        /* Button is a normal button */

        props.loading ? 

        <button disabled aria-disabled className='disabled' style={{opacity:'0.5',cursor:'not-allowed'}}>
        <div className="primaryBG"></div>
        <div className="btnValue">{'Loading...'}</div>
        </button> 
        
        :

          <button onClick={props.onClick}>
            <div className="primaryBG"></div>
            <div className="btnValue">{btnValue}</div>
        </button>
        
      

        }
    </div>
    </>
  )
}

export default Linearbtn