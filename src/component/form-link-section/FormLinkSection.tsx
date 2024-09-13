import React from "react";
import HeroButtons from "../heroSection/herobutton/HeroButtons";
import "./formlinksection.css";
import Linearbtn from "../heroSection/LinearBtn/Linearbtn";
import Navbtn from "../navbar/Navbtn/Navbtn";
import formlinkglow from "public/assets/footer/Vector.svg";
import Image from "next/image";
import { LETS_TALK_SECTION_TEXT } from "@/exports/copywriting/headers";

const FormLinkSection = () => {
  return (
    <section className="form-link-section">
      <div className="formglowlink">
        <Image
          src={formlinkglow}
          alt={"a hand waving"}
          width={596}
          height={573}
        />
      </div>
      <div>
        <h2>{LETS_TALK_SECTION_TEXT.TITLE}</h2>
        <p>
          {LETS_TALK_SECTION_TEXT.DESCRIPTION}
        </p>
        <div className="formlink-btn">
          <Navbtn>{LETS_TALK_SECTION_TEXT.BUTTONS.SECONDARY}</Navbtn>
          <Linearbtn btnValue={LETS_TALK_SECTION_TEXT.BUTTONS.PRIMARY} isLink={true} loading={false}></Linearbtn>
        </div>
      </div>
    </section>
  );
};

export default FormLinkSection;
