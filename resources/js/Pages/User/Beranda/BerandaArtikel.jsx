import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

const BerandaArtikel = () => {
    return (
        <div className="max-w-screen-xl p-4 mx-auto">
            {/* Header section with title and link */}
            <div className="flex items-center justify-between px-8 mb-8">
                <h1 className="text-3xl font-semibold text-left">Artikel Terkini</h1>
                <a href="#" className="font-semibold text-purple-600 text-md">Lihat Semua</a>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-12 gap-6 px-8">
                <Card className="col-span-12 sm:col-span-6 lg:col-span-4 h-[400px] rounded-lg overflow-hidden shadow-md">
                    <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
                        <p className="font-bold uppercase text-tiny text-white/60">What to watch</p>
                        <h4 className="font-medium text-white text-large">Stream the Acme event</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 object-cover w-full h-full"
                        src="https://placehold.co/600x400?text=Sociesmedia"
                    />
                </Card>
                
                <Card className="col-span-12 sm:col-span-6 lg:col-span-4 h-[400px] rounded-lg overflow-hidden shadow-md">
                    <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
                        <p className="font-bold uppercase text-tiny text-white/60">Plant a tree</p>
                        <h4 className="font-medium text-white text-large">Contribute to the planet</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 object-cover w-full h-full"
                        src="https://placehold.co/600x400?text=Sociesmedia"
                    />
                </Card>
                
                <Card className="col-span-12 sm:col-span-6 lg:col-span-4 h-[400px] rounded-lg overflow-hidden shadow-md">
                    <CardHeader className="absolute z-10 top-4 left-4 flex-col !items-start">
                        <p className="font-bold uppercase text-tiny text-white/60">Supercharged</p>
                        <h4 className="font-medium text-white text-large">Creates beauty like a beast</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 object-cover w-full h-full"
                        src="https://placehold.co/600x400?text=Sociesmedia"
                    />
                </Card>
            </div>
        </div>
    );
};

export default BerandaArtikel;
