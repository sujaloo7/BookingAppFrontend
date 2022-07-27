import React from 'react';
import { BiLock } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./login.css";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { FcGoogle } from "react-icons/fc";
import Tooltip from '@mui/material/Tooltip';
import { UserAuth } from '../context/Authcontext';
import { BsArrowLeft } from "react-icons/bs";
// import { async } from '@firebase/util';

const Login = () => {

    const googleSignIn = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        }
        catch (error) {
            console.log(error);
        }

    };
    return (
        <>
            <div className="container text-center">
                <div className="row mt-5">
                    <div className="col-sm-4 shadow text-center ms-auto me-auto p-1 bg-light" style={{ borderRadius: "10px", height: "530px" }}>
                        <Link to="/login" style={{ backgroundColor: "#f1592a", paddingTop: "6px", paddingBottom: "10px", padding: "9px", borderRadius: "70%" }}>
                            <BiLock size={25} className="text-light" />
                        </Link>
                        <h5 className='mt-3 text-bold'>Hey, welcome back !!!</h5>

                        <form className='col-sm-12'>
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                placeholder="Enter Your Email"
                                className='mt-5 mb-3 '
                                type="email"
                                // autoComplete="current-email"
                                style={{ width: "70%" }}

                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                placeholder="Enter Your Email"
                                // autoComplete="current-password"
                                className='mt-3 mb-4'
                                style={{ width: "70%" }}
                            />

                            <div className='col-sm-12'>
                                <Button variant='contained' type='submit' size='large' className='p-2' style={{ backgroundColor: "#f1592a", width: "70%" }}>Login</Button>

                                <div className='mt-1'>
                                    <Link to="/login" className='text-decoration-none' style={{ marginLeft: "-150px", fontSize: "12px", color: "#f1592a" }}>Forgot Password?</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ fontSize: "12px" }}>Don't Have Account</span> <Link to="/signup" className=' text-decoration-none' style={{ marginRight: "-150px", fontSize: "12px", color: "#f1592a" }}>Sign Up</Link>

                                </div>


                            </div>
                            <Divider className='mt-4'>
                                <Chip label="OR" />
                            </Divider>
                            {/* <Tooltip title="Login With Google" placement="bottom-end">


                                <Button variant='outlined' onClick={handleGoogleSignIn} size='large' className='p-2 mt-4 mb-3' style={{ Color: "#f1592a !important", width: "70%", fontSize: "15px !important" }}><FcGoogle size={25} />&nbsp;&nbsp;Continue With Google</Button>
                            </Tooltip> */}





                        </form>
                        <Tooltip title="Login With Google" placement="bottom-end">


                            <Button variant='outlined' onClick={handleGoogleSignIn} size='large' className='p-2 mt-4 mb-3' style={{ Color: "#f1592a !important", width: "70%", fontSize: "15px !important" }}><FcGoogle size={25} />&nbsp;&nbsp;Continue With Google</Button>
                        </Tooltip>


                    </div>
                    <Link to="/" className='text-decoration-none mt-3 text-left' style={{ color: "#f1592a", fontSize: "12px" }}><BsArrowLeft />Back To Home</Link>
                </div>
            </div>
        </>
    )
}

export default Login    