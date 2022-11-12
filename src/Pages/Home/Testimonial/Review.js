import React from 'react';

const Review = ({ rev }) => {
    const { img, review, name, location } = rev;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-justify text-gray-400'>{review}</p>
                <div className="card-actions justify-start items-center mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <h2 className='text-xl font-bold text-gray-500'>{name}</h2>
                        <h2 className='text-gray-400'>{location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;