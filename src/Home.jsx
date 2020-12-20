import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './img/office.jpg';

function Home(Props) {
    return (
        <>
            <section id='header' className="section">
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto my-3'>
                            <div className="row ">
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column'>
                                    <h1 className='heading'>Welcome to my website <br />
                                        <strong className='brand-name'> Aditya Web</strong>
                                    </h1>
                                    <h3 className='my-0'>
                                        i am here to help everyone
                                    </h3>
                                    <div className='mt-3'>
                                        <NavLink to='/services' className='btn-get-started'>Get Started</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={web} className='img-fluid animated ' alt='no img found' />
                                </div>
                            </div>
                            <div>
                                <h2>What Coding Is</h2>
                                <p>
                                                               Coding is basically the computer language used to develop apps, website                                                                       Without it, we’d have none of the most popular technology we’ve c                                     as Facebook,
                                    our smartphones,
                                    the browser we choose to view our favorite blogs, or even the blogs themselves.It all runs on code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Home;