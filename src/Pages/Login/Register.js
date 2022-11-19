import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }

    const handleRegister = data => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user Created successfully', { autoClose: 500 })
                const userProfile = {
                    displayName: data.name
                }
                updateUser(userProfile)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)

            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-full lg:w-1/3 bg-slate-0 p-8 rounded-lg shadow-lg'>
                <h2 className='text-xl text-center font-bold mb-6'>Register</h2>
                {signUpError && <p className='text-red-500 text-center'>{signUpError}</p>}
                <form onSubmit={handleSubmit(handleRegister)}>
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
                        <label className="label"><span className="label-text text-gray-400">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'please enter your valid password',
                                minLength: { value: 6, message: 'password must be 6 character or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#%$&*^])(?=.*[0-9])/, message: 'password must be one uppercase, special character & one number' }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4 text-gray-50' type="submit" value='Register' />
                </form>
                <p className='text-center my-3'>Already Have an Account? <Link to='/Login' className='text-secondary underline'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-gray-400'><FaGoogle className='text-2xl mr-3 text-secondary' />CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;