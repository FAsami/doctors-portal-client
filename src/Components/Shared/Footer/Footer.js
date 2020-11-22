import React from 'react';
import { FaFacebook, FaTwitter, FaGooglePlus } from 'react-icons/fa';
import backgroundImage from '../../../img/mask.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div
      className='mt-5 py-5'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='row py-3'>
        <div className='col-md-3'>
          <h5 className='text-primary py-3'>Oral care</h5>

          <Link to='/' className='text-muted d-inline-block  py-2'>
            Emergency Dental Care
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block  py-2'>
            Checkup
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block  py-2'>
            Treatment of personal disease
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block  py-2'>
            Tooth Extraction
          </Link>
          <br />
        </div>
        <div className='col-md-3'>
          <h5 className='text-primary py-3'>Services</h5>
          <Link to='/' className='text-muted d-inline-block py-2'>
            Emergency Dental Care
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block py-2'>
            Checkup
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block py-2'>
            Treatment of personal disease
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block py-2'>
            Tooth Extraction
          </Link>
          <br />
        </div>
        <div className='col-md-3'>
          <h5 className='text-primary py-3'>Terms</h5>
          <Link to='/' className='text-muted d-inline-block py-2'>
            Terms and condition
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block py-2'>
            Sitemap
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block py-2'>
            Privacy Policy
          </Link>
          <br />
          <Link to='/' className='text-muted d-inline-block py-2'>
            Help and more
          </Link>
          <br />
        </div>
        <div className='col-md-3'>
          <h5 className='text-primary py-3'>Our Address</h5>
          <p className='text-muted'>New York -10012, Handson Yards</p>
          <div className='text-center text-primary'>
            <span className='pl-3'>
              <FaFacebook size='30px' />
            </span>
            <span className='px-3'>
              <FaTwitter size='30px' />
            </span>
            <span>
              <FaGooglePlus size='30px' />
            </span>
          </div>
          <h6 className='text-muted pt-4'>Call Now</h6>
          <button className='btn btn-primary'>+90239728</button>
        </div>
      </div>
      <p className='text-center text-muted py-3'>
        All right reserved &copy;-2020
      </p>
    </div>
  );
}

export default Footer;
