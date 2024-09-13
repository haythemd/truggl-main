"use client";
import React, { useEffect, useState } from "react";
import "./formcontainer.css";
import FormInput from "./form-input/FormInput";
import {
  mail,
  phone,
  youtube,
  instagram,
  twitter,
  linkedin,
} from "@/exports/svg/SvgExport";

import infoglow from "public/assets/form/infoglow.svg";
import Image from "next/image";
import Linearbtn from "../heroSection/LinearBtn/Linearbtn";
import { Controller, useForm } from "react-hook-form";
import { ContactPayload } from "@/app/api/contact/route";
import { ERROR_MESSAGE } from "@/exports/errors";
import validator from "validator";
import dayjs from "dayjs";
import axios from "axios";
import Link from "next/link";
import FormSuccess from "./form-success/FormSuccess";
import MainForm from "./main-form/MainForm";

enum FormStates {
  default = 0,
  success = 1,
}

const FormContainer = () => {
  const [formState, setFormState] = useState(FormStates.default);

  return (
    <>
      <div>
        {formState === FormStates.default ? (
          <MainForm onsuccess={() => setFormState(FormStates.success)} />
        ) : (
          <FormSuccess />
        )}
        <div className='form-info'>
          <div className='form-section-title'>
            <h2>We Love the Great Work!</h2>
            <p>
              We seek partners driven by passion for their endeavors, regardless
              of scale or industry. Whether you require an animated explainer,
              brand manifesto, product launch, event opener, logo animation -
              whatever narrative you aim to convey, {"we're"} here to assist{" "}
              <br /> <br />
              <br />
              {"We'd"} love to say hi!
            </p>
          </div>
          <Linearbtn btnValue='Book a Call' isLink />
          <ul>
            <li>
              <div>
                {mail}
                <span>E-mail</span>
              </div>
              <h4>contact@truggl.com</h4>
            </li>
            <li>
              <div>
                {phone}
                <span>Whatsapp</span>
              </div>
              <h4>+216 24 356 539</h4>
            </li>
            <li>
              <div>
                <span>Social Media</span>
              </div>
              <div>
                <Link href={"https://www.youtube.com/@TRUGGL"} target='_blank'>
                  {youtube}
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/company/truggl/?viewAsMember=true"
                  }
                  target='_blank'
                >
                  {linkedin}
                </Link>
                <Link href={"https://twitter.com/TRUGGL"} target='_blank'>
                  {twitter}
                </Link>
                <Link
                  href={"https://www.instagram.com/truggl_studio/"}
                  target='_blank'
                >
                  {instagram}
                </Link>
              </div>
            </li>
          </ul>
          <div className='infoglow'>
            <Image
              src={infoglow}
              alt={"a hand waving"}
              width={596}
              height={573}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
