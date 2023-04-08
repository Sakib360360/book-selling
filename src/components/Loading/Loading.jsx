import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-68px)]'>
            <p className='text-6xl'>L</p>
            <div className='w-10 h-10 rounded-full border-4 border-sky-500 border-dashed animate-spin'></div>
            <p className='text-6xl'>ding</p>
        </div>
    );
};

export default Loading;