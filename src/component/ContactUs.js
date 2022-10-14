import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

function ContactUs() {
    const Wrapper=styled.section`
    padding:5rem 0 5rem 0;
     
    .container{
        margin-top:6rem;
        text-aling:center;
    }
    .contact-form{
        max-width:50rem;
        margin:auto;

           .contact-input{
            display:flex;
            flex-direction:column;
            gap:2rem;
           }

           input, textarea{
            max-width: 35rem;
            color: ${({ theme }) => theme.colors.black};
            padding: 1rem 2rem;
            border: 1px solid ${({ theme }) => theme.colors.border};
            // text-transform: uppercase;
            box-shadow: ${({ theme }) => theme.colors.shadowSupport};
            }
            .btn{
                max-width:10rem;
                font-size:1.4rem;
                border-radius:9px;
            }
    }

    `;
    return (
        <Wrapper>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.1336476055835!2d76.66011161497433!3d30.68651558165328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef5f2758e69f%3A0xd260ad255a8f0454!2sCgc%20Landran%20Volleyball%20Court!5e0!3m2!1sen!2sin!4v1660142840997!5m2!1sen!2sin" 
            width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>

            <div className='container'>
                <div className='contact-form '>
                    <form action='#' method='POST' className='contact-input'>
                       <input
                         type='text'
                         name='username'
                         placeholder='username'
                         autoComplete='off'
                         required
                        />

                       <input
                         type='email'
                         name='Email'
                         placeholder='Email'
                         autoComplete='off'
                         required
                        />

                        {/* <input type='submit' value='Send'/> */}
                        <Button  className='btn'  type='submit'>Submit</Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default ContactUs;