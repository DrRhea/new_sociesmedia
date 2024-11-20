import React, { useState, useEffect } from 'react';
import AppHead from "@/Components/AppHead.jsx";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";
import { Spinner } from '@nextui-org/react';

const UserLayout = ({children}) => {
    const [isLoading, setIsLoading] = useState(true); // State untuk loading
    useEffect(() => {
        // Simulasikan proses loading dengan timeout, ganti ini dengan proses async jika perlu
        const timeout = setTimeout(() => setIsLoading(false), 150); // Loader selama 1,5 detik
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <AppHead />
            <Header />
            {isLoading ? ( // Tampilkan spinner jika sedang loading
                <div className="flex items-center justify-center h-screen">
                    <Spinner size="lg" color="primary" />
                </div>
            ) : (
                children
            )}

            <Footer />
        </>
    );
};

export default UserLayout;
