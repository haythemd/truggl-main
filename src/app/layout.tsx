import Navbar from "@/component/navbar/Navbar";
import "./globals.css";
import Footer from "@/component/heroSection/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import LocalStorageProvider from "@/component/Providers/LocalStorageProvider";
import Popup from "@/component/popup/Popup";
import React from "react";
import { Metadata } from "next/types";
import GoogleAnalytics from "@/component/Google/GoogleAnalytics";
import ContactLink from "@/component/contact-list/contact-link/ContactLink";
import ContactList from "@/component/contact-list/ContactList";
import SectionOberver from "./providers/SectionOberver";
import {Providers} from "@/app/providers/Providers";


const TITLE = "Truggl | Explainer Video Production Company";
const DESCRIPTION =
  "Truggl, your trusted destination for Video Production services, We focus on crafting Demo Videos and Explainer Videos that will boost your conversions, and communicate your brand's presence and guiding principles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  manifest: "/site.webmanifest",
  keywords: [
    "marketing video production services",
    "what is a video sales letter",
    "explainer video",
    "explainer video maker",
    "commercial video production agency",
    "animated demo videos",
    "demo videos",
  ],
  twitter: {
    images: "/banner/truggl_banner.png",
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "https://truggl.com",
  },
  openGraph: {
    type: "website",
    url: "https://truggl.com",
    title: TITLE,
    description: DESCRIPTION,
    images: "/banner/truggl_banner.png",
  },
  applicationName: "Truggl",
  authors: {
    name: "Ahmed Yassin Bettaib",
    url: "https://www.linkedin.com/in/ahmed-yassin-bettaib-8b8175232/",
  },
  icons: {
    other: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "mask-icon",
        color: "#5bbad5",
        url: "/favicon/safari-pinned-tab.svg",
      },
    ],
  },
  themeColor: "#E5E8FA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <html lang="en">
        <body>
          <SectionOberver>
            <NextTopLoader color="#495CEF" />
            <GoogleAnalytics></GoogleAnalytics>
            <Navbar></Navbar>
            <LocalStorageProvider />
            {children}
            <Footer></Footer>
            <ContactList />
          </SectionOberver>

        </body>
      </html>
    </React.StrictMode>
  );
}
