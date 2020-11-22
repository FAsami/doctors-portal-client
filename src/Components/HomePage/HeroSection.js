import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../img/heroImage.png';

function HeroSection() {
  return (
    <div
      className='row justify-content-center align-items-center'
      style={{ height: '500px' }}>
      <div className='col-md-7 px-5'>
        <div className='w-100'>
          <h1>
            Your New Smile <br />
            Start Here
          </h1>
          <p className='text-lead'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            eum nesciunt laboriosam corrupti veniam sit quis saepe dicta, earum
            laudantium fugiat. Excepturi expedita aliquid quo reiciendis neque,
            soluta fugit rem!
          </p>
          <Link to='/appointments'>
            <button className='btn btn-primary'>GET APPOINTMENT</button>
          </Link>
        </div>
      </div>
      <div className='col-md-5 d-none d-md-block'>
        <img className='img-fluid w-100' src={heroImage} alt='Doctors Portal' />
      </div>
    </div>
  );
}

export default HeroSection;
