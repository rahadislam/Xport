import React from 'react';
import img1 from '../../images/project3.PNG'
import img2 from '../../images/img7.PNG'
import img3 from '../../images/img8.PNG'

const Project3 = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Organic Foods Management</h1>
            <div className='grid grid-cols-1 py-5 container mx-auto px-10 lg:grid-cols-3 lg:gap-5 lg:px-0'>
                <img src={img1} alt="" className='shadow-xl rounded-lg mb-5' />
                <img src={img2} alt="" className='shadow-xl rounded-lg mb-5' />
                <img src={img3} alt="" className='shadow-xl rounded-lg mb-5' />
            </div>
            <div className='grid grid-cols-1 py-5 container mx-auto px-10 lg:grid-cols-3 lg:gap-5 lg:px-0'>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Description</h3>
                    <p>1.If you want to career motivation then explore our course.</p>
                    <p>2. This is course to learn your self.</p>
                    <p>3.you learn job preparation then explore course</p>
                    <p>4.This website course explore then support anytime </p>
                    <p>5.If you want to Login socail media like faceboook etc </p>
                </div>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Technology Use</h3>
                    <h3 className='font-bold'>React:</h3>
                    <progress class="progress progress-accent w-56" value="60" max="100"></progress>
                    <h3 className='font-bold'>Firebase:</h3>
                    <progress class="progress progress-accent w-56" value="10" max="100"></progress>
                    <h3 className='font-bold'>Bootstrap:</h3>
                    <progress class="progress progress-accent w-56" value="30" max="100"></progress>
                    <h3 className='font-bold'>Node js:</h3>
                    <progress class="progress progress-accent w-56" value="70" max="100"></progress>
                    <h3 className='font-bold'>Mongodb:</h3>
                    <progress class="progress progress-accent w-56" value="20" max="100"></progress>
                </div>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Information</h3>
                    <div className='text-center'>
                        <a class="btn btn-link text-blue-700" href="https://github.com/rahadislam/carrer-couch" target="_blank" rel="noopener noreferrer">Github</a>
                        <a class="btn btn-link text-blue-700" href="https://cool-pavlova-52e8f0.netlify.app/" target="_blank" rel="noopener noreferrer">Livesite</a>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Project3;