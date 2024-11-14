import React from 'react';
import {Card, CardFooter, Image} from "@nextui-org/react";

const ForumHero = () => {
    return (
        <main>
            <div className="w-full max-w-screen-lg mx-auto lg:my-6">
                <Card isFooterBlurred className="w-full col-span-12 sm:col-span-5 rounded-none lg:rounded-2xl overflow-hidden">
                    <Image
                        removeWrapper
                        alt="Konten Multimedia"
                        className="z-0 object-cover w-full h-full scale-125 -translate-y-6"
                        src="/img/banner/forum.webp"
                    />
                    <CardFooter
                        className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50 rounded-none"
                    >
                        <div>
                            <p className="text-black text-tiny">Jelajahi Forum Diskusi</p>
                            <p className="text-black text-tiny">Menarik dan Inspiratif di Halaman ini</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
};

export default ForumHero;