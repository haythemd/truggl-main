import React from "react";
import SliderCard, { Service } from "./sliderCard/SliderCard";
import { servicesArray } from "@/exports/reviews";

import "./ReviewSlider.css";

const ReviewSlider = () => {
  return (
    <div className="marque-w">
      <div className="reviewSlider">
        {servicesArray.map((service, index) => (
          <SliderCard {...service} key={index} />
        ))}
      </div>
      <div className="reviewSlider">
        {servicesArray.map((service, index) => (
          <SliderCard {...service} key={index} />
        ))}
      </div>
      <div className="reviewSlider">
        {servicesArray.map((service, index) => (
          <SliderCard {...service} key={index} />
        ))}
      </div>
      <div className="reviewSlider">
        {servicesArray.map((service, index) => (
          <SliderCard {...service} key={index} />
        ))}
      </div>
      <div className="reviewSlider">
        {servicesArray.map((service, index) => (
          <SliderCard {...service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;
