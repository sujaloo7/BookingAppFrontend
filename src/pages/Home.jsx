import React from 'react';
import Cards from '../components/Cards';
import Citys from '../components/Citys';
import Covid from '../components/Covid';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Trending from '../components/Trending';
import Faq from "../components/Faq";
import Footer from '../components/Footer';
// import BackToTop from '../components/Backtotop';



const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Covid />
            <Cards />
            <Citys />
            <Trending />
            <Faq />
            <Footer />
            {/* <BackToTop/> */}
        </>

    )
}

export default Home;