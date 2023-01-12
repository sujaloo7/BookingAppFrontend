import React, { useEffect } from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Input } from '@chakra-ui/react';
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container-fluid shadow-none p-0 sticky-top" data-aos="fade-down">
                <nav className="navbar navbar-expand-lg py-3 sticky-top shadow-none p-3 header-bg">
                    <div className="container-fluid sticky-top">
                        <Link to="/" className="navbar-brand"> <img src={logo} alt="" style={{ height: "60px" }} /> </Link>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* <Input type={"search"} borderRadius={"0"} p={"3"} marginLeft={"20"} bgColor={"whiteAlpha.900"} style={{ width: "600px", outline: "none !important" }} placeholder={"Search Here Your Dream Property.."} /><button className='p-2 text-light px-4' style={{ backgroundColor: "#ffa458" }}>Search</button> */}

                            <ul className="navbar-nav ms-auto me-auto me-5 mb-2 mb-lg-0">
                                <li className='nav-item'>
                                    <Link className='nav-link ' style={{ fontWeight: "500" }} to="/">Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link ' style={{ fontWeight: "500" }} to="/properties">Properties</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link ' style={{ fontWeight: "500" }} to="/">About Us</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link ' style={{ fontWeight: "500" }} to="/">Contact Us</Link>
                                </li>

                            </ul>

                            <div>




                            </div>
                            <div>


                                <Link to="/login" className='text-decoration-none'>
                                    <button className=' px-4  text-light' style={{ backgroundColor: "#ffa458", borderRadius: "7px", padding: "10px" }}>Login&nbsp;<i class="fa fa-solid fa-arrow-right-to-arc"></i></button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar