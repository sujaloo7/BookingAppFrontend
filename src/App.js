// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Mumbai from './Hotels/Mumbai';
import Details from './pages/Details';
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
          <Route path='/signup' element={<Signup />} />
          <Route path='/mumbai' element={<Mumbai />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>

      {/* </Authcontextprovider> */}
    </>

  );
}

export default App;
