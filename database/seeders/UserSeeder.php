<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Super Admin User
        $superadmin = User::create([
            'username' => 'dianaanggraini',
            'name' => 'Diana Anggraini',
            'email' => 'diana.anggraini@upi.edu',
            'password' => bcrypt('dikti2004'), // Ganti dengan password yang aman
            'role' => 'superadmin',
            'is_profile_complete' => true,
        ]);

        // Admin User
        $admin = User::create([
            'username' => 'admin',
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt(' dikti2004'), // Ganti dengan password yang aman
            'role' => 'admin',
            'is_profile_complete' => true,
        ]);

        // Guru User
        $guru = User::create([
            'username' => 'guru',
            'name' => 'Guru',
            'email' => 'guru@example.com',
            'password' => bcrypt('password'), // Ganti dengan password yang aman
            'role' => 'guru',
            'is_profile_complete' => true,
        ]);

        // Murid User
        $murid = User::create([
            'username' => 'murid',
            'name' => 'Murid',
            'email' => 'murid@example.com',
            'password' => bcrypt('password'), // Ganti dengan password yang aman
            'role' => 'murid',
            'is_profile_complete' => true,
        ]);
    }
}
