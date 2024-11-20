import React from 'react';
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const BerandaMateri = ({ materiLatest }) => {

    return (
        <div className="max-w-screen-xl p-6 mx-auto">
            {/* Header section with title and link */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-left">Materi Terbaru</h1>
                <a href="/materi" className="block mt-2 font-semibold text-purple-600 text-md sm:absolute sm:right-0 sm:top-0 sm:mt-0 sm:inline">
                    Lihat semua
                </a>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {materiLatest.map((item, index) => (
                    <Link href={`materi/${item.slug}`} key={index} className="w-full">
                        <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={`/storage/${item.thumbnail}`}
                                />
                            </CardBody>
                            <CardFooter className="flex flex-col items-start p-4 text-lg text-gray-800"> 
                                {/* Menambahkan Judul Materi di Kiri */}
                                <p className="mb-2 font-semibold text-left">{item.title}</p>

                                {/* Tombol Download */}
                                <a
                                    href={`/storage/${item.content}`}  // Gantilah `item.content` dengan path yang sesuai jika perlu
                                    download
                                    className="flex items-center justify-end w-full font-semibold rounded-xl"
                                >
                                    <Button
                                        auto
                                    >
                                        <span className="text-gray-800">Download</span>
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BerandaMateri;
