import React, { Component, useEffect, useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.esm';

import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Search from './Search';
import Error from './error';
import Home from './Home';
import Services from './Services';
function App() {

  return (<>
            <Navbar/>
            <Switch>
              
            <Route exact path='/' component={()=><Home name="Home"/>} />
            <Route  path='/About'  component={()=><About name="About US"/>}/>
            <Route  path='/Services'  component={()=><Services name="Services US"/>}/>
            <Route  path='/contact'  component={()=><Contact name="Contact US"/>}/>
            {/* <Route  path='/search'  component={()=><Search name="Search"/>}/> */}
            <Route   component={Home}/>
            </Switch>
          
  </>)
}

export default App;