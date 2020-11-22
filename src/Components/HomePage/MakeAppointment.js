import React from 'react';
import image from '../../img/doctor-removedbg.png';
function MakeAppointment() {
  return (
    <div className='row bg-dark my-5'>
      <div className='col-md-4'>
        <img src={image} className='image-fluid w-100' alt='Appointment' />
      </div>
      <div className='col-md-8 d-flex flex-column justify-content-center align-items-center'>
        <h6 className='text-primary'>Appointment</h6>
        <h2 className='text-light'>Make an appointment today</h2>
        <p className='text-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed
          fugit maxime!
        </p>
        <div>
          <button className='btn-primary btn my-5'>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default MakeAppointment;
