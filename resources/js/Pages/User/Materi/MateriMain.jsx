import React from 'react';
import UserLayout from "@/Layout/UserLayout.jsx";
import MateriHero from "@/Pages/User/Materi/MateriHero.jsx";
import { Head, usePage } from "@inertiajs/react";
import MateriPilihan from './MateriPilihan';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const MateriMain = ({ materi }) => {
    const { auth } = usePage().props;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const canAccess = 
        auth.user && (
            ['admin', 'superadmin'].includes(auth.user.role) || 
            (auth.user.role === 'guru' && auth.isTeacherApproved)
        );
    
    return (
        <>
            <Head>
                <title>Materi - Sociesmedia</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <UserLayout>
                <MateriHero />
                <MateriPilihan materi={materi} />
                
                {canAccess && (
                    <>
                        <button
                            onClick={onOpen}
                            className="fixed z-50 p-3 text-center text-white duration-150 shadow-lg bottom-5 right-5 bg-blue-600/90 hover:bg-blue-500/80 rounded-xl"
                        >
                            <p>{'+'} Tambah <strong>Materi</strong> Disini</p>
                        </button>
                        
                        <Modal isOpen={isOpen} backdrop={'blur'} onOpenChange={onOpenChange} placement="bottom-center">
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Tambah Materi</ModalHeader>
                                        <ModalBody>
                                            <p>
                                                Silakan tambahkan materi baru di sini. Masukkan informasi yang diperlukan di formulir di bawah ini.
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

export default MateriMain;