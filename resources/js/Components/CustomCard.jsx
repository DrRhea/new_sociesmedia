import React from 'react';
import { Card, Button } from "@nextui-org/react";

const CustomCard = () => {
  return (
    <Card className="w-[250px] h-auto p-6 rounded-2xl bg-gray-200 shadow-md text-center">
      {/* Gambar */}
      <div className="h-40 mb-4 bg-gray-300 rounded-lg">
        <img
          src="https://placehold.co/400x200?text=Sociesmedia"
          alt="Statistik Pendidikan Tinggi"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Teks Deskripsi */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">Statistik Pendidikan Tinggi Tahun 2019</h4>
      </div>

      {/* Tombol Unduh */}
      <Button
        auto
        className="w-full mt-4 font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
      >
        Unduh <span className="ml-2">⬇️</span>
      </Button>
    </Card>
  );
};

export default CustomCard;
