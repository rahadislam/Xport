import React from 'react';
import about from '../../images/Podcast.png';

const About = () => {
    return (
        <div class="hero min-h-screen" >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={about} class="w-3/4 lg:max-w-sm " />
                <div>
                <h1 className='text-3xl  text-center  font-container lg:w-2/3'>About Me</h1>
                    <p class="py-6 lg:w-9/12 text-sm text-slate-600 font-medium text-justify "> I'm a passionate web developer with a strong background in both front-end and back-end technologies. I thrive on creating user-friendly, interactive, and efficient web applications that solve real-world problems. I'm constantly exploring new technologies and staying updated with industry trends. I believe in clean code, best practices, and creating delightful user experiences. My work is guided by a commitment to accessibility, inclusivity, and a sustainable web. I believe in creating digital spaces that everyone can access and enjoy, and I strive to minimize our ecological footprint in the digital realm.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default About;