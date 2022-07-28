import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from "../images/mumbai.jpg";
import img2 from "../images/kolkata.png";
import img3 from "../images/delhi.png";
import img4 from "../images/bangalore.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';



const Citys = () => {
    return (
        <>
            <div className="container mb-5">
                <h5 className='ms-3'><span className='' style={{ fontSize: "14px", color: "#f1592a" }}>WE’RE REVOLUTIONIZING TRAVEL</span><br></br>We're live in 90+ cities</h5>
                <p className='ms-3' style={{ fontWeight: "900", color: "#557cef" }}>_______________</p>
                <div className="row mt-4 p-3">

                    <div className="col-sm-3 pt-2 ">
                        <Card >
                            <CardMedia
                                component="img"
                                height="250"
                                image={img1}
                                alt="green iguana"
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h6" component="div">
                                    MUMBAI
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br>
                                    <p className='mt-2' style={{ color: "#f1592a" }}>  100+ Hotels</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                <Link to="/mumbai" className='w-100'>
                                    <Button size="medium" variant='contained' className='w-100' style={{ backgroundColor: "#f1592a" }}>More &nbsp;<HiArrowNarrowRight /></Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-sm-3 pt-2">
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={img2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    KOLKATA
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br>
                                    <p className='mt-2' style={{ color: "#f1592a" }}> 50+ Hotels</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                <Button size="medium" variant='contained' className='w-100' style={{ backgroundColor: "#f1592a" }}>More &nbsp;<HiArrowNarrowRight /></Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-sm-3 pt-2">
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image={img3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    DELHI
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br>
                                    <p className='mt-2' style={{ color: "#f1592a" }}> 130+ Hotels</p>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                <Button size="medium" variant='contained' className='w-100' style={{ backgroundColor: "#f1592a" }}>More &nbsp;<HiArrowNarrowRight /></Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-sm-3 pt-2">
                        <Card >
                            <CardMedia
                                component="img"
                                height="250"
                                image={img4}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    BANGALORE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br>
                                    <p className='mt-2' style={{ color: "#f1592a" }}> 100+ Hotels</p>

                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                <Button size="medium" variant='contained' className='w-100' style={{ backgroundColor: "#f1592a" }}>More &nbsp;<HiArrowNarrowRight /></Button>
                            </CardActions>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Citys