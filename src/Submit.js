import React from 'react';
import brand from './images/icon-brand-recognition.svg';
import detailed from './images/icon-detailed-records.svg';
import fully from './images/icon-fully-customizable.svg';
import Link from './Link';

const Submit = ({typing,submit,color,errorDisplay,name,array}) => {
    return(
        <div className='submit'>
            
            {/* submit button */}
            <div className='submitSection'>
                <div className='submitLink'>
                    <input onChange={typing} placeholder='Shorten a link here...' type='text' style={{borderColor:color}} className={name}></input>
                    <div className='error' style={{display:errorDisplay}}><em>Please add a link</em></div>
                    <button onClick={submit}>Shorten It!</button>
                </div>
              
            </div>
            <div className='linkList'>
                {
               array.map((object,i) => {
                   return <Link key={i} original={object.url} shortened={object.short}/>
               })
                }
                </div>
            {/* advanced stats */}
            <div className='advancedStats'>
                <div className='top'>
                    <h1>Advanced Statistics</h1>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>
                <div className='stats'>
                    <div className='box brand'>
                        <div>
                            <img src={brand} alt=''></img>
                        </div>
                        <h4>Brand Recognition</h4>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content</p>
                    </div>
                    <div className='cyanLine'>

                    </div>
                    <div className='box detailed'>
                        <div>
                            <img src={detailed} alt=''></img>
                        </div>
                        <h4>Detailed Records</h4>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                     <div className='cyanLine'>

                    </div>
                    <div className='box fully'>
                        <div>
                            <img src={fully} alt=''></img>
                        </div>
                        <h4>Fully Customizable</h4>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Submit;