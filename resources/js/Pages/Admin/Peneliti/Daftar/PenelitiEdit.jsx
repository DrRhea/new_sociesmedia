import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layout/AdminLayout';
import { Link } from '@inertiajs/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/Components/ui/button';

const PenelitiEdit = ({ existingData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [biography, setBiography] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [picture, setPicture] = useState('');

  useEffect(() => {
    if (existingData) {
      setName(existingData.name);
      setEmail(existingData.email);
      setFieldOfStudy(existingData.field_of_study);
      setBiography(existingData.biography);
      setContactInfo(existingData.contact_info);
      setPicture(existingData.picture);
    }
  }, [existingData]);

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-auto rounded-xl flex items-center">
            <Link href='/dashboard/peneliti/daftar-peneliti/' className='border border-slate-950 py-1.5 px-4 inline-block rounded-lg'>
              Kembali
            </Link>
          </div>
          <div className="aspect-auto font-semibold text-xl">
            Edit Data Peneliti
          </div>
          <div className="aspect-auto rounded-xl bg-muted/50" />
        </div>
        <div className="min-h-[100vh] flex-1 md:min-h-min p-4">
          <form className="w-full max-w-lg md:max-w-2xl space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name" className='mb-2'>Nama</Label>
              <Input
                type="text"
                id="name"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-12"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className='mb-2 mt-4'>Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-12"
                readOnly
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="field_of_study" className='mb-2 mt-4'>Bidang Studi</Label>
              <Input
                type="text"
                id="field_of_study"
                placeholder="Bidang Studi"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-12"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="biography" className='mb-2 mt-4'>Biografi</Label>
              <Textarea
                id="biography"
                placeholder="Biografi"
                value={biography}
                onChange={(e) => setBiography(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-32"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="contact_info" className='mb-2 mt-4'>Informasi Kontak</Label>
              <Input
                type="text"
                id="contact_info"
                placeholder="Informasi Kontak"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="w-full border border-slate-950 rounded-lg h-12"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="picture" className='mb-2 mt-4'>Foto</Label>
              <Input
                type="file"
                id="picture"
                onChange={(e) => setPicture(e.target.files[0])}
                className="w-full border border-slate-950 rounded-lg"
              />
              {picture && (
                <div className="mt-2">
                  <p>Foto saat ini: {picture.name || 'Tersedia'}</p>
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="mt-4 py-2 px-4 bg-slate-950 text-white rounded-lg hover:bg-slate-800">
                Simpan Perubahan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default PenelitiEdit;
