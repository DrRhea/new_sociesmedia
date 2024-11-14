import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layout/AdminLayout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

const MateriEdit = ({ existingData }) => {
  const { data, setData, put, processing, errors } = useForm({
    title: existingData?.title || '',
    description: existingData?.description || '',
    content: existingData?.content || '',
    kelas: existingData?.kelas || 'VII',
  });

  function submit(e) {
    e.preventDefault();
    put(`/dashboard/materi/daftar-materi/${existingData.id}/update`, {
      data,
    });
  }

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-auto rounded-xl flex items-center">
            <Link href='/dashboard/materi/daftar-materi/'>
              <Button variant="outline">Kembali</Button>
            </Link>
          </div>
          <div className="aspect-auto font-semibold text-xl">Edit Data Materi</div>
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <form onSubmit={submit} className="w-full mx-auto space-y-4">
            {/* Judul */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title" className='mb-2'>Judul</Label>
              <Input
                type="text"
                id="title"
                placeholder="Judul"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                className="border rounded-md p-2 font-sans text-sm"
              />
              {errors.title && <div className="text-red-500">{errors.title}</div>}
            </div>

            {/* Deskripsi */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description" className='mb-2 mt-4'>Deskripsi</Label>
              <Textarea
                id="description"
                placeholder="Masukkan deskripsi materi di sini."
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                rows={10}
                className="border rounded-md p-2 font-sans text-sm"
              />
              {errors.description && <div className="text-red-500">{errors.description}</div>}
            </div>

            {/* Konten - Input File */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="content" className='mb-2 mt-4'>Konten</Label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-12 p-2"
                id="file_input"
                type="file"
                onChange={(e) => setData('content', e.target.files[0])}
              />
              {errors.content && <div className="text-red-500">{errors.content}</div>}
            </div>

            {/* Kelas */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="kelas" className='mb-2 mt-4'>Kelas</Label>
              <Select
                onValueChange={(value) => setData('kelas', value)}
                value={data.kelas}
              >
                <SelectTrigger className="w-full border border-slate-950 rounded-lg h-12">
                  <SelectValue placeholder="Pilih Kelas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="VII">VII</SelectItem>
                    <SelectItem value="VIII">VIII</SelectItem>
                    <SelectItem value="IX">IX</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.kelas && <div className="text-red-500">{errors.kelas}</div>}
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end">
              <Button
                className="rounded-md bg-slate-950 hover:bg-slate-800"
                type="submit"
                disabled={processing}
              >
                Simpan Perubahan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MateriEdit;
