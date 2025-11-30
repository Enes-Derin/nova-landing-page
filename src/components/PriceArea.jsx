import React from 'react';

function PriceArea({ header, price, features }) {
    const featuresList = features.map((feature, index) => (
        <li key={index} className='mb-2'>✔ {feature}</li>
    ));

    return (
        <div className='border border-black rounded-lg p-4 sm:p-6 mt-6 sm:mt-10 hover:bg-cyan-950 hover:text-white transition-colors duration-300 flex flex-col justify-between'>
            <div>
                <h3 className='font-bold text-lg sm:text-xl text-center mb-4 sm:mb-6'>{header}</h3>
                <p className='text-center text-3xl sm:text-4xl font-bold mb-4 sm:mb-6'>
                    {price}
                    <span className='text-lg font-normal'>/month</span>
                </p>
                <ul className='mb-4 sm:mb-6 text-sm sm:text-base'>
                    {featuresList}
                </ul>
            </div>
            <button className="bg-sky-600 text-white font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full mt-4 sm:mt-6 hover:bg-sky-700 transition-colors duration-300">
                Choose Plan
            </button>
        </div>
    )
}

export default PriceArea;
