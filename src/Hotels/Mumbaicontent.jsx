import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { Stack, Badge } from "@chakra-ui/react";
import { Button } from '@mui/material';
import Filters from "./Filters";


const Mumbaicontent = () => {
    return (
        <>

            <div className="container-fluid ">
            {/* <Filters /> */}
             
                <div className="row mb-3">
                    <div className="col-sm-8 ms-auto me-auto">
                        <div class="card mb-3 border-0 shadow">
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/cache/b2/de/b2de7243c0dedd246de3767a8827700a.jpg" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <div className='d-flex'>
                                            <h5 class="card-title">Holiday Inn Mumbai International Airport</h5>
                                            <h6 className='ms-auto mt-3'>₹ 2,204</h6>

                                        </div>
                                        <div className='d-flex'>
                                            <p class="card-text" style={{ fontSize: "12px" }}>Andheri East</p>

                                            <h6 className='ms-auto '><del>₹ 7,500</del></h6>



                                        </div>

                                        <p class="card-text d-flex"><small class="text-muted"><AiFillStar style={{ color: "#f1592a" }} /><AiFillStar style={{ color: "#f1592a" }} /><AiFillStar style={{ color: "#f1592a" }} /><AiFillStar style={{ color: "#f1592a" }} /><AiFillStar style={{ color: "#f1592a" }} />&nbsp;<span class="badge  text-bg-light p-2 border-dark">Accepts Local ID</span>&nbsp;
                                            <span class="badge  text-bg-light p-2">Couple Friendly</span>
                                        </small>
                                            <Button className='ms-auto text-light px-5' style={{ backgroundColor: "#f1592a" }}>BOOK</Button></p>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mumbaicontent