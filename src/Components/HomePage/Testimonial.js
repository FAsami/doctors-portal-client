import React from 'react';
import quotation from '../../img/quotation.png';
import person1 from '../../img/person1.png';
import person2 from '../../img/person2.png';
import person3 from '../../img/person3.png';

const patientCard = [
  {
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harusapiente voluptatibus exercitationem beatae alias minus officiacumque libero inventore quam.',
    name: 'Winson Hurry',
    image: person1,
    location: 'California',
  },
  {
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harusapiente voluptatibus exercitationem beatae alias minus officiacumque libero inventore quam.',
    name: 'Sami Humana',
    image: person2,
    location: 'New York',
  },
  {
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harusapiente voluptatibus exercitationem beatae alias minus officiacumque libero inventore quam.',
    name: 'Mnuhd Humana',
    image: person3,
    location: 'Uganda',
  },
];

function Testimonial() {
  return (
    <>
      <div className='row'>
        <div className='col-md-8'>
          <h6 className='text-primary'>Testimonial</h6>
          <h1>
            What our patient's <br />
            says
          </h1>
        </div>
        <div className='col-md-4 d-none d-md-block'>
          <img
            className='img-fluid'
            src={quotation}
            alt='Quotation'
            style={{ height: '200px' }}
          />
        </div>
      </div>
      <div className='row px-2'>
        {patientCard.map((patient) => (
          <div className='col-md-4' key={patient.name}>
            <div className='card p-3 mt-3'>
              <p className='py-3 text-muted'>{patient.description}</p>
              <div className='d-flex align-items-center p-3'>
                <div>
                  <img src={patient.image} alt='Doctor' />
                </div>
                <div className='ml-auto'>
                  <h6 className='text-primary'>{patient.name}</h6>
                  <p>{patient.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonial;
