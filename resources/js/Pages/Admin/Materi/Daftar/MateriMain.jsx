import React from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from '@inertiajs/react';
const materiData = [
  { judul: "Matematika", kelas: "3 SD", thumbnail: "https://via.placeholder.com/100" },
  { judul: "Ilmu Pengetahuan Alam", kelas: "4 SD", thumbnail: "https://via.placeholder.com/100" },
  { judul: "Bahasa Indonesia", kelas: "5 SD", thumbnail: "https://via.placeholder.com/100" },
];

const MateriMain = () => {
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
                <TableHead className="text-center">Kelas</TableHead>
                <TableHead className="text-center">Thumbnail</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materiData.map((materi, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center font-medium">{materi.judul}</TableCell>
                  <TableCell className="text-center">{materi.kelas}</TableCell>
                  <TableCell className="text-center">
                    <img src={materi.thumbnail} alt={materi.judul} className="w-16 h-16 object-cover rounded-md" />
                  </TableCell>
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
};

export default MateriMain;
