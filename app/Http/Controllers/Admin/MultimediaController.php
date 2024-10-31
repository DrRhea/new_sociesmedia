<?php

namespace App\Http\Controllers\Admin;

use App\Models\Multimedia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MultimediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index_konten()
    {
        return inertia("Admin/Multimedia/Konten/MultimediaMain");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create_konten()
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
        return inertia("Admin/Multimedia/Daftar/MultimediaMain");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create_daftar()
    {
        $multimedia = Multimedia::all();

        return inertia("Admin/Multimedia/Daftar/MultimediaCreate", [
            'multimedia' => $multimedia
        ]);
    }

     /**
     * Store a newly created resource in storage.
     */
    public function store_daftar(Request $request)
    {
        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'title' => 'required|string|max:255|unique:your_table_name,title', // Pastikan title unik
            'description' => 'nullable|string',
            'content' => 'required|string',
            'type' => 'required|in:video,podcast,poster,games',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $slug = Str::slug($validatedData['title']);
        $count = 1;

        while (Multimedia::where('slug', $slug)->exists()) {
            $slug = Str::slug($validatedData['title']) . '-' . $count;
            $count++;
        }

        $validatedData['slug'] = $slug;

        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('upload/multimedia/thumbnail', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        }

        $validatedData['created_by'] = Auth::id();

        $user = Auth::user();
        $validatedData['status'] = ($user->role === 'admin' || $user->role === 'superadmin') ? 'approved' : 'pending';
        
        Multimedia::create($validatedData);

        return redirect()->route('multimedia.index')->with('success', 'Data berhasil disimpan!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit_daftar(string $slug)
    {
        // // Temukan data berdasarkan ID
        // $multimedia = Multimedia::findOrFail($id);

        // // Tampilkan halaman edit dengan data yang ada
        // return view('multimedia.edit', compact('multimedia'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update_daftar(Request $request, string $slug)
    {
        // Temukan data berdasarkan slug
        $multimedia = Multimedia::where('slug', $slug)->firstOrFail();

        // Validasi data yang diterima dari request
        $validatedData = $request->validate([
            'title' => 'required|string|max:255|unique:multimedia,title,' . $multimedia->id,
            'description' => 'nullable|string',
            'content' => 'required|string',
            'type' => 'required|in:video,podcast,poster,games',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Update slug jika title berubah
        if ($multimedia->title !== $validatedData['title']) {
            $slug = Str::slug($validatedData['title']);
            $count = 1;
            while (Multimedia::where('slug', $slug)->where('id', '!=', $multimedia->id)->exists()) {
                $slug = Str::slug($validatedData['title']) . '-' . $count;
                $count++;
            }
            $validatedData['slug'] = $slug;
        }

        // Update thumbnail jika ada file baru
        if ($request->hasFile('thumbnail')) {
            // Hapus thumbnail lama jika ada
            if ($multimedia->thumbnail) {
                Storage::disk('public')->delete($multimedia->thumbnail);
            }
            $thumbnailPath = $request->file('thumbnail')->store('upload/multimedia/thumbnail', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        }

        // Set pengguna yang memperbarui data
        $validatedData['updated_by'] = Auth::id();
        $multimedia->update($validatedData);

        return redirect()->route('multimedia.index')->with('success', 'Data berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy_daftar($id)
    {
        // Temukan data berdasarkan ID
        $multimedia = Multimedia::findOrFail($id);

        // Hapus thumbnail dari penyimpanan jika ada
        if ($multimedia->thumbnail) {
            Storage::disk('public')->delete($multimedia->thumbnail);
        }

        // Hapus data dari database
        $multimedia->delete();

        return redirect()->route('multimedia.index')->with('success', 'Data berhasil dihapus!');
    }
}
