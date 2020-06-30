import React from 'react';
import desk from './images/illustration-working.svg';

const Heading = () => {
    return(
        <div className='heading'>
            <div className='headingOne'>
            <h1>More than just shorter links</h1>
            <p>Build your brand's recongintion and get detailed insights on how your links are performing.</p>
            <button>Get Started</button>
            </div>
            <div className='image'>
            <img src={desk} alt=''></img>
            </div>
        </div>
    )
}

export default Heading;