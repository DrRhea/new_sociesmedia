import React, { useState } from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import { Card, CardBody, CardFooter, Image, Button, Tabs, Tab } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const MateriMain = () => {
    const [activeTab, setActiveTab] = useState('all'); // Tab aktif untuk filter

    const list = [
        { title: "Materi Kelas 7", img: "https://placehold.co/600x400?text=Materi", category: 'kelas7' },
        { title: "Materi Kelas 8", img: "https://placehold.co/600x400?text=Materi", category: 'kelas8' },
        { title: "Materi Kelas 9", img: "https://placehold.co/600x400?text=Materi", category: 'kelas9' },
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
                        <Tabs aria-label="Materi Types" className="w-full max-w-lg">
                            <Tab key="all" title="Semua" onClick={() => setActiveTab('all')}>Semua</Tab>
                            <Tab key="kelas7" title="Kelas 7" onClick={() => setActiveTab('kelas7')}>Kelas 7</Tab>
                            <Tab key="kelas8" title="Kelas 8" onClick={() => setActiveTab('kelas8')}>Kelas 8</Tab>
                            <Tab key="kelas9" title="Kelas 9" onClick={() => setActiveTab('kelas9')}>Kelas 9</Tab>
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
                                        <p className="text-sm text-gray-500 mb-4">Deskripsi singkat mengenai {item.title} untuk {item.category}.</p>
                                        <Button className="mt-2">Unduh</Button>
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

export default MateriMain;
