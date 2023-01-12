import React from 'react';

import { Link } from 'react-router-dom';

import { Button, HStack, Input, Select } from '@chakra-ui/react';




const Signup = () => {

  return (
    <>
      <div className="container " style={{ display: "grid", alignItems: "center" }}>
        <div className="row ">
          <div className="col-sm-4 shadow  ms-auto me-auto  bg-white mt-5 pt-5" style={{ borderRadius: "10px" }}>
            <img src="https://booking-app-drab.vercel.app/static/media/logo.08119a1dea5be4ee979e.png" style={{ height: "60px" }} className="ms-auto me-auto" alt="" />
            <h5 className='mt-3 text-bold text-center'>Hey, Sign Up Here!!!</h5>
            <form action="" className='mb-5 pb-5 p-5'>

              <div className="mb-3">
                <label style={{ fontSize: "13px" }} htmlFor="">Full Name</label>
                <Input type={"text"} placeholder={"Enter Full Name"} />
              </div>
              <div className="mb-3">
                <label style={{ fontSize: "13px" }} htmlFor="">Email Address</label>
                <Input type={"email"} placeholder={"Enter Email Address"} />
              </div>
              <div className="mb-3">
                <label style={{ fontSize: "13px" }} htmlFor="">I'm</label>
                <Select placeholder='Select Your Type'>
                  <option value='option1'>Broker</option>
                  <option value='option2'>Property Owner</option>
                </Select>
              </div>
              <div className="mb-3">
                <label style={{ fontSize: "13px" }} htmlFor="">Password</label>
                <Input type={"password"} placeholder={"Enter Password"} />
                <HStack><small>Already Have Account</small><Link to={"/login"} className="ms-auto" style={{ fontSize: "13px" }}>Sign In</Link></HStack>
              </div>
              <Button className='w-100 text-light mt-2' style={{ backgroundColor: "#ffa458" }}>Sign Up</Button>
            </form>





          </div>
          {/* <Link to="/" className='text-center mt-3 '>Back To Home</Link> */}

        </div>
      </div>
    </>
  )
}

export default Signup