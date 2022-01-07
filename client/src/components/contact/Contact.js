import React from 'react';
import './Contact.scss';
import { SocialIcon } from 'react-social-icons';

function Contact() {
    return(
        <div className='contact-container'>
            <div className='contact-header'>
                <h1>Contact Me: </h1>
            </div>
            <div className='contact-body'>
                <h2>Jacob Hocker</h2>
            </div>
            <div className='contact-icons'>
                <div className='icon'>
                    <SocialIcon url="https://linkedin.com/in/jacob-hocker-23a064220" bgColor="#7c7e7e" fgColor='#DC2026'/>
                </div>
                <div className='icon'>
                    <SocialIcon url="https://jacobhocker.medium.com" bgColor="#7c7e7e" fgColor='#DC2026'/>
                </div>
                <div className='icon'>
                    <SocialIcon url="https://github.com/JacobHocker" bgColor="#7c7e7e" fgColor='#DC2026'/>
                </div>
                <div className='icon'>
                    <SocialIcon url="mailto: jacobdouglas06@gmail.com" bgColor="#7c7e7e" fgColor='#DC2026'/>
                </div>
            </div>
        </div>
    )
}

export default Contact;