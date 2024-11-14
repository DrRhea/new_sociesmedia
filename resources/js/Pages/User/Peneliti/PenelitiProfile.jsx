import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const PenelitiProfile = ({ peneliti }) => {
    return (
        <div className="max-w-screen-xl p-6 mx-auto">
            {/* Header section with title */}
            <h1 className="my-2 mb-6 text-3xl font-semibold text-center">Peneliti</h1>

            {/* Centered Cards section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {peneliti.map((item, index) => (
                        <Card key={index} shadow="md" className="w-full max-w-md overflow-hidden rounded-3xl">
                            <CardBody className="p-0">
                                <Link href={item.link}>
                                    <Image
                                        alt={item.name}
                                        className="object-cover w-screen rounded-t-3xl"
                                        src={`./storage/upload/peneliti/${item.picture}`}
                                    />
                                </Link>
                            </CardBody>
                            <CardFooter className="flex flex-col items-center justify-center p-4 space-y-1 text-center">
                                <h3 className="text-xl font-semibold text-blue-600">{item.name}</h3>
                                <p className="text-gray-600">{item.field_of_study}</p>
                                <p className="text-sm text-gray-500">Universitas Pendidikan Indonesia</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PenelitiProfile;