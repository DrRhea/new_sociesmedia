<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Materi;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MateriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index_konten()
    {
        return inertia("Admin/Materi/Konten/MateriMain");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
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
        $materi = Materi::latest()->get();
        return inertia("Admin/Materi/Daftar/MateriMain", [
            'materi' => $materi
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create_daftar()
    {
        return inertia("Admin/Materi/Daftar/MateriCreate");
    }

    public function store_daftar (Request $request)
    {
        // Buat validator dengan validasi kondisional untuk konten
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:materi,title',
            'description' => 'nullable|string',
            'grade' => 'required|in:VII,VIII,IX',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif',
            'content' => 'required|file|mimes:pdf,doc,docx,ppt,pptx',
        ], [
            'title.required' => 'Judul wajib diisi.',
            'title.string' => 'Judul harus berupa teks.',
            'title.max' => 'Judul tidak boleh lebih dari :max karakter.',
            'title.unique' => 'Judul sudah digunakan, harap pilih judul lain.',
            
            'description.string' => 'Deskripsi harus berupa teks.',
            
            'content.required' => 'Konten wajib diisi.',
            'content.file' => 'Konten harus berupa file jika tipe adalah poster.',
            'content.mimes' => 'Konten harus berupa dokumen dengan format pdf, doc, docx, ppt, pptx, xls, atau xlsx.',
            'content.url' => 'Konten harus berupa URL yang valid.',
            
            'grade.required' => 'Kelas wajib dipilih.',
            'grade.in' => 'Kelas harus salah satu dari: 7, 8, atau 9.',
            
            'thumbnail.image' => 'Thumbnail harus berupa gambar.',
            'thumbnail.mimes' => 'Thumbnail harus berformat jpeg, png, jpg, atau gif.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
        }

        $validatedData = $validator->validated();

        $slug = Str::slug($validatedData['title']);
        $count = 1;

        while (Materi::where('slug', $slug)->exists()) {
            $slug = Str::slug($validatedData['title']) . '-' . $count;
            $count++;
        }

        $validatedData['slug'] = $slug;

        // Simpan file thumbnail
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('upload/materi/thumbnail', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        } else {
            if ($request->grade === 'VII') {
                $validatedData['thumbnail'] = 'upload/fallback-materi/VII.jpeg';
            } elseif ($request->grade === 'VIII') {
                $validatedData['thumbnail'] = 'upload/fallback-materi/VIII.jpeg';
            } elseif ($request->grade === 'IX') {
                $validatedData['thumbnail'] = 'upload/fallback-materi/IX.jpeg';
            }
        }

        if ($request->hasFile('content')) {
            $contentPath = $request->file('content')->store('upload/materi/content', 'public');
            $validatedData['content'] = $contentPath;
        }

        $validatedData['created_by'] = Auth::id();
        $user = Auth::user();
        $validatedData['status'] = ($user->role === 'admin' || $user->role === 'superadmin') ? 'approved' : 'pending';

        Materi::create($validatedData);

        return redirect()->route('admin.list.materi.index')->with('success', 'Data berhasil disimpan!');
    }
    
    /**
     * Show the form for editing the specified resource.
     */
    public function edit_daftar(string $slug)
    {
        $materi = Materi::where('slug', $slug)->firstOrFail();

        return inertia('Admin/Materi/Daftar/MateriEdit', [
            'materi' => $materi,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function update_daftar(Request $request, string $slug)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy_daftar($id)
    {
        // Temukan data berdasarkan ID
        $materi = Materi::findOrFail($id);

        // Hapus thumbnail dari penyimpanan jika ada
        if ($materi->thumbnail) {
            Storage::disk('public')->delete($materi->thumbnail);
        }

        // Hapus content dari penyimpanan jika ada dan jika typenya poster
        if ($materi->type === 'poster') {
            Storage::disk('public')->delete($materi->content);
        }

        // Hapus data dari database
        $materi->delete();

        return redirect()->route('admin.list.materi.index')->with('success', 'Data berhasil dihapus!');
    }
}
