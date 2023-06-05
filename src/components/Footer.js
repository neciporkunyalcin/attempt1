import React from 'react'
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMadia'>
            <p> &copy; 2023 necip07.com </p>
            
        </div>
        <div className='faceInst'>
            <FiInstagram></FiInstagram>
            <BsTwitter></BsTwitter>
            <BsFacebook></BsFacebook>
        </div>
      
    </div>
  )
}

export default Footer
