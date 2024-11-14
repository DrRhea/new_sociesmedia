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
import { Link } from '@inertiajs/react';
import 'boxicons/css/boxicons.min.css';

const artikelItems = [
  { id: "1", title: "Artikel 1", content: "Ini adalah konten dari artikel 1." },
  { id: "2", title: "Artikel 2", content: "Ini adalah konten dari artikel 2." },
  // Data tambahan sesuai kebutuhan
];

const ArtikelMain = () => {
  const [selectedArtikel, setSelectedArtikel] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArtikel = artikelItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header Atas Tabel */}
        <div className="flex items-center justify-between mb-4">
          {/* Input Search */}
          <Input 
            type="text" 
            placeholder="Cari judul artikel..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 px-8 py-3"
          />

          {/* Actions: Status, Columns, Add New */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Aktif</DropdownMenuItem>
                <DropdownMenuItem>Non-Aktif</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Kolom</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Judul</DropdownMenuItem>
                <DropdownMenuItem>Konten</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href='/dashboard/artikel/create'>
              <Button className="bg-black text-white rounded-md hover:bg-gray-800">Tambah +</Button>
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
                <TableHead className="text-center">Konten</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArtikel.length > 0 ? (
                filteredArtikel.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium text-center">{index + 1}</TableCell>
                    <TableCell className="font-medium text-center">{item.title}</TableCell>
                    <TableCell className="text-center">{item.content}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-2">
                        <button className="text-black hover:text-gray-700">
                          <i className="text-xl bx bx-edit-alt"></i>
                        </button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button onClick={() => setSelectedArtikel(item)} className="text-black hover:text-gray-700">
                              <i className="text-xl bx bx-trash"></i>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                              <DialogDescription>
                                Apakah Anda yakin ingin menghapus artikel <strong>{item.title}</strong>? Tindakan ini tidak dapat dibatalkan.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="secondary" onClick={() => setSelectedArtikel(null)}>Batal</Button>
                              <Button 
                                className="bg-black text-white hover:bg-gray-800" 
                                onClick={() => {
                                  console.log(`Artikel ${item.title} deleted`);
                                  setSelectedArtikel(null);
                                }}
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
                  <TableCell colSpan={4} className="text-center py-4">
                    Belum ada data <strong>artikel</strong> tersedia.
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
}

export default ArtikelMain;
