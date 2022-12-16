import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './ignore/App.css';
import { getAllService } from './actions/services'; 
// import OurServices from './components/OurServices';
// import Form from './components/Form';
import Home from './pages';
import ContactUsPage from './pages/contactus';
// import ServiceInfo from './components/ServiceInfo';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllService());
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/contactus' element={<ContactUsPage />} exact/>
        {/* <Route path='/service-info' element={<ServiceInfo />} /> */}
      </Routes>
    </Router>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
