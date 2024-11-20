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
    field_of_study: '',
    biography: '',
    contact_info: '',
    picture: null,
    sinta_id: '',
  });

  function submit(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('field_of_study', data.field_of_study);
    formData.append('biography', data.biography);
    formData.append('contact_info', data.contact_info);
    formData.append('picture', data.picture);
    formData.append('sinta_id', data.sinta_id);

    post('/dashboard/peneliti/manajemen-peneliti/tambah-peneliti', formData, {
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
            <Link href='/dashboard/peneliti/manajemen-peneliti/'>
              <Button variant="outline">Kembali</Button>
            </Link>
          </div>
          <div className="text-xl font-semibold aspect-auto">Tambah Data Peneliti</div>
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <form onSubmit={submit} className="w-full mx-auto space-y-4">

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
                value={data.field_of_study} 
                onChange={e => setData('field_of_study', e.target.value)} 
              />
              {errors.field_of_study && <div className="text-red-500">{errors.field_of_study}</div>}
            </div>

            {/* Biografi */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="biography" className='mb-2'>Biografi <span className='ml-1 text-sm text-gray-500'>(opsional)</span></Label>
              <Textarea
                placeholder="Biografi"
                value={data.biography}
                onChange={(e) => setData('biography', e.target.value)}
                rows={4}
                className="p-2 border rounded-md"
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
                value={data.contact_info} 
                onChange={e => setData('contact_info', e.target.value)} 
              />
              {errors.contact_info && <div className="text-red-500">{errors.contact_info}</div>}
            </div>

            {/* ID Sinta */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="sinta_id" className='mb-2'>ID Sinta <span className='ml-1 text-sm text-gray-500'>(opsional)</span></Label>
              <Input 
                type="text" 
                id="sinta_id" 
                placeholder="ID Sinta" 
                value={data.sinta_id} 
                onChange={e => setData('sinta_id', e.target.value)} 
              />
              {errors.sinta_id && <div className="text-red-500">{errors.sinta_id}</div>}
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

export default PenelitiCreate;
