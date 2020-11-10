import React from 'react';



const Vcard = (props) => {
    return(
    <>

                <div className=" col-md-4 col-10 mx-auto">
                  <div className="card " >
                    {props.vsrc}
                    </div>
                      <div className="card-body">
                        <h3 className="card-title font-weight-bold">
                            {props.title}
                        </h3>
                        
                        
                      </div>
                  
                  </div>
                
 
    </>
    )
}

export default Vcard;