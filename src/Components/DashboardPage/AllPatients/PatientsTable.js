import React from 'react'

function PatientsTable() {
    return (
        <div className='bg-white mx-2'>
            <table className='table table-borderless'>
                <thead>
                    <tr className='text-center'>
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th className='px-2'>Gender</th>
                        <th>Weight</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className='px-2'>Karim Hossain</td>
                        <td className='px-2'>25</td>
                        <td className='px-2'>Male</td>
                        <td className='px-2'>56 KG</td>
                        <td className='px-2'>+029387273</td>
                        <td className='mx-2'>Kalampur,Kaliakoir,Gazipur, Dhaka</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PatientsTable
