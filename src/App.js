import Modal from 'react-modal';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './customize.scss';
import Appointments from './Pages/Appointments/Appointments';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
Modal.setAppElement('#root');
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/appointments'>
          <Appointments />
        </Route>
        <Route path='/dashboard/:component'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
