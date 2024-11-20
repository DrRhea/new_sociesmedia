import React, { useState } from "react";
import AdminLayout from '@/Layout/AdminLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link, router } from '@inertiajs/react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const MultimediaMain = ({ multimedia = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMultimedia = multimedia.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (item) => {
    router.delete(`/dashboard/multimedia/manajemen-multimedia/delete/${item.id}`);
    setSelectedItem(null);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col flex-1 gap-4 p-4">

        {/* Header Atas Tabel */}
        <div className="flex items-center justify-between">
          {/* Input Search */}
          <Input 
            type="text" 
            placeholder="Cari judul multimedia..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 px-8 py-3"
          />

          <div className="flex items-center space-x-2">
            <Link href='/dashboard/multimedia/manajemen-multimedia/create'>
              <Button className="text-white bg-black rounded-md hover:bg-gray-800">Tambah +</Button>
            </Link>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="flex-1 p-4 rounded-xl bg-muted/50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">No</TableHead>
                <TableHead className="text-center">Thumbnail</TableHead>
                <TableHead className="text-center">Judul</TableHead>
                <TableHead className="text-center">Tipe</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMultimedia.length > 0 ? (
                filteredMultimedia.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-center">{index + 1}</TableCell>
                    <TableCell className="flex justify-center text-center">
                      <img src={`/storage/${item.thumbnail}`} alt={item.title} className="object-cover h-12 rounded aspect-video" />
                    </TableCell>
                    <TableCell className="font-medium text-center">{item.title}</TableCell>
                    <TableCell className="text-center">{item.type ? item.type.replace(/\b\w/g, char => char.toUpperCase()) : 'N/A'}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-2">
                        <Link href={`/dashboard/multimedia/manajemen-multimedia/edit/${item.slug}`} className="text-black hover:text-gray-700">
                          <i className="text-xl bx bx-edit-alt"></i>
                        </Link>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button onClick={() => setSelectedItem(item)} className="text-black hover:text-gray-700">
                              <i className="text-xl bx bx-trash"></i>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                              <DialogDescription>
                                Apakah Anda yakin ingin menghapus <strong>{item.title}</strong>? Tindakan ini tidak dapat dibatalkan.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button 
                                className="text-white bg-black hover:bg-gray-800" 
                                onClick={() => handleDelete(item)}
                              >
                                Hapus
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="py-4 text-center">
                    Tidak ada data multimedia tersedia.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MultimediaMain;
