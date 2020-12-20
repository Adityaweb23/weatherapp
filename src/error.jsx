import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

 const Error=(Props)=>{
     const history=useHistory()

     return(
         <>
          <h1>404 erroe</h1>
          <br/>
          <h1> page not found</h1>
            <br/>
            <NavLink to='/'>GO BACK</NavLink>
         </>
     );

};
export default Error;