import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const BerandaMateri = () => {
    const list = [
        {
            title: "Materi A",
            buttonText: "Unduh",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
        {
            title: "Materi B",
            buttonText: "Unduh",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
        {
            title: "Materi C",
            buttonText: "Unduh",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
        {
            title: "Materi D",
            buttonText: "Unduh",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
    ];

    return (
        <div className="max-w-screen-xl p-6 mx-auto">
            {/* Header section with title and link */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-left">Materi Terbaru</h1>
                <a href="/materi" className="font-semibold text-purple-600 text-md sm:absolute sm:right-0 sm:top-0 mt-2 sm:mt-0 block sm:inline">
                    Lihat semua
                </a>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((item, index) => (
                    <Link href={`/${item.title.toLowerCase()}`} key={index} className="w-full">
                        <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]" // Menambah tinggi gambar sedikit
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="flex flex-col items-start p-4 text-lg text-gray-800"> 
                                {/* Menambahkan Judul Materi di Kiri */}
                                <p className="mb-2 font-semibold text-left">{item.title}</p>
                                
                                <Button
                                    auto
                                    className="flex items-center justify-center w-full font-semibold bg-gray-300 rounded-full"
                                >
                                    <i className="mr-2 text-2xl text-gray-100 bx bxs-download"></i>
                                    <span className="text-gray-600">{item.buttonText}</span>
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BerandaMateri;
