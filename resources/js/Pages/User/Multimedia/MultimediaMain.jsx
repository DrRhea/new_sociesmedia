import React from 'react';
import UserLayout from "@/Layout/UserLayout.jsx";
import { Head, usePage } from "@inertiajs/react";
import MultimediaHero from "@/Pages/User/Multimedia/MultimediaHero.jsx";
import MultimediaPilihan from './MultimediaPilihan';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const MultimediaMain = ({ auth, multimedia }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const canAccess = 
        auth.user && (
            ['admin', 'superadmin'].includes(auth.user.role) || 
            (auth.user.role === 'guru' && auth.isTeacherApproved)
        );

    return (
        <>
            <Head head-key="multimedia">
                <title>Multimedia - Sociesmedia</title>
                <meta name="description" content="Jelajahi beragam konten multimedia seperti video, podcast, poster, dan games di Sociesmedia. Temukan inspirasi belajar yang seru dan menyenangkan!" />
                <meta name="keywords" content="Sociesmedia, multimedia, video, podcast, poster, games, edukasi, konten belajar" />
                <meta name="author" content="Sociesmedia" />
                <meta name="robots" content="index, follow" />
                
                {/* Canonical URL untuk menghindari duplikat konten */}
                <link rel="canonical" href="https://sociesmedia.id/multimedia" />
            </Head>


            <UserLayout>
                <MultimediaHero />
                <MultimediaPilihan multimedia={multimedia}/>

                {canAccess && (
                    <>
                        <button
                            onClick={onOpen}
                            className="fixed z-50 p-3 text-center text-white duration-150 shadow-lg bottom-5 right-5 bg-blue-600/90 hover:bg-blue-500/80 rounded-xl"
                        >
                            <p>{'+'} Tambah <strong>Multimedia</strong> Disini</p>
                        </button>
                        
                        <Modal isOpen={isOpen} backdrop={'blur'} onOpenChange={onOpenChange} placement="bottom-center">
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Tambah Multimedia</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Isi detail multimedia yang ingin Anda tambahkan di sini.
                                            </p>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                Batal
                                            </Button>
                                            <Button color="primary" onPress={onClose}>
                                                Simpan
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </>
                )}
            </UserLayout>
        </>
    );
};

export default MultimediaMain;

