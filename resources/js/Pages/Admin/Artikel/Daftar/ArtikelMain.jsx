import React from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Pastikan path ini sesuai dengan proyek Anda
import 'boxicons/css/boxicons.min.css';
import { Link } from '@inertiajs/react';

const artikelItems = [
  { 
    id: "1", 
    title: "Artikel 1", 
    content: "Ini adalah konten dari artikel 1 yang menjelaskan topik tertentu.", 
  },
  { 
    id: "2", 
    title: "Artikel 2", 
    content: "Ini adalah konten dari artikel 2 yang membahas topik yang berbeda.", 
  },
];

const ArtikelMain = () => {
  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl flex justify-end items-end" > 
            <Link href='' className='mr-16 inline-block py-2 px-4 bg-slate-950 text-slate-50 rounded-lg'>
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
                <TableHead className="text-center">Konten</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {artikelItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center font-medium">{item.title}</TableCell>
                  <TableCell className="text-center">{item.content}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="text-black hover:text-gray-700">
                        <i className="bx bx-edit-alt text-xl"></i>
                      </button>
                      <button className="text-black hover:text-gray-700">
                        <i className="bx bx-trash text-xl"></i>
                      </button>
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
}

export default ArtikelMain;
