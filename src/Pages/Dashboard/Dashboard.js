import React from 'react';
import { useParams } from 'react-router-dom';
import AllPatients from '../../Components/DashboardPage/AllPatients/AllPatients';
import AllPrescriptions from '../../Components/DashboardPage/AllPrescriptions/AllPrescriptions';
import Appointments from '../../Components/DashboardPage/Appointments/Appointments';
import Overview from '../../Components/DashboardPage/Overview/Overview';
import Sidebar from '../../Components/DashboardPage/Sidebar/Sidebar';

function Dashboard() {
  const { component } = useParams();
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <div className="col-md-9 bg-light">
          {component === 'overview' && <Overview />}
          {component === 'prescriptions' && <AllPrescriptions />}
          {component === 'appointments' && <Appointments />}
          {component === 'patients' && <AllPatients />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
