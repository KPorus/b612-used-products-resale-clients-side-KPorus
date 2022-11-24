import React from 'react';
import HomeCatagorys from './HomeCatagorys';

const Home = () => {
    document.title = 'Home'
    return (
        <div>
            <h1 className='container mx-auto text-4xl p-4'>Home Part</h1>
            <HomeCatagorys></HomeCatagorys>
        </div>
    );
};

export default Home;