import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { AppContext } from '../context';

const HeroSection = (props) => {
    const Wrapper=styled.section`
    padding: 4rem 0  5rem 4rem;
  .section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 12rem;
    border-radius:9px;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    max-width: 60rem;
  }
  .section-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 90%;
  }
    `;

    const {name,image}=useContext(AppContext);

    return (
        <Wrapper>
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='section-data'>
                <p className="hero-top-data">
                    This is your WebImage page
                </p>
                <h1 className="hero-heading"> {name}</h1>
                <p className="hero-para"> Hello!  A Coder, Developer, youtuber and freelancer. You are at
                right place where you can get high quality images for your websites.
                </p>
                <Button   className="btn hireme-btn">
                    <NavLink to='/'>Join Us</NavLink>
                </Button>
            </div>
            <div className='section-img'>
                <picture>
                <img src={image} className="hero-img " alt='hero-img'/>
                </picture>
            </div>
        </div>
        </Wrapper>
    )
}

export default HeroSection;