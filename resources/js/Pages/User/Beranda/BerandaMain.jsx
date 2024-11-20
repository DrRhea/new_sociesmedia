import React from 'react';
import UserLayout from "@/Layout/UserLayout.jsx";
import BerandaHero from "@/Pages/User/Beranda/BerandaHero.jsx";
import BerandaNavigation from "@/Pages/User/Beranda/BerandaNavigation.jsx";
import BerandaArtikel from "@/Pages/User/Beranda/BerandaArtikel.jsx";
import BerandaMateri from "@/Pages/User/Beranda/BerandaMateri";
import { Head } from "@inertiajs/react";
import BerandaMultimedia from './BerandaMultimedia';
import BerandaFaq from './BerandaFaq';
import BerandaAccordion from './BerandaAccordion';
import { motion } from "framer-motion";

const BerandaMain = ({ multimediaVideo, multimediaPodcast, multimediaPoster, multimediaGames, artikelLatest, materiLatest }) => {
    // Variabel untuk konfigurasi animasi slide down yang lebih halus
    const slideDownVariants = {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 }
    };

    console.log(artikelLatest);

    return (
        <>
            <Head head-key="Beranda">
                <title>Beranda - Sociesmedia</title>
                <meta name="description" content="Selamat datang di Sociesmedia! Platform edukasi yang menyediakan artikel, multimedia, dan materi terkini untuk belajar dan berbagi pengetahuan." />
                <meta name="keywords" content="Sociesmedia, edukasi, artikel, multimedia, materi, belajar, podcast, video, poster, games" />
                <meta name="author" content="Sociesmedia" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://sociesmedia.id" />
            </Head>

            <UserLayout>
                {/* Menambahkan efek slide down ke setiap komponen dengan pengaturan durasi yang lebih panjang */}
                <motion.div
                    variants={slideDownVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}  // Ease lebih halus
                >
                    <BerandaHero />
                </motion.div>

                <motion.div
                    variants={slideDownVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <BerandaNavigation />
                </motion.div>

                <motion.div
                    variants={slideDownVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <BerandaMultimedia 
                        multimediaVideo={multimediaVideo}
                        multimediaPodcast={multimediaPodcast}
                        multimediaPoster={multimediaPoster}
                        multimediaGames={multimediaGames}
                    />
                </motion.div>

                {materiLatest?.length > 0 && (
                    <motion.div
                        variants={slideDownVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <BerandaMateri materiLatest={materiLatest} />
                    </motion.div>
                )}

                {artikelLatest?.length > 0 && (
                    <motion.div
                        variants={slideDownVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <BerandaArtikel artikelLatest={artikelLatest} />
                    </motion.div>
                )}


                <motion.div
                    variants={slideDownVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <BerandaAccordion />
                </motion.div>
            </UserLayout>
        </>
    );
};

export default BerandaMain;
