import React from 'react'

function PrescriptionTable() {
    return (
        <div className='bg-white mx-2'>
            <table className='table table-borderless'>
                <thead>
                    <tr className='text-center'>
                        <th>Sr.No</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Prescription</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr>
                        <td>1</td>
                        <td className='px-2'>2020-03-02</td>
                        <td className='px-2'>Kloim Uddin</td>
                        <td className='px-2'>+987439874</td>
                        <td className='px-2'><button className="btn btn-sm btn-primary">view</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PrescriptionTable
