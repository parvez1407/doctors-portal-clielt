import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots, } = appointmentOption;
    return (
        <div className="card w-full shadow-md">
            <div className="card-body">
                <h2 className="text-xl font-semibold text-secondary text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="btn bg-gradient-to-r from-primary to-secondary border-0 text-gray-100 hover:from-secondary hover:to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;