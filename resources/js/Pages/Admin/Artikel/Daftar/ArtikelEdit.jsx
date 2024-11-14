import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import { Link } from '@inertiajs/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ArtikelEdit = ({ existingData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (existingData) {
      setTitle(existingData.title);
      setContent(existingData.content);
    }
  }, [existingData]);

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-auto rounded-xl flex items-center">
            <Link href='/dashboard/artikel/daftar-artikel/' className='border border-slate-950 py-1.5 px-4 inline-block rounded-lg'>
              Kembali
            </Link>
          </div>
          <div className="aspect-auto">
            Edit Data Artikel
          </div>
          <div className="aspect-auto rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <form className="w-full max-w-lg md:max-w-2xl space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title" className='mb-2'>Judul</Label>
              <Input
                type="text"
                id="title"
                placeholder="Judul"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-12"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="content" className='mb-2 mt-4'>Konten</Label>
              <Textarea
                id="content"
                placeholder="Konten"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-48"
              />
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

export default ArtikelEdit;
