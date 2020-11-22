import React from 'react'
import PatientsTable from './PatientsTable'


function AllPatients() {
    return (
        <div className='bg-light'>
            <h5 className='py-3'>AllPatients</h5>
            <div className="bg-white p-2">
                <div className='d-flex'>
                    <h6 className="text-primary">All Patients</h6>
                    <div className='ml-auto'>
                        <select name="week">
                            <option value="Week1">Week1</option>
                            <option value="Week2">Week2</option>
                            <option value="Week3">Week3</option>
                        </select>
                    </div>
                </div>
            </div>
            <PatientsTable />
        </div>
    )
}

export default AllPatients
