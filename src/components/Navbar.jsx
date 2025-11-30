import React from 'react';
import tabletImg from '../img/tablet.png'; // Dosya yolu Navbar.js konumuna göre ayarlayın

function Navbar() {
    return (
        <nav className="bg-cyan-950 text-white">
            {/* Navbar üst kısmı */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Marka */}
                <div className="text-4xl sm:text-5xl font-extrabold uppercase bg-gradient-to-r from-cyan-400 to-sky-600 text-transparent bg-clip-text hover:from-cyan-300 hover:to-sky-500 transition-colors duration-500">
                    NOVA
                </div>


            </div>

            {/* Ana içerik */}
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Sol */}
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">Build better.</h1>
                    <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">Faster.</h1>
                    <p className="my-5 text-base sm:text-lg lg:text-xl">
                        Yeni nesil iş yönetim platformu ile projelerinizi, ekiplerinizi ve verilerinizi
                        tek yerden yönetin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <button className="bg-sky-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors duration-300">
                            Ürünü İncele
                        </button>
                        <button className="bg-white text-sky-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                            Demo İzle
                        </button>
                    </div>
                </div>

                {/* Sağ */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end hidden md:flex">
                    <img
                        className="w-full max-w-md md:max-w-full h-auto rounded-lg"
                        src={tabletImg}
                        alt="Tablet"
                    />
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
