import React from 'react';
import web from "../src/images/DnA.png";
import groupimg from "../src/images/group.jpg";
import logo1 from "../src/images/DnA.png";
import logo2 from "../src/images/Hunny.png";
import logo3 from "../src/images/logo3.png";
import event1 from "../src/images/e1.jpg";
import event2 from "../src/images/e2.jpg";
import event3 from "../src/images/e3.jpg";


import Common from './Common';

const About = () => {
    return(
    <>
    <div className="about_common my-5">
       <Common name="Journey Starts Here" 
       sideimg={web} 
       visit="/contact" 
       btname="Contact Now"
        group={<img src={groupimg} className="img-fluid"  alt="about img" />}
        abt="A journey of a thousand miles begins with a single step."
        /> 
    </div>

  
 <div className="d-flex flex-column">      
<div className="eventdiv ">
        <div className="event_title py-4 ">
            <h1 className="text-center font-weight-bold">Events</h1>
            <p className="text-center text-dark">Successfull Events Conducted by Us.</p>
        </div>
        <div className="  container-fluid pb-5">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row gy-4 d-flex justify-content-between align-items-center">
              
                    <div className=" col-md-4 col-10 mx-auto ">
                     <div className="card m-5 p-4">
                     <img src={event1} className=" card-img-top img-fluid " alt="pic"  />
                     </div>
                    </div>

                    <div className=" col-md-4 col-10 mx-auto "> 
                    <div className="card m-5 p-4">
                    <img src={event2} className="img-fluid" alt="pic" />
                    </div>
                    </div>
                    
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card m-5 p-4">
                    <img src={event3} className="img-fluid" alt="pic"  />
                    </div>
                    </div>

                
              </div>
            </div>
          </div>
        </div>
</div>




<div className="logodiv ">
        <div className=" logo_title py-2">
            <h1 className="text-center font-weight-bold">Logo Design</h1>
           
        </div>
        <div className=" container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className=" row d-flex justify-content-between align-items-center">
              
                    <div className=" logoimg  col-md-4 col-10 mx-auto ">
                   
                     <img src={logo1} className=" card-img-top img-fluid " alt="pic" />
                   
                    </div>

                    <div className="logoimg col-md-4 col-10 mx-auto "> 
                  
                    <img src={logo2} className="img-fluid" alt="pic"  />
                
                    </div>
                    
                    <div className=" logoimg col-md-4 col-10 mx-auto">
                    
                    <img src={logo3} className="img-fluid" alt="pic" />
                
                    </div>

                
              </div>
            </div>
          </div>
        </div>
        
</div>
</div>
    </>
    )
}

export default About;