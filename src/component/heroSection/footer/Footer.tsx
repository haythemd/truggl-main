import React from "react";
import "./Footer.css";
import NavigationContainer from "./navigationelement/NavigationContainer";
import SocialContainer from "./navigationelement/SocialContainer";
import SocialButtonContainer from "./SocialButton/SocialButtonContainer";
import { companyLogo } from "@/exports/svgExports";
import NavigationElement from "./navigationelement/NavigationElement";
import Link from "next/link";
import Reveal from "@/component/reveal/Reveal";
import Image from "next/image";
import footerglow from "public/assets/footer/footerglow.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footerglow">
        <Image src={footerglow} alt={"a hand waving"} width={596} height={573} />
      </div>
      <div className="descriptionFooterContainer">
        <div className="leftFooterConatiner">
          <div className="logoContainer">{companyLogo}</div>
          <p>
            {" "}
            TRUGGL
            <br />
            <span>
              Email:{" "}
              <Link href={"mailto:contact@truggl.com"}>contact@truggl.com</Link>
            </span>
            <br />
            corporate headquarters (HQ): Tunis, Tunisia
            <br />
            <span>
              Want to join our team? Fill out{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSeXQr6NTDKH7wQcJbxQjFKtBGlgdBqPb5iFJuCoM0JAuNe6_g/viewform"
                }
              >
                {" "}
                this form
              </a>
            </span>
          </p>
          <SocialButtonContainer></SocialButtonContainer>
        </div>
        <div className="rightFooterContainer">
          <NavigationContainer></NavigationContainer>
          <SocialContainer></SocialContainer>
        </div>
      </div>
      <hr />
      <div className="underhrefFooterContainer">
        <p>
          © 2024 Truggl LLC. All rights reserved.
        </p>
        <NavigationElement
          value={"Scroll Up ↑"}
          link={"/#hero"}
        ></NavigationElement>
      </div>
    </footer>
  );
};

export default Footer;
