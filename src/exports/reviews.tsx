import { Service } from "@/component/reviewSection/reviewSlider/sliderCard/SliderCard";
import RonakPatelcompany from "/public/assets/whyusimages/Ronak Patel company.png";
import RonakPatelprofile from "/public/assets/whyusimages/Ronak Patel profile.png";
import ramezchedlycompany from "/public/assets/whyusimages/ramez chedly company.png";
import ramezchedlyprofile from "/public/assets/whyusimages/ramez chedly proflle.png";
import delanocompany from "/public/assets/whyusimages/RebelCreativesLogo.png";
import delanopicture from "/public/assets/whyusimages/Delano Wallace profile.png";
import walidcompany from "/public/assets/whyusimages/Walid Amamou company.png";
import walidprofile from "/public/assets/whyusimages/Walid Amamou profile.png";
import saidcompany from "/public/assets/whyusimages/my_easy_transfer_logo.png";
import saidprofile from "/public/assets/whyusimages/1694036385150.png";

export const servicesArray: Service[] = [
  {
    reviewText:
      "​ Best ROI ! Everything, the explainer videos have become so much better that we are seeing increase in our conversion rate!​  ",
    iconWork: RonakPatelprofile,
    profilePicture: RonakPatelcompany,
    name: "Ronak Patel",
    workPosition: " CEO & Owner of SaasFlash",
  },
  {
    reviewText:
      "​ Truggl is a fantastic company to work with. Their work quality is exceptional, and they consistently maintain a high level of professionalism and responsiveness throughout the project.   ",
    iconWork: ramezchedlyprofile,
    profilePicture: ramezchedlycompany,
    name: "Ramez Chedly",
    workPosition: " CEO of Akera Digital Solutions",
  },
  {
    reviewText:
      "​  Very professional and dedicated to delivering great results. I commissioned a animation for my logo. The onboarding was smooth and I got it in less that 3 days which was faster than promised. If you are looking for quality design work in good time, I highly recommend Truggl.  ",
    iconWork: delanopicture,
    profilePicture: delanocompany,
    name: "Delano Wallace",
    workPosition: " Founder of Rebel Creatives",
  },
  {
    reviewText:
      "​  Great experience with Truggl. The animation exceeded my expectations and the team was very professional and met all the deadlines. Highly recommend! ",
    iconWork: walidprofile,
    profilePicture: walidcompany,
    name: "Walid Amamou",
    workPosition: " Founder of UBIAI",
  },
  {
    iconWork: saidprofile,
    profilePicture: saidcompany,
    name: "Ismail KHENISSI",
    workPosition: "CMO at My Easy Transfer",
    hasVideo: true,
  },
];
