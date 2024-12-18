<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Peneliti;
use Illuminate\Http\Request;

class PenelitiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index_konten()
    {
        return inertia("Admin/Peneliti/Konten/PenelitiMain");
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
    public function show(string $id)
    {
        //
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

    /**
     * Display a listing of the resource.
     */
    public function index_daftar()
    {
        $researchers = Peneliti::all();
        return inertia("Admin/Peneliti/Daftar/PenelitiMain", [
            'researchers' => $researchers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create_daftar()
    {
        return inertia("Admin/Peneliti/Daftar/PenelitiCreate");
    }
}
