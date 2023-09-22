import React from 'react';
import profile from '../../images/profile.png';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Bannar = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                    <img src={profile} class="h-60 w-60 lg:h-80 lg:w-80 mx-auto  rounded-full" />
                </div>

                <div className='lg:w-2/3'>
                    <h1 class="text-2xl lg:text-5xl font-container">Hello there! I'm Rahad,</h1>
                    <p class="py-6 lg:w-10/12 text-sm text-slate-600 font-medium text-justify ">
                     Your dedicated web developer on a mission to turn your digital dreams into reality. With a passion for coding and a knack for creativity, I'm here to build not just websites but experiences.Take a look at some of my recent projects to see my work in action. From crafting visually stunning landing pages to developing complex web applications, each project showcases my dedication to delivering excellence.</p>
                    <div className='pb-5 flex items-center gap-x-5'>
                    <a href='https://www.facebook.com/rahadislamxx' target="_blank">
                    <BsFacebook className='text-4xl text-sky-700 animate-bounce'></BsFacebook>
                    </a>
                    <a href='https://twitter.com/rahadislam996' target="_blank">
                    <AiFillTwitterCircle className='text-4xl animate-bounce text-sky-500'></AiFillTwitterCircle>
                    </a>
                    <a href='https://github.com/rahadislam' target="_blank">
                    <AiFillGithub className='text-4xl animate-bounce'></AiFillGithub>
                    </a>
                    <a href='https://www.linkedin.com/in/rahad-islam/' target="_blank">
                    <AiFillLinkedin className='text-4xl animate-bounce text-sky-600'></AiFillLinkedin>
                    </a>
                        
                        
                       
                       
                    </div>
                    <a href='https://drive.google.com/file/d/1pb_jRlZv7Zk4Kc8RBFEe77dx0cn3pyy9/view?usp=sharing' class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md text-xs bg-black border-transparent text-white font-container" target="_blank">View Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;