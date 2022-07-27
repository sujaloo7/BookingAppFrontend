import { Button } from '@mui/material';
import React from 'react';
// import "./hero.css";
import { AiOutlineRight } from "react-icons/ai";



const Hero = () => {
    return (
        <>
            <div className='container-fluid' style={{ backgroundImage: "url('https://d1ha4q9jvugw4k.cloudfront.net/static/img/taj-mahal.jpg')", height: "530px", marginTop: "-120px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className=" row " style={{ paddingTop: "200px" }}>
                    <h1 className='text-center' style={{ fontWeight: "700", fontSize: "2.5rem", color: "#fff", textShadow: "0 2px 10px rgb(0 0 0 / 30%)" }}>India’s Largest Hourly Hotels</h1>
                    <p className='text-center' style={{ fontSize: "1.1rem", color: "#fff", textShadow: "0 2px 10px rgb(0 0 0 / 30%)" }}>Say goodbye to 12 noon check-ins!</p>
                    <div className="col-sm-6 text-center ms-auto me-auto">

                        <Button variant='contained' size='large' id='#getstarted' className=' px-4 py-3' style={{ backgroundColor: "#f1592a" }}>Get Started</Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero