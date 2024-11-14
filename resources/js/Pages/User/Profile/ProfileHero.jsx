import React from 'react';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const ProfileHero = () => {
    return (
        <main>
            <div className="max-w-screen-lg w-full mx-auto lg:my-6">
            <Card
                isFooterBlurred
                className="w-full h-[200px] col-span-12 sm:col-span-5 rounded-none lg:rounded-2xl"
            >
                <Image
                    removeWrapper
                    alt="Konten Profile"
                    className="z-0 w-full h-full -translate-y-6 object-cover"
                    src="img/banner/profil.webp"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between  rounded-none">
                    <div>
                        <p className="text-black text-tiny">Jelajahi Konten Profile</p>
                        <p className="text-black text-tiny">Menarik dan Inspiratif di Halaman ini</p>
                    </div>
                </CardFooter>
            </Card>

            </div>
        </main>
    );
};

export default ProfileHero;
