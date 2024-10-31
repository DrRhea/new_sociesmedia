import AdminLayout from '@/Layout/AdminLayout';
import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Image, Button, Tabs, Tab } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const MultimediaMain = () => {
    const [activeTab, setActiveTab] = useState('all'); // Tab aktif untuk filter

    const list = [
        { title: "Judul", img: "https://placehold.co/600x400?text=Sociesmedia", category: 'video' },
        { title: "Judul Podcast", img: "https://placehold.co/600x400?text=Sociesmedia", category: 'podcast' },
        { title: "Judul Poster", img: "https://placehold.co/600x400?text=Sociesmedia", category: 'poster' },
        { title: "Judul Games", img: "https://placehold.co/600x400?text=Sociesmedia", category: 'games' },
    ];

    const filteredList = activeTab === 'all' ? list : list.filter(item => item.category === activeTab);

    return (
        <AdminLayout>
            <div className="flex flex-1 flex-col gap-4 p-4">
                {/* Grid atas */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                    <div className="aspect-video rounded-xl bg-muted/50" />
                </div>

                {/* Area untuk Card */}
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
                    
                    {/* Filter Tabs */}
                    <div className="mb-6 flex justify-center">
                        <Tabs aria-label="Multimedia Types" className="w-full max-w-lg">
                            <Tab key="all" title="Semua" onClick={() => setActiveTab('all')}>Semua</Tab>
                            <Tab key="video" title="Video" onClick={() => setActiveTab('video')}>Video</Tab>
                            <Tab key="podcast" title="Podcast" onClick={() => setActiveTab('podcast')}>Podcast</Tab>
                            <Tab key="poster" title="Poster" onClick={() => setActiveTab('poster')}>Poster</Tab>
                            <Tab key="games" title="Games" onClick={() => setActiveTab('games')}>Games</Tab>
                        </Tabs>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredList.map((item, index) => (
                            <Link href={`/${item.title.toLowerCase()}`} key={index} className="w-full">
                                <Card shadow="md" className="w-full max-w-[500px] overflow-hidden rounded-3xl">
                                    <CardBody className="p-0">
                                        <Image
                                            isZoomed
                                            shadow="sm"
                                            radius="none"
                                            width="100%"
                                            alt={item.title}
                                            src={item.img}
                                        />
                                    </CardBody>
                                    <CardFooter className="flex flex-col p-4 text-center items-center">
                                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                                        <span className="text-xs text-gray-400 capitalize mb-2">{item.category}</span>
                                        <p className="text-sm text-gray-500 mb-4">Penjelasan singkat mengenai {item.title} dalam kategori {item.category}.</p>
                                        <Button className="mt-2">Lihat Detail</Button>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MultimediaMain;
