import React, { useEffect, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Button, Input, Spinner } from "@nextui-org/react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const { data, setData, post, processing, errors } = useForm({
    username: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
    
  const [isLoading, setIsLoading] = useState(true); // State untuk loading spinner

  useEffect(() => {
    // Mengatur durasi spinner menjadi 0.1 detik
    const timeout = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timeout); // Membersihkan timeout jika komponen di-unmount
  }, []);

  function submit(e) {
    e.preventDefault();
    post('/register');
  }

  return (
    <>
    {isLoading ? (
        // Spinner akan muncul selama 0.1 detik
        <div className="flex items-center justify-center h-screen">
          <Spinner size="lg" color="primary" />
        </div>
    ) : (
      <>
        {/* Hero */}
          <div className="flex min-h-screen">
            <img
              className="hidden object-cover h-full md:block md:w-1/2"
              src="/img/auth/register.webp"
              alt="image description"
            />
            <div className="flex items-center justify-center flex-1 p-8">
              <div className="w-full max-w-md">
                {/* Title */}
                <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
                  Daftar
                </h1>
                <p className="mt-3 text-xl text-muted-foreground">
                  Masukkan informasi di bawah untuk membuat akun baru
                </p>
                {/* End Title */}
                <div className="grid mt-8">
                  <Button className='bg-white border-2 border-blue-100 hover:bg-gray-50' onClick={() => window.location.href = '/auth/google'}>
                    <svg
                      className="w-4 h-auto mr-2"
                      width={46}
                      height={47}
                      viewBox="0 0 46 47"
                      fill="none"
                    >
                      {/* SVG path elements */}
                      <path
                        d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                        fill="#34A853"
                      />
                      <path
                        d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                        fill="#EB4335"
                      />
                    </svg>
                    Daftar dengan Google
                  </Button>
                </div>
                <Separator asChild className="my-6 bg-background">
                  <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:before:border-gray-700 dark:after:border-gray-700">
                    Atau
                  </div>
                </Separator>
                {/* Form */}
                <form onSubmit={submit}>
                  <div className="mb-4">
                    <Label htmlFor="username" className="sr-only">Username</Label>
                    <Input
                      isRequired
                      label="Nama Pengguna"
                      type="text"
                      value={data.username}
                      onChange={e => setData('username', e.target.value)}
                      color={errors.username ? "error" : "default"}
                      helperText={errors.username}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="name" className="sr-only">Nama</Label>
                    <Input
                      isRequired
                      label="Nama"
                      type="text"
                      value={data.name}
                      onChange={e => setData('name', e.target.value)}
                      color={errors.name ? "error" : "default"}
                      helperText={errors.name}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="email" className="sr-only">Email</Label>
                    <Input
                      isRequired
                      label="Email"
                      type="email"
                      value={data.email}
                      onChange={e => setData('email', e.target.value)}
                      color={errors.email ? "error" : "default"}
                      helperText={errors.email}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="password" className="sr-only">Password</Label>
                    <Input
                      isRequired
                      label="Password"
                      type="password"
                      value={data.password}
                      onChange={e => setData('password', e.target.value)}
                      color={errors.password ? "error" : "default"}
                      helperText={errors.password}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="password_confirmation" className="sr-only">Konfirmasi Password</Label>
                    <Input
                      isRequired
                      label="Konfirmasi Password"
                      type="password"
                      value={data.password_confirmation}
                      onChange={e => setData('password_confirmation', e.target.value)}
                      color={errors.password_confirmation ? "error" : "default"}
                      helperText={errors.password_confirmation}
                    />
                  </div>
                  <div className="grid">
                    <Button color="primary" type="submit" isLoading={processing}>Daftar</Button>
                  </div>
                </form>
                {/* End Form */}
                {/* Login Link */}
                <p className="mt-4 text-sm text-center text-muted-foreground">
                  Sudah punya akun? <Link href="/login" className="text-blue-600 hover:underline">Masuk di sini</Link>
                </p>
              </div>
            </div>
          </div>
          {/* End Hero */}
      </>
    )}
    </>
  )
}

export default Register;