import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.esm';
import { NavLink } from 'react-router-dom'
// import {Link} from 'react-router-dom'
const Navbar = () => {
    return (<>
      <div className='container-fluid nav_bg'>
      <div className='row'>
      <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink   className="navbar-brand" to='/'>Aditya Web</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink activeClassName='menu_active' exact className="nav-link" to='/'>Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' exact className="nav-link" to='/About'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' exact className="nav-link" to='/Services'>Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='menu_active' exact className="nav-link" to='/contact'>Contact</NavLink>
                    </li>

                </ul>

            </div>
        </nav>
        </div>
        </div>
        </div>

    </>);
}
export default Navbar;
{/* <NavLink  exact activeClassName='active_class' to='/'>Home</NavLink>
<NavLink exact activeClassName='active_class' to='/contact'>contact us</NavLink>
<NavLink exact activeClassName='active_class' to='/About'>About us</NavLink>
<NavLink exact activeClassName='active_class' to='/Services'>Services</NavLink> */}