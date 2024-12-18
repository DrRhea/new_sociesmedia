import React, { useState, useEffect } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Input as NextInput, Button as NextButton, Spinner } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import Footer from '@/Components/Footer';

export default function HeroFormImageAndForm() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });
  
  const [isLoading, setIsLoading] = useState(true); // State untuk loading spinner

  useEffect(() => {
    // Mengatur durasi spinner menjadi 0.1 detik
    const timeout = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timeout); // Membersihkan timeout jika komponen di-unmount
  }, []);

  function submit(e) {
    e.preventDefault();
    post('/login'); // Endpoint untuk login
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
              src="/img/auth/login.webp"
              alt="image description"
            />
            <div className="flex items-center justify-center flex-1 p-8">
              <div className="w-full max-w-md">
                {/* Title */}
                <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
                  Masuk
                </h1>
                <p className="mt-3 text-xl text-muted-foreground">
                  Masukkan emailmu di bawah untuk masuk ke akun kamu
                </p>
                {/* End Title */}
                <div className="grid mt-8">
                  <NextButton className='bg-white border-2 border-blue-100 hover:bg-gray-50' onClick={() => window.location.href='/login/google'}>
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
                    Masuk dengan Google
                  </NextButton>
                </div>
                <Separator asChild className="my-6 bg-background">
                  <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:before:border-gray-700 dark:after:border-gray-700">
                    Atau
                  </div>
                </Separator>
                {/* Form */}
                <form onSubmit={submit}>
                  <div className="mb-4">
                    <NextInput
                      isRequired
                      type="text"
                      label="Username atau Email"
                      value={data.username_or_email}
                      onChange={e => setData('username_or_email', e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <NextInput
                      isRequired
                      type="password"
                      label="Password"
                      value={data.password}
                      onChange={e => setData('password', e.target.value)}
                    />
                  </div>
                  <div className="grid">
                    <NextButton type="submit" color="primary" isLoading={processing}>
                      Masuk
                    </NextButton>
                  </div>
                </form>
                {/* End Form */}
                {/* Signup Link */}
                <p className="mt-4 text-sm text-center text-muted-foreground">
                  Belum punya akun? <Link href="/register" className="text-blue-600 hover:underline">Daftar di sini</Link>
                </p>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <Footer />
          </div>
          {/* End Hero */}
        </>
      )}
    </>
  );
}
