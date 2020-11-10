import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const Gallary = () => {
    return(
    <>
      <div className="gallary_title my-5">
        <h1 className="text-center font-weight-bold">Art Gallary</h1>
        <p className="text-center">All our sketches & Painting you can be downloaded.</p>
      </div>
        <div className=" container-fluid mb-5">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row gy-4 d-flex justify-content-between align-items-center ">
                {
                  Sdata.map((val, ind)=>{
                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      




    </>
    )
}

export default Gallary;