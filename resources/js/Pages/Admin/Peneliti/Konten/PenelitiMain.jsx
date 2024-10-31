import React from 'react'
import AdminLayout from '@/Layout/AdminLayout'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"
import { Link } from "@inertiajs/react"

const PenelitiMain = () => {
  const list = [
    {
      title: "Rhea Jagadditha",
      description: "Konten Video Edukasi",
      university: "Universitas Sociesmedia",
      img: "https://placehold.co/600x800?text=Sociesmedia",
      link: "/peneliti/rhea-jagadditha"
    },
    {
      title: "Safira Aliyah",
      description: "Diskusi Mendalam",
      university: "Universitas Indonesia",
      img: "https://placehold.co/600x800?text=Sociesmedia",
      link: "/peneliti/safira-aliyah"
    },
    {
      title: "Azmi Arya",
      description: "Informasi Visual",
      university: "Universitas Telkom",
      img: "https://placehold.co/600x800?text=Sociesmedia",
      link: "/peneliti/azmi-arya"
    },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>

        {/* Section for Peneliti cards */}
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {list.map((item, index) => (
                <Card key={index} shadow="md" className="w-full max-w-md overflow-hidden rounded-3xl">
                  <CardBody className="p-0">
                    <Link href={item.link}>
                      <Image
                        alt={item.title}
                        className="object-cover w-full h-[400px] rounded-t-3xl"
                        src={item.img}
                      />
                    </Link>
                  </CardBody>
                  <CardFooter className="flex flex-col items-center justify-center p-4 space-y-1 text-center">
                    <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-sm text-gray-500">{item.university}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default PenelitiMain
