import React from 'react';
import AppHead from "@/Components/AppHead.jsx";
import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";

const UserLayout = ({children}) => {
    return (
        <>
            <AppHead />
            <Header />

            {children}

            <Footer />
        </>
    );
};

export default UserLayout;
