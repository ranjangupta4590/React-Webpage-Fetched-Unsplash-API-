import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    const Wrapper = styled.section`
    .start-contact{
    max-width: 60vw;
    margin: auto;
    padding: 2rem 1.2rem 2rem 1.2rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
    
            // .contact-data{
            //     h3{
            //     font-size:1.8rem;
            //     }
            // }
}

    footer{
      padding: 10rem 5rem 0rem 4rem;
      background-color: ${({ theme }) => theme.colors.footer_bg};
      h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 1rem;
      }

      p {
        color: ${({ theme }) => theme.colors.white};
      }

      .footer-social {
        display: flex;
        gap: 0.8rem;

        div {
          padding: 1rem;
        //   border-radius: 50%;
        //   border: 2px solid ${({ theme }) => theme.colors.white};

          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
          }
        }
      }

      .footer-bottom--section {
        padding-top: 1.5rem;
        hr {
          margin-bottom: 1rem;
          color: ${({ theme }) => theme.colors.hr};
          height: 0.1px;
        }
        .grid-data{
            display:flex;
            // flex-direction:column;
            justify-content:center;
            aling-item:center;
            gap:15rem;
        }
      }

    }
    `;
    return (
        <Wrapper>
            <div className='start-contact'>
                <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='contact-data'>
                        <h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3>
                    </div>
                    <div>
                        <NavLink to='/'><Button>Get Started</Button></NavLink>
                    </div>
                </div>
            </div>

            <footer >
                <div className='container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4'>
                {/* <div className='container grid grid-four-column'> */}

                    {/* 1st-column */}
                    <div className='footer-about'>
                        <h3> Get random webimage</h3>
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                    </div>

                    {/* 2nd-column */}
                    <div className='footer-services'>
                        <h3>Upload and Download images with us</h3>
                        <form action="#">
                            <input
                                type="email"
                                required
                                autoComplete="off"
                                placeholder="Email"
                            />
                            <input type="submit" value="Start" />
                        </form>
                    </div>

                    {/* 3rd-column */}
                    <div className='footer-social-icons'>
                        <h3>Follow Us...</h3>
                        <div className='footer-social'>
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaFacebook className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <a href="https://www.youtube.com">
                                    <FaYoutube className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 4th-column */}
                    <div className='footer-contact'>
                        <h3>Call Us</h3>
                        <h3>+91 12345678978</h3>
                    </div>
                </div>

                {/* bottom section  */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-cols-1 grid-data">
                        <p>
                            @{new Date().getFullYear()}. All Rights Reserved
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper >
    );
}

export default Footer;