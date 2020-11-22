import React from 'react'
import Calender from "react-calendar"
import { FcNext, FcPrevious } from 'react-icons/fc';
import { AiFillCaretDown } from "react-icons/ai"

function Appointments() {
    return (
        <div>
            <h5 className='py-3'>Appointments</h5>
            <div className="row">
                <div className="col-md-6">
                    <Calender
                        className='border-0 calender'
                        nextLabel={<FcNext />}
                        prevLabel={<FcPrevious />}
                        next2Label={null}
                        prev2Label={null}
                    />
                </div>
                <div className="col-md-6">
                    <table>
                        <thead>
                            <tr>
                                <th className='text-secondary'>Name</th>
                                <th className='text-secondary'>Schedule</th>
                                <th className='text-secondary'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Karim Ahammed</td>
                                <td className='px-3'>7:00 AM</td>
                                <td><button className="btn btn-sm btn-primary">Not Visited <AiFillCaretDown /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Appointments 
