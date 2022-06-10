import React from 'react';
import img1 from '../../images/project1.PNG'
import img2 from '../../images/img2.PNG'
import img3 from '../../images/img3.PNG'

const Project1 = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Computer Manufacture</h1>
            <div className='grid grid-cols-1 py-5 container mx-auto px-10 lg:grid-cols-3 lg:gap-5 lg:px-0'>
                <img src={img1} alt="" className='shadow-xl rounded-lg mb-5' />
                <img src={img2} alt="" className='shadow-xl rounded-lg mb-5' />
                <img src={img3} alt="" className='shadow-xl rounded-lg mb-5' />
            </div>
            <div className='grid grid-cols-1 py-5 container mx-auto px-10 lg:grid-cols-3 lg:gap-5 lg:px-0'>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Description</h3>
                    <p>1. By using this website you can buy the product of your choice and at the same time you can buy many products.</p>
                    <p>2. Admin Make will allow other admins and admins to delete users if they wish.</p>
                    <p>3.Admin user can make admin and delete user</p>
                    <p>4.Admin make Admin and if you admin then show Add items,manage user,total order </p>
                </div>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Technology Use</h3>
                    <h3 className='font-bold'>React:</h3>
                    <progress class="progress progress-accent w-56" value="60" max="100"></progress>
                    <h3 className='font-bold'>Firebase:</h3>
                    <progress class="progress progress-accent w-56" value="10" max="100"></progress>
                    <h3 className='font-bold'>DasyUI:</h3>
                    <progress class="progress progress-accent w-56" value="40" max="100"></progress>
                    <h3 className='font-bold'>Node js:</h3>
                    <progress class="progress progress-accent w-56" value="70" max="100"></progress>
                    <h3 className='font-bold'>Mongodb:</h3>
                    <progress class="progress progress-accent w-56" value="20" max="100"></progress>
                </div>
                <div>
                    <h3 className='text-center font-bold text-xl mb-5'>Information</h3>
                    <div className='text-center'>
                        <a class="btn btn-link text-blue-700" href="https://github.com/rahadislam/computer_Gagests_management" target="_blank" rel="noopener noreferrer">Github</a>
                        <a class="btn btn-link text-blue-700" href="https://github.com/rahadislam/computer-management-server" target="_blank" rel="noopener noreferrer">Server</a>
                        <a class="btn btn-link text-blue-700" href="https://computer-manufacturers.web.app/" target="_blank" rel="noopener noreferrer">Livesite</a>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Project1;