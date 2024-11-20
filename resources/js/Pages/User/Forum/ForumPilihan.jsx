import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar, Button} from "@nextui-org/react";

const ForumPilihan = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  
  return (
    <section className='flex flex-col items-center gap-8 max-lg:px-4 max-lg:py-4'>
      <Card className="w-full max-w-screen-lg">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <p>Punya Pertanyaan? ajukan disini dan biarkan orang lain menjawab pertanyaanmu</p>
        </CardBody>
        <Divider/>
        <CardFooter>
        <Button
              className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              variant={isFollowed ? "bordered" : "solid"}
              onPress={() => setIsFollowed(!isFollowed)}
            >
              {isFollowed ? "Unfollow" : "Tanya"}
            </Button>
        </CardFooter>
      </Card>

      <>
        <Card className="w-full max-w-screen-lg">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
              <div className="flex flex-col items-start justify-center gap-1">
                <h4 className="font-semibold leading-none text-small text-default-600">Zoey Lang</h4>
                <h5 className="tracking-tight text-small text-default-400">@zoeylang</h5>
              </div>
            </div>
            <i class='bx bx-dots-vertical-rounded' ></i>
          </CardHeader>
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Kenapa ya?</p>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
            </p>
            <span className="pt-2">
              #FrontendWithZoey 
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <i class='bx bx-like text-sm'></i>
              <p className="font-semibold text-default-400 text-small">97.1K</p>
            </div>
            <div className="flex gap-1">
              <i class='bx bx-chat text-sm' ></i>
              <p className="font-semibold text-default-400 text-small">4</p>
            </div>
          </CardFooter>
        </Card>
      </>
    </section>
  )
}

export default ForumPilihan