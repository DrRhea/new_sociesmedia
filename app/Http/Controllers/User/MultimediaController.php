<?php

namespace App\Http\Controllers\User;

use App\Models\Multimedia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MultimediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = Multimedia::where('status', 'approved');

        // Pencarian berdasarkan judul multimedia
        if ($request->has('search') && $request->search !== '') {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        // Filter berdasarkan tipe multimedia
        if ($request->has('type') && $request->type !== '') {
            $query->where('type', $request->type);
        }

        // Ambil data multimedia
        $multimedia = $query->latest()->get();

        return inertia('User/Multimedia/MultimediaMain', [
            'multimedia' => $multimedia,
            'auth' => [
                'user' => $user,
                'isTeacherApproved' => $user && $user->teacher ? $user->teacher->status === 'approved' : false,
            ],
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $multimedia = Multimedia::where('slug', $slug)->firstOrFail();

        return inertia('User/Multimedia/Show/Main', [
            'multimedia' => $multimedia
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
