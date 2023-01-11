import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <h4 className='text-center mb-5'>Featurd Properties</h4>

                    <div className="col-sm-3">
                        <Link to="/">
                            <div className="card border-0" style={{ backgroundImage: "url(https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202208261345543954-d466526c43dd11edb0290a58a9feac02.jpg)", height: "200px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                                <div className="inner">
                                    <p>
                                        Malviya Nagar
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0" style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/World_Trade_Park_Mall.gif/800px-World_Trade_Park_Mall.gif)", height: "200px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                            <div className="inner">
                                <p>
                                    Malviya Nagar
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0" style={{ backgroundImage: "url(https://www.jaipurpropertyhouse.in/wp-content/uploads/2022/08/pearl-prem-bapu-nagar-jaipur.jpg)", height: "200px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                            <div className="inner">
                                <p>
                                    Bapu Nagar
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0" style={{ backgroundImage: "url(https://imgs.nestimg.com/2_bhk_629_sq_ft_villa_for_sale_in_kedia_anant_villas_jaipur_squareyards_com_1050097633692740838.jpg)", height: "200px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                            <div className="inner">
                                <p>
                                    Vaishali Nagar
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Featured