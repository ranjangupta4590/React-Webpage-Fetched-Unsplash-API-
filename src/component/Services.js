import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context';
import ApiImage from './ApiImage';

function Services() {

    const { services } = useContext(AppContext);
    console.log(services);

    const Wrapper = styled.section`
    
    `;

    return (
        <Wrapper className='section'>
            <h2 className='common-heading underline'>Our Collections</h2>
            <div className='mx-auto px-5 max-w-7xl'>
                {
                    <div className=' grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                        {services.map((items) => {
                            return (
                                <ApiImage key={items.id} {...items} />
                            )
                        })}
                    </div>
                }
                {/* {services.length} */}
            </div>
        </Wrapper>
    );
}

export default Services;