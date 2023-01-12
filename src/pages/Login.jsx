import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import { Button, HStack, Input } from '@chakra-ui/react';


const Login = () => {




    return (
        <>
            <div className="container " style={{ display: "grid", alignItems: "center" }}>
                <div className="row mt-5 pt-5">
                    <div className="col-sm-4 shadow  ms-auto me-auto  bg-white mt-5 pt-5" style={{ borderRadius: "10px" }}>
                        <img src="https://booking-app-drab.vercel.app/static/media/logo.08119a1dea5be4ee979e.png" style={{ height: "60px" }} className="ms-auto me-auto" alt="" />
                        <h5 className='mt-3 text-bold text-center'>Hey, welcome back !!!</h5>
                        <form action="" className='mb-5 pb-5 p-5'>

                            <div className="mb-3">
                                <label style={{ fontSize: "13px" }} htmlFor="">Email Address</label>
                                <Input type={"email"} placeholder={"Enter Email Address"} />
                            </div>
                            <div className="mb-3">
                                <label style={{ fontSize: "13px" }} htmlFor="">Password</label>
                                <Input type={"password"} placeholder={"Enter Password"} />
                                <HStack><small>Don't Have Account</small><Link to={"/signup"} className="ms-auto" style={{ fontSize: "13px" }}>Sign Up</Link></HStack>
                            </div>
                            <Button className='w-100 text-light mt-2' style={{ backgroundColor: "#ffa458" }}>Login</Button>
                        </form>





                    </div>
                    {/* <Link to="/" className='text-center mt-3 '>Back To Home</Link> */}

                </div>
            </div>
        </>
    )
}

export default Login    