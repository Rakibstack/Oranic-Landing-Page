'use client'
import { ChevronDown, Search, ShoppingBag, UserRound } from 'lucide-react';
import React from 'react';

const Navbar = () => {

    return (
       <div className='bg-base-100'>
         <div className="navbar mx-w-[1200px] mx-auto container  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 flex gap-1 text-[1.5rem] cursor-pointer  text-[#222222] px-1 rounded-box z-1 mt-3 w-52 p-2 shadow">
                      <li><a className='flex items-center gap-1'>Category <ChevronDown /></a></li>
                    <li><a className='flex items-center gap-1'>Shop <ChevronDown /></a></li>
                    <li><a className='flex items-center gap-1'>Offer <ChevronDown /></a></li>
                    <li><a className='flex items-center gap-1'>Pages <ChevronDown /></a></li>
                    </ul>
                </div>
                <a className=" text-[3rem] text-[#607315] font-medium">ORANIC</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4 text-[1.5rem] cursor-pointer  text-[#222222] px-1">
                    <li><a className='flex items-center gap-1'>Category <ChevronDown /></a></li>
                    <li><a className='flex items-center gap-1'>Shop <ChevronDown /></a></li>
                    <li><a className='flex items-center gap-1'>Offer <ChevronDown /></a></li>
                    <li><a className='flex items-center gap-1'>Pages <ChevronDown /></a></li>
                    
                </ul>
            </div>
            <div className="navbar-end text-[#222222] ">
                <span><Search /></span>
                <span className='mx-6'><ShoppingBag /></span>
                <span><UserRound /></span>
            </div>
        </div>
       </div>
    );
};

export default Navbar;