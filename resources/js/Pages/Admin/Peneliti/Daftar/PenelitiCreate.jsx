import React, { useState } from 'react';
import { useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Layout/AdminLayout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/Components/ui/button';

const PenelitiCreate = () => {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    fieldOfStudy: '',
    biography: '',
    contactInfo: '',
    picture: null,
  });

  function submit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('field_of_study', data.fieldOfStudy);
    formData.append('biography', data.biography);
    formData.append('contact_info', data.contactInfo);
    formData.append('picture', data.picture);

    post('/dashboard/peneliti/daftar-peneliti/create', {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-auto rounded-xl flex items-center">
            <Link href='/dashboard/peneliti/daftar-peneliti/'>
              <Button variant="outline">Kembali</Button>
            </Link>
          </div>
          <div className="aspect-auto font-semibold text-xl">Tambah Data Peneliti</div>
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <form onSubmit={submit} className="w-full mx-auto space-y-4">
            {/* Nama */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name" className='mb-2'>Nama</Label>
              <Input 
                type="text" 
                id="name" 
                placeholder="Nama" 
                value={data.name} 
                onChange={e => setData('name', e.target.value)} 
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>

            {/* Email */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className='mb-2'>Email</Label>
              <Input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={data.email} 
                onChange={e => setData('email', e.target.value)} 
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>

            {/* Bidang Studi */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="field_of_study" className='mb-2'>Bidang Studi</Label>
              <Input 
                type="text" 
                id="field_of_study" 
                placeholder="Bidang Studi" 
                value={data.fieldOfStudy} 
                onChange={e => setData('fieldOfStudy', e.target.value)} 
              />
              {errors.fieldOfStudy && <div className="text-red-500">{errors.fieldOfStudy}</div>}
            </div>

            {/* Biografi */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="biography" className='mb-2'>Biografi</Label>
              <Textarea
                placeholder="Biografi"
                value={data.biography}
                onChange={(e) => setData('biography', e.target.value)}
                rows={4}
                className="border rounded-md p-2"
              />
              {errors.biography && <div className="text-red-500">{errors.biography}</div>}
            </div>

            {/* Informasi Kontak */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact_info" className='mb-2'>Informasi Kontak</Label>
              <Input 
                type="text" 
                id="contact_info" 
                placeholder="Informasi Kontak" 
                value={data.contactInfo} 
                onChange={e => setData('contactInfo', e.target.value)} 
              />
              {errors.contactInfo && <div className="text-red-500">{errors.contactInfo}</div>}
            </div>

            {/* Foto */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="picture" className='mb-2'>Foto</Label>
              <Input 
                type="file" 
                id="picture" 
                onChange={e => setData('picture', e.target.files[0])} 
              />
              {errors.picture && <div className="text-red-500">{errors.picture}</div>}
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
              <div className="text-red-500 bg-red-100 p-4 rounded-lg">
                {errors.general}
              </div>
            )}
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default PenelitiCreate;
