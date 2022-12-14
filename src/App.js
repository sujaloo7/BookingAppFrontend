// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Properties from './components/Properties';

// import { Authcontextprovider } from './context/Authcontext';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {/* <Authcontextprovider> */}
      {loading ? (
        <Loader />
      ) : (

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/properties' element={<Properties/>}/>




          </Routes>
        </BrowserRouter>
      )}
      {/* </Authcontextprovider> */}
    </>

  );
}

export default App;
