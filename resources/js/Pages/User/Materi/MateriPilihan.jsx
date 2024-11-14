import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Pagination } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const MateriPilihan = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('');

  const list = [
    { title: "Materi A", img: "https://placehold.co/600x400?text=MateriA", category: 'kelasVII', status: 'available' },
    { title: "Materi B", img: "https://placehold.co/600x400?text=MateriB", category: 'kelasVIII', status: 'unavailable' },
    { title: "Materi C", img: "https://placehold.co/600x400?text=MateriC", category: 'kelasIX', status: 'available' },
    { title: "Materi D", img: "https://placehold.co/600x400?text=MateriD", category: 'kelasVII', status: 'available' },
    // More items...
  ];

  const filteredList = list.filter(item => 
    (activeTab === 'all' || item.category === activeTab) &&
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (categoryFilter ? item.category === categoryFilter : true)
  );

  return (
    <div className="bg-white">
      <main className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <div className="pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Materi Pembelajaran</h1>
          <p className="mt-2 text-base text-gray-500">
            Pilih materi untuk menemukan konten yang Anda butuhkan.
          </p>
        </div>

        <div className="mt-4 lg:flex lg:gap-x-8">
          <div className="w-full lg:col-span-3 lg:mt-0">
            <div className="flex items-center justify-between mb-6">
              <Input
                isClearable
                className="w-full sm:max-w-[44%]"
                placeholder="Cari berdasarkan judul..."
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />

              <div className="flex gap-3">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="flat">Kategori</Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Filter berdasarkan kategori"
                    onAction={setCategoryFilter}
                  >
                    <DropdownItem key="kelasVII">Kelas VII</DropdownItem>
                    <DropdownItem key="kelasVIII">Kelas VIII</DropdownItem>
                    <DropdownItem key="kelasIX">Kelas IX</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="flat">Status</Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Filter berdasarkan status"
                    onAction={setCategoryFilter}
                  >
                    <DropdownItem key="available">Tersedia</DropdownItem>
                    <DropdownItem key="unavailable">Tidak Tersedia</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredList.map((item, index) => (
                <Link href="#" key={index} className="block group">
                  <Card isPressable isHoverable>
                    <CardBody>
                      <Image src={item.img} alt={item.title} />
                    </CardBody>
                    <CardFooter>
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <p className="text-sm capitalize">{item.category}</p>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MateriPilihan;
