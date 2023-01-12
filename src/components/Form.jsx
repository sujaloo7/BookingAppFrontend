// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Button } from '@mui/material';
// import { GoLocation } from "react-icons/go";
// import { FaSearch } from "react-icons/fa";

// const Form = () => {
//     return (
//         <>
//             <div className="container sticky-top">
//                 {/* <p className='ms-5'>Find Hourly Hotels</p> */}

//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="on"
//                     className='ms-5'
//                 >
//                     <div>
//                         <FormControl sx={{ m: 1, minWidth: 225 }}>
//                             <InputLabel id="demo-simple-select-label">Where To</InputLabel>
//                             <Select
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"

//                                 label="Where To"

//                             >
//                                 <MenuItem value="mumbai" > Mumbai <GoLocation className='ms-auto' /></MenuItem>
//                                 <MenuItem value="Banglore"> Banglore <GoLocation className='ms-auto' /></MenuItem>
//                                 <MenuItem value="Delhi"> Delhi <GoLocation className='ms-auto' /></MenuItem>
//                                 <MenuItem value="HydraBad"> HydraBad <GoLocation className='ms-auto' /></MenuItem>
//                                 <MenuItem value="Kolkata">Kolkata <GoLocation className='ms-auto' /></MenuItem>
//                                 <MenuItem value="chennai">Chennai <GoLocation className='ms-auto' /></MenuItem>


//                             </Select>
//                         </FormControl>
//                         <TextField
//                             id="outlined-input"
//                             label="Check In"
//                             type="date"
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         // autoComplete="current-password"
//                         />
//                         <TextField
//                             id="outlined-input"
//                             label="Check Out"
//                             type="date"
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         // autoComplete="current-password"
//                         />
//                         <TextField
//                             id="outlined-number"
//                             label="Number Of Guests"
//                             type="number"
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}
//                         />
//                         <Button variant='contained  ' className='mt-2 p-3 text-light' style={{ backgroundColor: "#f1592a" }} ><FaSearch />&nbsp;FIND HOURLY HOTELS</Button>
//                         &nbsp;
//                         <Button variant='contained  ' type='reset' className='mt-2 p-3 text-light' style={{ backgroundColor: "#f1592a" }} >Reset</Button>

//                     </div>
//                 </Box>
//             </div>
//         </>
//     )
// }

// export default Form