import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';


    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.error(error.message)
                const err = error.message;
                setLoginError(err)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-full lg:w-1/3 bg-slate-0 p-8 rounded-lg shadow-lg'>
                <h2 className='text-xl text-center font-bold mb-6'>Login</h2>
                {
                    loginError && <p className='text-red-300 text-center'>{loginError}</p>
                }
                <form onSubmit={handleSubmit(handleLogin)}>
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
                                minLength: { value: 6, message: 'password must be 6 character or longer' }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text text-gray-400 text-xs">forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full mt-4 text-gray-50' type="submit" value='Login' />
                </form>
                <p className='text-center my-3'>New to Doctors Portal? <Link to='/register' className='text-secondary underline'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full text-gray-400'><FaGoogle className='text-2xl mr-3 text-secondary' />CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;