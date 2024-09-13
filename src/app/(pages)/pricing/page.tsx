import Image from "next/image";
import Logo1 from "../../../assets/icons/Logo1.svg";
import Logo2 from "../../../assets/icons/Logo2.svg";
import Logo3 from "../../../assets/icons/Logo3.svg";
import Logo4 from "../../../assets/icons/Logo4.svg";
import Logo5 from "../../../assets/icons/Logo5.svg";
import {FormEvent} from "react";
import Switch from "@/component/Switch/switch";
export default async function PricingPage (){

    return (

        <div>

            <div   style={{marginLeft:'10%', marginRight:'10%'}} >
                <center>
                    <h1 style={{color: "#E5E8FA"}}>1-Time Quote, or a Plan</h1>
                    <center>
                        <p
                            style={{color: '#B7BAC8', textAlign: 'center', textAlignLast:'center', maxLines:3, lineClamp:3,

                            }}>Working with 100s of startups
                            to
                            top IPOs globally, we aim to create videos that deliver the 'Oh'
                            moment.<br style={{textAlignLast:"center"}}/> It’s not about 'what’s the maximum we can charge them' but 'how much do we need
                            for a
                            killer video.<br style={{textAlignLast: "center"}}/>'Every plan is made for someone, so choose the right one for you and
                            contact us 👀</p>

                        </center>
                        </center>

                <div style={{marginTop:'50px',display:"flex",flexDirection:"row", alignContent:"center", justifyContent:"space-evenly"}}>
                    <Image src={Logo4} alt={"Logo"}/>


                    <Image src={Logo3} alt={"Logo"}/>
                    <Image src={Logo1} alt={"Logo"}/>
                    <Image src={Logo5} alt={"Logo"}/>
                    <Image src={Logo2} alt={"Logo"}/>


                </div>

                <div style={{marginTop:'50px',display:"flex",flexDirection:"row", alignContent:"center", justifyContent:"space-evenly"}}>

                <div className={"rectangleDiv"} style={{"marginTop":"50px"}}>
                    <div style={{
                        marginTop: '50px',
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "end",
                        justifyContent: "space-between"
                    }}>
                        <h3 style={{color:'#e5e8fa'}}>One-time Project</h3>
                        <div style={{width:'200px'}}><div className={"navbarElement"} >
                            <div className={"div"}>•</div>
                            <div className={"perVideo"}>{`-20% Per Video `}</div>
                        </div>
                        </div>
                    </div>

                    <p style={{color:'#e5e8fa'}}>Starting at</p>

                    <div className={"row"} style={{alignContent:"end"}}>
                        <h2 style={{color:'#e5e8fa'}}>$2500</h2>
                        <h4  style={{alignSelf:"end", color:"#e5e8fa"}}>/ Per Video</h4>
                    </div>

                    <p style={{color:'#e5e8fa'}}>For those looking for casual and efficient video<br/>production partnerships</p>

                    <div style={{marginTop:'20px'}} className={"sliderDiv row"}>
                        <h3>30 sec</h3> <p>Videos Duration</p>
                    </div>



                </div>
                    <div className={"bigContainer"} style={{width:"100%"}}>

                    <div className={"row"}>
                        <h3 style={{fontSize:"26px"}}>Monthly Subscriptions</h3>
                    </div>

                        <div className={"row"}>

                            <div style={{paddingLeft:"30px", paddingTop:"20px"}}></div>
                            <div></div>
                        </div>

                    </div>

                </div>


            </div>


    </div>)
}


function handleChange(e:FormEvent){

}
