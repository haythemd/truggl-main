"use client";

import React, { useState } from "react";
import "./contactlist.css";
import ContactLink from "./contact-link/ContactLink";
import { Tooltip } from "react-tooltip";

const ContactList = () => {
  const toolTipId = "ahmed-yassine-account-manager";

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="contact-container" data-tooltip-id={toolTipId}>
        <Tooltip
          id={toolTipId}
          place="right"
          content={"Your Account Manager / Ahmed"}
          isOpen={isOpen}
        />
        <label
          className="contact-icon"
          onChange={() => {
            setIsOpen((currentState) => !currentState);
          }}
        >
          <input type="checkbox" name="" id="" />
          <div>
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 23 23"
            >
              <g fillRule="evenodd">
                <path
                  d="M10.314 -3.686H12.314V26.314H10.314z"
                  transform="rotate(-45 11.314 11.314)"
                />
                <path
                  d="M10.314 -3.686H12.314V26.314H10.314z"
                  transform="rotate(45 11.314 11.314)"
                />
              </g>
            </svg>
          </div>
        </label>
        <div className="contact-list">
          <ContactLink
            svg={
              <svg
                role="presentation"
                width="50"
                height="50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 50a25 25 0 100-50 25 25 0 000 50z"
                  fill="#fff"
                ></path>
                <path
                  d="M26.1 12a12.1 12.1 0 00-10.25 18.53l.29.46-1.22 4.46 4.57-1.2.45.27a12.1 12.1 0 106.16-22.51V12zm6.79 17.22c-.3.85-1.72 1.62-2.41 1.72-.62.1-1.4.14-2.25-.14-.7-.22-1.37-.47-2.03-.77-3.59-1.57-5.93-5.24-6.1-5.48-.19-.24-1.47-1.97-1.47-3.76 0-1.79.93-2.67 1.25-3.03.33-.37.72-.46.96-.46.23 0 .47 0 .68.02.22 0 .52-.09.8.62l1.1 2.7c.1.18.16.4.04.64s-.18.39-.36.6c-.18.21-.38.47-.54.64-.18.18-.36.38-.15.74.2.36.92 1.55 1.98 2.52 1.37 1.23 2.52 1.62 2.88 1.8.35.18.56.15.77-.1.2-.23.9-1.05 1.13-1.42.24-.36.48-.3.8-.18.33.12 2.09 1 2.44 1.18.36.19.6.28.69.43.09.15.09.88-.21 1.73z"
                  fill="#27D061"
                ></path>
                <path
                  d="M25 0a25 25 0 100 50 25 25 0 000-50zm1.03 38.37c-2.42 0-4.8-.6-6.9-1.76l-7.67 2 2.05-7.45a14.3 14.3 0 01-1.93-7.2c0-7.92 6.49-14.38 14.45-14.38a14.4 14.4 0 110 28.79z"
                  fill="#27D061"
                ></path>
              </svg>
            }
            name={"10-15 Minutes Response Time"}
            href={"https://wa.me/+21624356539"}
          />
          <ContactLink
            svg={
              <svg
                role="presentation"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 43C34.9411 43 43 34.9411 43 25C43 15.0589 34.9411 7 25 7C15.0589 7 7 15.0589 7 25C7 34.9411 15.0589 43 25 43Z"
                  fill="white"
                ></path>
                <path
                  d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.84 0 25 0ZM38.8 14.96L25 27.18L11.2 14.96H38.8ZM9.32 16.68L18.76 25L9.33 33.32V16.68H9.32ZM11.2 35.04L20.63 26.72L24.13 29.87C24.3744 30.0647 24.6776 30.1707 24.99 30.1707C25.3024 30.1707 25.6056 30.0647 25.85 29.87L29.35 26.72L38.78 35.04H11.21H11.2ZM40.66 33.32L31.29 25L40.72 16.68V33.32H40.67H40.66Z"
                  fill="#168DE2"
                ></path>
              </svg>
            }
            name={"1-2 Hours Response Time"}
            href="mailto:ahmedyassinbettaib@truggl.com"
          />
        </div>
      </div>
    </>
  );
};

export default ContactList;
