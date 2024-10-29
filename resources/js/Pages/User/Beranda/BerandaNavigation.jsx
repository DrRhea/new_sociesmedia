import React from 'react';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Link} from "@inertiajs/react";


const BerandaNavigation = () => {
    const list = [
        {
            title: "Multimedia",
            img: "https://placehold.co/600x400?text=Sociesmedia",
            price: "$5.50",
        },
        {
            title: "Materi",
            img: "https://placehold.co/600x400?text=Sociesmedia",
            price: "$3.00",
        },
        {
            title: "Forum",
            img: "https://placehold.co/600x400?text=Sociesmedia",
            price: "$10.00",
        },
        {
            title: "Artikel",
            img: "https://placehold.co/600x400?text=Sociesmedia",
            price: "$5.30",
        },
    ];

    return (
        <div className={'max-w-screen-xl mx-auto p-4'}>
            <h1 className="my-2 mb-6 text-3xl font-semibold text-center">Navigasi</h1>
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
                                {/*<p className="text-default-500">click</p>*/}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BerandaNavigation;
