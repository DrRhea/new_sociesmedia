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

const penelitiData = [
  { id: "1", nama: "Dr. Aulia", asal: "Jakarta", biografi: "Ahli bioteknologi yang berfokus pada penelitian genetik.", kontak: "aulia@example.com" },
  { id: "2", nama: "Prof. Budi", asal: "Surabaya", biografi: "Profesor ilmu lingkungan dengan pengalaman lebih dari 20 tahun.", kontak: "budi@example.com" },
  { id: "3", nama: "Dr. Citra", asal: "Bandung", biografi: "Spesialis riset kesehatan masyarakat.", kontak: "citra@example.com" },
];

const PenelitiMain = () => {
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
                <TableHead className="text-center">Nama</TableHead>
                <TableHead className="text-center">Asal</TableHead>
                <TableHead className="text-center">Biografi</TableHead>
                <TableHead className="text-center">Kontak</TableHead>
                <TableHead className="text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {penelitiData.map((peneliti, index) => (
                <TableRow key={peneliti.id}>
                  <TableCell className="text-center font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center font-medium">{peneliti.nama}</TableCell>
                  <TableCell className="text-center">{peneliti.asal}</TableCell>
                  <TableCell className="text-center">{peneliti.biografi}</TableCell>
                  <TableCell className="text-center">{peneliti.kontak}</TableCell>
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

export default PenelitiMain;
