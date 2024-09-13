import React from "react";
import "./navbtn.css";
import Link from "next/link";

export interface INavbtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Navbtn = (props: INavbtnProps) => {
  const fallbackText = "Get a quote";
  const className = props.className ? "navBtn " + props.className : "navBtn";
  return (
    <div className={className}>
      <Link href={"/form"} onClick={props.onClick}>
        {props.children || fallbackText}
      </Link>
    </div>
  );
};

export default Navbtn;
