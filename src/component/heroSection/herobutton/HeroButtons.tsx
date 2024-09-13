import React from "react";
import "./herobutton.css";
import Linearbtn from "../LinearBtn/Linearbtn";
import Navbtn from "@/component/navbar/Navbtn/Navbtn";
import { HERO_SECTION_TEXT } from "@/exports/copywriting/headers";

const HeroButtons = () => {
  return (
    <div className="heroBtn">
      <Navbtn>{HERO_SECTION_TEXT.BUTTONS.SECONDARY}</Navbtn>
      <Linearbtn
        btnValue={HERO_SECTION_TEXT.BUTTONS.PRIMARY}
        isLink={true}
      ></Linearbtn>
    </div>
  );
};

export default HeroButtons;
