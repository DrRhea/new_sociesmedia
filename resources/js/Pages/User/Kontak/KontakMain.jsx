import UserLayout from '@/Layout/UserLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import KontakHero from './KontakHero'

const KontakMain = () => {
  return (
    <>
        <Head>
            <title>Kontak - Sociesmedia</title>
            <meta name="description" content="Generated by create next app"/>
        </Head>

        <UserLayout>
            <KontakHero  />
        </UserLayout>
    </>
  )
}

export default KontakMain