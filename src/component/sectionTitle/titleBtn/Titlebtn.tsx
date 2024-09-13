"use client";
import React, { useEffect, useRef, useState } from "react";
import "./titlebtn.css";
import Link from "next/link";

interface btnInfo {
  btnValue: string;
  href?: string;
  link?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onclick?: () => void
  target?: "_blank"
}

const Titlebtn = ({ btnValue, href, link, loading, ...props }: btnInfo) => {
  const buttonref = useRef<HTMLButtonElement>(null);
  const HoverContRef = useRef<HTMLSpanElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleHover = (e: React.MouseEvent) => {
    handleHoverEffect(e);
  };
  function handleHoverEffect(e: React.MouseEvent) {
    if (!buttonref.current || !HoverContRef.current || !circleRef.current)
      return;

    const BUTTON_CENTER_X =
      buttonref.current.getBoundingClientRect().x +
      buttonref.current.clientWidth / 2;
    const BUTTON_CENTER_Y =
      buttonref.current.getBoundingClientRect().y +
      buttonref.current.clientHeight / 2;
    const HOVERCONTAINER_X =
      HoverContRef.current.getBoundingClientRect().x +
      HoverContRef.current.clientWidth / 2;
    const HOVERCONTAINER_Y =
      HoverContRef.current.getBoundingClientRect().y +
      HoverContRef.current.clientHeight / 2;
    const MouseX = e.clientX;
    const MouseY = e.clientY;
    const deltaX = MouseX - BUTTON_CENTER_X;
    const deltaY = MouseY - BUTTON_CENTER_Y;

    const centerCursor = findDistence(
      MouseX,
      BUTTON_CENTER_X,
      MouseY,
      BUTTON_CENTER_Y
    );
    const centerCircle = findDistence(
      HOVERCONTAINER_X,
      BUTTON_CENTER_X,
      HOVERCONTAINER_Y,
      BUTTON_CENTER_Y
    );
    var ADJ_HYP = centerCursor / centerCircle;

    if (centerCircle < centerCursor) return;

    const radians = Math.atan2(deltaY, deltaX);
    const degree = radiansToDegree(radians);
    changeRotation(degree);
  }
  function changeRotation(degree: number) {
    if (!circleRef.current) return;
    circleRef.current.style.rotate = `${degree}deg`;
  }
  function findDistence(xa: number, xb: number, ya: number, yb: number) {
    return Math.sqrt(Math.pow(xa - xb, 2) + Math.pow(ya - yb, 2));
  }

  function radiansToDegree(radians: number) {
    return radians * (180 / Math.PI);
  }
  /* Href button */
  if (link == true)
    return (
      <div className="btn">
        <Link
          href={`${href}`}
          ref={(buttonref as unknown) as React.RefObject<HTMLAnchorElement>}
          onMouseOut={handleHover}
          target={props.target}
        >
          <span>{btnValue}</span>
          <div ref={circleRef}>
            <span ref={HoverContRef}></span>
          </div>
        </Link>
      </div>
    );
  /* Loading State For Default Button */ else if (!link && loading === true)
    return (
      <div className="btnloading">
        <button ref={buttonref} disabled aria-aria-disabled>
          <div>
            <div className="loader">Loading...</div>
          </div>
        </button>
      </div>
    );
  /* Default button */ else
    return (
      <div className="btn">
        <button
          ref={buttonref}
          onMouseOut={handleHover}
          type={props.type || "button"}
          onClick={props.onclick}
        >
          <span>{btnValue}</span>
          <div ref={circleRef}>
            <span ref={HoverContRef}></span>
          </div>
        </button>
      </div>
    );
};

export default Titlebtn;
