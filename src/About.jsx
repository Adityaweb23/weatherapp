import React from 'react';
import { NavLink } from 'react-router-dom';
import web from './img/about.png';

 const About=(Props)=>{
     return(
         <>
                      <section id='header' className="section">
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto my-3'>
                            <div className="row ">
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center justify-content-center flex-column'>
                                    <h1 className='heading'>Welcome to the About Page <br />
                                        
                                    </h1>
                              
                                    <div className='mt-3'>
                                        <NavLink to='/contact' className='btn-get-started'>Contact now</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={web} className='img-fluid animated ' alt='no img found' />
                                </div>
                            </div>
                            <div>
                                <h2>Popular Coding Languages to Learn</h2>
                                <h6>
                                
Since the 1970s, computer experts have created more than 700 different programming languages. Each language has a unique way of helping computers process huge amounts of information. Every coding language has different features and terms with some overlap. New coders shouldn’t be overwhelmed by the plethora of programming types though. There are only about a dozen programming languages that are commonly used. These include Ruby, Swift, JavaScript, Cobol, Objective-C, Visual Basic, and Perl. Let’s look at some of the major coding languages about which beginners should know.<br/>

<strong>HTML</strong> – HTML, or hypertext markup language, is the standard way of coding web pages to showcase electronic information. Founded by Tim Berners-Lee in 1990,

 HTML is used to format the content, pictures, and videos featured online. HTML tells the internet browser how to display websites for an optimal user experience.<br/>
<strong>Java</strong> – Java is an object-oriented coding language created by Sun Microsystems in 1995. 

Java has English-based commands used to create applications for a single computer or whole server and tiny applets for websites. Java is a popular favorite for programming mobile apps and video games, especially on Android operating systems.<br/>
<strong>Python</strong> – Python is a server-side web and software development language started by Guido van Rossum in 1991. Python has a simple, 

English-like syntax to script back-end actions for applications, user interfaces, and operating systems that work well. Many platforms, including Google and NASA’s Integrated Planning System, use Python.<br/>
<strong>CSS</strong> – CSS, or cascading style sheets, is a coding language used to specify a website’s style. Developed by Håkon Wium Lie in 1994, CSS tells internet browsers each page’s layout, background color, font size, cursor shape, and more. Crafting and maintaining solid CSS code is crucial for websites to have aesthetic appeal.<br/>
<strong>C Language</strong> – C Language is a simple, low-level coding type initiated in 1972 by Bell Labs to build the UNIX system. Perhaps the easiest language, C has just 32 basic keywords used for scripting embedded systems, network drivers, and artificial intelligence. C language is versatile to get computer hardware communicating.
<strong>C++</strong> – C++ is another object-oriented programming language that expands on C to execute higher-level computer tasks. Released in 1983 by Bjarne Stroustrup, C++ organizes and stores info in bundles for more complex programs. Adobe, Microsoft Office, Amazon, and Mozilla software utilizes C++ for fast processing.
<strong>PHP</strong> – PHP, or hypertext processor, is a coding language for web development founded in 1994 by Rasmus Lerdorf. PHP is widely used for server scripting with HTML to piece together dynamic website content. WordPress, an open-source online platform that accounts for 20 percent of websites and blogs, is notably written with PHP.
<strong>SQL</strong> – SQL, or structured query language, is a domain-specific coding type that streams information into a database. First introduced by IBM researchers in 1974, SQL has simple syntax to run back-end web databases. SQL is used by most businesses to load, retrieve, and analyze text or numbers in their servers.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

         </>
     );

};
export default About;