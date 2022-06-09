import React from 'react';
import profile from '../../images/profile.png'

const Bannar = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} class="max-w-sm rounded-full shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Hi I Am Rahad Islam</h1>
                    <p class="py-6">I am a Junior Web developer. I prefer to work with Javascript, React, and Node. I have previously worked on PHP, data structures and algorithms, and various web development projects, but have inexperience working on customizing WordPress themes.</p>
                    <a href='https://drive.google.com/file/d/1pb_jRlZv7Zk4Kc8RBFEe77dx0cn3pyy9/view?usp=sharing' class="btn btn-primary text-white" target="_blank">View Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;