import React from 'react';



const Card = (props) => {
    return(
    <>

                <div className=" col-md-3 col-10 mx-auto">
                  <div className="card " >
                    
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    </div>
                      <div className="card-body">
                        <h2 className="card-title font-weight-bold">
                            {props.title}
                        </h2>
                        
                       
                      </div>
                  
                  </div>
                
 
    </>
    )
}

export default Card;