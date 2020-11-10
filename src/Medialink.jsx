import React from "react";
import { a } from "react-router-dom";


const Medialink =() =>{
    return(
    <>
         <section className="w-100 bg-light  text-center py-4">
                      <div className="link_title ">
                        <h2 className=" font-weight-bold">Follow Us On</h2>
                      </div>
                      <div className="right_sub__div d-flex justify-content-center align-items-center ">
                        <a href="https://www.facebook.com/dna0101" target="_blank"><i className="fab fa-facebook-square fa-4x" ></i></a>
                        <a href="https://www.instagram.com/dance_nd_art/" target="_blank"><i className="fab fa-instagram fa-4x" ></i></a>
                        <a href="https://github.com/Hunny-rohilla" target="_blank"><i className="fab fa-github-square fa-4x" ></i></a>
                        <a href="https://www.youtube.com/channel/UCXCGn3uNgLE3Fsnk7A2sDHA" target="_blank"><i className="fab fa-youtube-square fa-4x" ></i></a>
                        <a href="https://www.linkedin.com/in/hoshiyar-singh-505473199/" target="_blank"><i className="fab fa-linkedin fa-4x" ></i></a>
                      </div>
         </section>
    </>)
}


export default Medialink;