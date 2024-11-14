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

const PenelitiMain = ({ researchers }) => {
  const [selectedPeneliti, setSelectedPeneliti] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResearchers = researchers.filter((item) =>
    item.nama && item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header Atas Tabel */}
        <div className="flex items-center justify-between mb-4">
          {/* Input Search */}
          <Input 
            type="text" 
            placeholder="Cari nama peneliti..." 
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
                <DropdownMenuItem>Nama</DropdownMenuItem>
                <DropdownMenuItem>Asal</DropdownMenuItem>
                <DropdownMenuItem>Biografi</DropdownMenuItem>
                <DropdownMenuItem>Kontak</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href='/dashboard/peneliti/daftar-peneliti/tambah-peneliti'>
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
                <TableHead className="text-center">Nama</TableHead>
                <TableHead className="text-center">Asal</TableHead>
                <TableHead className="text-center">Biografi</TableHead>
                <TableHead className="text-center">Kontak</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResearchers.length > 0 ? (
                filteredResearchers.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center font-medium">{index + 1}</TableCell>
                    <TableCell className="text-center font-medium">{item.nama}</TableCell>
                    <TableCell className="text-center">{item.asal}</TableCell>
                    <TableCell className="text-center">{item.biografi}</TableCell>
                    <TableCell className="text-center">{item.kontak}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center space-x-2">
                        <Link href={`/dashboard/peneliti/daftar-peneliti/edit/${item.id}`} className="text-black hover:text-gray-700">
                          <i className='bx bx-edit-alt text-xl'></i>
                        </Link>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button onClick={() => setSelectedPeneliti(item)} className="text-black hover:text-gray-700">
                              <i className="bx bx-trash text-xl"></i>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                              <DialogDescription>
                                Apakah Anda yakin ingin menghapus peneliti <strong>{item.nama}</strong>? Tindakan ini tidak dapat dibatalkan.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="secondary" onClick={() => setSelectedPeneliti(null)}>Batal</Button>
                              <Button 
                                className="bg-black text-white hover:bg-gray-800" 
                                onClick={() => {
                                  // Tambahkan logika hapus di sini
                                  console.log(`Peneliti ${item.nama} deleted`);
                                  setSelectedPeneliti(null);
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
                  <TableCell colSpan={6} className="text-center py-4">
                    Belum ada data <strong>peneliti</strong> tersedia.
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

export default PenelitiMain;
