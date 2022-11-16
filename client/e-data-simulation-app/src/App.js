// import logo from './logo.svg';
import React, { useEffect } from 'react'
import './App.css'

import { getServices } from './actions/services' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import ContactusPage from './pages/contactus'
import ServicesInfo from './components/ServiceInfo'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/contactus' element={<ContactusPage />} exact />
        <Route path='/service-info' element={<ServicesInfo />} exact />
      </Routes>
    </Router>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;