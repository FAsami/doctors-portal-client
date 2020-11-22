import React from 'react'
import Table from './Table'

const dashboardData = [
    { subject: `Pending Appointments`, count: 17, background: 'danger' },
    { subject: 'Todays  appointment', count: 45, background: 'primary' },
    { subject: 'Total  Appointments', count: 77, background: 'success' },
    { subject: `Total Patients`, count: 47, background: 'warning' },
]
function Overview() {
    return (
        <div className='bg-light'>
            <h5 className='py-3'>Dashboard</h5>
            <div className="row text-white my-5">
                {dashboardData.map(({ count, subject, background }) =>
                    <div className="col-md-3">
                        <div className={`card rounded  bg-${background}`}>
                            <div className="d-flex p-2 align-items-center justify-content-center">
                                <h2 className='pr-2'>{count}</h2>
                                <p style={{ lineHeight: "16px" }}><small>{subject}</small></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="bg-white m-2 p-2">
                <div className='d-flex'>
                    <h6 className="text-primary">Recent Appointments</h6>
                    <div className='ml-auto'>
                        <select name="week">
                            <option value="Week1">Week1</option>
                            <option value="Week2">Week2</option>
                            <option value="Week3">Week3</option>
                        </select>
                    </div>
                </div>
            </div>
            <Table />
        </div>
    )
}

export default Overview;
