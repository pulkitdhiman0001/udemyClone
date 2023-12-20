
import './App.css';
import React, { useState, useEffect } from 'react';

import Header from "./MyComponents/Header";

import Banner from './MyComponents/Banner';
import MobileSearch from './MyComponents/mobileSearch';

import Companies from "./MyComponents/Companies"

import Coursessection from "./MyComponents/Courses_section"

import Learnersreviews from "./MyComponents/Learners_reviews"

import LearnerAreViewing from "./MyComponents/Learner_are_viewing"

import TopCategories from './MyComponents/Top_categories';
import FeaturedTopics from './MyComponents/Featured_topics';
import UdemyBusiness from './MyComponents/Udemy_business';
import CustomerStories from './MyComponents/CustomerStories';
import BecomeAnInstructor from './MyComponents/BecomeAnInstructor';
import Footer from './MyComponents/Footer';
import MobileHeader from './MyComponents/MobileHeader';
import LanguageSelect from './MyComponents/languageSelect';

function App() {

  // toggle search mobile
  const [isMobileSearchVisible, setMobileSearchVisible] = useState({
    display: 'none'
  });

  const [isLanguageSelectVisible, setLanguageSelectVisible] = useState({
    display: 'none'
  });


  const showMobileSearchOnClick = () => {
    setMobileSearchVisible({
      display: 'block'
    });
    document.body.style.overflowY = 'hidden';
  }

  const hideMobileSearchOnClick = () => {
    setMobileSearchVisible({
      display: 'none'
    });
    document.body.style.overflowY = 'scroll';
  }

  const showMobileLanguageSelectOnClick = () => {
    setLanguageSelectVisible({
      display: 'flex',

    });

    document.body.style.overflowY = 'hidden';
  }




  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the windowWidth state whenever the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isScaled, setIsScaled] = useState(false);

  const MobileHeaderBtnShow = () => {
    setIsScaled(true)
  };

  const MobileHeaderBtnHide = () => {
    setIsScaled(false)
  };


  return (
    <>
      <div class="alert alert-warning alert-dismissible fade show text-center text-white" style={{ backgroundColor: '#5624d0' }} role="alert">
        <strong>Skill up at scale| Learn why Udemy is trusted by 14.4K+ businesses around the world</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <Header MobileHeaderBtnShow={MobileHeaderBtnShow} showMobileSearchOnClick={showMobileSearchOnClick} showMobileLanguageSelectOnClick={showMobileLanguageSelectOnClick} />
      <Banner showMobileSearchOnClick={showMobileSearchOnClick} />
      <MobileSearch isMobileSearchVisible={isMobileSearchVisible} hideMobileSearchOnClick={hideMobileSearchOnClick} />
      <Companies />
      <Coursessection />
      <Learnersreviews />
      <LearnerAreViewing />
      <TopCategories />
      <FeaturedTopics />
      <UdemyBusiness />
      <CustomerStories />
      <BecomeAnInstructor />


      {windowWidth <= 913 && (<MobileHeader MobileHeaderBtnHide={MobileHeaderBtnHide} isScaled={isScaled} isLanguageSelectVisible={isLanguageSelectVisible} showMobileLanguageSelectOnClick={showMobileLanguageSelectOnClick} />
      )}
      <LanguageSelect isLanguageSelectVisible={isLanguageSelectVisible} />
      <Footer />
    </>
  );
}

export default App;
