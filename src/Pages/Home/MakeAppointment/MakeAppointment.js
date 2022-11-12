import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../conponents/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='my-12'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2" alt='' />
                    <div>
                        <h5 className='text-2xl font-bold text-primary'>Appointment</h5>
                        <h1 className="text-4xl font-bold text-gray-200">Make an appointment Today</h1>
                        <p className="py-6 text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to='/appointment'><PrimaryButton>Mage Appointment</PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;