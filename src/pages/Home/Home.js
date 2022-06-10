import React from 'react';
import ContuctUs from '../ContuctUs';
import About from './About';
import Bannar from './Bannar';
import Footer from './Footer';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <h1 className='text-3xl font-bold text-center py-5'>My project</h1>
            <Project></Project>
            <h1 className='text-3xl font-bold text-center py-5'>Contuct Me</h1>
            <ContuctUs></ContuctUs>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;