import React, { useState } from 'react';
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
import 'boxicons/css/boxicons.min.css';

const guruItems = [
  { 
    id: "1", 
    nip: "1987654321", 
    nama: "Budi Santoso", 
    jenisKelamin: "Laki-laki" 
  },
  { 
    id: "2", 
    nip: "1987654322", 
    nama: "Siti Aminah", 
    jenisKelamin: "Perempuan" 
  },
  // Data tambahan sesuai kebutuhan
];

const GuruMain = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">No</TableHead>
                <TableHead className="text-center">NIP</TableHead>
                <TableHead className="text-center">Nama</TableHead>
                <TableHead className="text-center">Jenis Kelamin</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guruItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center font-medium">{item.nip}</TableCell>
                  <TableCell className="text-center font-medium">{item.nama}</TableCell>
                  <TableCell className="text-center font-medium">{item.jenisKelamin}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="text-black hover:text-gray-700">
                        <i className='bx bx-edit-alt text-xl'></i>
                      </button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button onClick={() => setSelectedItem(item)} className="text-black hover:text-gray-700">
                            <i className='bx bx-trash text-xl'></i>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                            <DialogDescription>
                              Apakah Anda yakin ingin menghapus <strong>{item.nama}</strong>? Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button variant="secondary" onClick={() => setSelectedItem(null)}>Batal</Button>
                            <Button 
                              className="bg-black text-white hover:bg-gray-800" 
                              onClick={() => {
                                // Tambahkan logika hapus di sini
                                console.log(`Item ${item.nama} deleted`);
                                setSelectedItem(null);
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
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default GuruMain;
