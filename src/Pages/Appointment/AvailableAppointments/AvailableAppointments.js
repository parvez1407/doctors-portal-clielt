import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='mt-20'>
            <p className='text-center text-gray-500 font-bold text-xl'>Available Appointments on <span className='text-secondary'>{format(selectedDate, 'PP')}</span></p>
        </section>
    );
};

export default AvailableAppointments;