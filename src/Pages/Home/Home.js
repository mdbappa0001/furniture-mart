import React from 'react';
import Furnitures from '../Furniture/Furnitures';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Furnitures></Furnitures>
            <About></About>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;