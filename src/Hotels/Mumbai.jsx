import React from 'react'
import Navbar from '../components/Navbar'
// import Navbar from '../components/Navbar'
import "./mumbai.css"
import Form from "./Form"
import Mumbaicontent from './Mumbaicontent';
import Footer from "../components/Footer";
import Filters from './Filters';
import "../repository/Location";


const Mumbai = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundImage: "url('https://d1ha4q9jvugw4k.cloudfront.net/static/img/taj-mahal.jpg')", height: "500px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="row">
                    <div className="container mb-5">
                        <Navbar />

                    </div>

                    {/* <div className="container p-2 py-4 w-100 bg-white shadow " style={{ borderRadius: "5px", borderColor: "#f1592a" }}>

                        <Form />
                    </div> */}
                    <h1 className='text-center mt-5' style={{ fontWeight: "700", fontSize: "2.5rem", color: "#fff", textShadow: "0 2px 10px rgb(0 0 0 / 30%)" }}>Find Your Dream House</h1>

                </div>
            </div>
            <div className="container-fluid  py-4 w-100 bg-white shadow " style={{ borderRadius: "5px", borderColor: "#f1592a" }}>

                <Form />

            </div>
            <br></br>



            {/* Content Section */}
            <div className=''>
                <Filters />

                <Mumbaicontent />
                <Mumbaicontent />
                <Mumbaicontent />
                <Mumbaicontent />

            </div>

            <Footer />

        </>
    )
}

export default Mumbai