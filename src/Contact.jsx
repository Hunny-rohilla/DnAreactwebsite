import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    }); 

    const InputEvent = (event) => {
        const { name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit =(e) =>{
        e.preventDefault();
        alert(
            `my name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what i want to say ${data.msg}.`
        );
    };

    return(
    <>
    
        <div className="contact_title ">
            <h1 className="text-center font-weight-bold">Contact Us</h1>
        </div>
        <div className= " py-3 container">
            <div className=" row ">
                <div className=" col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label className="form-label">FullName</label>
                        <input type="text" className="form-control " id="exampleInputEmail1" 
                        name="fullname" value={data.fullname} onChange={InputEvent}
                        placeholder="Enter your Name" autoComplete="off" required />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="numbers" className="form-control" autoComplete="off" id="exampleInputEmail1"
                        name="phone" value={data.phone} onChange={InputEvent}
                        placeholder="Enter your mobile number" autoComplete="off" required />
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control"
                        name="email" value={data.email} onChange={InputEvent}
                        placeholder="Enter your mail"  id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="off" required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Massage</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                        name="msg" value={data.msg} onChange={InputEvent}
                        rows="3" autoComplete="off"></textarea>
                    </div>
                    <button type="submit" className=" btn btn-outline-primary">Submit</button>
               </form>
                </div>
            </div>
        </div>
       
    </>
    )
}

export default Contact;


