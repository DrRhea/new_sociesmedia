import React from 'react';
import {Link} from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-white">
            <div
                className="flex flex-col max-w-screen-xl gap-4 px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link
                            href="/"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Beranda
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="/multimedia"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Multimedia
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="#"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Materi
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="#"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Forum
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="#"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Artikel
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="#"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Peneliti
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link
                            href="#"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Kontak
                        </Link>
                    </div>
                </nav>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    &#169; 2024 Sociesmedia, Inc. Semua hak dilindungi undang-undang.
                </p>

            </div>
        </footer>
    );
};

export default Footer;