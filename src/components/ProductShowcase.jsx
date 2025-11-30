import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductShowcase() {
    return (
        <section className='bg-cyan-950 text-white'>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 pt-20">Product Showcase</h2>

            {/* Üst kısım: Resim ve İlk Testimonial */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 sm:px-10 py-10 justify-center'>
                <div className="left h-64 sm:h-80 w-full relative">
                    <img className="w-full h-full object-cover rounded-lg" src="src/img/pc.png" alt="PC" />
                </div>
                <div className='text-left'>
                    <p className='text-2xl sm:text-3xl font-bold text-center md:text-left'>Testimonials</p>
                    <div className='border border-black rounded-lg p-4 sm:p-6 mt-6 sm:mt-10 pb-6 sm:pb-10 hover:bg-white hover:text-black transition-colors duration-300'>
                        <div className='grid grid-cols-3 gap-4 mt-6 sm:mt-10 items-center'>
                            <div className="flex justify-center md:justify-end items-center">
                                <img src="src/img/man.png" className="rounded-full w-12 h-12 sm:w-16 sm:h-16" alt="Enes Derin" />
                            </div>

                            <div className='col-span-2'>
                                <div className='font-bold text-sm sm:text-base'>Enes Derin</div>
                                <div className='flex text-sm sm:text-base'>
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                    <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                </div>
                            </div>
                        </div>
                        <p className='ml-0 md:ml-20 mt-4 sm:mt-6 text-sm sm:text-base'>
                            Arayüz inanılmaz sade ve kullnışlı. Nova sayesinde verimimiz %30 arttı.
                        </p>
                    </div>
                </div>
            </div>

            {/* Alt kısım: Diğer Testimoniallar */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-6 sm:px-10 pb-20'>
                {/* Kart 1 */}
                <div className='border border-black rounded-lg p-4 sm:p-6 mt-6 sm:mt-10 pb-6 sm:pb-10 hover:bg-white hover:text-black transition-colors duration-300'>
                    <div className='grid grid-cols-3 gap-4 mt-6 sm:mt-10 items-center'>
                        <div className="flex justify-center md:justify-end items-center">
                            <img src="src/img/man.png" className="rounded-full w-12 h-12 sm:w-16 sm:h-16" alt="Enes Derin" />
                        </div>
                        <div className='col-span-2'>
                            <div className='font-bold text-sm sm:text-base'>Enes Derin</div>
                            <div className='flex text-sm sm:text-base'>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                            </div>
                        </div>
                    </div>
                    <p className='ml-0 md:ml-20 mt-4 sm:mt-6 text-sm sm:text-base'>
                        Arayüz inanılmaz sade ve kullnışlı. Nova sayesinde verimimiz %30 arttı.
                    </p>
                </div>

                {/* Kart 2 */}
                <div className='border border-black rounded-lg p-4 sm:p-6 mt-6 sm:mt-10 pb-6 sm:pb-10 hover:bg-white hover:text-black transition-colors duration-300'>
                    <div className='grid grid-cols-3 gap-4 mt-6 sm:mt-10 items-center'>
                        <div className="flex justify-center md:justify-end items-center">
                            <img src="src/img/man.png" className="rounded-full w-12 h-12 sm:w-16 sm:h-16" alt="Enes Derin" />
                        </div>
                        <div className='col-span-2'>
                            <div className='font-bold text-sm sm:text-base'>Enes Derin</div>
                            <div className='flex text-sm sm:text-base'>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#c7c7c7" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#c7c7c7" }} />
                            </div>
                        </div>
                    </div>
                    <p className='ml-0 md:ml-20 mt-4 sm:mt-6 text-sm sm:text-base'>
                        Arayüz inanılmaz sade ve kullnışlı. Nova sayesinde verimimiz %30 arttı.
                    </p>
                </div>

                {/* Kart 3 */}
                <div className='border border-black rounded-lg p-4 sm:p-6 mt-6 sm:mt-10 pb-6 sm:pb-10 hover:bg-white hover:text-black transition-colors duration-300'>
                    <div className='grid grid-cols-3 gap-4 mt-6 sm:mt-10 items-center'>
                        <div className="flex justify-center md:justify-end items-center">
                            <img src="src/img/man.png" className="rounded-full w-12 h-12 sm:w-16 sm:h-16" alt="Enes Derin" />
                        </div>
                        <div className='col-span-2'>
                            <div className='font-bold text-sm sm:text-base'>Enes Derin</div>
                            <div className='flex text-sm sm:text-base'>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                                <FontAwesomeIcon icon={faStar} style={{ color: "#c7c7c7" }} />
                            </div>
                        </div>
                    </div>
                    <p className='ml-0 md:ml-20 mt-4 sm:mt-6 text-sm sm:text-base'>
                        Arayüz inanılmaz sade ve kullnışlı. Nova sayesinde verimimiz %30 arttı.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ProductShowcase;
