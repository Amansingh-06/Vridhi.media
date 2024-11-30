import React from 'react';
import Header from '../Component/Header/Header';
import Hero from '../Component/Hero/Hero';
import About from '../Component/About/About';
import Services from '../Component/Service/Services';
import Calender from '../Component/calender/Calender';

// import Footer from '../Component/Footer/Footer';


const Home = () => {
    return (
        <>
            <Header />
        
            <Hero />
            <About />
            <Services />
            <Calender/>
            {/* <Footer/> */}
           
        </>
    );
};

export default Home;
