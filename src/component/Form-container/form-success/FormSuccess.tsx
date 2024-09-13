import React from 'react'
import Lottie from "react-lottie-player";
import successAnimation from '@/assets/lottie/success.json'
import Link from 'next/link';
import formglow from "public/assets/form/formglow.svg";
import Image from "next/image";
import Titlebtn from '@/component/sectionTitle/titleBtn/Titlebtn';

const FormSuccess = () => {
  return (
    <div className="form-success">
    <div className="success-container">
      <Lottie
        loop={false}
        animationData={successAnimation}
        play
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      ></Lottie>
      <h3>Thank you for reaching out!</h3>
      <div>
        <p>Feel free to watch some of our recent <Link href={"/portfolio"} >projects.</Link></p>
        <p>Or you can read some of our client feedback on <Link href={"https://www.trustpilot.com/review/truggl.com"} target='_blank'>trustpilot.</Link></p>
      </div>
      <Titlebtn btnValue={"See our trustpilot reviews"} link href={"https://www.trustpilot.com/review/truggl.com"} target='_blank'/>
    </div>
    <div className="glow-bg">
      <Image
        src={formglow}
        alt={"a hand waving"}
        width={592}
        height={600}
      />
    </div>
  </div>
  )
}

export default FormSuccess