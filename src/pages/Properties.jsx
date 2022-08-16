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
import { Button, Alert, AlertTitle } from '@mui/material';
import Editor from '../components/Editor';
import Dropzone from '../components/Dropzone';
import { Checkbox, FormControlLabel } from '@mui/material';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Footer from '../components/Footer';



const Properties = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4 bg-secondary p-5">
                <h2 className='text-light' style={{ fontWeight: "400" }}>Submit your Property or Requirement</h2>
                {/* <h6 className='text-light'>Howdy, sujal goswami !</h6> */}
            </div>
            <div className="container mt-5">
                <h5 className=' text-muted mb-3'>Basic Information</h5>
                <hr></hr>
                <div className="row p-4">


                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="I Want To" variant="filled" />  */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">I Want To</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="I'm a"
                                required

                            >
                                <MenuItem value="mumbai" > Sale </MenuItem>
                                <MenuItem value="Banglore"> Rent </MenuItem>



                            </Select>
                        </FormControl>
                    </div>

                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="Filled" variant="filled" /> */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="Property Type"
                                required

                            >
                                <MenuItem value="Dhramshala" >Dhramshala </MenuItem>
                                <MenuItem value="Hotel" >Hotel </MenuItem>


                                <MenuItem value="Boys pg/Hostel" >Boys pg/Hostel </MenuItem>

                                <MenuItem value="Girls pg/hostel">Girls pg/hostel </MenuItem>



                            </Select>
                        </FormControl>
                    </div>

                    <div className='col-md-4'>
                        <TextField id="filled-basic" type="number" className='w-75' label="price" variant="filled" helperText=" Overall or monthly price If Property Is For Rent" />

                    </div>





                </div>


                <div className="row p-4">

                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="I Want To" variant="filled" />  */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">Rooms</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="I'm a"
                                required

                            >
                                <MenuItem value="1" > 1</MenuItem>
                                <MenuItem value="2"> 2 </MenuItem>
                                <MenuItem value="3"> 3 </MenuItem>
                                <MenuItem value="4"> 4 </MenuItem>
                                <MenuItem value="5+"> 5+ </MenuItem>




                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="I Want To" variant="filled" />  */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">BathRooms</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="I'm a"
                                required

                            >
                                <MenuItem value="1" > 1</MenuItem>
                                <MenuItem value="2"> 2 </MenuItem>
                                <MenuItem value="3"> 3 </MenuItem>
                                <MenuItem value="4"> 4 </MenuItem>
                                <MenuItem value="5+"> 5 </MenuItem>




                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="I Want To" variant="filled" />  */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">Parking</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="I'm a"
                                required

                            >
                                <MenuItem value="1" >Car Parking</MenuItem>
                                <MenuItem value="2"> Bike Parking </MenuItem>
                                <MenuItem value="3"> No Parking </MenuItem>




                            </Select>
                        </FormControl>
                    </div>

                </div>
                <div className="row p-4">

                    <div className='col-md-4'>
                        <TextField id="filled-basic" className='w-75' label="Street Address" variant="filled" helperText=" House/Apartment Number" />

                    </div>
                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="I Want To" variant="filled" />  */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">Select Locality</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="I'm a"
                                required

                            >
                                <MenuItem value="1" > Bapunagar</MenuItem>
                                <MenuItem value="2"> Rambag </MenuItem>
                                <MenuItem value="3"> Tonk Road </MenuItem>





                            </Select>
                        </FormControl>
                    </div>
                    <div className='col-md-4'>
                        {/* <TextField id="filled-basic" className='w-75' label="I Want To" variant="filled" />  */}
                        <FormControl className='w-75'>
                            <InputLabel id="demo-simple-select-label">Nearby Road</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="filled"
                                label="I'm a"
                                required

                            >


                                <MenuItem value="1" > Bapunagar</MenuItem>
                                <MenuItem value="2"> Rambag </MenuItem>
                                <MenuItem value="3"> Tonk Road </MenuItem>


                            </Select>
                        </FormControl>
                    </div>

                </div>


                <div className="row mt-5">
                    <h5 className='text-muted mb-3'>Detailed Information</h5>
                    <hr></hr>

                    <div className="col-sm-12 p-4 ms-2">
                        <TextField id="filled-basic" className='w-75' label="Property Title 
" variant="filled" helperText=" Type title that will also contains an unique feature of your property (e.g. renovated, air contidioned)" />
                    </div>
                    <div className="col-sm-12 w-75 p-4 ms-2">
                        <label for="exampleFormControlInput1" class="form-label text-muted">Description</label>
                        <Editor />

                    </div>
                </div>

                <div className="row p-4 mt-5">
                    <h5 className='text-muted mb-3'>Gallery</h5>
                    <hr></hr>


                    <div className="col-sm-12 w-75">
                        <Alert severity="info" className='w-100'>
                            {/* <AlertTitle>Info</AlertTitle> */}
                            By selecting (clicking on a photo) one of the uploaded photos you will set it as Featured Image for this property (marked by icon with star). Drag and drop thumbnails to re-order images in gallery.
                        </Alert>

                        <Dropzone />

                    </div>





                </div>
                <div className="row p-4 mt-5">
                    <h5 className='text-muted mb-3'>Other Features</h5>
                    <hr></hr>


                    <div className="col-sm-12 w-75  d-flex">
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label="Ac"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Almirah"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Balcony"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Bed "
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>

                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Chair "
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>


                    </div>
                    <div className="col-sm-12 w-75  d-flex">
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label="Coolar"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Fan"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Fridge "
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <FormControlLabel
                                // value="top"
                                control={<Checkbox style={{ color: "#f1592a" }} />}
                                label=" Internet"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />
                        </div>




                    </div>





                </div>
                <hr></hr>

                <Button variant='contained' className='mb-4 p-3 px-4 ms-3' type='submit' style={{ backgroundColor: "#f1592a" }}><BsFillArrowRightCircleFill />&nbsp;&nbsp;SUBMIT</Button>


            </div>
            <Footer/>
        </>
    )
}

export default Properties