import React from 'react';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Link} from "@inertiajs/react";


const BerandaNavigation = () => {
    const list = [
        {
            title: "Multimedia",
            img: "/img/navigation/multimedia.webp",
        },
        {
            title: "Materi",
            img: "/img/navigation/materi.webp",
        },
        {
            title: "Forum",
            img: "/img/navigation/forum.webp",
        },
        {
            title: "Artikel",
            img: "/img/navigation/artikel.webp",
        },
    ];

    return (
        <div className={'max-w-screen-xl mx-auto p-4'}>
            <h1 className="my-2 mb-6 text-3xl font-semibold">Navigasi</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((item, index) => (
                    <Link href={`/${item.title.toLowerCase()}`} key={index} className="w-full">
                        <Card shadow="md" className={'w-full'}>
                            <CardBody className="p-0 overflow-visible">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[140px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="justify-between text-small">
                                <b>{item.title}</b>
                                <i class='bx bx-chevron-right'></i>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BerandaNavigation;
