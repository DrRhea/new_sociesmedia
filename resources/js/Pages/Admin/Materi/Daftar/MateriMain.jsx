import React, { useState } from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import 'boxicons/css/boxicons.min.css';

const MateriMain = ({ materi }) => {
  const [selectedMateri, setSelectedMateri] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMateri = materi.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (item) => {
    router.delete(`/dashboard/materi/manajemen-materi/delete/${item.id}`);
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
            placeholder="Cari judul materi..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 px-8 py-3"
          />

          {/* Actions: Status, Columns, Add New */}
          <div className="flex items-center space-x-2">
            <Link href='/dashboard/materi/manajemen-materi/create'>
              <Button className="text-white bg-black rounded-md hover:bg-gray-800">Tambah +</Button>
            </Link>
          </div>
        </div>

        {/* Tabel Data */}
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">No</TableHead>
                <TableHead className="text-center">Judul</TableHead>
                <TableHead className="text-center">Kelas</TableHead>
                <TableHead className="text-center">Thumbnail</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMateri.length > 0 ? (
                filteredMateri.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-center">{index + 1}</TableCell>
                    <TableCell className="font-medium text-center">{item.title}</TableCell>
                    <TableCell className="text-center">{item.grade}</TableCell>
                    <TableCell className="flex items-center justify-center text-center">
                      <img src={`/storage/${item.thumbnail}`} alt={item.title} className="object-cover w-16 h-16 rounded-md" />
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-2">
                        <Link href={`/dashboard/materi/manajemen-materi/edit/${item.slug}`} className="text-black hover:text-gray-700">
                          <i className='text-xl bx bx-edit-alt'></i>
                        </Link>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button onClick={() => setSelectedMateri(item)} className="text-black hover:text-gray-700">
                              <i className="text-xl bx bx-trash"></i>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                              <DialogDescription>
                                Apakah Anda yakin ingin menghapus materi <strong>{item.title}</strong>? Tindakan ini tidak dapat dibatalkan.
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
                    Belum ada data <strong>materi</strong> tersedia.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
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

export default MateriMain;
