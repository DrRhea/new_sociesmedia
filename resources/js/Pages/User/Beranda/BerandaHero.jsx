import React from 'react';
import Slider from "react-slick"; // Import react-slick
import { Card, Image } from "@nextui-org/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BerandaHero = () => {
    const settings = {
        infinite: true, // Loop gambar
        speed: 1000, // Kecepatan transisi
        slidesToShow: 1, // Jumlah gambar yang tampil sekaligus
        slidesToScroll: 1, // Jumlah gambar yang di-scroll setiap kali
        autoplay: true, // Aktifkan autoplay
        autoplaySpeed: 3000, // Waktu antar gambar dalam ms
    };

    // Daftar gambar carousel
    const images = [
        "/storage/banner/beranda-1.webp",
        "/storage/banner/beranda-2.webp",
        "/storage/banner/beranda-3.webp",
    ];

    return (
        <Card
            radius={"none"}
            className="w-full h-full max-w-screen-xl col-span-12 mx-auto xl:rounded-b-xl sm:col-span-7"
        >
            <Slider {...settings} className=''>
                {images.map((src, index) => (
                    <Image
                        key={index}
                        removeWrapper
                        radius={"none"}
                        alt={`Banner ${index + 1}`}
                        className="z-0 object-cover w-full h-full"
                        src={src}
                    />
                ))}
            </Slider>
        </Card>
    );
};

export default BerandaHero;
