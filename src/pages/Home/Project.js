import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/project1.PNG';
import project2 from '../../images/project2.PNG';
import project3 from '../../images/project3.PNG';

const Project = () => {
    return (
        <div className='grid grid-cols-1 py-5 container mx-auto px-10 lg:grid-cols-3 lg:gap-2 lg:px-0'>
            <div class="card w-90 bg-base-100 shadow-xl mb-10">
                <figure><img src={project1} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Computer Manufacture</h2>
                    <p className='font-bold'>Description:</p>
                    <p>* By using this website you can buy the product of your choice and at the same time you can buy many products.</p>
                    <p>* Admin Make will allow other admins and admins to delete users if they wish.</p>
                    <div class="card-actions justify-end">
                        <Link to='/project1' class="btn btn-primary text-white">Details</Link>
                    </div>
                </div>
            </div>
            <div class="card w-90 bg-base-100 shadow-xl mb-10">
                <figure><img src={project2} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Organic Foods</h2>
                    <p className='font-bold'>Description:</p>
                    <p>* You need to be login in to be able to give reviews if you want.</p>
                    <p>*Admin system has been built on this website.Admin can add, delete, insert, update product if he wants.</p>
                    <div class="card-actions justify-end">
                    <Link to='/project2' class="btn btn-primary text-white">Details</Link>
                    </div>
                </div>
            </div>
            <div class="card w-90 bg-base-100 shadow-xl mb-10">
                <figure><img src={project3} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Career Coach</h2>
                    <p className='font-bold'>Description:</p>
                    <p>* If you want to career motivation then explore our cours.</p>
                    <p> * This is course to learn your self.</p>
                    <p>* you learn job preparation then explore course.</p>
                    <div class="card-actions justify-end">
                    <Link to='/project3' class="btn btn-primary text-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;