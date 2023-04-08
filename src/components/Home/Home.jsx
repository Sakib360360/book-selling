import Lottie from "lottie-react";
import Reader from '../../Assets copy/Reader.json';
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto px-12'>
            {/* left */}
            <div>
                <p>On sale!</p>
                <h1 className='text-3xl'>A reader lives a thousand <br />lives <span className=''>before he dies</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia explicabo maiores ab, non corporis porro esse laboriosam sequi magni totam!</p>
                <div className='inline-flex py-4'>
                    <Link to='/books'><button className='bg-sky-600 rounded shadow-md px-4 py-2 text-white mr-4'>Visit Store</button></Link>
                    <button>Learn More</button>
                </div>
            </div>
            {/* animation */}
            <div>
            <Lottie animationData={Reader} loop={true} />;
            </div>
        </div>
    );
};

export default Home;