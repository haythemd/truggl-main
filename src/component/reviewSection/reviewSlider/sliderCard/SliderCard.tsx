import React from "react";
import "./sliderCard.css";
import Image from "next/image";
import { playLogo } from "@/exports/svgExports";

export interface Service {
  reviewText?: string;
  iconWork: any;
  profilePicture: any;
  name: string;
  workPosition: string;
  hasVideo?: boolean;
}
interface Props {
  servicesArray: Service[];
}

const SliderCard = (props: Service) => {
  return (
    <div className="sliderCard">
      <div className="sliderCardPrimaryBg"></div>
      <div className="sliderCardSecondaryBg"></div>
      {props.hasVideo ? (
        <div className="reviewVidContainer">
          <div className="vidHolderBluredBg"></div>
          <div className="vidHolderHover"></div>
          {playLogo}
        </div>
      ) : (
        <p className="reviewText">{`​“ ${props.reviewText} ”`}</p>
      )}
      <div className="underreviewText">
        <div className="images">
          <div className="imagecompanyConatiner">
            <Image
              className="iconWork"
              src={props.profilePicture}
              alt={""}
              fill
              objectFit="contain"
            ></Image>
          </div>
          <div className="imageProfileConatiner">
            <Image
              className="profilePicture"
              src={props.iconWork}
              alt={""}
              fill
              objectFit="contain"
            ></Image>
          </div>
        </div>
        <div className="workAndName">
          <span className="name">{props.name}</span>
          <span className="workPosition">{props.workPosition}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
