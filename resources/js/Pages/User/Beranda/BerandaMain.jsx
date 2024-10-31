import React from 'react';
import UserLayout from "@/Layout/UserLayout.jsx";

import BerandaHero from "@/Pages/User/Beranda/BerandaHero.jsx";
import BerandaNavigation from "@/Pages/User/Beranda/BerandaNavigation.jsx";
import BerandaArtikel from "@/Pages/User/Beranda/BerandaArtikel.jsx";
import BerandaMateri from "@/Pages/User/Beranda/BerandaMateri";
import {Head} from "@inertiajs/react";
import BerandaMultimedia from './BerandaMultimedia';
import BerandaFaq from './BerandaFaq';

const BerandaMain = () => {
    return (
        <>
            <Head>
                <title>Beranda - Sociesmedia</title>
                <meta name="description" content=""/>
            </Head>
            <UserLayout>
                <BerandaHero/>
                <BerandaNavigation/>
                <BerandaMultimedia/>
                <BerandaMateri/>
                <BerandaArtikel/>
                <BerandaFaq/>
        </UserLayout>
        </>
    );
};

export default BerandaMain;
    