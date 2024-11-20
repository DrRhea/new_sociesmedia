import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Pagination } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const MultimediaPilihan = ({ multimedia }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('semua'); // Pastikan nilai awal 'semua'
  const [selectedTypeLabel, setSelectedTypeLabel] = useState('Tipe Multimedia'); // Label untuk button
  const [filteredMultimedia, setFilteredMultimedia] = useState(multimedia);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    filterMultimedia(value, selectedType);
  };

  const handleFilter = (type) => {
    setSelectedType(type);
    
    // Tentukan label yang akan ditampilkan pada button
    if (type === 'semua') {
      setSelectedTypeLabel('Tipe Multimedia');
    } else {
      setSelectedTypeLabel(type.charAt(0).toUpperCase() + type.slice(1));
    }

    filterMultimedia(searchTerm, type);
  };

  const filterMultimedia = (search, type) => {
    let filtered = multimedia;

    // Filter berdasarkan pencarian
    if (search) {
      filtered = filtered.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    }

    // Filter berdasarkan tipe multimedia jika bukan 'semua'
    if (type !== 'semua') {
      filtered = filtered.filter(item => item.type === type);
    }

    setFilteredMultimedia(filtered);
  };

  return (
    <div className="bg-white">
      <main className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Multimedia</h1>
          <p className="mt-2 text-base text-gray-500">
            Pilih multimedia untuk menemukan konten yang Anda butuhkan.
          </p>
        </div>

        <div className="mt-4 lg:flex lg:gap-x-8">
          <div className="w-full lg:col-span-3 lg:mt-0">
            <div className="flex items-end justify-between gap-3 mt-2 mb-6 max-sm:flex-col">
              {/* Search Bar */}
              <Input
                isClearable
                className="w-full sm:max-w-[44%]"
                placeholder="Cari multimedia..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="flex gap-3">
                {/* Filter Dropdown */}
                <Dropdown>
                  <DropdownTrigger className="flex">
                    <Button variant="flat">
                      {selectedTypeLabel}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="Filter berdasarkan tipe"
                    closeOnSelect={false}
                    selectionMode="single"
                  >
                    <DropdownItem onClick={() => handleFilter('semua')}>
                      Semua
                    </DropdownItem>
                    <DropdownItem onClick={() => handleFilter('video')}>
                      Video
                    </DropdownItem>
                    <DropdownItem onClick={() => handleFilter('podcast')}>
                      Podcast
                    </DropdownItem>
                    <DropdownItem onClick={() => handleFilter('games')}>
                      Games
                    </DropdownItem>
                    <DropdownItem onClick={() => handleFilter('poster')}>
                      Poster
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMultimedia.map((item, index) => (
                <Link href={`/multimedia/${item.slug}`} className="block group" key={index}>
                  <Card isHoverable className='relative'>
                    <CardBody>
                      <Image src={`./storage/${item.thumbnail}`} alt={item.title} className='object-cover aspect-video' />
                    </CardBody>
                    <CardFooter className='flex flex-col'>
                      <h2 className="text-lg font-bold">{item.title}</h2>
                    </CardFooter>
                    <span className='absolute z-20 px-3 py-1.5 text-sm text-white rounded-full bg-blue-500/90 top-4 right-4'>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <div className='flex justify-center mt-8'>
          <Pagination showControls total={10} initialPage={1} />
        </div> */}
      </main>
    </div>
  );
};

export default MultimediaPilihan;