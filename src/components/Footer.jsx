import React from 'react';
import "./footer.css";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <footer class="footer-section">
                        <div class="container">
                            <div class="footer-cta pt-5 pb-5">
                                <div class="row">
                                    <div class="col-xl-4 col-md-4 mb-30">
                                        <div class="single-cta">
                                            <i class="fas fa-map-marker-alt"></i>
                                            <div class="cta-text">
                                                <h4>Find us</h4>
                                                <span>Maharani Apartment, B-208, B-6,<br></br> Rajendra Marg, Bapu Nagar, <br></br>Jaipur, Rajasthan 302015</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-4 mb-30">
                                        <div class="single-cta">
                                            <i class="fas fa-phone"></i>
                                            <div class="cta-text">
                                                <h4>Call us</h4>
                                                <span>98765432100</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-md-4 mb-30">
                                        <div class="single-cta">
                                            <i class="fa fa-envelope"></i>
                                            <div class="cta-text">
                                                <h4>Mail us</h4>
                                                <span>info@revolutionsoft.in</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="footer-content pt-5 pb-5">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 mb-50">
                                        <div class="footer-widget">
                                            <div class="footer-logo">
                                                <Link to="/"><img src={logo} class="img-fluid" alt="logo" height={65} /></Link>
                                            </div>
                                            <div class="footer-text">
                                                <p>We Will Assist You In The Best And Comfortable Property Services For You.</p>
                                            </div>
                                            <div class="footer-social-icon">
                                                <span>Follow us</span>
                                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                        <div class="footer-widget">
                                            <div class="footer-widget-heading">
                                                <h3>Useful Links</h3>
                                            </div>
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">about</a></li>
                                                <li><a href="#">services</a></li>
                                                <li><a href="#">Our Services</a></li>
                                                <li><a href="#">Expert Team</a></li>
                                                <li><a href="#">Contact us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                        <div class="footer-widget">
                                            <div class="footer-widget-heading">
                                                <h3>Subscribe</h3>
                                            </div>
                                            <div class="footer-text mb-25">
                                                <p>Don???t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                            </div>
                                            <div class="subscribe-form">
                                                <form action="#">

                                                    <input id="outlined-basic" type="email" className='mt-3 w-100' label="Subscribe" />

                                                    <button className='mt-3'><i class="fab fa-telegram-plane"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="copyright-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                        <div class="copyright-text">
                                            <p>Copyright &copy; 2018, All Right Reserved <a href="/">VRH PROPERTIES</a></p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                        <div class="footer-menu">
                                            <ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">Terms</a></li>
                                                <li><a href="#">Privacy</a></li>
                                                <li><a href="#">Policy</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        </>
    )
}

export default Footer