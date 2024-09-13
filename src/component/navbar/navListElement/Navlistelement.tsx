"use client";
import Link from "next/link";
import React from "react";
import { listElement } from "../navlist/Navlist";

interface NavListElementProps extends listElement {
  selected: boolean;
}

const Navlistelement = (props: NavListElementProps) => {
  return (
    <li
      onClick={props.handleChecked}
      className={props.selected ? "selected" : ""}
    >
      {props.newTarg ? (
        <a href={props.href} target="_blank">
          {props.name}
        </a>
      ) : (
        <Link href={props.href}>{props.name}</Link>
      )}
    </li>
  );
};

export default Navlistelement;
