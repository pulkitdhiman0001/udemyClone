import React, { useState } from 'react';

// components

import Banner from '../components/Banner';

import Companies from "../components/Companies"
import Coursessection from "../components/Courses_section"
import Learnersreviews from "../components/Learners_reviews"
import LearnerAreViewing from "../components/Learner_are_viewing"
import TopCategories from '../components/Top_categories';
import FeaturedTopics from '../components/Featured_topics';
import UdemyBusiness from '../components/Udemy_business';
import CustomerStories from '../components/CustomerStories';
import BecomeAnInstructor from '../components/BecomeAnInstructor';

export default function Index({toggleMobileSearch}) {

    return (
        <div>
            <Banner toggleMobileSearch={toggleMobileSearch} />
            <Companies />
            <Coursessection />
            <Learnersreviews />
            <LearnerAreViewing />
            <TopCategories />
            <FeaturedTopics />
            <UdemyBusiness />
            <CustomerStories />
            <BecomeAnInstructor />
        </div>
    )
}
