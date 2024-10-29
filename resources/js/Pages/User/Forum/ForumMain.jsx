import React from 'react';
import UserLayout from "@/Layout/UserLayout.jsx";
import { Button } from "@/Components/ui/button.jsx"
import {Head} from "@inertiajs/react";
import ForumPilihan from './ForumPilihan';
import ForumHero from './ForumHero';


const ForumMain = () => {
    return (
        <>
            <Head>
                <title>Multimedia - Sociesmedia</title>
                <meta name="description" content="Generated by create next app"/>
            </Head>

            <UserLayout>
                <ForumHero/>
                <ForumPilihan/>
            </UserLayout>
        </>
    );
};

export default ForumMain;
