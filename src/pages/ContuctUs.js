import React from 'react';
import contuct from '../../src/images/contact.png';


const ContuctUs = () => {
    return (
        <div  className='grid sm:grid-cols-1 gap-5 lg:grid-cols-2 px-16 py-10'>
            <div>
                <img src={contuct} alt=""  className='w-3/4 lg:w-3/4 mx-auto'/>
            </div>
            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                   
                    <form >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                
                            />
                            
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                               
                            />
                            
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                
                            />
                            
                        </div>
                        <br />
                        <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Contuct us" />
                    </form>
                   
                </div>
            </div>
        </div >
    );
};

export default ContuctUs;