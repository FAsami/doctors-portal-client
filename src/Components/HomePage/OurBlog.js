import React from 'react';
import quotation from '../../img/quotation.png';
import { BsArrowRight } from 'react-icons/bs';
import person1 from '../../img/person1.png';
import person2 from '../../img/person2.png';

const blogCards = [
  {
    image: person1,
    name: 'Dr Crowdy',
    date: 'Aug 20,2020',
    title: '2 times of brush in a day can keep you healthy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,maiores odio pariatur voluptatem impedit corrupti?',
  },
  {
    image: person2,
    name: 'BM Marutha',
    date: 'Aug 12,2020',
    title: 'The tooth cancer is taking a challenge',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,maiores odio pariatur voluptatem impedit corrupti?',
  },
];

function OurBlog() {
  return (
    <div className='py-5 mt-4'>
      <h6 className='text-primary text-center py-5'> OUR BLOG</h6>
      <h3 className='text-center pb-5'>Form Our Blog News</h3>
      <div className='row'>
        <div className='col-md-4 mt-3'>
          <div className='position-relative'>
            <img
              src={quotation}
              className='position-absolute image-fluid w-75'
              alt='Quotation'
              style={{ opacity: '0.3', left: 0, top: 0 }}
            />
            <div className='bg-primary text-light p-3'>
              <p>
                Rashed Khabir <br />
                22 Aug 2018
              </p>
              <h5 className='py-5'>
                Cheack al least a doctor in year for your teeth.
              </h5>
              <BsArrowRight size='50px' />
            </div>
          </div>
        </div>
        {blogCards.map((card) => (
          <div className='col-md-4 mt-3'>
            <div className='card py-4 px-3'>
              <div className='d-flex'>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ height: '50px', width: '50px' }}
                />
                <div className='px-4'>
                  <h6>{card.name}</h6>
                  <p className='text-muted'>{card.date}</p>
                </div>
              </div>
              <h5 className='py-4'>{card.title}</h5>
              <p className='text-muted'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurBlog;
