import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <>
            <div className="col-md-6 col-10 mx-auto gy-4">
            <div className="col-sm-6 col-10 mx-auto gy-4">
            

                <div className="card">
                    <img src={props.image} className="card-img-top" alt="no image found" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">This is one of the best programming language</p>
                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;