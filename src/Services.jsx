import React from 'react';
import Card from './card'
import web from './img/cpp.png';
import web1 from './img/html.png';
import web2 from './img/java.png';
import web3 from './img/nodejs.png';
import web4 from './img/javascript.png';
import web5 from './img/python.png';
const Services = (Props) => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <Card  
                                image={web}
                                title='C++'
                            />
                            <Card  
                                image={web1}
                                title='HTML'
                            />
                            <Card  
                                image={web2}
                                title='JAVA'
                            />
                            <Card  
                                image={web3}
                                title='NODE JS'
                            />
                            <Card  
                                image={web4}
                                title='JAVA SCRIPT'
                            />
                            <Card  
                                image={web5}
                                title='PYTHON'
                            />
                        
                            
                            

                        </div>

                    </div>
                </div>
            </div>

        </>
    );

};
export default Services;