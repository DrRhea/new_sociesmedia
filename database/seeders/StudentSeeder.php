<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $murid = User::where('role', 'murid')->first();

        Student::create([
            'user_id' => $murid->id,
            'birth_date' => '2007-06-15', // Ganti dengan tanggal lahir yang sesuai
            'gender' => 'male',
            'nis' => '1234567890',
            'address' => 'Jl. Pendidikan No. 1',
            'school' => 'SMP Negeri 1',
            'grade' => '8',
        ]);
    }
}
