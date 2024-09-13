import React from "react";
import "./DescriptionSection.css";
import Reveal from "../reveal/Reveal";
import { DESCRIPTION_SECTION_TEXT } from "@/exports/copywriting/headers";

const DescriptionSection = () => {
  return (
    <Reveal>
      <div className="descriptionSection">
        <h2>
          <span>{DESCRIPTION_SECTION_TEXT.HEADER.FIRST_TEXT}</span>
          <mark>{DESCRIPTION_SECTION_TEXT.HEADER.BLUE_MARKED_TEXT}</mark>
          <span>{DESCRIPTION_SECTION_TEXT.HEADER.SECOND_TEXT}</span>
          <mark>{DESCRIPTION_SECTION_TEXT.HEADER.PURPLE_MARKED_TEXT}</mark>
        </h2>
        <hr></hr>
        <div className="underdescriptionSection">
          {DESCRIPTION_SECTION_TEXT.SUB_TEXT}
        </div>
      </div>
    </Reveal>
  );
};

export default DescriptionSection;
