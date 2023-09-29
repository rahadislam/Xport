import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import footerimg from '../../images/LLC.gif'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class=" bg-black pt-10">
          <div className='grid grid-cols-4 '>
            <div className='parallelogram flex items-center justify-center h-32 border-r-4 border-gray-500 hover:border-yellow-500'>
            <BsFacebook className='text-6xl text-gray-500 pro rounded-full'></BsFacebook>
            </div>
            <div className='parallelogram flex items-center justify-center h-32 border-r-4 border-gray-500 hover:border-yellow-500'>
            <AiFillGithub className='text-6xl text-gray-500 pro rounded-full'></AiFillGithub>
            </div>
            <div className='parallelogram flex items-center justify-center h-32 border-r-4 border-gray-500 hover:border-yellow-500'>
            <AiFillLinkedin className='text-6xl text-gray-500 pro rounded-full'></AiFillLinkedin>
            </div>
            <div className=' flex items-center justify-center h-32'>
            <AiFillTwitterCircle className='text-6xl text-gray-500 pro rounded-full'></AiFillTwitterCircle>
            </div>
            
           
          </div>
          
            <div className='grid grid-cols-3 text-gray-500'>

            <div className='flex items-center justify-center'>
            <Link to="/home" className='mr-5'>WORK</Link>
            <Link to="/home">SERVICE</Link>
            </div>

            <div className=''>
              <img src={footerimg} className='w-32 h-32 mx-auto' />
            </div>

            <div className='flex items-center justify-center'>

            <Link to="/home" className='mr-5'>CONTACT US</Link>
            <Link to="/home" className='mr-5'>BLOG</Link>
            <Link to="/home">HOME</Link>

            </div>
          </div>
  
</footer>
    );
};

export default Footer;