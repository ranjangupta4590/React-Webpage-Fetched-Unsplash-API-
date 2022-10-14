import React from 'react'
import { FaInstagram, FaThumbsUp } from 'react-icons/fa';
import styled from 'styled-components';

const ApiImage = (props) => {
  const Wrapper = styled.section`
  // .icons{
  //   height:5px;
  //   width:10px;
  // }
  `;
  return (
    <Wrapper>
      <article className='shadow-md bg-white rounded-3xl p-5'>
        <img src={props.urls.full} alt={props.user.name} className="h-52 w-full object-cover rounded-3xl md:h-80" loading='lazy' />
        <article className='flex flex-wrap items-center justify-between'>
          <div className='pt-5'>
            <img src={props.user.profile_image.large}
              alt={props.user.name}
              loading="lazy"
              className='w-20 rounded-full shadow'
            />

            <ul className='ml-3'>
              <li className='font-bold text-lg'>{props.user.name}</li>
            </ul>
          </div>

          <div >
            <ul className='text-md text-right h-4 mb-4'>
              <li><a href={`hpps://instagram.com/${props.user.instagram_username}`}>
                <div>
                  <FaInstagram className="icons  mb-2" size={25} />
                </div></a></li>
              <li><div><FaThumbsUp size={25} className='icons' /></div>{props.likes}</li>
            </ul>
          </div>
        </article>
      </article>
    </Wrapper>
  )
}

export default ApiImage;