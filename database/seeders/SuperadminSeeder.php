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
        $superadmin = User::where('role', 'superadmin')->first();

        Superadmin::create([
            'user_id' => $superadmin->id,
        ]);
    }
}
