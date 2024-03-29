
import './App.css';

import React, { useState } from 'react';

import { HashRouter, Route, Routes, useLocation  } from 'react-router-dom'
import MobileSearch from './components/mobileSearch';
import Header from "./components/Header";
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';
import ChangePageLnnguage from './components/ChangePageLnnguage';

// hooks
import useWindowWidth from './hooks/useWindowWidth.js';

import Index from './pages/Index.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import Courses from './pages/Courses.js'
import SelectedCoursePage from './pages/SelectedCoursePage.js';

function App() {

  const windowWidth = useWindowWidth();

  // toggle search mobile
  const [isMobileSearchVisible, setMobileSearchVisible] = useState(true);
  const toggleMobileSearch = () => {
    setMobileSearchVisible(!isMobileSearchVisible);
    console.log('test')
  };


  const [isLanguageSelectVisible, setLanguageSelectVisible] = useState(true);
  const toggleLanguage = () => {
    setLanguageSelectVisible(!isLanguageSelectVisible);
  };


  const [isScaled, setIsScaled] = useState(false);

  const MobileHeaderBtnShow = () => {
    setIsScaled(true);
  };

  const MobileHeaderBtnHide = () => {
    setIsScaled(false);    

    document.body.style.overflow = 'scroll !important';

  };

  

  return (
    <>
      <div className="alert alert-warning alert-dismissible fadex show text-center text-white" style={{ backgroundColor: '#5624d0' }} role="alert">
        <strong>Skill up at scale| Learn why Udemy is trusted by 14.4K+ businesses around the world</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <HashRouter>
        {!isMobileSearchVisible ?
          <MobileSearch toggleMobileSearch={toggleMobileSearch} />
          : null}
        <Header  toggleMobileSearch={toggleMobileSearch} MobileHeaderBtnShow={MobileHeaderBtnShow} toggleLanguage={toggleLanguage}/>
        <MobileHeader toggleLanguage={toggleLanguage} MobileHeaderBtnHide={MobileHeaderBtnHide} isScaled={isScaled} isLanguageSelectVisible={isLanguageSelectVisible} />
       

        <Routes>
          <Route  path='/' element={<Index toggleMobileSearch={toggleMobileSearch}/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/course_name' element={<SelectedCoursePage />} />
        </Routes>



        {!isLanguageSelectVisible ?
          (<ChangePageLnnguage toggleLanguage={toggleLanguage} />)
          : null}

        <Footer toggleLanguage={toggleLanguage} />

      </HashRouter>


    </>
  );
}

export default App;
