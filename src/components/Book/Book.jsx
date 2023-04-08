import React from 'react';
import { Link, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Book = (props) => {
    const {image,price,subtitle,url,title,isbn13} = props.book
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    
    console.log(props)
    return (
        <div className=''>
            <div className=' relative'>
                {/* <h1>Book name:{title}</h1> */}
                <img className='object-cover z-20' src={image} alt="" />
                <div className='absolute top-56 z-10 left-28 '>
                <Link to={`/book/${isbn13}`}><button className='bg-slate-400 px-4 py-2 rounded text-white'>details</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default Book;