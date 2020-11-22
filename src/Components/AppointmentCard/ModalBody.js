import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function ModalBody({ appointment, onClose }) {
    return (
        <div className='p-3'>
            <div className='d-flex py-3'>
                <div><h5 className='text-primary'>{appointment.title}</h5></div>
                <div className='ml-auto btn btn-danger' onClick={onClose}><AiOutlineClose size='18px' /></div>
            </div>
            <form>
                <input type='date' className='form-control my-2' />
                <input type='time' className='form-control my-2' />
                <input type='text' className='form-control my-2' placeholder='Your   Name' />
                <input type='text' className='form-control my-2' placeholder='Email' />
                <input type='text' className='form-control my-2' placeholder='Phone' />
                <div className='row'>
                    <div className='col-6'>
                        <select className='form-control my-2'>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <input type='number' className='form-control my-2' placeholder='Weight' />
                    </div>
                </div>
                <input type='submit' className='btn btn-primary' value='Submit' />
            </form>
        </div>
    )
}

export default ModalBody;
