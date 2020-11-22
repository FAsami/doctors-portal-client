import React from 'react'
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { BsFileEarmarkText } from 'react-icons/bs';
import { BiCog, BiExit } from 'react-icons/bi';
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai';
import './sidebar.scss'
function Sidebar() {
    const linkClass = 'text-light d-inline-block  py-2 link';
    return (
        <>
            <div className='d-block d-md-none bg-primary w-100 p-3'>
                <h5 className='text-light font-weight-bold text-center py-3'>Doctor's Portal</h5>
                <div className='row'>
                    <div className='col'>
                        <Link to='/' className={linkClass}><BsBoxArrowInLeft />Go back to home</Link><br />
                        <Link to='/dashboard/overview' className={linkClass}><MdDashboard /> Dashboard</Link><br />
                        <Link to='/dashboard/patients' className={linkClass}><FaUsers /> Patients</Link><br />
                        <Link to='/' className={linkClass}><BiExit /> Logout</Link>
                    </div>
                    <div className='col'>
                        <Link to='/dashboard/appointments' className={linkClass}><AiOutlineCalendar /> Appointments</Link><br />
                        <Link to='/dashboard/prescriptions' className={linkClass}><BsFileEarmarkText /> Prescription</Link><br />
                        <Link to='/settings' className={linkClass}><BiCog /> Settings</Link><br />
                    </div>
                </div>
            </div>
            <div className='d-none d-md-block col-3 bg-primary' style={{ height: '100vh' }}>
                <div className='pt-5'>
                    <Link to='/' className={linkClass}><BsBoxArrowInLeft /> Go back to home</Link>
                    <Link to='/dashboard/overview' className={linkClass}><MdDashboard /> Dashboard</Link><br />
                    <Link to='/dashboard/patients' className={linkClass}><FaUsers /> Patients</Link><br />
                    <Link to='/dashboard/appointments' className={linkClass}><AiOutlineCalendar /> Appointments</Link><br />
                    <Link to='/dashboard/prescriptions' className={linkClass}><BsFileEarmarkText /> Prescription</Link><br />
                    <Link to='/settings' className={linkClass}><BiCog /> Settings</Link><br />
                    <Link to='/' className={linkClass}><BiExit /> Logout</Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
