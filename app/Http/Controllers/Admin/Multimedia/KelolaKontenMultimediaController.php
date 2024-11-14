<?php

namespace App\Http\Controllers\Admin\Multimedia;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KelolaKontenMultimediaController extends Controller
{
    public function index_konten()
    {
        return inertia("Admin/Multimedia/Konten/MultimediaMain");
    }
}
