import React from 'react';
import logo from "../images/roomrentjaipur.webp";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./navbar.css";
import { userLogin } from '../repository/productRepository';


const Navbar = () => {
    return (
        <>
            <div className="container p-3  " style={{ position: "relative" }}>
                <nav className="navbar  navbar-expand-lg bg-light shadow-lg py-3 sticky-top">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" > <img src={logo} alt="" /> </Link>
                        <Button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {/* <span className="navbar-toggler-icon"></span> */}
                        </Button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">




                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Houses
                                    </a>
                                    <ul className="dropdown-menu border-0 shadow p-2">
                                        <li><Link className="dropdown-item" to="/">One Room Set</Link></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Two Rooms Set</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a className="dropdown-item" href="#">Three Rooms Set</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a className="dropdown-item" href="#">Four Rooms Set</a></li>


                                    </ul>
                                </li>
                                <li className="nav-item dropdown ms-2">
                                    <a className="nav-link  " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Flats
                                    </a>
                                    <ul className="dropdown-menu border-0 shadow p-2">
                                        <li><Link className="dropdown-item" to="/">1 BHK Flats</Link></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">2 BHK Flats</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a className="dropdown-item" href="#">3 BHK Flats</a></li>
                                        <li><hr class="dropdown-divider" /></li>

                                        <li><a className="dropdown-item" href="#">4 BHK Flats</a></li>


                                    </ul>
                                </li> */}

                            </ul>

                            {userLogin?.email ? (
                                <div>


                                    <Link to="/account">
                                        <button className='btn btn text-light '></button>
                                    </Link>
                                    <Link to="/login">
                                        <button style={{ fontSize: "12px" }} className=' btn btn text-light'>LogOut</button>
                                    </Link>
                                </div>
                            ) : (
                                <Link to="/login" className='text-decoration-none'>
                                    <Button variant='contained' size='large' style={{ backgroundColor: "#f1592a" }}>Login</Button>
                                </Link>
                            )}

                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar