import React from 'react';
import cavityFilling from '../../img/services/cavity-filling.png';
import fluorideTreatment from '../../img/services/flouride-treatment.png';
import teethWhitening from '../../img/services/teeth-whitening.png';

const servicesContent = [
  {
    title: 'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor',
    image: fluorideTreatment,
  },
  {
    title: 'Cavity Filling',
    description: 'Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor',
    image: cavityFilling,
  },
  {
    title: 'Teeth Whitening',
    description: 'Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor',
    image: teethWhitening,
  },
];
function Services() {
  return (
    <div className='text-center mt-5'>
      <h4 className='text-primary'>Our services</h4>
      <h1 className='text-center pb-5 py-3'>Services we provide</h1>
      <div className='row py-5'>
        {servicesContent.map((service) => (
          <div className='col-md-4' key={service.title}>
            <img src={service.image} alt={service.title} />
            <h5 className='py-3'>{service.title}</h5>
            <p className='text-muted'>
              <small className='mb-0'>{service.description}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
