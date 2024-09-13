"use client";

import React, { useState } from "react";
import Servicelist from "../serviceList/Servicelist";
import Servicevid, { VideoDataType } from "../serviceVid/Servicevid";
import { servicesArray } from "@/exports/reviews";
import Modal from "@/component/Modal/Modal";
import VideoPlayer from "@/component/PortfolioSection/VideoPlayer/VideoPlayer";
import LottiePlayer from "@/component/PortfolioSection/VideoPlayer/LottiePlayer";
import LottieAnimation from "../../../../public/assets/lottie/lottie_animation_example.json";
import DemoVideosThumbnail from "../../../../public/assets/lottie/note_app.json";
import ExplainerVideosThumbnail from "../../../../public/assets/lottie/my_easy_transfer.json";

import Image from "next/image";
import { SERVICES_SECTION_TEXT } from "@/exports/copywriting/headers";

export interface ServiceElementType {
  serviceTitle: string;
  serviceDescription: string;
  videoData: VideoDataType;
}

const serviceElementArray: ServiceElementType[] = [
  {
    serviceTitle: SERVICES_SECTION_TEXT.SERVICES.EXPLAINER_VIDEOS.TITLE,
    serviceDescription:
      SERVICES_SECTION_TEXT.SERVICES.EXPLAINER_VIDEOS.DESCRIPTION,
    videoData: {
      type: "youtube",
      id: "yCxuADXLH9c",
      src: ExplainerVideosThumbnail,
    },
  },
  {
    serviceTitle: SERVICES_SECTION_TEXT.SERVICES.DEMO_VIDEOS.TITLE,
    serviceDescription: SERVICES_SECTION_TEXT.SERVICES.DEMO_VIDEOS.DESCRIPTION,
    videoData: {
      type: "youtube",
      id: "s6lf-VReHDU",
      src: DemoVideosThumbnail,
    },
  },
  {
    serviceTitle: SERVICES_SECTION_TEXT.SERVICES.LOTTIE_ANIMATIONS.TITLE,
    serviceDescription:
      SERVICES_SECTION_TEXT.SERVICES.LOTTIE_ANIMATIONS.DESCRIPTION,
    videoData: {
      type: "svg",
      src: LottieAnimation,
    },
  },
];

const Servicecontent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedVideoData, setSelectedVideoData] = useState<VideoDataType>(
    serviceElementArray[0].videoData
  );
  const [modalOpened, setModalOpened] = useState(false);
  const handleServiceClick = (serviceIndex: number) => {
    setSelectedIndex(serviceIndex);
    const videoData = serviceElementArray[serviceIndex].videoData;
    setSelectedVideoData(videoData);
  };

  const handleThumbnailClick = () => {
    setModalOpened(true);
  };

  return (
    <div className="serviceContent">
      <div className="serviceList">
        <Servicelist
          serviceElementArray={serviceElementArray}
          selectedIndex={selectedIndex}
          onServiceClick={handleServiceClick}
        ></Servicelist>
      </div>
      <Servicevid onThumbnailClick={handleThumbnailClick}>
        <LottiePlayer src={selectedVideoData.src} />
      </Servicevid>
      {modalOpened && (
        <Modal
          onClose={() => {
            setModalOpened(false);
          }}
          overflowHidden
        >
          {selectedVideoData.type === "youtube" && (
            <VideoPlayer videoId={selectedVideoData.id} />
          )}
          {selectedVideoData.type === "svg" && (
            <LottiePlayer src={selectedVideoData.src} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Servicecontent;
