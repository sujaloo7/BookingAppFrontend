import React from 'react';
// import "./hero.css";



const Hero = () => {
    return (
        <>
            <div className='container-fluid' style={{ marginTop: "-120px", backgroundImage: "url('https://www.nimbleland.co.in/projectimages/476Business%20Park.jpeg')", height: "530px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundAttachment: "fixed" }}>
                <div className=" row " style={{ paddingTop: "200px", backgroundColor: "rgba(0,0,0,0.6)", height: "530px" }}>
                    <h1 className='text-center' style={{ fontWeight: "700", fontSize: "3.5rem", color: "#fff", textShadow: "0 2px 10px rgb(0 0 0 / 30%)" }}>Find Your Dream Houses In Jaipur</h1>

                </div>
            </div>
        </>
    )
}

export default Hero