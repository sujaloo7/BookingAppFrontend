import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Trending = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
        AOS.refresh();
    }, []);
    return (
        <>

            <div className="container mb-5 pt-5" data-aos="fade-up">
                <h4 className='text-center fs-4'><span className='' style={{ fontSize: "14px", color: "#ffa458" }}> PROPERTIES NEAR YOU</span><br></br>Handpicked Exclusive Properties By Our Team.</h4>
                <p className='text-center' style={{ fontWeight: "900", color: "#557cef" }}>_______________</p>
                <div className="row mt-4 p-3">


                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://rentproperties.in/images/property/1672742469_d48bda8575f72c15841c.jpg" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://www.godrejsplendour.org.in/project/advantages-of-buying-a-property-during-its-new-launch.webp" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://www.zricks.com/ImagesPostProject/13817//357eeac3-834a-48ef-8ea6-73cf5d965f8f.jpg" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://images.prismic.io/bramhacorp/cdac64ea-d369-4931-8590-eef887753b0a_TC_Project%20Main%20Page%20-%20Desktop.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>

                            </div>
                        </div>
                    </div>


                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://rentproperties.in/images/property/1672742469_d48bda8575f72c15841c.jpg" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://www.godrejsplendour.org.in/project/advantages-of-buying-a-property-during-its-new-launch.webp" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://www.zricks.com/ImagesPostProject/13817//357eeac3-834a-48ef-8ea6-73cf5d965f8f.jpg" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3 mb-4 ">
                        <div className="card border-0">
                            <img src="https://images.prismic.io/bramhacorp/cdac64ea-d369-4931-8590-eef887753b0a_TC_Project%20Main%20Page%20-%20Desktop.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max" alt="" style={{ height: "200px" }} />
                            <div className="inner-card p-3 text-muted">
                                <h4 className="mb-2 mt-3 " style={{ fontSize: "14px" }}>Villa Home</h4>
                                <small className=''><i class="fa fa-house"></i>&nbsp;Luxury Family Home</small><br></br>
                                <small><i class="fa fa-location-dot"></i>&nbsp; 1421 San Pedro
                                    St, Los Angeles, CA </small>
                                <br></br>
                                <small><i class="fa fa-indian-rupee-sign"></i>&nbsp; 5 lac</small><br></br>
                                <button className='btn btn-outline-dark w-100 mt-3' style={{ borderRadius: "0px", fontSize: "13px" }}>Visit&nbsp; <i class="fa fa-arrow-up-right-from-square"></i></button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Trending