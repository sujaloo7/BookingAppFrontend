import React from 'react'
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



const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4 bg-secondary p-5">
                <h1 className='text-light'>My Profile</h1>
                <h6 className='text-light'>Howdy, sujal goswami !</h6>
            </div>
            <div className="container mt-5">
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
                    <div className='col-md-6   '>
                        <h4 className='ms-4 text-muted' style={{ fontWeight: "400" }}>My Account</h4>
                        <div className="ms-auto me-auto">
                            <form action="" className='p-4 '>
                                <div className='mb-4 '>
                                    <TextField id="outlined-basic"
                                        label="First Name"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className="w-75"
                                        required />
                                </div>
                                <div className='mb-4'>
                                    <TextField id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className="w-75"
                                        required />
                                </div>
                                <div className='mb-4'>
                                    <TextField id="outlined-basic"
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        className="w-75"
                                        required />
                                </div>
                                <div className='mb-4 '>
                                    <FormControl className='w-75'>
                                        <InputLabel id="demo-simple-select-label">I'm a</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"

                                            label="I'm a"
                                            required

                                        >
                                            <MenuItem value="mumbai" > User </MenuItem>
                                            <MenuItem value="Banglore"> Owner </MenuItem>



                                        </Select>
                                    </FormControl>



                                </div>
                                <Button variant='contained' className='p-3' type='submit' style={{ backgroundColor: "#f1592a" }}>Save Changes</Button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>     
    )
}

export default Profile