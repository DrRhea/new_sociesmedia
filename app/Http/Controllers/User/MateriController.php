<?php

namespace App\Http\Controllers\User;

use App\Models\Materi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MateriController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $materi = Materi::where('status', 'approved')->get();

        return inertia('User/Materi/MateriMain', [
            'auth' => [
                'user' => $user,
                'isTeacherApproved' => $user && $user->teacher ? $user->teacher->status === 'approved' : false,
            ],
            'materi' => $materi
        ]);
    }

    public function show(String $slug)
    {
        $materi = Materi::where('slug', $slug)->firstOrFail();

        return inertia('User/Materi/Show/Main', [
            'materi' => $materi
        ]);
    }
}
