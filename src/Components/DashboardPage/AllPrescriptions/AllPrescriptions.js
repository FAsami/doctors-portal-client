import React from 'react'
import PrescriptionTable from './PrescriptionsTable'


function AllPrescriptions() {
    return (
        <div className='bg-light'>
            <h5 className='py-3 pl-5'>AllPrescriptions</h5>
            <div className="bg-white  p-2">
                <div className='d-flex'>
                    <h6 className="text-primary">All Prescriptions</h6>
                    <div className='ml-auto'>
                        <select name="week">
                            <option value="Week1">Week1</option>
                            <option value="Week2">Week2</option>
                            <option value="Week3">Week3</option>
                        </select>
                    </div>
                </div>
            </div>
            <PrescriptionTable />
        </div>
    )
}

export default AllPrescriptions
