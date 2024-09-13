"use client";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

interface IContactLink {
  href: string;
  svg?: React.ReactNode;
  name: string;
}

const ContactLink = (props: IContactLink) => {
  return (
    <Link href={props.href} data-tooltip-id={props.name} target="_blank">
      {props.svg}
      <Tooltip id={props.name} place="right" content={props.name} />
    </Link>
  );
};

export default ContactLink;
