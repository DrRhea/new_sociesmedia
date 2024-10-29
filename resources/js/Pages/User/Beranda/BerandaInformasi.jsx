import React from 'react';
import { Card, CardBody } from "@nextui-org/react";

const BerandaInformasi = () => {
    return (
        <div className="max-w-screen-xl p-4 mx-auto">
            <div className="grid grid-cols-1 gap-4 px-8 md:grid-cols-2">
                {/* Card Pertama */}
                <Card className="flex items-center h-[200px] rounded-3xl bg-gray-200 text-gray-800 shadow-md">
                    <CardBody className="flex flex-col items-center justify-center w-full p-6 text-center">
                        <h3 className="mb-2 text-2xl font-bold">Ada kendala terkait data Pendidikan Tinggi?</h3>
                        <p className="text-lg">Cari informasi <a href="#" className="font-semibold text-blue-600 underline">di sini!</a></p>
                    </CardBody>
                </Card>

                {/* Card Kedua */}
                <Card className="flex items-center h-[200px] rounded-3xl bg-gray-200 text-gray-800 shadow-md">
                    <CardBody className="flex flex-col items-center justify-center w-full p-6 text-center">
                        <h3 className="mb-2 text-2xl font-bold">Cari tahu perbedaannya!</h3>
                        <p className="text-lg">Komparasi perguruan tinggi dan program studi impianmu <a href="#" className="font-semibold text-blue-600 underline">di sini!</a></p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default BerandaInformasi;
