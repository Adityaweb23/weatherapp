import React, { useState } from 'react';

const Contact = (Props) => {
    const [data ,setdata]=useState({
       name:'',
       phone:'',
       email:'',

    })
    const Submitform=()=>{

    }
    const Inputevent=(event)=>{
        const {name,value}=event.target
        setdata((preval)=>{
            return{
            ...preval,
            [name]:value,
            }
        })
    }
    return (
         <>

            <div className='my-5'>
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className='container contact-div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={Submitform}>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1"
                                 aria-describedby="emailHelp" 
                                 value={data.name}
                                 name='name'
                                 onChange={Inputevent}
                                 placeholder='Enter your name'/>
                                 
   
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputEmail1">Phone</label>
                                <input 
                                type="number" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"  
                                value={data.phone}
                                name='phone'
                                onChange={Inputevent}
                                placeholder='Enter your mobile no.' />
                                
   
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input 
                                type="email"
                                 className="form-control" 
                                 id="exampleInputEmail1" 
                                 aria-describedby="emailHelp"
                                 value={data.email}
                                 name='email'
                                 onChange={Inputevent}
                                  placeholder='Enter your email' />
                                  
   
                            </div>
                              
                             <div className="form-group my-4">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea 
                                className="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"></textarea>
                              </div>
                                    
                                        <button type="submit" className="btn-get-started my-4">Submit</button>
                                  </form>
                                <h6>hello mr{data.name} your phone no. is {data.phone} and your entered email is {data.email}</h6>
                                </div>
                            </div>
                </div>
         </>
     );

};
export default Contact;