import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../conponents/PrimaryButton/PrimaryButton';

const YourTerms = () => {
    return (
        <div>
            <div className="hero py-3 md:py-5 lg:py-12">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold text-gray-500">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                    <img src={treatment} className="lg:w-1/3 rounded-lg shadow-2xl" alt='banner-img' />
                </div>
            </div>
        </div>
    );
};

export default YourTerms;