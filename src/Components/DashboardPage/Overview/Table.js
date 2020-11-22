import React from 'react'
import { FaEdit } from "react-icons/fa"

function Table() {
    return (
        <div className='bg-white mx-2'>
            <table className='table table-borderless'>
                <thead>
                    <tr className='text-center'>
                        <th>Sr.No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Prescription</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className='px-2'>2020-02-03</td>
                        <td className='px-2'>3:00 PM</td>
                        <td className='px-2'>Karim Ahammed</td>
                        <td className='px-2'>+029387273</td>
                        <td className='mx-2'>Not Added</td>
                        <td>
                            <button className="btn-sm btn-primary btn">Pending</button>
                            <button className="btn-warning btn btn-sm"><FaEdit /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
