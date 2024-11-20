<?php

namespace App\Http\Controllers\User;

use App\Models\Peneliti;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PenelitiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $peneliti = Peneliti::all();
        return inertia('User/Peneliti/PenelitiMain', [
            'peneliti' => $peneliti
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
        $researcher = Peneliti::where('slug', $slug)->first();

        return inertia('User/Peneliti/Show/Main', [
            'researcher' => $researcher
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
