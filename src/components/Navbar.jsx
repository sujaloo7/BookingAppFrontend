import React from 'react';
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./navbar.css";
import { userLogin } from '../repository/productRepository';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid shadow-none">
                <nav className="navbar  navbar-expand-lg py-3 sticky-top shadow-none p-3">
                    <div className="container-fluid sticky-top">
                        <Link to="/" className="navbar-brand" > <img src={logo} alt="" height={45} /> </Link>
                        <Button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/">Home</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/">About Us</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to="/">Contact</Link>
                                </li>

                            </ul>

                            {userLogin.email ?

                                <div>



                                    <Link to="/account">
                                        <button className='btn btn text-light '></button>
                                    </Link>
                                    <Link to="/login">
                                        <button style={{ fontSize: "12px" }} className=' btn btn text-light'>LogOut</button>
                                    </Link>
                                </div>
                                :
                                <div>


                                    <Link to="/login" className='text-decoration-none'>
                                        <Button variant='contained' size='large' style={{ backgroundColor: "#ffa458", borderRadius: "0px" }}>Login</Button>
                                    </Link>
                                </div>
                            }

                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar