import React from 'react';

const HomeCatagorys = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-4 gap-4 uppercase'>
            <h1 className='p-10 bg-[#003566] text-4xl font-bold text-[#ffc300]'>Samsung</h1>
            <h1 className='p-10 bg-[#003566] text-4xl font-bold text-[#ffc300]'>Apple</h1>
            <h1 className='p-10 bg-[#003566] text-4xl font-bold text-[#ffc300]'>Xiaomi</h1>
            <h1 className='p-10 bg-[#003566] text-4xl font-bold text-[#ffc300]'>Walton</h1>
        </div>
    );
}; 

export default HomeCatagorys;