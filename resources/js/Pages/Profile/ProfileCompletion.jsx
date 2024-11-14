import React from 'react'
import { Tabs, Tab, Input, Link, Button, Card, CardBody, DatePicker, Select, SelectItem, Textarea, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useForm } from '@inertiajs/react';

const ProfileCompletion = () => {
  const [selected, setSelected] = React.useState("murid");

  const dataKota = [
    { value: 'jakarta', label: 'Jakarta' },
    { value: 'surabaya', label: 'Surabaya' },
    { value: 'bandung', label: 'Bandung' },
    { value: 'medan', label: 'Medan' },
    { value: 'semarang', label: 'Semarang' },
    { value: 'yogyakarta', label: 'Yogyakarta' },
    { value: 'makassar', label: 'Makassar' },
    { value: 'palembang', label: 'Palembang' },
    { value: 'batam', label: 'Batam' },
    { value: 'denpasar', label: 'Denpasar' },
    { value: 'malang', label: 'Malang' },
    { value: 'tangerang', label: 'Tangerang' },
    { value: 'bekasi', label: 'Bekasi' },
    { value: 'bali', label: 'Bali' },
    { value: 'banjarmasin', label: 'Banjarmasin' },
    { value: 'cirebon', label: 'Cirebon' },
    { value: 'solo', label: 'Solo' },
    { value: 'samarinda', label: 'Samarinda' },
    { value: 'palangkaraya', label: 'Palangkaraya' },
    { value: 'pekanbaru', label: 'Pekanbaru' },
    { value: 'ambon', label: 'Ambon' },
    { value: 'kupang', label: 'Kupang' },
    { value: 'jambi', label: 'Jambi' },
    { value: 'bengkulu', label: 'Bengkulu' },
    { value: 'padang', label: 'Padang' },
    { value: 'riau', label: 'Riau' },
    { value: 'gorontalo', label: 'Gorontalo' },
    { value: 'mataram', label: 'Mataram' },
    { value: 'bima', label: 'Bima' },
    { value: 'kendari', label: 'Kendari' },
    { value: 'manado', label: 'Manado' },
    { value: 'tual', label: 'Tual' },
  ];

  // Form handling untuk siswa
  const { data: studentData, setData: setStudentData, post: postStudent } = useForm({
    nis: '',
    place: '',
    birth_date: '',
    gender: 'male',
    phone: '',
    address: '',
    school: '',
    grade: '7',
  });

  // Form handling untuk guru
  const { data: teacherData, setData: setTeacherData, post: postTeacher } = useForm({
    nip: '',
    place: '',
    birth_date: '',
    gender: 'male',
    phone: '',
    address: '',
    school: '',
    position: 'class_teacher',
  });

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    postStudent('profile/student');
  };

  const handleTeacherSubmit = (e) => {
    e.preventDefault();
    postTeacher('profile/teacher');
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen border '>
      <div className="flex flex-col">
        <Card className="max-w-full w-[500px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="murid" title="Murid" className='h-full'>
                <form className="flex flex-col gap-4 h-full justify-between" onSubmit={handleStudentSubmit}>
                  <div className='flex flex-col gap-4'>
                    <Input 
                      isRequired 
                      label="Nomor Induk Siswa" 
                      type="text" 
                      value={studentData.nis}
                      onChange={(e) => setStudentData('nis', e.target.value)}
                    />
                    <Select label="Kota" onChange={(e) => setStudentData('place', e.target.value)}>
                    {dataKota
                      .sort((a, b) => a.label.localeCompare(b.label)) // Mengurutkan data berdasarkan label
                      .map(kota => (
                        <SelectItem key={kota.value} value={kota.value}>
                          {kota.label}
                        </SelectItem>
                      ))}
                        <SelectItem key={'luar-negeri'} value={'luar-negeri'}>
                          Luar Negeri
                        </SelectItem>
                    </Select>
                    <DatePicker 
                      isRequired 
                      label="Tanggal Lahir" 
                      onChange={(date) => {
                        // Memeriksa apakah date adalah objek dengan struktur yang diharapkan
                        if (date && date.year && date.month && date.day) {
                          // Membuat objek Date dari tahun, bulan, dan hari
                          const birthDate = new Date(date.year, date.month - 1, date.day); // bulan dimulai dari 0
                          const formattedDate = birthDate.toISOString().split('T')[0];
                          setStudentData('birth_date', formattedDate);
                        } else {
                          console.error("Data tanggal tidak valid:", date);
                        }
                      }}
                    />
                    <Select
                      label="Jenis Kelamin" 
                      onChange={(e) => setStudentData('gender', e.target.value)}
                    >
                      <SelectItem key={'male'}>Laki-Laki</SelectItem>
                      <SelectItem key={'female'}>Perempuan</SelectItem>
                    </Select>
                    <Input 
                      isRequired 
                      label="Nomor Handphone" 
                      type="number"
                      value={studentData.phone}
                      onChange={(e) => setStudentData('phone', e.target.value)}
                    />
                    <Textarea
                      isRequired 
                      label="Alamat Rumah" 
                      value={studentData.address}
                      onChange={(e) => setStudentData('address', e.target.value)}
                    />
                    <Input 
                      isRequired 
                      label="Nama Sekolah Menengah Pertama (SMP)" 
                      type="text" 
                      value={studentData.school}
                      onChange={(e) => setStudentData('school', e.target.value)}
                    />
                    <Select
                      label="Kelas" 
                      onChange={(e) => setStudentData('grade', e.target.value)}
                    >
                      <SelectItem key={'7'}>7</SelectItem>
                      <SelectItem key={'8'}>8</SelectItem>
                      <SelectItem key={'9'}>9</SelectItem>
                    </Select>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth type="submit" color="primary">
                      Kirim
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="guru" title="Guru" className='h-full'>
                <form className="flex flex-col gap-4 h-full justify-between" onSubmit={handleTeacherSubmit}>
                  <div className='flex flex-col gap-4'>
                    <Input 
                      isRequired 
                      label="Nomor Induk Pegawai" 
                      type="text" 
                      value={teacherData.nip}
                      onChange={(e) => setTeacherData('nip', e.target.value)}
                    />
                    <Select label="Kota" onChange={(e) => setTeacherData('place', e.target.value)}>
                    {dataKota
                      .sort((a, b) => a.label.localeCompare(b.label))
                      .map(kota => (
                        <SelectItem key={kota.value} value={kota.value}>
                          {kota.label}
                        </SelectItem>
                      ))}
                        <SelectItem key={'luar-negeri'} value={'luar-negeri'}>
                          Luar Negeri
                        </SelectItem>
                    </Select>
                    <DatePicker 
                      isRequired 
                      label="Tanggal Lahir" 
                      onChange={(date) => {
                        if (date && date.year && date.month && date.day) {
                          const birthDate = new Date(date.year, date.month - 1, date.day);
                          const formattedDate = birthDate.toISOString().split('T')[0];
                          setTeacherData('birth_date', formattedDate);
                        } else {
                          console.error("Data tanggal tidak valid:", date);
                        }
                      }}
                    />
                    <Select
                      label="Jenis Kelamin" 
                      onChange={(e) => setTeacherData('gender', e.target.value)}
                    >
                      <SelectItem key={'male'}>Laki-Laki</SelectItem>
                      <SelectItem key={'female'}>Perempuan</SelectItem>
                    </Select>
                    <Input 
                      isRequired 
                      label="Nomor Handphone" 
                      type="number"
                      value={teacherData.phone}
                      onChange={(e) => setTeacherData('phone', e.target.value)}
                    />
                    <Textarea
                      isRequired 
                      label="Alamat Rumah" 
                      value={teacherData.address}
                      onChange={(e) => setTeacherData('address', e.target.value)}
                    />
                    <Input 
                      isRequired 
                      label="Sekolah Menengah Pertama (SMP) Tempat Anda Mengajar" 
                      type="text" 
                      value={teacherData.school}
                      onChange={(e) => setTeacherData('school', e.target.value)}
                    />
                    <Select
                      label="Jabatan" 
                      onChange={(e) => setTeacherData('position', e.target.value)}
                    >
                      <SelectItem key={'subject_teacher'}>Guru Mata Pelajaran</SelectItem>
                      <SelectItem key={'class_teacher'}>Wali Kelas</SelectItem>
                      <SelectItem key={'headmaster'}>Kepala Sekolah</SelectItem>
                    </Select>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button fullWidth type="submit" color="primary">
                      Kirim
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ProfileCompletion;
