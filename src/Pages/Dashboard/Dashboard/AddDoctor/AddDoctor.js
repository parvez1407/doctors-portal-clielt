import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../../../context/Loader/Loader';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostingKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-six-eta.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })


    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    // save doctor information to the database
                    fetch('https://doctors-portal-server-six-eta.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('doctors-portal')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            if (result.acknowledged) {
                                toast.success(`${data.name} is added successfully`, { autoClose: 500 })
                                navigate('/dashboard/manage-doctors')
                            }
                        });
                }
            })
    }

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-3xl'>Add A Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full mb-4">
                    <label className="label"><span className="label-text text-gray-400">Name</span></label>
                    <input type="text" {...register('name', { required: 'please enter your name' })} className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-400'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label"><span className="label-text text-gray-400">Email</span></label>
                    <input type="email" {...register("email", { required: 'Please enter your email address' })} className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label"><span className="label-text text-gray-400">Specialty</span></label>
                    <select
                        {...register('specialty', { required: 'Please select his specialty' })}
                        className="select select-bordered w-full">
                        <option disabled selected>Please Select a Specialty</option>
                        {specialties?.map(specialty => <option
                            key={specialty._id}
                            value={specialty?.name}
                        >{specialty?.name}</option>)}
                    </select>
                    {errors.specialty && <p className='text-red-400'>{errors.specialty?.message}</p>}
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label"><span className="label-text text-gray-400">Upload Doctor Photo</span></label>
                    <input type="file" {...register('image', { required: 'photo is required' })} className="input input-bordered w-full" />
                    {errors.image && <p className='text-red-400'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4 text-gray-50' type="submit" value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;