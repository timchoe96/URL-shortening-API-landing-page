import React from 'react';
import white from './images/logoWhite.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
const Bottom = () => {
    return (
        <div>
<div className='bottom'>
                <h1>Boost your links today</h1>
                <button>Get Started</button>
                </div>
                <div className='footer'>
                    <img src={white} alt=''></img>
                    <div className ='right'>
                        <div className='first'>
                            <h5>Features</h5>
                            <ul>
                                <li>
                                    Link Shortening
                                </li>
                                <li>
                                    Branded Links
                                </li>
                                <li>
                                    Analytics
                                </li>
                            </ul>
                        </div>
                        <div className='second'>
                            <h5>Resources</h5>
                            <ul>
                                <li>
                                    Blog
                                </li>
                                <li>
                                    Developors
                                </li>
                                <li>
                                    Supoport 
                                </li>
                            </ul>
                        </div>
                        <div className='third'>
                            <h5>Company</h5>
                            <ul>
                                <li>
                                About 
                                </li>
                                <li>
                                    Our Team
                                </li>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>
                        <div className='icons'>
                            <img src={facebook} alt=''></img>
                            <img src={twitter} alt=''></img>
                            <img src={pinterest} alt=''></img>
                            <img src={instagram} alt=''></img>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Bottom;