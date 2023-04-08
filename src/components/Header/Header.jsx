import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open,setOpen] = useState(false)
    const menuBarHandler = () =>{
        setOpen(!open)
        console.log(open)
    }
    return (
        <div className='flex items-center justify-between bg-slate-400 py-4 px-4'>
            { /* logo section */}
            <Link to='/'><div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline mr-2 text-blue-950 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>

                <span>bookSelling</span>
                
            </div></Link>
            {/* links */}
            <div className=''>
                
                <ul className='hidden  md:inline-flex'>
                    <li className='px-2'>
                        <NavLink className={({ isActive }) => isActive ?"underline text-blue-900" : ""} to='/home'>Home</NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink className={({ isActive }) => isActive ?"underline text-blue-900" : ""} to='/books'>Books</NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink className={({ isActive }) => isActive ?"underline text-blue-900" : ""} to='/about'>About</NavLink>
                    </li>
                    
                </ul>
                <div className='md:hidden static' >
                {
                    open ? <><button onClick={()=>menuBarHandler()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg> <div className='absolute top-12 right-0 transition duration-700 ease-in-out bg-slate-400 px-12 py-8'>
                  <ul className=''>
                    <li className='px-2 py-2'>
                        <NavLink className={({ isActive }) => isActive ?"underline text-blue-900" : ""} to='/home'>Home</NavLink>
                    </li>
                    <li className='px-2 py-2'>
                        <NavLink className={({ isActive }) => isActive ?"underline text-blue-900" : ""} to='/books'>Books</NavLink>
                    </li>
                    <li className='px-2 py-2'>
                        <NavLink className={({ isActive }) => isActive ?"underline text-blue-900" : ""} to='/about'>About</NavLink>
                    </li>
                    
                </ul>
                  </div>
                  </button></> : <button onClick={()=>menuBarHandler()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</button>
                }
                </div>
                
            </div>
        </div>
    );
};

export default Header;