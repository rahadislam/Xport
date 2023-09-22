import React from 'react';
import contuct from '../../src/images/Community.png';


const ContuctUs = () => {
    return (
        <div  className='grid sm:grid-cols-1 gap-5 lg:grid-cols-2 px-16 py-10'>
            <div>
                <img src={contuct} alt=""  className='w-3/4 lg:w-3/4 mx-auto'/>
            </div>
            <div className="card  mx-auto w-72 lg:w-96 mt-10">
                <div className="card-body">
                   
                    <form >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-container">Email:</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                               
                            />
                            
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-container">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs h-32"
                                
                            />
                            
                        </div>
                        <br />
                        <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md text-xs bg-black border-transparent text-white font-container' type="submit" value="Contact Us" />
                    </form>
                   
                </div>
            </div>
        </div >
    );
};

export default ContuctUs;