import React from "react";
import Navbtn from "../navbar/Navbtn/Navbtn";
import Linearbtn from "../heroSection/LinearBtn/Linearbtn";
import "./faq.css";
import FaqElement from "./faq-element/FaqElement";
import { faqList } from "@/exports/copywriting/FAQQuestions";
import { FAQ_SECTION_TEXT } from "@/exports/copywriting/headers";



const FAQ = () => {
  return (
    <section className="FAQ-section">
      <div className="bg-primary"></div>
      <div className="bg-secondary"></div>
      <div className="faq-title">
        <span>{FAQ_SECTION_TEXT.TITLE}</span>
        <div className="faq-btn">
          <Navbtn />
          <Linearbtn
            btnValue={FAQ_SECTION_TEXT.BUTTONS.PRIMARY}
            isLink={true}
            loading={false}
          />
        </div>
      </div>
      <div className="faq-container">
        {faqList.map((element , index) => {
          return (
            <FaqElement
              key={index}
              question={element.question}
              anwser={element.anwser}
            />
          );
        })}
      </div>
      <div className="faq-btn">
          <Navbtn />
          <Linearbtn
            btnValue={"Book a meeting"}
            isLink={true}
            loading={false}
          />
        </div>
    </section>
  );
};

export default FAQ;
