"use client";

import React, { useState } from "react";
import "./videocontainer.css";
import { groupGlow, videoPlayerLogo } from "@/exports/svgExports";
import Image from "next/image";
import thumbnail from "/public/assets/truggl.webp";
import Modal from "@/component/Modal/Modal";
import VideoPlayer from "@/component/PortfolioSection/VideoPlayer/VideoPlayer";

const Videocontainer = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      {modalOpened && (
        <Modal
          onClose={() => {
            setModalOpened(false);
          }}
          overflowHidden
        >
          <VideoPlayer videoId={"2QZLG9CQ2qs"} />
        </Modal>
      )}

      <div className="glowParticaleContainer">{groupGlow}</div>
      <div className="vidContainer">
        <div className="vidIndicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className="vidWrapper"
          onClick={() => {
            setModalOpened(true);
          }}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter") setModalOpened(true);
          }}
        >
          {videoPlayerLogo}
          <div className="vidHolderBluredBg"></div>
          <div className="vidHolderHover"></div>
          <Image
            fill
            src={thumbnail}
            alt={"An illustration of TRUGGL"}
            priority
          ></Image>
        </div>

      </div>
      <p className="underHeroSection"><span>15 Minutes</span> Of Aired Content On National TV & <span>+70 Videos</span> Created In The Last Year.</p>
    </>
  );
};

export default Videocontainer;
