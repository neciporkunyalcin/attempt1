import React from 'react'
import { Link } from 'react-router-dom';
import photo4 from '../assets/photo4.jpg';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${photo4})`}}>
      <div className='headerContainer'>
        <h1>N.O.Y. AUTO SHOWROOM</h1>
        <p> Click to see the perfect cars from each other<br/>
        </p>
        <Link to="/menu"><button> take a look now</button></Link>
      </div>
    </div>
  )
};

export default Home;
