<?php

namespace App\Http\Controllers\Admin\Researcher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContentApprovalController extends Controller
{
    public function index()
    {
        return inertia("Admin/Materi/Konten/MateriMain");
    }
}
