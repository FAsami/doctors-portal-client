import React from 'react';
import Calendar from 'react-calendar';
import { FcNext, FcPrevious } from 'react-icons/fc';
import heroImage from '../../img/heroImage.png';
import AppointmentCard from '../../Components/AppointmentCard/AppointmentCard';
import Footer from '../../Components/Shared/Footer/Footer'
import 'react-calendar/dist/Calendar.css';
import './appointments.scss';
import Navbar from '../../Components/Shared/Navbar/Navbar';

function Appointments() {
  return (
    <div className='container-fluid wrapper'>
      <Navbar />
      <div className='row mt-5 pl-4'>
        <div className='col-sm-12 col-md-6'>
          <h4>Appointment</h4>
          <Calendar
            className='border-0 calender'
            nextLabel={<FcNext />}
            prevLabel={<FcPrevious />}
            next2Label={null}
            prev2Label={null}
          />
        </div>
        <div className='d-none d-md-block col-md-6'>
          <img src={heroImage} className='image-fluid w-100' alt='None' />
        </div>
      </div>
      <AppointmentCard />
      <Footer />
    </div>
  );
}

export default Appointments;
