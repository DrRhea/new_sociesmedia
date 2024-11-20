import React from 'react';
import { Card, CardBody, Button } from '@nextui-org/react';
import { Link } from '@inertiajs/react';
import UserLayout from '@/Layout/UserLayout';

// Komponen utama untuk menampilkan materi
const Main = ({ materi }) => {
  return (
    <UserLayout>
      <div className='flex flex-col max-w-xl gap-4 px-4 mx-auto my-8'>
        <Link href='/materi'>
            <i class='bx bx-chevron-left'></i> Kembali
        </Link>
        
        <Card className='mx-auto w-fit'>
          <CardBody className='text-center'>
            <p>{materi.title}</p>
          </CardBody>
        </Card>

        <Card className='w-full max-w-screen-xl'>
          <CardBody className="text-center">
            <object
              data={`/storage/${materi.content}`}
              type="application/pdf"
              className="w-full max-w-4xl mx-auto h-[60vh] md:h-[80vh]"
            >
              <p>Alternative text - include a link <a href={`/storage/${materi.content}`}>to the PDF!</a></p>
            </object>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <p>{materi.description}</p>
          </CardBody>
        </Card>

        <Link href='/materi' className='mt-4'>
            <i class='bx bx-chevron-left'></i> Kembali
        </Link>
      </div>
    </UserLayout>
  );
};

export default Main;
