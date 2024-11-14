import React from 'react';
import {Card, CardFooter, CardHeader, Image, Input} from "@nextui-org/react";

const BerandaHero = () => {
    return (
        <div>
            <Card radius={"none"} className="w-full h-full aspect-video sm:aspect-[10/5] md:aspect-[8/3] col-span-12 sm:col-span-7">
                <Image
                    removeWrapper
                    radius={"none"}
                    alt="Banner"
                    className="z-0 w-full h-full object-cover"
                    src="/img/banner/beranda.webp"
                />
                <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 backdrop-blur-md">
                    <div className="flex flex-grow gap-2 items-center max-w-screen-lg mx-auto">
                        <Input
                            label="Pencarian"
                            isClearable
                            radius="sm"
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-default-200/50",
                                    "dark:bg-default/60",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "dark:hover:bg-default/70",
                                    "group-data-[focus=true]:bg-default-200/50",
                                    "dark:group-data-[focus=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Ketik untuk mencari..."
                            startContent={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 fill-black/70"
                                    viewBox="0 0 30 30"
                                >
                                    <path
                                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
                                </svg>

                                // <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                        />
                    </div>
                    {/*<Button radius="full" size="sm">Get App</Button>*/}
                </CardFooter>
            </Card>
        </div>
    );
};

export default BerandaHero;
