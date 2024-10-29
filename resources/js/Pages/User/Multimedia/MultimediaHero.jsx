import React from 'react';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const MultimediaHero = () => {
    return (
        <main>
            <div className="max-w-screen-lg w-full mx-auto lg:my-6">
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <Image
                        removeWrapper
                        alt="Konten Multimedia"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://placehold.co/600x400?text=Multimedia"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Jelajahi Konten Multimedia</p>
                            <p className="text-black text-tiny">Menarik dan Inspiratif di Halaman ini</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
};

export default MultimediaHero;
