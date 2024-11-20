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

const MateriEdit = ({ materi }) => {
  const { data, setData, put, processing, errors } = useForm({
    title: materi?.title || '',
    description: materi?.description || '',
    thumbnail: null,
    content: null,
    grade: materi?.grade || 'VII',
  });

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('thumbnail', data.thumbnail);
    formData.append('content', data.content);
    formData.append('grade', data.grade);

    put(`/dashboard/materi/manajemen-materi/edit/${materi.slug}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  return (
    <AdminLayout>
      <div className="flex flex-col flex-1 gap-4 p-4">
        <div className="grid gap-4 auto-rows-min md:grid-cols-3">
          <div className="flex items-center aspect-auto rounded-xl">
            <Link href='/dashboard/materi/manajemen-materi/'>
              <Button variant="outline">Kembali</Button>
            </Link>
          </div>
          <div className="text-xl font-semibold aspect-auto">Edit Data Materi</div>
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4 bg-white rounded-lg">
          <form onSubmit={submit} className="w-full mx-auto space-y-6">
            {/* Judul */}
            <div className="grid items-center w-full gap-2">
              <Label htmlFor="title" className='text-sm font-medium'>Judul</Label>
              <Input
                type="text"
                id="title"
                placeholder="Judul"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
                className="p-2 text-sm border border-gray-300 rounded-md"
              />
              {errors.title && <div className="text-sm text-red-500">{errors.title}</div>}
            </div>

            {/* Deskripsi */}
            <div className="grid items-center w-full gap-2">
              <Label htmlFor="description" className='text-sm font-medium'>Deskripsi</Label>
              <Textarea
                id="description"
                placeholder="Masukkan deskripsi materi di sini."
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                rows={5}
                className="p-2 text-sm border border-gray-300 rounded-md"
              />
              {errors.description && <div className="text-sm text-red-500">{errors.description}</div>}
            </div>

            {/* Thumbnail (Opsional) */}
            <div className="grid items-center w-full gap-2">
              <Label htmlFor="thumbnail" className="text-sm font-medium">Thumbnail (opsional)</Label>
              <Input
                id="thumbnail"
                type="file"
                onChange={(e) => setData('thumbnail', e.target.files[0])}
                className="p-2 text-sm border border-gray-300 rounded-md"
              />
              {errors.thumbnail && <div className="text-sm text-red-500">{errors.thumbnail}</div>}
            </div>

            {/* Upload File Konten */}
            <div className="grid items-center w-full gap-2">
              <Label htmlFor="content" className="text-sm font-medium">Konten</Label>
              <Input
                id="content"
                type="file"
                onChange={(e) => setData('content', e.target.files[0])}
                className="p-2 text-sm border border-gray-300 rounded-md"
              />
              {errors.content && <div className="text-sm text-red-500">{errors.content}</div>}
            </div>

            {/* Grade */}
            <div className="grid items-center w-full gap-2">
              <Label htmlFor="grade" className='text-sm font-medium'>Kelas</Label>
              <Select
                onValueChange={(value) => setData('grade', value)}
                value={data.grade}
              >
                <SelectTrigger className="w-full h-12 border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Pilih Kelas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="VII">VII</SelectItem>
                    <SelectItem value="VIII">VIII</SelectItem>
                    <SelectItem value="IX">IX</SelectItem>
                    <SelectItem value="Umum">Umum</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.grade && <div className="text-sm text-red-500">{errors.grade}</div>}
            </div>

            {/* Tombol Submit */}
            <div className="flex justify-end mt-4">
              <Button
                className="px-6 py-2 text-white bg-black rounded-md hover:bg-gray-800"
                type="submit"
                disabled={processing}
              >
                Simpan
              </Button>
            </div>
            {errors.general && (
              <div className="p-4 text-sm text-red-600 bg-red-100 rounded-md">
                {errors.general}
              </div>
            )}
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MateriEdit;
