<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Superadmin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SuperadminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Membuat superadmin
        $user = User::create([
            'username' => 'superadmin',
            'name' => 'Diana Anggraini',
            'email' => 'diana.anggraini@upi.edu',
            'password' => Hash::make('dikti2004'),
            'role' => 'superadmin',
            'is_profile_complete' => 1,
        ]);

        SuperAdmin::create([
            'user_id' => $user->id,
        ]);
    }
}
