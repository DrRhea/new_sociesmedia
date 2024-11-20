<?php

namespace App\Http\Controllers\Admin\Materi;

use App\Models\Materi;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MediaManagementController extends Controller
{
    public function index()
    {
        $materi = Materi::where('status', 'approved')->latest()->get();
        return inertia("Admin/Materi/Daftar/MateriMain", [
            'materi' => $materi
        ]);
    }

    public function create()
    {
        return inertia("Admin/Materi/Daftar/MateriCreate");
    }

    public function store (Request $request)
    {
        // Buat validator dengan validasi kondisional untuk konten
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:materi,title',
            'description' => 'nullable|string',
            'grade' => 'required|in:VII,VIII,IX,Umum',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif',
            'content' => 'required|file|mimes:pdf,doc,docx,ppt,pptx',
        ], [
            'title.required' => 'Judul wajib diisi.',
            'title.string' => 'Judul harus berupa teks.',
            'title.max' => 'Judul tidak boleh lebih dari :max karakter.',
            'title.unique' => 'Judul sudah digunakan, harap pilih judul lain.',
            
            'description.string' => 'Deskripsi harus berupa teks.',
            
            'content.required' => 'Konten wajib diisi.',
            'content.file' => 'Konten harus berupa file.',
            'content.mimes' => 'Konten harus berupa dokumen dengan format pdf, doc, docx, ppt, pptx, xls, atau xlsx.',
            'content.url' => 'Konten harus berupa URL yang valid.',
            
            'grade.required' => 'Kelas wajib dipilih.',
            'grade.in' => 'Kelas harus salah satu dari: VII, VIII, IX, Umum.',
            
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
            } elseif ($request->grade === 'Umum') {
                $validatedData['thumbnail'] = 'upload/fallback-materi/Umum.jpeg';
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

    public function edit(string $slug)
    {
        $materi = Materi::where('slug', $slug)->firstOrFail();

        return inertia('Admin/Materi/Daftar/MateriEdit', [
            'materi' => $materi,
        ]);
    }

    public function update(Request $request, string $slug)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:materi,title,' . $slug,
            'description' => 'nullable|string',
            'grade' => 'required|in:VII,VIII,IX,Umum',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif',
            'content' => 'nullable|file|mimes:pdf,doc,docx,ppt,pptx',
        ], [
            'title.required' => 'Judul wajib diisi.',
            'title.string' => 'Judul harus berupa teks.',
            'title.max' => 'Judul tidak boleh lebih dari :max karakter.',
            'title.unique' => 'Judul sudah digunakan, harap pilih judul lain.',
            
            'description.string' => 'Deskripsi harus berupa teks.',
            
            'content.file' => 'Konten harus berupa file.',
            'content.mimes' => 'Konten harus berupa dokumen dengan format pdf, doc, docx, ppt, pptx, xls, atau xlsx.',
            
            'grade.required' => 'Kelas wajib dipilih.',
            'grade.in' => 'Kelas harus salah satu dari: VII, VIII, IX, Umum.',
            
            'thumbnail.image' => 'Thumbnail harus berupa gambar.',
            'thumbnail.mimes' => 'Thumbnail harus berformat jpeg, png, jpg, atau gif.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
        }

        $validatedData = $validator->validated();

        $materi = Materi::where('slug', $slug)->firstOrFail();

        $slug = Str::slug($validatedData['title']);
        $count = 1;

        while (Materi::where('slug', $slug)->exists()) {
            $slug = Str::slug($validatedData['title']) . '-' . $count;
            $count++;
        }

        $validatedData['slug'] = $slug;

        // Simpan file thumbnail
        if ($request->hasFile('thumbnail')) {
            if ($materi->thumbnail) {
                Storage::disk('public')->delete($materi->thumbnail);
            }
            $thumbnailPath = $request->file('thumbnail')->store('upload/materi/thumbnail', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        } else {
            unset($validatedData['thumbnail']);
        }

        // Simpan file konten
        if ($request->hasFile('content')) {
            if ($materi->content) {
                Storage::disk('public')->delete($materi->content);
            }
            $contentPath = $request->file('content')->store('upload/materi/content', 'public');
            $validatedData['content'] = $contentPath;
        } else {
            unset($validatedData['content']);
        }

        $materi->update($validatedData);

        return redirect()->route('admin.list.materi.index')->with('success', 'Data berhasil diperbarui!');
    }

    public function destroy($id)
    {
        // Temukan data berdasarkan ID
        $materi = Materi::findOrFail($id);

        // Hapus thumbnail dari penyimpanan jika ada
        if ($materi->thumbnail && $materi->content !== 'upload/fallback-materi/VII.jpeg' && $materi->content !== 'upload/fallback-materi/VIII.jpeg' && $materi->content !== 'upload/fallback-materi/IX.jpeg' && $materi->content !== 'upload/fallback-materi/Umum.jpeg') {
            Storage::disk('public')->delete($materi->thumbnail);
        }

        // Hapus data dari database
        $materi->delete();

        return redirect()->route('admin.list.materi.index')->with('success', 'Data berhasil dihapus!');
    }
}
