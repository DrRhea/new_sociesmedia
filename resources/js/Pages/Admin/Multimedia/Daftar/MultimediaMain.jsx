import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import 'boxicons/css/boxicons.min.css';
import AdminLayout from '@/Layout/AdminLayout';
import { Link } from '@inertiajs/react';

const mediaItems = [
  { 
    id: "1", 
    title: "Media Title 1", 
    thumbnail: "https://via.placeholder.com/50", 
    description: "Deskripsi singkat media 1", 
    status: "Published" 
  },
  // Anda dapat menambahkan item lain sesuai kebutuhan
];

const MultimediaMain = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl flex justify-end items-end">
            <Link href='/dashboard/multimedia/daftar-multimedia/create' className='mr-16 inline-block py-2 px-4 bg-slate-950 text-slate-50 rounded-lg'>
              Tambah Data
            </Link>
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">No</TableHead>
                <TableHead className="text-center">Judul</TableHead>
                <TableHead className="text-center">Thumbnail</TableHead>
                <TableHead className="text-center">Deskripsi</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mediaItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center font-medium">{item.title}</TableCell>
                  <TableCell className="text-center">
                    <img src={item.thumbnail} alt={item.title} className="w-12 h-12 rounded" />
                  </TableCell>
                  <TableCell className="text-center">{item.description}</TableCell>
                  <TableCell className="text-center">{item.status}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center space-x-2">
                      <a href="#" className="text-black hover:text-gray-700">
                        <i className='bx bx-edit-alt text-xl'></i>
                      </a>
                      <Dialog>
                        <DialogTrigger asChild>
                          <a href="#" onClick={() => setSelectedItem(item)} className="text-black hover:text-gray-700">
                            <i className='bx bx-trash text-xl'></i>
                          </a>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Konfirmasi Penghapusan</DialogTitle>
                            <DialogDescription>
                              Apakah Anda yakin ingin menghapus <strong>{item.title}</strong>? Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button variant="secondary" onClick={() => setSelectedItem(null)}>Batal</Button>
                            <Button variant="destructive" onClick={() => {
                              // Add your delete logic here
                              console.log(`Item ${item.title} deleted`);
                              setSelectedItem(null);
                            }}>Hapus</Button>
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

export default MultimediaMain;
