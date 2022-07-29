import React from 'react';
// import "./filter.css";
import { Button } from '@mui/material';
// import { FaFilter } from "react-icons/fa";
import { BsFilterLeft } from "react-icons/bs";
// import { GrMap } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiUpArrowAlt } from "react-icons/bi";
// import Checkbox from '@mui/material/Checkbox';
// import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { FormControl, MenuItem } from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { GoLocation } from "react-icons/go";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Filters = () => {
    return (
        <>
            <button class="btn btn mt-5  border-0 text-muted  " style={{ borderRadius: "0px", backgroundColor: "", outline: "none", marginLeft: "250px" }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><BsFilterLeft size={30} /></button>



            <div class="offcanvas offcanvas-start border-0" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                    {/* <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5> */}
                    <button type="button" class="btn-close ms-auto" style={{}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body border-0 shadow">
                    <div className='p-3'>
                        <h6>Sort</h6>
                        <Link to="/mumbai" className='' style={{ color: "#73ce99", fontSize: "12px" }}>Popularity<BiUpArrowAlt size={20} /></Link><br></br>
                        <Link to="/mumbai" className='' style={{ color: "#73ce99", fontSize: "12px" }}>Price<BiUpArrowAlt size={20} /></Link><br></br>
                        <Link to="/mumbai" className='' style={{ color: "#73ce99", fontSize: "12px" }}>Star Rating<BiUpArrowAlt size={20} /></Link><br></br>


                    </div>
                    <form>
                        <div className='p-3'>
                            <h6>Filters</h6>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Couple Friendly"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Local Id"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Pay At Hotel"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            />





                        </div>
                        <div className='p-3'>
                            <h6>Filters</h6>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="5 Star"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="4 Star"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="3 Star"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="2 star"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="1 star"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>






                        </div>
                        <div className='p-3'>
                            <h6>Location</h6>

                            <FormControl sx={{ m: 1, minWidth: 225 }}>
                                <InputLabel id="demo-simple-select-label" >Choose Your Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                    label="Choose Your Location"
                                    style={{ height: "40px" }}

                                >
                                    <MenuItem value="mumbai" > Andheri <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="Banglore"> Bandra <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="Delhi"> Bandra Kulra Complex <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="HydraBad"> Colaba <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="Kolkata">Dadar <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="chennai">Thane <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="chennai">Malad <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="chennai">Navi Mumbai <GoLocation className='ms-auto' /></MenuItem>
                                    <MenuItem value="chennai">powai <GoLocation className='ms-auto' /></MenuItem>





                                </Select>
                            </FormControl>





                        </div>

                        <div className='p-3'>
                            <h6>Amentites</h6>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="WiFi"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Bathtub"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Breakfast"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Parking"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Hot Water"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="AC"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Travel desk"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Swimming Pool"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>
                            <FormControlLabel
                                value="top"
                                control={<Checkbox style={{ color: "#73ce99" }} />}
                                label="Gym"
                                labelPlacement="right"
                                style={{ color: "", fontSize: "10px" }}
                            /><br></br>






                        </div>
                        <div className='d-flex'>
                            <div className='ms-auto'>
                                <Button type='reset' className='bg-secondary' variant='contained' >Reset</Button>&nbsp;
                                <Button variant='contained' style={{ backgroundColor: "#73ce99" }}>Apply</Button>
                            </div>



                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Filters