import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from './Navbar'
import styled from 'styled-components';
import { FaBlackTie } from 'react-icons/fa';
function Header() {
  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 4rem;
  // background-color: ${({ theme }) => theme.colors.bg};
  // display: flex;
  // justify-content: space-between;
  // align-items: center;

  .logo {
    // height: auto;
    // max-width: 30%;
       font-weight:500;

  }`;

    return ( 

        <MainHeader className='w-full shadow bg-slate-200 top-0 left-0'>
          <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <NavLink className="" to="/"><div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'><span className='text-3xl mr-3 pt-2'><FaBlackTie/></span>Web Image</div></NavLink>
         <Navbar/>
         </div>
        </MainHeader>
     );


}


export default Header;