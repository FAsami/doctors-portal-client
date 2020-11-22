import React from 'react';
import doctor1 from '../../img/doctors/doctor1.png';
import doctor2 from '../../img/doctors/doctor2.png';
import doctor3 from '../../img/doctors/doctor3.png';

import { FiPhone } from 'react-icons/fi';

const doctors = [
  { name: 'Dr. Crowdy', image: doctor1, phone: '+99232323' },
  { name: 'Dr. Muasna', image: doctor2, phone: '+99542323' },
  { name: 'Dr. Nualas', image: doctor3, phone: '+89232323' },
];

function OurDoctors() {
  return (
    <div className='text-center my-5'>
      <h4 className='text-center text-primary py-5'>Our Doctors</h4>
      <div className='row'>
        {doctors.map((doctor) => (
          <div className='col-md-4'>
            <img
              src={doctor.image}
              className='image-fluid w-100'
              alt='Doctor'
              style={{ maxHeight: '400px', maxWidth: '250px' }}
            />
            <h4>{doctor.name}</h4>
            <div>
              <p className='text-muted'>
                <FiPhone />
                {doctor.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurDoctors;
