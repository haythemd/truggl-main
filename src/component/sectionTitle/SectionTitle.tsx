import React from 'react'
import './SectionTitle.css'
import Titlebtn from './titleBtn/Titlebtn'
import Reveal from '../reveal/Reveal'
export interface sectionTitle{
    "title" : string,
    "visibility"? : boolean,
    "buttonDes"? : string ,
    "isBtn"? : boolean ,
    "buttonValue"? : string,
}
interface Props {
  "sectionTitleArray" : sectionTitle[]
}

const SectionTitle = (props:sectionTitle) => {
  if(props.visibility == false)
  return (
    <Reveal>
      <div className="sectionTitle titleOnly">
          <h2>{props.title}</h2>
      </div>
    </Reveal>
  )
  else if(props.isBtn == false)
  return (
    <Reveal>
      <div className="sectionTitle">
          <h2>{props.title}</h2>
          <div className="sectionTitleBtn">
            <span>{props.buttonDes}</span>
          </div>
      </div>
    </Reveal>
  )
  else
  return(
    <Reveal>
      <div className="sectionTitle">
          <h2>{props.title}</h2>
          <div className="sectionTitleBtn">
            <span>{props.buttonDes}</span>
            {props.buttonValue &&
            <Titlebtn btnValue={props.buttonValue} href={'/portfolio'} link={true}></Titlebtn>
            }
          </div>
      </div>
    </Reveal>
  )
}

export default SectionTitle ;