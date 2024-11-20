import UserLayout from '@/Layout/UserLayout'
import { Link } from '@inertiajs/react'
import { Button, Card, CardBody } from '@nextui-org/react'
import React from 'react'

const Main = ({ researcher }) => {
  return (
    <UserLayout>
      <div className='flex flex-col max-w-xl gap-4 px-4 mx-auto my-8'>
        <Link href='/peneliti'>
            <i class='bx bx-chevron-left'></i> Kembali
        </Link>
        
        <Card className='mx-auto w-fit'>
          <CardBody className='text-center'>
            <p>{researcher.name}</p>
          </CardBody>
        </Card>
        
        <Card className='mx-auto w-fit'>
          <CardBody className='text-center'>
            <p>{researcher.field_of_study}</p>
          </CardBody>
        </Card>

        <Card className='w-full max-w-screen-xl'>
          <CardBody className="text-center">
            <img src={`/storage/${researcher.picture}`} className="w-full rounded-lg" alt="" />
          </CardBody>
        </Card>

        {researcher.biography && 
          <Card>
            <CardBody>
                {researcher.biography}
            </CardBody>
          </Card>
        }

        <Link href='/peneliti' className='mt-4'>
            <i class='bx bx-chevron-left'></i> Kembali
        </Link>
      </div>
    </UserLayout>
  )
}

export default Main