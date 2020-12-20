import React from 'react'

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/600x400/?${props.image}`
    
    return(
        <>
        <div>
            <img  src={img} alt='no image found'/>
        </div>
        </>
    )
}
export default Sresult;