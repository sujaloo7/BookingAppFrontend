import React from 'react';
import card1 from "../images/credit-cards.svg";
import card2 from "../images/best.svg";
import card3 from "../images/speed.svg";
import card4 from "../images/hand.svg";


const Cards = () => {
    return (
        <>

            <div className="container mt-5 p-5  ">
                <div className="row">
                    <div class="card mb-3 col-sm-3 border-0" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card1} class="img-fluid rounded-start ms-3" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">SLOT PRICING</h5>
                                    <p class="card-text" style={{ fontSize: "13px", color: "gray" }}>Who pays for the unused room?</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 col-sm-3 border-0" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card2} class="img-fluid rounded-start ms-4" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">BEST HOTELS</h5>
                                    <p class="card-text" style={{ fontSize: "13px", color: "gray" }}>Our average rating on TripAdvisor is 4+</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 col-sm-3 border-0" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card3} class="img-fluid rounded-start ms-4" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">FLEXIBLE STAY</h5>
                                    <p class="card-text" style={{ fontSize: "13px", color: "gray" }}>Check-in & Check-out of our hotels at your convenience</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3 col-sm-3 border-0" >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={card4} class="img-fluid rounded-start ms-4" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">PAY AT HOTEL</h5>
                                    <p class="card-text" style={{ fontSize: "13px", color: "gray" }}>Reserve your stay with a small amount and pay remaining at the hotel</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards