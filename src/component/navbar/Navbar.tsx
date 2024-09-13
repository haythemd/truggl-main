import React from "react";
import "./navbar.css";
import { companyLogo } from "@/exports/svgExports";
import Navlist from "./navlist/Navlist";
import Hamburger from "./hamburger/Hamburger";
import Link from "next/link";
import NotificationCTA from "./NotificationCTA";

const listElementArray = [
  {
    name: "Home",
    href: "/#hero",
  },
  {
    name: "Service",
    href: "/#service",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Blogs",
    href:
      "https://tourmaline-hovercraft-302.notion.site/BLOGS-8ff4bd035817472b88dc644a56605aaf?pvs=4",
    newTarg: true,
  },
];

const Navbar = () => {
  return (
    <nav className="scroll-nav">
      <Link className="navLogo" href={"/#hero"}>
        {companyLogo}
      </Link>
      <div className="navList">
        <Navlist listElementArray={listElementArray}></Navlist>
      </div>
      <NotificationCTA>Get a quote</NotificationCTA>
      <Hamburger listElementArray={listElementArray}></Hamburger>
    </nav>
  );
};

export default Navbar;
