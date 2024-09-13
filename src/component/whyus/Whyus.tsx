import React from "react";
import WhyusElement from "./whyusElement/WhyusElement";
import WhyusSecondElement from "./whyusElement/WhyusSecondElement";
import "./Whyus.css";
import { whyusSectionProps } from "@/exports/whyus";
import SectionTitle from "../sectionTitle/SectionTitle";
import Reveal from "../reveal/Reveal";
import { WHY_US_SECTION_TEXT } from "@/exports/copywriting/headers";
const Whyus = () => {
  return (
    <Reveal>
      <section className="Whyus" id="about">
        <SectionTitle
          title={WHY_US_SECTION_TEXT.HEADER.TITLE}
          visibility={true}
          buttonDes={WHY_US_SECTION_TEXT.HEADER.DESCRIPTION}
          isBtn={false}
        ></SectionTitle>
        <WhyusElement />
        <div className="doubleWhyus">
          {whyusSectionProps.map((item, index) => (
            <WhyusSecondElement
              key={index}
              titleSecondelment={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </Reveal>
  );
};
export default Whyus;
