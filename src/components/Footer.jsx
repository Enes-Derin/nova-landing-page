import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="bg-cyan-950 text-white py-10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
                    <p className="text-sm sm:text-base">&copy; 2025 Nova. All rights reserved.</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:underline text-sm sm:text-base">Privacy Policy</a>
                        <a href="#" className="hover:underline text-sm sm:text-base">Terms of Service</a>
                        <a href="#" className="hover:underline text-sm sm:text-base">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
