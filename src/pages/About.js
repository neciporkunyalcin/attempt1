import React from 'react'
import Photo4 from '../assets/photo4.jpg';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop'style={{backgroundImage:`url(${Photo4})`}}></div>
        <div  className='aboutBottom'>
            <h1>About Us</h1>
            <p>The special fascination of the N.O.Y. Group not only lies in its products and technology, but also in the company’s history, written by inventors, pioneers and brilliant designers. Today, the N.O.Y. Group, with more than 30 production and assembly facilities as well as a global sales network, is the world’s leading manufacturer of premium automobiles , and provider of premium financial and mobility services.</p>
        </div>
      
    </div>
  )
}

export default About
