import { HERO_SECTION_TEXT } from "@/exports/copywriting/headers";
import React from "react";

const Maintitle = () => {
  return (
    <div className="mainTitle">
      <h1>
        <span>{HERO_SECTION_TEXT.H1.PURPLE_TEXT}</span>
        {HERO_SECTION_TEXT.H1.WHITE_TEXT}
      </h1>
      <h4>{HERO_SECTION_TEXT.SUBTITLE}</h4>
    </div>
  );
};

export default Maintitle;
