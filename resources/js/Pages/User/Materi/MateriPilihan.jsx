import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import { Link } from "@inertiajs/react";

const MateriPilihan = ({ materi }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filteredMateri, setFilteredMateri] = useState(materi);

  useEffect(() => {
    filterMateri();
  }, [searchQuery, categoryFilter, statusFilter]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterMateri = () => {
    let filtered = materi;

    // Filter berdasarkan pencarian
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter berdasarkan kategori
    if (categoryFilter) {
      filtered = filtered.filter(item =>
        item.grade.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    setFilteredMateri(filtered);
  };

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
                onChange={handleSearch}
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
                    <DropdownItem key="">Semua Kategori</DropdownItem>
                    <DropdownItem key="kelasVII">Kelas VII</DropdownItem>
                    <DropdownItem key="kelasVIII">Kelas VIII</DropdownItem>
                    <DropdownItem key="kelasIX">Kelas IX</DropdownItem>
                    <DropdownItem key="umum">Umum</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMateri.map((item, index) => (
                <div key={index}>
                  <Link href={`/materi/${item.slug}`} className="block group">
                    <Card isHoverable>
                      <CardBody>
                        <Image src={`/storage/${item.thumbnail}`} alt={item.title} />
                      </CardBody>
                      <CardFooter>
                        <h2 className="text-lg font-bold">{item.title}</h2>
                      </CardFooter>
                      <span className="absolute z-20 px-3 py-2 text-sm text-white capitalize rounded-full bg-blue-500/90 top-4 right-4">
                        {item.grade}
                      </span>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MateriPilihan;
