import React from 'react';
import background from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../conponents/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="hero md:py-5 lg:py-28">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='banner-img' />
                    <div>
                        <h1 className="text-5xl font-bold text-gray-500">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;