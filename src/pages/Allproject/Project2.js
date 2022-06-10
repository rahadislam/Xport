import React from 'react';
import img1 from '../../images/img6.PNG'
import img2 from '../../images/img4.PNG'
import img3 from '../../images/img5.PNG'

const Project2 = () => {
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
                    <p>1.If user not login then dont see any add user,dashbord and more route.</p>
                    <p>2.User can buy product and payment</p>
                    <p>3.If you login ,then manage product quantity and add product update and delete.</p>
                    <p>4.user can minimum quantity set and maxmimum quantity set. </p>
                    <p>5.user see user product and delete add product . </p>
                    
                </div>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Technology Use</h3>
                    <h3 className='font-bold'>React:</h3>
                    <progress class="progress progress-accent w-56" value="60" max="100"></progress>
                    <h3 className='font-bold'>Firebase:</h3>
                    <progress class="progress progress-accent w-56" value="30" max="100"></progress>
                    <h3 className='font-bold'>React Hooks from:</h3>
                    <progress class="progress progress-accent w-56" value="10" max="100"></progress>
                    <h3 className='font-bold'>Tailwind:</h3>
                    <progress class="progress progress-accent w-56" value="40" max="100"></progress>
                    <h3 className='font-bold'>Node js:</h3>
                    <progress class="progress progress-accent w-56" value="70" max="100"></progress>
                    <h3 className='font-bold'>Mongodb:</h3>
                    <progress class="progress progress-accent w-56" value="20" max="100"></progress>
                    <h3 className='font-bold'>Express js:</h3>
                    <progress class="progress progress-accent w-56" value="20" max="100"></progress>
                </div>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Information</h3>
                    <div className='text-center'>
                        <a class="btn btn-link text-blue-700" href="https://github.com/rahadislam/Organic-foods-management" target="_blank" rel="noopener noreferrer">Github</a>
                        <a class="btn btn-link text-blue-700" href="https://github.com/rahadislam/organic-food-server" target="_blank" rel="noopener noreferrer">Server</a>
                        <a class="btn btn-link text-blue-700" href="https://silly-clafoutis-5544f5.netlify.app/" target="_blank" rel="noopener noreferrer">Livesite</a>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Project2;