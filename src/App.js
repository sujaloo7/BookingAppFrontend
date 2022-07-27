// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import { Authcontextprovider } from './context/Authcontext';


function App() {
  return (
    <>
      {/* <Authcontextprovider> */}


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />


        </Routes>
      </BrowserRouter>

      {/* </Authcontextprovider> */}
    </>

  );
}

export default App;
