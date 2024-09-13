"use client";
import React, { useState } from "react";

export interface IFaqElement {
  question: string;
  anwser: React.ReactNode;
}

const FaqElement = (props: IFaqElement) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="faq-element">
      <div className="title" onClick={() => setCollapse(!collapse)}>
        <div className="bg-primary"></div>
        <div className="bg-secondary"></div>
        <span>{props.question}</span>
        {arrow}
      </div>
      <div className={`wrapper ${collapse ? "collapse" : ""}`}>
        <div className="bg-primary"></div>
        <div className="bg-secondary"></div>
        <div className="expandable">
          <p>{props.anwser}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqElement;

const arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="11"
    viewBox="0 0 17 11"
    fill="none"
  >
    <path
      d="M2.5 2.71484L8.5 8.71484L14.5 2.71484"
      stroke="white"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
