import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviewsData = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Ambar',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Alia',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        },
    ]
    return (
        <section >
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h1 className='text-2xl lg:text-4xl text-gray-500'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </figure>
            </div>
            <div className='grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewsData.map(rev => <Review
                        key={rev._id}
                        rev={rev}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;