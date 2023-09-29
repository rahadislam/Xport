import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/project1.PNG';
import project2 from '../../images/project2.PNG';
import project3 from '../../images/project3.PNG';
import { AiFillCheckCircle } from 'react-icons/ai';

const Project = () => {
    return (
        <div className='grid grid-cols-1 py-5 container mx-auto px-10 lg:grid-cols-3 lg:gap-2 lg:px-10'>
           
            <div class="card w-11/12 bg-base-100 shadow-xl mb-10">
                <figure><img src={project1} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="font-container text-xs lg:text-xl text-center">Computer Manufacture </h2>

                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'> You can add order & Update</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'> Contorl user & set admin Power</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'> By using this website Review & post blog!</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'>You can see active user</p>
                    </div>

                    <div class="card-actions mt-5 justify-center">
                        <Link to='/project1' class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md text-xs bg-black border-transparent text-white font-container">Details</Link>
                    </div>
                </div>
            </div>
            <div class="card w-11/12 bg-base-100 shadow-xl mb-10">
                <figure><img src={project2} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="font-container text-xl text-center ">Organic Foods</h2>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'>This  website,You can manage Product list</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'>You can Product add,remove,update</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'>User login and logout system!</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'> User can review product</p>
                    </div>
                    <div class="card-actions mt-5 justify-center">
                        <Link to='/project2' class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md text-xs bg-black border-transparent text-white font-container">Details</Link>
                    </div>
                </div>
            </div>
            <div class="card w-11/12 bg-base-100 shadow-xl mb-10">
                <figure><img src={project3} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="font-container text-xl text-center ">Career Coach</h2>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'>User apoinmment system implement </p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'>authorized user system implement</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'> Blog post and review system</p>
                    </div>
                    <div className='flex items-center gap-2'>
                    <AiFillCheckCircle className='text-green-400'></AiFillCheckCircle> 
                    <p className='font-medium text-xs lg:text-sm'> Cheak out system </p>
                    </div>
                    <div class="card-actions mt-5 justify-center">
                        <Link to='/project3' class="btn btn-xs sm:btn-sm md:btn-md lg:btn-md text-xs bg-black border-transparent text-white font-container">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;