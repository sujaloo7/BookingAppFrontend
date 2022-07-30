import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { AiOutlineUserAdd } from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { BiLock } from "react-icons/bi";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import { userRegister, getRoles } from '../repository/productRepository';




const Signup = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPasword] = useState("")
  const [roleList, setRoleList] = useState([])

  useEffect(() => {
    GetRoles()
  }, [])

  const GetRoles = async () => {
    let roleRes = await getRoles()
    if (roleRes.status == 1) {
      console.log(roleRes)
      setRoleList(roleRes.data)
    }
  }

  const submitUser = async (e) => {
    e.preventDefault()
    console.log(email)
    console.log(name)
    let res = await userRegister({ email: email, name: name, mobile: mobile, password: password })
    if (res.status === 0) {
      console.log("failed")
    } else {
      console.log("success")
    }
  }

  const getValue = (e) => {
    console.log("e", e.target.value)

  }
  // const [email, setEmail] = useState("")

  return (
    <>
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col-sm-4 shadow text-center ms-auto me-auto p-1" style={{ borderRadius: "10px", height: "620px" }}>
            <Link to="/login" style={{ backgroundColor: "#f1592a", paddingTop: "6px", paddingBottom: "10px", padding: "9px", borderRadius: "70%" }}>
              <AiOutlineUserAdd size={25} className="text-light" />
            </Link>
            <h5 className='mt-3 text-bold'>Hey, sign Up Here!!!</h5>

            <form onSubmit={submitUser} className='col-sm-12'>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Enter Your Name"
                className='mt-3 mb-3 '
                type="text"
                onChange={e => setName(e.target.value)}
                // autoComplete="current-email"
                style={{ width: "70%" }}

              />
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Enter Your Email"
                className='mt-3 mb-3 '
                type="email"
                onChange={e => setEmail(e.target.value)}

                // autoComplete="current-email"
                style={{ width: "70%" }}

              />
              <FormControl style={{ width: "70%" }} className="mt-2 mb-2">
                <InputLabel id="demo-simple-select-label">I'm a</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"

                  label="I'm a"
                  required
                  onChange={getValue}
                >
                  {
                    roleList.map((ele, index) => {
                      return <MenuItem key={index} value={ele._id}>{ele.name} </MenuItem>

                    })
                  }
                </Select>
              </FormControl>
              <TextField
                id="outlined-password-input"
                label="Phone Number"
                type="number"
                placeholder="Enter Your Number"
                onChange={e => setMobile(e.target.value)}

                // autoComplete="current-password"
                className='mt-2 mb-4'
                style={{ width: "70%" }}
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                placeholder="Enter Your Email"
                onChange={e => setPasword(e.target.value)}

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