import React, { useState } from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import { Link } from '@inertiajs/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Pastikan komponen-komponen ini tersedia di proyek Anda

const MultimediaEdit = () => {
  const [type, setType] = useState('video');

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-auto rounded-xl flex items-center">
            <Link href='/dashboard/multimedia/daftar-multimedia/' className='border border-slate-950 py-1.5 px-4 inline-block rounded-lg'>
              Kembali
            </Link>
          </div>
          <div className="aspect-auto">
            Edit Data Multimedia
          </div>
          <div className="aspect-auto rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <form className="w-full max-w-lg md:max-w-2xl space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title" className='mb-2'>Judul</Label>
              <Input type="text" id="title" placeholder="Judul" className="w-full border border-slate-950 rounded-lg h-12" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description" className='mb-2 mt-4'>Deskripsi</Label>
              <Textarea id="description" placeholder="Deskripsi" className="w-full border border-slate-950 rounded-lg h-32" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="type" className='mb-2 mt-4'>Tipe Konten</Label>
              <Select onValueChange={(value) => setType(value)}>
                <SelectTrigger className="w-full border border-slate-950 rounded-lg h-12">
                  <SelectValue placeholder="Pilih Tipe Konten" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="podcast">Podcast</SelectItem>
                    <SelectItem value="poster">Poster</SelectItem>
                    <SelectItem value="games">Games</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="content" className='mb-2 mt-4'>Konten</Label>
              {type === 'poster' ? (
                <Input id="content" type="file" className="w-full border border-slate-950 rounded-lg" />
              ) : (
                <Input type="url" id="content" placeholder="Masukkan URL" className="w-full border border-slate-950 rounded-lg h-12" />
              )}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="mt-4 py-2 px-4 bg-slate-950 text-white rounded-lg hover:bg-slate-800">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MultimediaEdit;
