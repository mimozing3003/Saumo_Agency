import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-k72-black text-white py-20 px-6" data-scroll-section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Saumo Agency</h2>
                        <p className="text-xl text-gray-400">
                            We are a creative agency based in Montreal.
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 text-lg">
                        <a href="#" className="hover:text-gray-300">Accueil</a>
                        <a href="#" className="hover:text-gray-300">Agence</a>
                        <a href="#" className="hover:text-gray-300">Clients</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-gray-800 flex justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Saumo Agency. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
