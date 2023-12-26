import React, { useState } from 'react';

// components
import Header from "../components/Header";
import Banner from '../components/Banner';
import MobileSearch from '../components/mobileSearch';
import Companies from "../components/Companies"
import Coursessection from "../components/Courses_section"
import Learnersreviews from "../components/Learners_reviews"
import LearnerAreViewing from "../components/Learner_are_viewing"
import TopCategories from '../components/Top_categories';
import FeaturedTopics from '../components/Featured_topics';
import UdemyBusiness from '../components/Udemy_business';
import CustomerStories from '../components/CustomerStories';
import BecomeAnInstructor from '../components/BecomeAnInstructor';
import Footer from '../components/Footer';
import MobileHeader from '../components/MobileHeader';
import ChangePageLnnguage from '../components/ChangePageLnnguage';

// hooks
import useWindowWidth from '../hooks/useWindowWidth';

export default function Index() {

    const windowWidth = useWindowWidth();


    // toggle search mobile
    const [isMobileSearchVisible, setMobileSearchVisible] = useState(true);
    const toggleMobileSearch = () => {
        setMobileSearchVisible(!isMobileSearchVisible);
    };

    const [isLanguageSelectVisible, setLanguageSelectVisible] = useState(true);
    const toggleLanguage = () => {
        setLanguageSelectVisible(!isLanguageSelectVisible);
    };

    
    const [isScaled, setIsScaled] = useState(false);

    const MobileHeaderBtnShow = () => {
        setIsScaled(true)
    };

    const MobileHeaderBtnHide = () => {
        setIsScaled(false)
    };


    return (
        <div>
            <Header toggleMobileSearch={toggleMobileSearch} MobileHeaderBtnShow={MobileHeaderBtnShow} toggleLanguage={toggleLanguage} />
            <Banner toggleMobileSearch={toggleMobileSearch} />
            {!isMobileSearchVisible ?
                <MobileSearch toggleMobileSearch={toggleMobileSearch} />
                : null}
            <Companies />
            <Coursessection />
            <Learnersreviews />
            <LearnerAreViewing />
            <TopCategories />
            <FeaturedTopics />
            <UdemyBusiness />
            <CustomerStories />
            <BecomeAnInstructor />


            {windowWidth <= 913 && (<MobileHeader toggleLanguage={toggleLanguage} MobileHeaderBtnHide={MobileHeaderBtnHide} isScaled={isScaled} isLanguageSelectVisible={isLanguageSelectVisible} />
            )}

            {!isLanguageSelectVisible ?
                (<ChangePageLnnguage toggleLanguage={toggleLanguage} />)
                : null}
            <Footer toggleLanguage={toggleLanguage}/>
        </div>
    )
}
