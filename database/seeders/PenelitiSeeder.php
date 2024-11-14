<?php

namespace Database\Seeders;

use App\Models\Peneliti;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PenelitiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Peneliti::create([
            'name' => 'Prof. Dr. Didin Saripudin, M.Si.',
            'email' => 'didin.saripudin@upi.edu',
            'field_of_study' => 'Sosiologi Pendidikan',
            'biography' => 'Peneliti di bidang sosiologi pendidikan',
            'contact_info' => '08123456789',
            'picture' => 'didin.png',
            'sinta_id' => '000001',
            'status' => 'active',
        ]);
        Peneliti::create([
            'name' => 'Dr. Leli Yulifar, M.Pd.',
            'email' => 'leli.yulifar@upi.edu',
            'field_of_study' => 'Sumber Belajar Sejarah',
            'biography' => 'Peneliti di bidang sumber belajar sejarah',
            'contact_info' => '08123456789',
            'picture' => 'leli.png',
            'sinta_id' => '000002',
            'status' => 'active',
        ]);
        Peneliti::create([
            'name' => 'Diana Noor Anggraini, M.Pd.',
            'email' => 'diana.anggraini@upi.edu',
            'field_of_study' => 'Media Pembelajaran IPS',
            'biography' => 'Peneliti di bidang media pembelajaran IPS',
            'contact_info' => '08123456789',
            'picture' => 'diana.png',
            'sinta_id' => '000003',
            'status' => 'active',
        ]);
    }
}
