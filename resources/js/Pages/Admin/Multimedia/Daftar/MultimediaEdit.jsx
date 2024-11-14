import React, { useState } from 'react';
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/Components/ui/button';

const MultimediaEdit = ({ multimedia }) => {
  const [type, setType] = useState(multimedia.type || 'video');  // Set initial type from multimedia data
  const [selectedType, setSelectedType] = useState(multimedia.type || '');

  const { data, setData, post, put, processing, errors } = useForm({
    thumbnail: null,
    title: multimedia.title || '',  // Initial value from multimedia data
    description: multimedia.description || '',
    type: multimedia.type || 'video',
    content: multimedia.content || '',
  });

  function submit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('thumbnail', data.thumbnail);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('type', data.type);
    formData.append('content', type === 'poster' && data.content instanceof File ? data.content : data.content);

    // Pastikan menggunakan metode `put` untuk pengiriman data
    put(`/dashboard/multimedia/manajemen-multimedia/edit/${multimedia.slug}`, formData, {
      method: 'put',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  return (
    <AdminLayout>
      <div className="flex flex-col flex-1 gap-4 p-4">
        <div className="grid gap-4 auto-rows-min md:grid-cols-3">
          <div className="flex items-center aspect-auto rounded-xl">
            <Link href='/dashboard/multimedia/manajemen-multimedia/'>
              <Button variant="outline">Kembali</Button>
            </Link>
          </div>
          <div className="text-xl font-semibold aspect-auto">Perbarui Data Multimedia</div>
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <div>
            <img src={`/storage/${multimedia.thumbnail}`} alt="" className='mb-4 aspect-video max-w-[500px] rounded object-cover object-top' />
          </div>
          <form onSubmit={submit} className="w-full mx-auto space-y-4">
            {/* Thumbnail */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="thumbnail">Thumbnail</Label>
              <Input 
                id="thumbnail" 
                type="file"
                onChange={e => setData('thumbnail', e.target.files[0])}
              />
              {errors.thumbnail && <div>{errors.thumbnail}</div>}
            </div>

            {/* Judul */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title" className='mb-2'>Judul</Label>
              <Input 
                type="text" 
                id="title" 
                placeholder="Judul" 
                value={data.title}  // Update to use data.title
                onChange={e => setData('title', e.target.value)}
              />
              {errors.title && (
                <div className="p-2 text-sm text-red-600 bg-red-100 rounded-md">
                  {errors.title}
                </div>
              )}
            </div>

            <div className="grid items-center w-full gap-2">
              <Label htmlFor="description" className='text-sm font-medium'>Deskripsi</Label>
              <Textarea
                id="description"
                placeholder="Masukkan deskripsi materi di sini."
                value={data.description}  // Update to use data.description
                onChange={(e) => setData('description', e.target.value)}
                rows={5}
                className="p-2 text-sm border border-gray-300 rounded-md"
              />
              {errors.description && <div className="text-sm text-red-500">{errors.description}</div>}
            </div>

            {/* Tipe Konten */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="type" className="mt-4 mb-2">Tipe Konten</Label>
              <Select 
                onValueChange={(value) => {
                  setSelectedType(value);
                  setData('type', value);
                }}
                value={selectedType}
              >
                <SelectTrigger>
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
              {errors.type && <div>{errors.type}</div>}
            </div>

            {/* Konten */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="content" className='mt-4 mb-2'>Konten</Label>
              {selectedType === 'poster' ? (
                <>
                  <Input 
                    id="content" 
                    type="file" 
                    onChange={e => setData('content', e.target.files[0])} 
                  />
                  {multimedia.type === 'poster' && 
                    <div>
                      <img src={`/storage/${multimedia.content}`} alt="" className='mt-4 max-w-[500px] rounded' />
                    </div>
                  }
                </>
              ) : (
                <Input 
                  type="url" 
                  id="content" 
                  placeholder="Masukkan URL" 
                  value={data.content}  // Update to use data.content
                  onChange={e => setData('content', e.target.value)} 
                />
              )}
              {errors.content && <div>{errors.content}</div>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button
                className='rounded-md bg-slate-950 hover:bg-slate-800'
                type="submit" 
                disabled={processing}
              >
                Simpan
              </Button>
            </div>
            {errors.general && (
              <div className="p-4 text-red-500 bg-red-100 rounded-lg">
                {errors.general}
              </div>
            )}
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default MultimediaEdit;
