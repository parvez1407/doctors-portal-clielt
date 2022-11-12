import React, { useState } from 'react';
import background from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="hero md:py-5 lg:py-28">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} className="lg:w-7/12 rounded-lg shadow-2xl" alt='banner-img' />
                        <div className='lg:w-4/12'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;