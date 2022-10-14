
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from './Button';

function Navbar() {
  const Nav = styled.nav`
  .navbar {
    // display: flex;
    gap: 4rem;
    li {
      list-style: none;
      .navbar-link {
        &:link,
        &:visited {
          // display: inline-block;
          text-decoration: none;
          font-size: 1.2rem;
          text-transform: uppercase;
          // color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }

      .btn{
        padding:0.8rem 2rem 0.8rem 2rem;
        border-radius:9px; 
        // font-size:10px;
      }
    }
  }
  `;
   const [open,setOpen]=useState(false);
  return (
    //     <header>
    //     <NavLink to="/">WebPage</NavLink>   

    <Nav>
      <div onClick={()=>setOpen(!open)} className="menuIcon">
        <div  className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open?<FaTimes  />:<FaBars/>}
        </div>


        <ul className={`navbar md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-slate-200 md:z-auto z-[99] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          <li><NavLink className="navbar-link" to="/">Home</NavLink></li>
          <li><NavLink className="navbar-link" to="/about">About</NavLink></li>
          <li><NavLink className="navbar-link" to="/services">Services</NavLink></li>
          <li><NavLink className="navbar-link" to="/contact">ContactUs</NavLink></li>
          {/* <Button className='btn'>Get Start</Button> */}
        </ul>
      </div>
    </Nav>
    // </header>
  );


}


export default Navbar;