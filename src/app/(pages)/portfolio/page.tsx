import Portfoliosection from "@/component/PortfolioSection/Portfoliosection";
import React from "react";
import { VideoData } from "@/types/videos";
import VideoPlayer from "@/component/PortfolioSection/VideoPlayer/VideoPlayer";
import Modal from "@/component/Modal/Modal";
import FormLinkSection from "@/component/form-link-section/FormLinkSection";

const API_URL =
  process.env.PRODUCTION === "true"
    ? `https://${process.env.VERCEL_URL}/api/portfolio/list`
    : `${process.env.VERCEL_URL}/api/portfolio/list`;

const getVideos = async () => {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 300 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return { data: [] };
    }

    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response: Expected JSON");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
};

export default async function Portfoliopage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const response = await getVideos();
  const videos = response.data as VideoData[];

  return (
    <>
      <Portfoliosection videos={videos}></Portfoliosection>
      {searchParams !== undefined &&
        searchParams?.video &&
        videos &&
        videoIsInPlaylist(searchParams?.video as string, videos) === true && (
          <Modal routeBased>
            <VideoPlayer videoId={searchParams?.video as string}></VideoPlayer>
          </Modal>
        )}
      <FormLinkSection />
    </>
  );
}

function videoIsInPlaylist(videoId: string, videos: VideoData[]): boolean {
  if (!videoId) return false;
  if (videos.find((video) => video.id === videoId) === undefined)
    throw new Error("dosentExist");
  return true;
}
