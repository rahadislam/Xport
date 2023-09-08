import React from 'react';
import profile from '../../images/profile.png'

const Bannar = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                    <img src={profile} class="h-80 w-80 mx-auto  rounded-full" />
                </div>

                <div className='w-2/3'>
                    <h1 class=" text-5xl font-bold">Hi I Am Rahad Islam</h1>
                    <p class="py-6 w-10/12 text-sm text-slate-600 text-justify ">
                        I'm a passionate web developer with a strong background in both front-end and back-end technologies. I thrive on creating user-friendly, interactive, and efficient web applications that solve real-world problems. I'm constantly exploring new technologies and staying updated with industry trends. I believe in clean code, best practices, and creating delightful user experiences. Let's connect, collaborate, and make the web a better place! Open to new opportunities and freelance projects. Feel free to reach out to discuss exciting web development opportunities, share insights, or just connect. Let's code together</p>
                    <a href='https://drive.google.com/file/d/1pb_jRlZv7Zk4Kc8RBFEe77dx0cn3pyy9/view?usp=sharing' class="btn btn-primary text-white" target="_blank">View Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;