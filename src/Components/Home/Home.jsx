import React from 'react';
import technologicalsupport from '../../Assets/technological-support.png';
import './Home.css';
import { useEffect } from 'react';
function Home() {
    useEffect(() => {
        document.title = 'Home Page';
      }, []); 
    
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 p-4'>
            <div className='text-center mt-5 p-4'>
                <img src={technologicalsupport} className='rounded mx-auto d-block' style={{ maxWidth: '200px' }} alt="Technological Support" />
                <h1 className='fw-bold'>Start Framework</h1>
                <p className="star-line d-flex align-items-center justify-content-center">
                    <span className="border-bottom flex-grow-1 mx-2 border border-black"></span>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <span className="border-bottom flex-grow-1 mx-2 border border-black"></span>
                </p>

                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    );
}

export default Home;

