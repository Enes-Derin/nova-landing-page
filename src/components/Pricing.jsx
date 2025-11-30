import React from 'react';
import PriceArea from './PriceArea';

function Pricing() {
    return (
        <section className='bg-white'>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 pt-20">Pricing</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto px-6 sm:px-10 py-10 justify-center'>

                {/* Basic Plan */}
                <PriceArea header="Basic" price="$9" features={["Feature 1", "Feature 2", "Feature 3"]} />

                {/* Pro Plan */}
                <PriceArea header="Pro" price="$29" features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]} />

                {/* Enterprise Plan */}
                <PriceArea header="Enterprise" price="$99" features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]} />

            </div>
        </section>
    )
}

export default Pricing;
