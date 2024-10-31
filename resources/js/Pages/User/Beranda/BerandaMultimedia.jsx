import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const BerandaMultimedia = () => {
    const list = [
        {
            title: "Video",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
        {
            title: "Podcast",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
        {
            title: "Poster",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
        {
            title: "Games",
            img: "https://placehold.co/600x400?text=Sociesmedia",
        },
    ];

    return (
        <div className="max-w-screen-xl p-6 mx-auto">
            {/* Header section with title and link */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-semibold text-left">Multimedia Terbaru</h1>
                <a href="/multimedia" className="font-semibold text-purple-600 text-md">Lihat semua</a>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                                    className="w-full object-cover h-[250px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="justify-between p-6 text-xl text-gray-800">
                                <b>{item.title}</b>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BerandaMultimedia;
