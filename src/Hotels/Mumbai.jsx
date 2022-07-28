import React from 'react'
import Navbar from '../components/Navbar'
// import Navbar from '../components/Navbar'
import "./mumbai.css"
import Form from "./Form"
import Mumbaicontent from './Mumbaicontent';
import Footer from "../components/Footer";

const Mumbai = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: "url('https://d1ha4q9jvugw4k.cloudfront.net/static/img/taj-mahal.jpg')", height: "500px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="row">
                    <div className="container">
                        <Navbar />

                    </div>

                    {/* <div className="container p-2 py-4 w-100 bg-white shadow " style={{ borderRadius: "5px", borderColor: "#f1592a" }}>

                        <Form />
                    </div> */}
                </div>
            </div>
            <div className="container-fluid  py-4 w-100 bg-white shadow " style={{ borderRadius: "5px", borderColor: "#f1592a" }}>

                <Form />
            </div>
            <br></br>

            {/* Content Section */}
            <div className=''>
                <Mumbaicontent />
                <Mumbaicontent />
                <Mumbaicontent />
                <Mumbaicontent />

            </div>

            <Footer/>

        </>
    )
}

export default Mumbai