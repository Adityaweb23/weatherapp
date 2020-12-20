import React, { useState } from 'react';
import Sresult from './sresult'
const Search=()=>{
const[value,setvalue]=useState('');
const inputval=(event)=>{
    setvalue(event.target.value);
    console.log(event.target.value);
}
 return(
     <>
      <input type='text' placeholder='search here' onChange={inputval}></input>
      <br/>

     {value===''? null  :<Sresult image={value}/>}
     </>
 );

}
export default Search;