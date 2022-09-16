import './App.css';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home'
import Standart from './Pages/Standart-mark-up'
import ServiceFee from './Pages/Service-fee'
import FeeType from './Pages/Fee-type'
import CreateFeeType from './Pages/CreateFeeType'



function App() {
  return (
    <div> 
    <Router>
      <Navbar>
      </Navbar>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/standart' element={<Standart />} />
          <Route path='/fee-type/create-fee-type' element={<CreateFeeType/>} />
          <Route path='/service-fee' element={<ServiceFee/>} />
          <Route exact path='/fee-type' element={<FeeType/>} />
        </Routes>
    </Router>
    </div>
  )
}

export default App;
