import React, { ReactNode } from "react";
import Image from "next/image";

export interface IProcessElement {
  title: string;
  description: string;
  icon: string;
}

const ProcessElement = (props: IProcessElement) => {
  console.log(props.icon);
  return (
    <>
      <li className="process-element">
        <div className="separator">
          <hr />
          <div>
            <Image width={32} height={32} src={props.icon} alt="" />
          </div>
          <hr />
        </div>
        <div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </li>

    </>
  );
};

export default ProcessElement;
