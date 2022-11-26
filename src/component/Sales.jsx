import React from 'react';
import { Link } from 'react-router-dom';

const Sales = () => {
    return (
        <div className='container mx-auto mb-16'>
            <div className="p-6 py-12 dark:bg-[#085594]">
                <div className="container mx-auto text-amber-100">
                    <div className="flex flex-col lg:flex-row items-center justify-evenly">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Up to
                            50% Off
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">MAMBA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sales;