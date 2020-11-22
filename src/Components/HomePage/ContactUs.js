import React from 'react';

function ContactUs() {
  return (
    <div className='my-5 bg-dark p-5'>
      <h5 className='text-primary text-center py-4'>Contact us</h5>
      <h2 className='text-light text-center'>Always connect with us </h2>
      <div className='form-group'>
        <input type='text' className='form-control my-2' placeholder='Name' />
        <input type='text' className='form-control my-2' placeholder='Email' />
        <textarea type='text' rows='3' className='form-control py-3'>
          Your message
        </textarea>
      </div>
      <button className='btn btn-primary'>Send Message</button>
    </div>
  );
}

export default ContactUs;
