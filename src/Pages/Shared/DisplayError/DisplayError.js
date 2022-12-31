import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-600'>Something went wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.messages}</p>
            <h4 className='text-3xl'>Please <button onClick={handleSignOut}>Logout</button> and Log back in</h4>
        </div>
    );
};

export default DisplayError;