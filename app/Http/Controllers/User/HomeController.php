<?php

namespace App\Http\Controllers\User;

use App\Models\Materi;
use App\Models\Artikel;
use App\Models\Multimedia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $multimediaVideo = Multimedia::where('type', 'video')->latest()->first();
        $multimediaPodcast = Multimedia::where('type', 'podcast')->latest()->first();
        $multimediaPoster = Multimedia::where('type', 'poster')->latest()->first();
        $multimediaGames = Multimedia::where('type', 'games')->latest()->first();

        $materiLatest = Materi::latest()->take(4)->get();
        $artikelLatest = Artikel::latest()->take(4)->get();

        return inertia('User/Beranda/BerandaMain', [
            'multimediaVideo' => $multimediaVideo,
            'multimediaPodcast' => $multimediaPodcast,
            'multimediaPoster' => $multimediaPoster,
            'multimediaGames' => $multimediaGames,
            'materiLatest' => $materiLatest,
            'artikelLatest' => $artikelLatest
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
}
