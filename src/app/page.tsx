import React from "react";
import Herosection from "@/component/heroSection/Herosection";
import Reviewsection from "@/component/reviewSection/Reviewsection";
import Servicesection from "@/component/serviceSection/Servicesection";
import Whyus from "@/component/whyus/Whyus";
import FormLinkSection from '@/component/form-link-section/FormLinkSection';
import ProcessSection from '@/component/process-section/ProcessSection';
import FAQ from "@/component/FAQ/FAQ";

const Mainpage = () => {
  return (
    <>
      <main>
        <Herosection />
        <Servicesection />
        <ProcessSection />
        <Reviewsection />
        <Whyus />
        <FormLinkSection />
        <FAQ />
      </main>
    </>
  );
};

export default Mainpage;
