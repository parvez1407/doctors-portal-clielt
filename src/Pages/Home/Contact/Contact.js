import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../conponents/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='my-12'>
            <div className='mx-auto py-20'>
                <h4 className='text-center text-xl font-semibold text-primary'>Contact Us</h4>
                <h2 className='text-center text-4xl mb-5 text-gray-300'>Stay connected with us</h2>
                <div className='flex w-full justify-center'>
                    <div className='w-4/5 lg:w-1/3'>
                        <form >
                            <input type="email" placeholder="Enter Your Email" className="input input-bordered mb-5 w-full" />
                            <br />
                            <input type="text" placeholder="Subject" className="input input-bordered mb-5 w-full" />
                            <br />
                            <textarea className="textarea h-24 w-full mb-5" placeholder="Your Message"></textarea>
                            <br />
                            <div className='flex justify-center'>
                                <PrimaryButton className=''>Submit</PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;