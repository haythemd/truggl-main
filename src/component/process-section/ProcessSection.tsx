import React from "react";
import "./processsection.css";
import ProcessElement from "./process-element/ProcessElement";
import Image from "next/image";
import Reveal from "../reveal/Reveal";
import { PROCESS_SECTION_TEXT } from "@/exports/copywriting/headers";
import { processList } from "@/exports/process";



const ProcessSection = () => {
  return (
    <Reveal>
      <section className="process-section">
        <h2>{PROCESS_SECTION_TEXT.TITLE}</h2>
        <div className="list-container">
          <ul>
            {processList.map((element) => {
              return (
                <ProcessElement
                  title={element.title}
                  description={element.description}
                  key={element.title}
                  icon={element.icon}
                />
              );
            })}
          </ul>
          <div>
            <Image
              width={887}
              height={447}
              src="/process/processImg.png"
              alt=""
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default ProcessSection;
