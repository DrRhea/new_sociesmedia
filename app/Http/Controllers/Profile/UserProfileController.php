<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    public function index ()
    {
        return inertia('User/Profile/ProfileMain');
    }
    
    public function update_profile ()
    {
        return inertia('User/Profile/ProfileMain');
    }
}
