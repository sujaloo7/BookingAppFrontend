import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Button, Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
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
            <div className='container-fluid  hero' style={{ marginTop: "-120px", backgroundImage: "url('https://www.nimbleland.co.in/projectimages/476Business%20Park.jpeg')", height: "630px", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", backgroundAttachment: "fixed" }} data-aos="fade-in">
                <div className=" row " style={{ paddingTop: "300px", backgroundColor: "rgba(0,0,0,0.5)", height: "630px" }}>
                    <h1 className='text-center' style={{ fontWeight: "700", fontSize: "3.5rem", color: "#fff", textShadow: "10px 10px 10px rgb(0 0 0 / 100%)" }}>Find Your Dream Houses In Jaipur</h1>
                    <div className="col-sm-8 ms-auto me-auto shadow p-3 searchForm" style={{ display: "grid", alignItems: "center", height: "110px", borderRadius: "15px", marginTop: "215px" }}>
                        <div className="row">

                            <div className="col-sm-3  pb-3">
                                <label htmlFor="" style={{ fontSize: "13px" }}>Location</label>
                                <Select placeholder='Select Location' >
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select></div>
                            <div className="col-sm-2  pb-3">

                                <label htmlFor="" style={{ fontSize: "13px" }} >Budget From</label>

                                <Input placeholder='Budget From' type="number" /></div>
                            <div className="col-sm-2  pb-3">
                                <label htmlFor="" style={{ fontSize: "13px" }}>Budget From</label>

                                <Input placeholder='Budget To' type="number" /></div>
                            <div className="col-sm-3 pb-3">
                                <label htmlFor="" style={{ fontSize: "13px" }}>Location</label>

                                <Select placeholder='Select Property Type'>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select></div>
                            <div className="col-sm-2  pb-3">
                                <Button marginTop={"6"} w={"100%"} bgColor={"blackAlpha.900"} color={"whiteAlpha.900"}>Search</Button></div>


                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>
    )
}

export default Hero