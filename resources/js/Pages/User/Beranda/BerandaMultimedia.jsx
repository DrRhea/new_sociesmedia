import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const BerandaMultimedia = ({ multimediaVideo, multimediaPodcast, multimediaPoster, multimediaGames }) => {

    return (
        <div className="max-w-screen-xl p-6 mx-auto">
            {/* Header section with title and link */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-left">Multimedia Terbaru</h1>
                <Link href="/multimedia" className="block mt-2 font-semibold text-purple-600 text-md sm:absolute sm:right-0 sm:top-0 sm:mt-0 sm:inline">
                    Lihat semua
                </Link>
            </div>

            {/* Cards section */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <Link href={`/multimedia/${multimediaVideo.slug}`} className="w-full">
                        <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={multimediaVideo.title}
                                    className="w-full object-cover h-[250px]"
                                    src={`./storage/${multimediaVideo.thumbnail}`}
                                />
                            </CardBody>
                            <CardFooter className="p-6 text-xl text-gray-800 h-[100px] line-clamp-2">
                                <b>{multimediaVideo.title}</b>
                            </CardFooter>
                        </Card>
                    </Link>
                    <Link href={`/multimedia/${multimediaPoster.slug}`} className="w-full">
                        <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={multimediaPoster.title}
                                    className="w-full object-cover h-[250px]"
                                    src={`./storage/${multimediaPoster.thumbnail}`}
                                />
                            </CardBody>
                            <CardFooter className="p-6 text-xl text-gray-800 h-[100px] line-clamp-2">
                                <b>{multimediaPoster.title}</b>
                            </CardFooter>
                        </Card>
                    </Link>
                    <Link href={`/multimedia/${multimediaGames.slug}`} className="w-full">
                        <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={multimediaGames.title}
                                    className="w-full object-cover h-[250px]"
                                    src={`./storage/${multimediaGames.thumbnail}`}
                                />
                            </CardBody>
                            <CardFooter className="p-6 text-xl text-gray-800 h-[100px] line-clamp-2">
                                <b>{multimediaGames.title}</b>
                            </CardFooter>
                        </Card>
                    </Link>
                    <Link href={`/multimedia/${multimediaPodcast.slug}`} className="w-full">
                        <Card shadow="md" className="w-full overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Image
                                    isZoomed
                                    shadow="sm"
                                    radius="none"
                                    width="100%"
                                    alt={multimediaPodcast.title}
                                    className="w-full object-cover h-[250px]"
                                    src={`./storage/${multimediaPodcast.thumbnail}`}
                                />
                            </CardBody>
                            <CardFooter className="p-6 text-xl text-gray-800 h-[100px] line-clamp-2">
                                <b>{multimediaPodcast.title}</b>
                            </CardFooter>
                        </Card>
                    </Link>
            </div>
        </div>
    );
}

export default BerandaMultimedia;
