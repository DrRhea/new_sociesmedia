import React from 'react';
import {Card, CardFooter, Image} from "@nextui-org/react";

const ForumHero = () => {
    return (
        <main>
            <div className="w-full max-w-screen-lg mx-auto lg:my-6">
                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                    <Image
                        removeWrapper
                        alt="Konten Multimedia"
                        className="z-0 object-cover w-full h-full scale-125 -translate-y-6"
                        src="https://placehold.co/600x400?text=Forum"
                    />
                    <CardFooter
                        className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50">
                        <div>
                            <p className="text-black text-tiny">Jelajahi Forum DIskusi</p>
                            <p className="text-black text-tiny">Menarik dan Inspiratif di Halaman ini</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
};

export default ForumHero;
