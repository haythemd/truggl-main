"use client";
import React, { useState, useRef } from "react";

import "./hamburger.css";
import { companyLogo } from "@/exports/svgExports";
import Navbtn from "../Navbtn/Navbtn";
import Linearbtn from "@/component/heroSection/LinearBtn/Linearbtn";
import Navlist, { Props } from "../navlist/Navlist";

const Hamburger = ({ listElementArray }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <div className="hamburgerContainer">
      <label className="hamburger" id="hamburger">
        <input
          type="checkbox"
          id="zeby"
          checked={checked}
          onChange={handleChecked}
        />
      </label>
      <div className="drop-menu" id="drop-menu">
        <div className="dropDownContent">
          <div className="companyLogo">{companyLogo}</div>
          <div className="dropdown-content">
            <div className="hamburgerBtn">
              <Navbtn onClick={handleChecked}></Navbtn>
              <Linearbtn btnValue={"Book a meeting"} isLink={true} onClick={handleChecked}></Linearbtn>
            </div>
            <Navlist
              listElementArray={listElementArray}
              handleChecked={handleChecked}
            ></Navlist>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
