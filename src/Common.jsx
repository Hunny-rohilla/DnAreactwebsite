import React from 'react';
import { NavLink } from 'react-router-dom';



const Common = (props) => {
    return(
    <>
        <section id="header" className=" d-flex align-items-center ">
            <div className=" container-fluid ">
                <div className="row ">
                    <div className="col-10 mx-auto">
                        <div className="row ">
                        <div className="  col-lg-6 col-md-5 pt-5 col-10 mx-auto pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                {props.name}<br></br><strong className=" brand-name">{props.brand}</strong>
                            </h1>

                            <div className="group img">
                                {props.group} 
                            </div>
                            <h2 className=" my-3">
                                {props.abt}
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className=" btn-get-started ">{props.btname}</NavLink>
                            </div>
                        </div>

                        <div className=" col-lg-6 col-md-5 col-10 mx-auto order-1 order-lg-2 header-img">
                            <img src={props.sideimg} className="img-fluid animated" alt="about img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Common;