import React from 'react';
import about from '../../images/informative.png';


const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={about} class="w-3/4 lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">About Me</h1>
                    <p class="py-6">I am a Junior Web developer. I prefer to work with Javascript, React, and Node. I have previously worked on PHP, data structures and algorithms, and various web development projects, but have inexperience working on customizing WordPress themes. I work on web development, the purpose of working on web development is to create new websites and make people's daily lives easier It can be used to develop various e-commerce sites and training center sites, etc..</p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;