import React from 'react';
import Vcard from './Vcard';
import Vdata from './Vdata';

const Videos = () => {
    return(
    <>
 
              
           

    <div className="videos_title my-5">
        <h1 className="text-center ">Our Videos</h1>
        <p className="text-center">Like, Share & Subscribe also give your valuable comment in CommentBox.</p>
      </div>
        <div className=" container-fluid mb-5">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row gy-4 d-flex justify-content-between align-items-center ">

           
              {
                  Vdata.map((val, ind)=>{
                    return <Vcard key={ind} vsrc={val.vsrc} title={val.title} />
                  })
                } 


              </div>
            </div>
          </div>
        </div>
      


    
    </>
    )
}

export default Videos;