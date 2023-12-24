
import './App.css';
import React, { useState} from 'react';

// components
import Header from "./components/Header";
import Banner from './components/Banner';
import MobileSearch from './components/mobileSearch';
import Companies from "./components/Companies"
import Coursessection from "./components/Courses_section"
import Learnersreviews from "./components/Learners_reviews"
import LearnerAreViewing from "./components/Learner_are_viewing"
import TopCategories from './components/Top_categories';
import FeaturedTopics from './components/Featured_topics';
import UdemyBusiness from './components/Udemy_business';
import CustomerStories from './components/CustomerStories';
import BecomeAnInstructor from './components/BecomeAnInstructor';
import Footer from './components/Footer';
import MobileHeader from './components/MobileHeader';
import ChangePageLnnguage from './components/ChangePageLnnguage';

// hooks
import useWindowWidth from './hooks/useWindowWidth';

function App() {


  const windowWidth = useWindowWidth();


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
      <ChangePageLnnguage isLanguageSelectVisible={isLanguageSelectVisible} />
      <Footer />
    </>
  );
}

export default App;
