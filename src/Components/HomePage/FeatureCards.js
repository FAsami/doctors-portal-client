import React from 'react';
import { MdAlarm, MdLocationOn } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
const cardContent = [
  {
    title: 'Our Opening hours',
    description: '9:00AM-09:00PM',
    icon: <MdAlarm size='50px' />,
    color: 'primary',
  },
  {
    title: 'Visit Our Location',
    description: 'United State',
    icon: <MdLocationOn size='50px' />,
    color: 'dark',
  },
  {
    title: 'Contact us now',
    description: '+880088329323',
    icon: <FiPhoneCall size='50px' />,
    color: 'primary',
  },
];
function FeatureCards() {
  return (
    <div className='row my-3'>
      {cardContent.map((card, index) => (
        <div className='col-md-4 text-white text-center' key={index}>
          <div className={`card bg-${card.color} p-4`}>
            <div className='d-flex'>
              <div>{card.icon}</div>
              <div>
                <h6>{card.title}</h6>
                <small>{card.description}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
