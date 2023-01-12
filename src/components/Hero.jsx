import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
// import "./hero.css";



const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className='container-fluid ' style={{ marginTop: "-120px", backgroundImage: "url('https://www.nimbleland.co.in/projectimages/476Business%20Park.jpeg')", height: "630px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundAttachment: "fixed" }} data-aos="fade-in">
                <div className=" row " style={{ paddingTop: "300px", backgroundColor: "rgba(0,0,0,0.5)", height: "630px" }}>
                    <h1 className='text-center' style={{ fontWeight: "700", fontSize: "3.5rem", color: "#fff", textShadow: "10px 10px 10px rgb(0 0 0 / 100%)" }}>Find Your Dream Houses In Jaipur</h1>

                </div>
            </div>
        </>
    )
}

export default Hero