import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    console.log(treatment);
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            email,
            phone,
            slot,
            price
        }

        fetch('https://doctors-portal-server-six-eta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking Confirmed', { autoClose: 500 })
                    refetch();
                }
                else {
                    toast.error(data.message, { autoClose: 500 })
                }
            })
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-12">{treatmentName}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={date} className="input input-bordered w-full mb-3" />
                        <select name='slot' className="select select-bordered w-full mb-3">

                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full mb-3" readOnly />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full mb-3" readOnly />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " required />
                        <input type="submit" value="SUBMIT" className='btn w-full bg-gray-700 border-0 hover:bg-gray-600 mt-4' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;