import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import List  from './list';

const Todo=()=>{
    const[items ,setitems] =useState();
    const[newitems , setnewitems]=useState([]);
     const eventChange=(event)=>{
           setitems(event.target.value);
     }
     const neweventchange=()=>{
         setnewitems((oldval)=>{
             return(
                 [...oldval,items]
             )
            });
            setitems('');
     }
    return (
        <>
        <div className='back'>
            <div   className='main'>
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <div className='inputall'>
                <input type='text' placeholder='Add An Item' value={items}  onChange={eventChange}></input>
                <Button variant="contained" className='addlist' onClick={neweventchange} >+</Button>
                </div>
                <ol>
                    {newitems.map((itemval,index)=>{
                            return(<>
                                    <List
                                        text={itemval}
                                    />
                            
                                   </>);
                    })}
                </ol>
            </div>
        </div>
        </>
    )
}
export  default Todo;