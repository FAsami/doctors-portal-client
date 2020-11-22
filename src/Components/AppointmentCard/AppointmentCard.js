import Modal from './Modal';
import React, { useState } from 'react';
import './appointmentCard.css'
import ModalBody from './ModalBody';
const appointments = [
  { title: 'Tooth Orthadis', time: '08:00AM -9:00PM', seatAvailable: 10 },
  { title: 'Tooth Orthadis', time: '08:00AM -9:00PM', seatAvailable: 10 },
  { title: 'Tooth Orthadis', time: '08:00AM -9:00PM', seatAvailable: 10 },
  { title: 'Tooth Orthadis', time: '08:00AM -9:00PM', seatAvailable: 10 },
  { title: 'Tooth Orthadis', time: '08:00AM -9:00PM', seatAvailable: 10 },
  { title: 'Tooth Orthadis', time: '08:00AM -9:00PM', seatAvailable: 10 },
];
function AppointmentCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [appointment, setAppointment] = useState({});
  return (
    <div className='mt-5'>
      <h3 className='text-center text-primary py-3'>
        Available appointment on 07 July 2020
      </h3>
      <div className='row py-5 mb-5 px-3'>
        {appointments.map((appointment) => (
          <div className='col-sm-6 col-md-4'>
            <div className='card p-3 text-center m-1'>
              <h5 className='text-primary'>Teeth Orthadics</h5>
              <p className='text-muted'>8:00AM-9:00PM</p>
              <small className='text-muted'>10 sits Available</small>
              <button className='btn btn-primary btn-sm py-2 m-3'
                onClick={() => {
                  setIsOpen(true)
                  setAppointment(appointment)
                }}>
                BOOK APPOINTMENT
              </button>
            </div>
          </div>

        ))}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBody appointment={appointment} onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

export default AppointmentCard;
