import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BsDropletHalf , BsFiles } from "react-icons/bs";
import { AiOutlineWifi } from "react-icons/ai";
import { FaToiletPaper ,FaDesktop , FaBath  } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';




const Details = () => {


    const mystyle = {
        
      };
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-8 ">
                        <div id="carouselExampleControls" class="carousel slide" style={{ borderRadius: "7px" }} data-bs-ride="carousel  " >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/5.jpg" style={{ height: "320px", borderRadius: "7px" }} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/7.jpg" class="d-block w-100" alt="..." style={{ height: "320px", borderRadius: "7px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/6.jpg" class="d-block w-100" alt="..." style={{ height: "320px", borderRadius: "7px" }} />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://d1ha4q9jvugw4k.cloudfront.net/public_media/hotel_images/Mumbai/Holiday-Inn-Mumbai-International-Airport/2.jpg" class="d-block w-100" alt="..." style={{ height: "320px", borderRadius: "7px" }} />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className='p-3'>
                            <h4 style={{ fontWeight: "700", fontSize: "1.3rem", color: "#000" }}>Holiday Inn Mumbai International Airport</h4>
                            <p className='text-muted' style={{ fontSize: "13px" }}>Sakinaka Junction, Andheri Kurla Road,Andheri East, Mumbai - 400072</p>
                            <div className='mt-2'>
                                <button className='btn btn-success disabled p-0 px-1' style={{fontSize:"12px"}}>Couple Friendly</button>&nbsp;
                                <button className='btn btn-success disabled p-0 px-1' style={{fontSize:"12px"}}>Local ID accepted</button>&nbsp;
                                <button className='btn btn-success disabled p-0 px-1' style={{fontSize:"12px"}}>5 Star Hotel</button>

                            </div>
                            <div className='mt-5 '>
                                <h4 className='mb-3' style={{ fontWeight: "700", fontSize: "1rem", color: "#000" }}>Room Amenities</h4>
                                <div className="row text-secondary">
                                <div className="col-sm-1 text-center"><BsDropletHalf size={25}/><p style={{fontSize:"13px"}}> Water</p></div>
                                <div className="col-sm-1 text-center"><AiOutlineWifi size={25}/><p style={{fontSize:"13px"}}>WI-Fi</p></div>
                                <div className="col-sm-1 text-center"><FaToiletPaper size={25}/><p style={{fontSize:"13px"}}>Toilets</p></div>
                                <div className="col-sm-1 text-center"><BsFiles size={25}/><p style={{fontSize:"13px"}}>Wardrobe</p></div>
                                <div className="col-sm-1 text-center"><FaDesktop size={25}/><p style={{fontSize:"13px"}}>TV</p></div>
                                <div className="col-sm-1 text-center"> <BiBed size={25}/><p style={{fontSize:"13px"}}>Beds</p></div>
                                <div className="col-sm-1 text-center"> <FaBath size={25}/><p style={{fontSize:"13px"}}>Bathroom</p></div>
                                </div>

                            </div>

                            <div className="row mt-4">
                                <div className="col-sm-6"><h4 className='' style={{ fontWeight: "700", fontSize: "1rem", color: "#000" }}>Hotel Policy</h4>
                                <ol className='me-2' style={{textAlign:"justify"}}>
                                    <li className='mb-2'>All Guests need to produce valid address & photo identification proof at the time of check-in</li>
                                   
                                    <li className='mb-2'>Pets are not allowed</li>
                                    
                                    <li className='mb-2'>Guests are required to submit their Double Dose certificate for COVID Vaccination at the time of check-in. Please also update the Aarogya Setu app on your mobile so that we may check the same.</li>
                                    
                                    <li className='mb-2'>Guests will be offered the room with the check-in & check-out times corresponding to slots booked. Any early check-in or later check-out will be at the discretion of the hotel</li>
                                    
                                    <li className='mb-2'>All guest must be above legal age if an independent reservation is made (in absence of a parent and guardian)</li>

                                </ol></div>
                                <div className="col-sm-6"><h4 className='' style={{ fontWeight: "700", fontSize: "1rem", color: "#000" }}>Cancellation Policy</h4>
                                <ol style={{textAlign:"justify"}}>
                                    <li className='mb-2'>100% refund if cancelled before 24 hours of check-in time.</li>
                                    
                                    <li className='mb-2'>No refund if cancellation is done within 24 hours of check-in time.</li>
                                    
                                    <li className='mb-2'>No refund in case of no-show.</li>
                                    
                                    <li className='mb-2'>Convenience Fees is non refundable.</li>
                                </ol>
                                </div>

                              

                            </div>

                            <div className="col-sm-12 mt-4">
                                <p className='text-muted' style={{ fontSize: "13px" }}>Stay at the contemporary Holiday Inn Mumbai International Airport hotel for easy access to the terminals and north Mumbai businesses. Enjoy the peaceful ambience of our uncluttered, glass-walled lobby before checking into your modern guest room. From this accommodation near Mumbai airport, you can see planes jet off from the runway and the Hiranandani Garden district's skyscraper skyline from the hotel's rooftop swimming pool. Holiday Inn Mumbai International Airport's ballroom can hold up to 500 people for your reception or conference. We are close to businesses in commercial north Mumbai, such as headquarters at the Bandra Kurla Complex, 8km away. Reach meetings at the Accenture offices, 3.5km away, and WNS Global Services, 6km away. Your sophisticated guest room comes with an iPod docking station and a 32-inch flat-screen TV. Unwind with a workout in the sunlit Gym and detox in the saunas. Enjoy authentic Mumbai street food, like panipuri, in our elegant Saptami restaurant, complete with white pillars and high ceilings. See the colonial grandeur of the iconic Gateway of India archway at Mumbai Harbour, where ferries leave for the hand-carved Elephanta Caves on Gharapuri Island. Both sights are around 25km from this hotel near Mumbai airport. Our dedicated hotel cars will also chauffeur you between this Mumbai airport hotel and the Chhatrapati Shivaji International Airport terminals</p>
                            </div>



                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div class="card bg-light border-0 shadow-sm fixed" >
  <div class="card-body">

    <div className="row">
        <div className="col-sm-6">
    <p className='ms-auto'><span style={{fontSize:"13px"}}>Check In</span><br></br>12 PM, 15 Aug </p>
    </div>
    <div className="col-sm-6">
    <p className='me-auto ms-5'><span style={{fontSize:"13px"}}>Rooms / Guests</span><br></br>1 Room / 2 Guests </p>
    </div>
    <div className="col-sm-6">
    <p className='me-auto '><span style={{fontSize:"13px"}}>Check Out</span><br></br>7 PM, 15 Aug</p>
    </div>
    </div>
    <form action="">
    <div className="mt-3">
        <h6 className='ms-2 mb-3'>Procced To Checkout</h6>


    <FormControl sx={{ m: 1, minWidth: 355 }}>
                            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                label="Room Type"
                                required

                            >
                                <MenuItem value="mumbai" > Superior Room Weekend </MenuItem>
                                <MenuItem value="Banglore"> Superior Room Weekday</MenuItem>
                                <MenuItem value="Delhi">   Superior Room Smoking </MenuItem>
                                


                            </Select>
                        </FormControl>

                        <TextField
                        sx={{ m: 1, minWidth: 355  }}
                           
                            id="outlined-input"
                            label="Primary Guest Name"
                            type="text"
                            required
                           
                        // autoComplete="current-password"
                        />
                        
                        <TextField
                        sx={{ m: 1, minWidth: 355 }}
                             
                            id="outlined-input"
                            label="Mobile Number"
                            type="number"
                            required
                            
                        // autoComplete="current-password"
                        />
                          <TextField
                        sx={{ m: 1, minWidth: 355 }}
                             
                            id="outlined-input"
                            label="Email"
                            type="email"
                            required
                            
                        // autoComplete="current-password"
                        />
                        <div class="form-check ms-2">
  <input class="form-check-input" style={{color:"#f1592a"}} type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    I agree to the <Link to="/" style={{color:"#f1592a"}}>Terms & Conditions</Link>
  </label>
</div>
                      
                        
                        </div>
                        <h5 className='ms-2 mt-3'>₹ 3572 <br></br><span style={{fontSize:"13px"}}><Link to="/" className="text-secondary">(Price Brackup)</Link></span></h5>

                        <div className='mt-4'> <a style={{width: "100%", borderRadius:"7px" ,backgroundColor:"#f1592a" , textAlign:"center" , fontWeight:"800" , padding:"11px 0px " , color:"white" , fontSize:"12px" , display:"inline-block" , textDecoration:"none"}} href='https://pmny.in/mr1Vs2KeZISe' > Pay Now </a> </div>

                        </form>
  </div>
</div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default Details