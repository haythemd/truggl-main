"use client";

import React from "react";
import Navlistelement from "../navListElement/Navlistelement";
import { usePathname } from "next/navigation";
import { useSection } from "@/app/providers/SectionOberver";

export interface listElement {
  name: string;
  href: string;
  newTarg?: boolean;
  handleChecked?: () => void;
}
export interface Props {
  listElementArray: listElement[];
  handleChecked?: () => void;
}

const Navlist = ({ listElementArray, handleChecked, ...props }: Props) => {
  const pathname = usePathname();

  return (
    <ul>
      {listElementArray.map((element, index) => {
        return (
          <Navlistelement
            name={element.name}
            href={element.href}
            handleChecked={handleChecked}
            key={index}
            selected={false}
            newTarg={element.newTarg}
          ></Navlistelement>
        );
      })}
    </ul>
  );
};

export default Navlist;
