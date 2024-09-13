import FormContainer from "@/component/Form-container/FormContainer";
import React from "react";
import backgroundglow from "public/assets/form/Backgroundglow.svg";
import Image from "next/image";
// const FORM_INPUT_ARRAY: IFromInputProps =

const page = () => {
  return (
    <section className="form-section">
      <div className="glowbackground left">
        <Image
          src={backgroundglow}
          alt={"a hand waving"}
          width={592}
          height={600}
        />
      </div>
      <FormContainer />
      <div className="glowbackground right">
        <Image
          src={backgroundglow}
          alt={"a hand waving"}
          width={592}
          height={600}
        />
      </div>
    </section>
  );
};

export default page;
