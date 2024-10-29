<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Teacher;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru = User::where('role', 'guru')->first();

        Teacher::create([
            'user_id' => $guru->id,
            'birth_date' => '1985-05-20', // Ganti dengan tanggal lahir yang sesuai
            'gender' => 'female',
            'nip' => '198505201995032001',
            'address' => 'Jl. Pendidikan No. 2',
            'position' => 'subject_teacher',
        ]);
    }
}
