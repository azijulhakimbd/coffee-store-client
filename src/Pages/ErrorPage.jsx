
import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='w-11/12'>
            <img className='mx-auto' src="https://i.postimg.cc/g0WG2Z8s/404.gif" alt="" />
            <Link className='btn btn-primary text-white mx-200' to={'/'}>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;