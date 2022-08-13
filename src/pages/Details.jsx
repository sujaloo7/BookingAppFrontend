import React from 'react';

import Navbar from '../components/Navbar';

const Details = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-8 ">
                        <div id="carouselExampleControls" class="carousel slide" style={{ borderRadius: "7px" }} data-bs-ride="carousel" >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/5.jpg" style={{ height: "320px", borderRadius: "7px" }} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/7.jpg" class="d-block w-100" alt="..." style={{ height: "320px", borderRadius: "7px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/6.jpg" class="d-block w-100" alt="..." style={{ height: "320px", borderRadius: "7px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/2.jpg" class="d-block w-100" alt="..." style={{ height: "320px", borderRadius: "7px" }} />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className='p-3'>
                            <h3 style={{ fontWeight: "700", fontSize: "1.5rem", color: "#000", textShadow: "0 2px 10px rgb(0 0 0 / 30%)" }}>Holiday Inn Mumbai International Airport</h3>
                            <p className='text-muted' style={{ fontSize: "14px" }}>Sakinaka Junction, Andheri Kurla Road,Andheri East, Mumbai - 400072</p>
                            <div className='mt-2'>
                                <button className='btn btn-success disabled p-0 px-1'>Couple Friendly</button>&nbsp;
                                <button className='btn btn-success disabled p-0 px-1'>Local ID accepted</button>&nbsp;
                                <button className='btn btn-success disabled p-0 px-1'>5 Star Hotel</button>

                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Details