import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BsFillStarFill } from "react-icons/bs";

export default function ActionAreaCard() {
    return (



        <div className="container mb-5 pt-5">
            <h5 className='ms-3'><span className='' style={{ fontSize: "14px", color: "#f1592a" }}> HOTELS NEAR YOU</span><br></br>Budget to luxury, we’ve got you 900+ hotels</h5>
            <p className='ms-3' style={{ fontWeight: "900", color: "#557cef" }}>_______________</p>
            <div className="row mt-4 p-3">
                <div className="col-sm-4">

                    <Card className='pt-2 border-0 shadow'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://d1ha4q9jvugw4k.cloudfront.net/static/img/park-kolkata.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    <div className='d-flex'>  Park Kolkata <span className='ms-auto'>5 <BsFillStarFill className='mb-2' /></span></div>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br> */}
                                    <p style={{ color: "#f1592a" }}> Park Street, Kolkata</p>
                                    <div className='d-flex'>
                                        <h6 style={{ color: "#557cef" }}>₹3540 <span className='text-muted' style={{ fontSize: "12px" }}>for day slot</span></h6><h6 className='ms-auto' style={{ color: "#f1592a" }}><span className='text-muted'>Save</span>  50%</h6>
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="col-sm-4">

                    <Card className='pt-2 border-0 shadow'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://d1ha4q9jvugw4k.cloudfront.net/static/img/red-fox.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    <div className='d-flex'>  Hablis Hotel <span className='ms-auto'>5 <BsFillStarFill className='mb-2' /></span></div>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br> */}
                                    <p style={{ color: "#f1592a" }}> Guindy, Chennai</p>
                                    <div className='d-flex'>
                                        <h6 style={{ color: "#557cef" }}>₹5900 <span className='text-muted' style={{ fontSize: "12px" }}>for day slot</span></h6><h6 className='ms-auto' style={{ color: "#f1592a" }}><span className='text-muted'>Save</span>  34%</h6>
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

                <div className="col-sm-4">

                    <Card className='pt-2 border-0 shadow'>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://d1ha4q9jvugw4k.cloudfront.net/static/img/hablis.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    <div className='d-flex'> Red Fox Hotel <span className='ms-auto'>3 <BsFillStarFill className='mb-2' /></span></div>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica<br></br> */}
                                    <p style={{ color: "#f1592a" }}> Delhi Airport</p>
                                    <div className='d-flex'>
                                        <h6 style={{ color: "#557cef" }}>₹3114<span className='text-muted' style={{ fontSize: "12px" }}>for day slot</span></h6><h6 className='ms-auto' style={{ color: "#f1592a" }}><span className='text-muted'>Save</span>  48%</h6>
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

            </div>
        </div>


    );
}
