import React from 'react';
import Banner from '../component/Banner';
import Sales from '../component/Sales';
import HomeCatagorys from './HomeCatagorys';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sales></Sales>
            <HomeCatagorys></HomeCatagorys>
        </div>
    );
};

export default Home;