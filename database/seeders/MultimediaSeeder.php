<?php

namespace Database\Seeders;

use App\Models\Multimedia;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MultimediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Multimedia::create([
            'type' => 'video',
            'title' => 'Perubahan Sosial Budaya & Globalisasi',
            'description' => 'Media Pembelajaran IPS Kelas 9 Perubahan Sosial Budaya & Globalisasi',
            'content' => 'https://youtu.be/BnyLRr3zKS0?si=ULfgmGbM8gU6hy6e',
            'thumbnail' => 'https://img.youtube.com/vi/BnyLRr3zKS0/maxresdefault.jpg',
            'status' => 'approved',
            'slug' => 'contoh-video',
        ]);
        Multimedia::create([
            'type' => 'podcast',
            'title' => 'Eps1.Masa Kemerdekaan(1945 - 1950)',
            'description' => 'Episode kali ini adalah segmen dari [About Social Podcast] yang dibawakan oleh Siti Rubiyanti, Muhammad Rendi dan Fadila Rizky . Episode kali ini merupakan Episode yang membahas tentang Masa Kemerdekaan. Untuk lebih jelasnya yuk langsung aja disimak dan didengerin podcastnya',
            'content' => 'https://open.spotify.com/episode/5PypKebYrR4r8YpOocERRc?si=dkcTziyiSyaNkls3S2_jUw',
            'thumbnail' => 'https://www.example.com/thumbnail.jpg',
            'status' => 'approved',
            'slug' => 'contoh-podcast',
        ]);
        Multimedia::create([
            'type' => 'poster',
            'title' => 'Contoh Poster',
            'description' => 'Deskripsi Contoh Poster',
            'content' => 'https://www.example.com/poster.jpg',
            'thumbnail' => 'https://www.example.com/thumbnail.jpg',
            'status' => 'approved',
            'slug' => 'contoh-poster',
        ]);
        Multimedia::create([
            'type' => 'games',
            'title' => 'History Breakout',
            'description' => 'KEHIDUPAN MASYARAKAT INDONESIA PADA MASA KOLONIALISME DAN IMPERIALISME',
            'content' => 'https://view.genially.com/664e0a4f91db6400144d3f0d/interactive-content-history-breakout',
            'thumbnail' => 'https://www.example.com/thumbnail.jpg',
            'status' => 'approved',
            'slug' => 'contoh-games',
        ]);
    }
}
