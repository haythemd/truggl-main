import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import Servicecontent from "./serviceContent/Servicecontent";
import "./servicesection.css";
import Titlebtn from "../sectionTitle/titleBtn/Titlebtn";
import Reveal from "../reveal/Reveal";
import { SERVICES_SECTION_TEXT } from "@/exports/copywriting/headers";

const Servicesection = () => {
  return (
    <Reveal>
      <section className="serviceSection" id="service">
        <SectionTitle
          title={SERVICES_SECTION_TEXT.HEADER.TITLE}
          visibility={true}
          buttonDes={SERVICES_SECTION_TEXT.HEADER.DESCRIPTION}
          buttonValue={SERVICES_SECTION_TEXT.HEADER.BUTTON}
        ></SectionTitle>
        <Servicecontent></Servicecontent>
        <Titlebtn
          btnValue={SERVICES_SECTION_TEXT.HEADER.BUTTON}
          href={"/portfolio"}
          link={true}
        ></Titlebtn>
      </section>
    </Reveal>
  );
};

export default Servicesection;
