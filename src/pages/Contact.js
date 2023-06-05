import React from 'react'
import Photo1 from '../assets/photo1.jpg';

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${Photo1})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-from'>
                <label htmlFor='name'>Full name</label>
                <input name='name' placeholder='Enter Full Name...' type="text"/>
                <label htmlFor='email'>Email</label>
                <input name='mail' placeholder='Enter an email...' type="email"/>
                <label htmlFor='message'>Message</label>
                <textarea name='message' placeholder='Enter your message...'></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
