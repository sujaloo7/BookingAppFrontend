import React from 'react';
import covid from "../images/covid-shield.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Covid = () => {
    return (
        <>
            <div className="container mt-5 " id='getstarted'>
                <div className="row">

                    <h4 className=' text-center'><span className='' style={{ fontSize: "14px", color: "#f1592a" }}>100% SAFE TO STAY</span><br></br>COVID-19 Safety Precautions</h4>
                    <p className=' text-center' style={{ fontWeight: "900", color: "#557cef" }}>_______________</p>
                    <div className='col-sm-4'>
                        <img src={covid} alt="" height={360} />

                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="row">
                            <div className="card col-sm-6 border-0 p-2" >
                                <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5> */}
                                    <h6 className="card-subtitle mb-2 text-muted">Social Distancing&nbsp;<HiArrowNarrowRight style={{ color: "#557cef" }} /></h6>
                                    <p className="card-text" style={{ fontSize: "14px" }}>All hotel staffs are trained to practice social distancing throughout the day.</p>

                                </div>
                            </div>
                            <div className="card col-sm-6 border-0 p-2" >
                                <div className="card-body">
                                    {/* <h5 className="card-title">Car</h5> */}
                                    <h6 className="card-subtitle mb-2 text-muted">Daily Temperature Check&nbsp;<HiArrowNarrowRight style={{ color: "#557cef" }} /></h6>
                                    <p className="card-text" style={{ fontSize: "14px" }}>Anyone with a temperature above 99.1 F to be sent on mandatory leave.</p>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col-sm-6 border-0 p-2" >
                                <div className="card-body">
                                    {/* <h5 className="card-title">Card title</h5> */}
                                    <h6 className="card-subtitle mb-2 text-muted">Sanitization&nbsp;<HiArrowNarrowRight style={{ color: "#557cef" }} /></h6>
                                    <p className="card-text" style={{ fontSize: "14px" }}>All rooms/washrooms are disinfected before every check-in. The common areas are sanitized throughout as per WHO recommendations.</p>

                                </div>
                            </div>
                            <div className="card col-sm-6 border-0 p-2" >
                                <div className="card-body">
                                    {/* <h5 className="card-title">Car</h5> */}
                                    <h6 className="card-subtitle mb-2 text-muted" style={{}}>Masks & Gloves&nbsp;<HiArrowNarrowRight style={{ color: "#557cef" }} /></h6>
                                    <p className="card-text" style={{ fontSize: "14px" }}>The usage of masks & gloves are mandatory by the hotel staff.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Covid