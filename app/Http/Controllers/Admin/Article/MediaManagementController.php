<?php

namespace App\Http\Controllers\Admin\Article;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MediaManagementController extends Controller
{
    public function index()
    {
        return inertia("Admin/Artikel/Daftar/ArtikelMain");
    }
}
