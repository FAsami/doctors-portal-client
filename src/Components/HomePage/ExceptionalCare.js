import React from 'react';
import image from '../../img/exceptional.png';
function ExceptionalCare() {
  return (
    <div className='row'>
      <div className='col-md-5'>
        <img src={image} className='image-fluid w-100' alt='Care' />
      </div>
      <div className='col-md-7 py-3'>
        <h1>Exceptions dental care on our terms</h1>
        <p className='text-muted py-5' style={{ lineHeight: '30px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio
          fuga et ut, perspiciatis eveniet blanditiis sunt ratione vitae sequi
          provident perferendis non tenetur dicta impedit voluptas qui veniam
          voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Facere maxime accusantium eum non, assumenda consequatur ex obcaecati
          sit commodi blanditiis.
        </p>
        <button className='btn-primary btn'>Learn more</button>
      </div>
    </div>
  );
}

export default ExceptionalCare;
