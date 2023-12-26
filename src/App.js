
import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Index from './pages/Index.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'

function App() {

  return (
    <>
      <div className="alert alert-warning alert-dismissible fadex show text-center text-white" style={{ backgroundColor: '#5624d0' }} role="alert">
        <strong>Skill up at scale| Learn why Udemy is trusted by 14.4K+ businesses around the world</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <Router baseline={'https://udemy-clone-fsiq.onrender.com//'}>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='login' element={<Login />} />
          <Route exact path='signup' element={<Signup />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
