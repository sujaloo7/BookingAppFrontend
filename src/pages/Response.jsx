import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { AiOutlineEye, AiFillFileText, AiOutlineStar, AiOutlineUser, AiFillUnlock, AiOutlinePoweroff } from "react-icons/ai";
// import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Footer from '../components/Footer';

const Response = () => {
    return (
        <>

            <Navbar />
            <div className="container mt-4 bg-secondary p-5">
                <h1 className='text-light'>My Response</h1>
                {/* <h6 className='text-light'>Howdy, sujal goswami !</h6> */}
            </div>
            <div className="container mt-5 p-4">
                <div className="row">
                    <div className="col-md-3 bg-light shadow-sm p-4" style={{ height: "300px" }}>
                        <h5 className='ms-3 text-muted'>Manage Your Ad</h5>
                        <Link className='ms-3 text-muted mb-3' to="/response" style={{ fontSize: "14px" }}><AiOutlineEye size={20} /> View Response</Link><br></br>
                        <Link className='ms-3 text-muted mb-3' to="/properties" style={{ fontSize: "14px" }}><AiFillFileText size={20} /> My Properties </Link><br></br>
                        <Link className='ms-3 text-muted mb-3' to="/" style={{ fontSize: "14px" }}><AiOutlinePoweroff size={20} /> Bookmarked Listings</Link>

                        <h5 className='ms-3 text-muted mt-5'>Manage Account</h5>
                        <Link className='ms-3 text-muted mb-3' to="/profile" style={{ fontSize: "14px" }}><AiOutlineUser size={20} />  My Profile</Link><br></br>
                        <Link className='ms-3 text-muted mb-3' to="/changenumber" style={{ fontSize: "14px" }}>< AiFillUnlock size={20} />  Change Phone Number </Link><br></br>
                        <Link className='ms-3 text-muted mb-3' to="/" style={{ fontSize: "14px" }}><AiOutlineStar size={20} />  Log Out</Link>


                    </div>
                    <div className='col-md-9  p-4 '>
                        <h2 className='text-muted mb-3' style={{ fontWeight: "400" }}>My Response</h2>
                        <div className=' w-100'>
                            <Tabs className=''>
                                <TabList className=''>
                                    <Tab className='p-3 text-light w-25 border-0' style={{ backgroundColor: "#f1592a" }}>

                                        &nbsp;&nbsp;Call Received &nbsp;&nbsp;


                                    </Tab>

                                    <Tab className='p-3 text-light w-25 border-0' style={{ backgroundColor: "#f1592a" }}>&nbsp;&nbsp;Email Received &nbsp;&nbsp;</Tab>
                                    <Tab className='p-3 text-light w-25 border-0' style={{ backgroundColor: "#f1592a" }}>&nbsp;&nbsp;Ad Viewed &nbsp;&nbsp;</Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel className='p-2'>
                                        <h2 className='ms-3 text-muted ' style={{ fontWeight: "400" }}>Total Call Received: 0</h2>
                                    </TabPanel>
                                    <TabPanel className='p-2'>
                                        <h2 className='ms-3 text-muted' style={{ fontWeight: "400" }}>Total Email Received: 0</h2>

                                    </TabPanel>
                                    <TabPanel className='p-2'>
                                        <h2 className='ms-3 text-muted' style={{ fontWeight: "400" }}>Ad Viewed: 0</h2>

                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Response