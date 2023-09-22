import React from 'react';
import ContuctUs from '../ContuctUs';
import About from './About';
import Bannar from './Bannar';
import Footer from './Footer';
import Project from './Project';
import './Barlow.css'


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <h1 className='text-3xl  text-center py-5 font-container'>My Project</h1>
            <Project></Project>
            <div className='about_bg'>
            <h1 className='text-3xl text-white  text-center pt-10 font-container'>Contact Me</h1>
            <ContuctUs></ContuctUs>
            </div>
           <div>
          
           <About></About>
           </div>
           
            <Footer></Footer>
        </div>
    );
};

export default Home;