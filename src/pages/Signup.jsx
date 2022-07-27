import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { AiOutlineUserAdd } from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { BiLock } from "react-icons/bi";




const Signup = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col-sm-4 shadow text-center ms-auto me-auto p-1" style={{ borderRadius: "10px", height: "550px" }}>
            <Link to="/login" style={{ backgroundColor: "#f1592a", paddingTop: "6px", paddingBottom: "10px", padding: "9px", borderRadius: "70%" }}>
              <AiOutlineUserAdd size={25} className="text-light" />
            </Link>
            <h5 className='mt-3 text-bold'>Hey, sign Up Here!!!</h5>

            <form className='col-sm-12'>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Enter Your Name"
                className='mt-5 mb-3 '
                type="text"
                // autoComplete="current-email"
                style={{ width: "70%" }}

              />
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Enter Your Email"
                className='mt-3 mb-3 '
                type="email"
                // autoComplete="current-email"
                style={{ width: "70%" }}

              />

              <TextField
                id="outlined-password-input"
                label="Phone Number"
                type="number"
                placeholder="Enter Your Number"
                // autoComplete="current-password"
                className='mt-2 mb-4'
                style={{ width: "70%" }}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                placeholder="Enter Your Email"
                // autoComplete="current-password"
                className='mt-2 mb-4'
                style={{ width: "70%" }}
              />

              <div className='col-sm-12'>
                <Button variant='contained' type='submit' size='large' className='p-2' style={{ backgroundColor: "#f1592a", width: "70%" }}>Sign Up</Button>

                <div className='mt-1'>

                  <span style={{ fontSize: "12px" }}>Already Have Account</span> <Link to="/login" className=' text-decoration-none' style={{ marginRight: "-100x", fontSize: "12px", color: "#f1592a" }}>Login</Link>

                </div>


              </div>
              {/* <Divider className='mt-4'>
                  <Chip label="OR" />
                </Divider> */}
              {/* <Tooltip title="Login With Google" placement="bottom-end">


                <Button variant='outlined' type='submit' size='large' className='p-2 mt-4 mb-3' style={{ Color: "#f1592a !important", width: "70%", fontSize: "15px !important" }}><FcGoogle size={25} />&nbsp;&nbsp;Continue With Google</Button>
              </Tooltip> */}





            </form>


          </div>
        </div>
      </div>
    </>
  )
}

export default Signup