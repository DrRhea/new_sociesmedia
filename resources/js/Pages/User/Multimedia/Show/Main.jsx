import React from 'react'
import UserLayout from '@/Layout/UserLayout'

import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import { Head, Link } from '@inertiajs/react';

const Main = ({ multimedia }) => {
  const convertToEmbedUrlYT = (url) => {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0] || url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const convertToEmbedUrlSP = (url) => {
    // Memeriksa apakah URL mengandung "episode/"
    const episodeId = url.split('episode/')[1]?.split('?')[0];
    return episodeId ? `https://open.spotify.com/embed/episode/${episodeId}` : null;
  };
  
  
  return (
    <UserLayout>
      <Head>
        <title>Multimedia - Sociesmedia</title>
      </Head>
      <section className='flex flex-col max-w-xl gap-4 mx-auto my-8 max-md:px-8'>
        <Link href='/multimedia'>
            <i class='bx bx-chevron-left'></i> Kembali
        </Link>
          <Card className='mx-auto w-fit'>
            <CardBody className='text-center'>
              <p>{multimedia.title}</p>
            </CardBody>
          </Card>
        <Card>
          <CardBody className='text-center'>
            { multimedia.type === 'video' && (
              <iframe
                src={convertToEmbedUrlYT(multimedia.content)}
                title={multimedia.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className='rounded-xl aspect-video '
              ></iframe>
            ) }

            { multimedia.type === 'poster' && (
              <img src={`/storage/${multimedia.content}`} alt={multimedia.title} className='rounded-xl'/>
            ) }

            { multimedia.type === 'podcast' && (
              <iframe
                src={convertToEmbedUrlSP(multimedia.content)}
                title={multimedia.title}
                width="100%"
                height="232"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
                className="rounded-xl aspect-video"
              ></iframe>
            )}

            { multimedia.type === 'games' && (
              <div className="relative">
                <iframe
                  id="game-iframe"
                  src={multimedia.content}
                  title={multimedia.title}
                  frameBorder="0"
                  allowFullScreen
                  className="w-full rounded-xl aspect-video"
                ></iframe>
                <button
                  onTouchStart={() => {
                    const iframe = document.getElementById('game-iframe');
                    if (iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    } else if (iframe.mozRequestFullScreen) { // Firefox
                      iframe.mozRequestFullScreen();
                    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
                      iframe.webkitRequestFullscreen();
                    } else if (iframe.msRequestFullscreen) { // IE/Edge
                      iframe.msRequestFullscreen();
                    }
                  }}
                  onClick={() => {
                    const iframe = document.getElementById('game-iframe');
                    if (iframe.requestFullscreen) {
                      iframe.requestFullscreen();
                    } else if (iframe.mozRequestFullScreen) { // Firefox
                      iframe.mozRequestFullScreen();
                    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, Opera
                      iframe.webkitRequestFullscreen();
                    } else if (iframe.msRequestFullscreen) { // IE/Edge
                      iframe.msRequestFullscreen();
                    }``
                  }}
                  className="absolute px-4 py-2 text-white bg-gray-800 rounded max-sm:hidden top-2 right-2"
                >
                  Fullscreen
                </button>
              </div>
            )}

          </CardBody>
        </Card>
        <Card className=''>
          <CardBody>
            <p>{multimedia.description}</p>
          </CardBody>
        </Card>
        <Link href='/multimedia' className='mt-4'>
            <i class='bx bx-chevron-left'></i> Kembali
        </Link>
      </section>
    </UserLayout>
  )
}

export default Main