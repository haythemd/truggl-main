'use client'
import Script from "next/script"

const GoogleAnalytics = () => {

    if(!process.env.GA_MEASUREMENT_ID)return(<></>)

    return (
        <>
           <Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
  strategy="beforeInteractive"
/>
<Script id="google-analytics" strategy="beforeInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GA_MEASUREMENT_ID}');
  `}
</Script>
    </>
    )
}
export default GoogleAnalytics