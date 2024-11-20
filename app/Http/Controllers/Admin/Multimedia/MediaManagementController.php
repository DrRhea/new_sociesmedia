<?php

namespace App\Http\Controllers\Admin\Multimedia;

use App\Models\Multimedia;
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
        $multimedia = Multimedia::where('status', 'approved')->latest()->get();
        return inertia("Admin/Multimedia/Daftar/MultimediaMain", [
            'multimedia' => $multimedia
        ]);
    }

    public function create()
    {
        return inertia("Admin/Multimedia/Daftar/MultimediaCreate");
    }

    public function store(Request $request)
    {
        // Buat validator dengan validasi kondisional untuk konten
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:multimedia,title',
            'description' => 'nullable|string',
            'content' => $request->type === 'poster' ? 'required|file|mimes:jpeg,png,jpg,gif,pdf' : 'required|string|url',
            'type' => 'required|in:video,podcast,poster,games',
            'thumbnail' => 'image|mimes:jpeg,png,jpg,gif',
        ], [
            'title.required' => 'Judul wajib diisi.',
            'title.string' => 'Judul harus berupa teks.',
            'title.max' => 'Judul tidak boleh lebih dari :max karakter.',
            'title.unique' => 'Judul sudah digunakan, harap pilih judul lain.',
            
            'description.string' => 'Deskripsi harus berupa teks.',
            
            'content.required' => 'Konten wajib diisi.',
            'content.file' => 'Konten harus berupa file jika tipe adalah poster.',
            'content.mimes' => 'Konten untuk poster harus berformat jpeg, png, jpg, gif, atau pdf.',
            'content.url' => 'Konten harus berupa URL yang valid.',
            
            'type.required' => 'Tipe konten wajib dipilih.',
            'type.in' => 'Tipe konten harus salah satu dari: video, podcast, poster, atau games.',
            
            'thumbnail.image' => 'Thumbnail harus berupa gambar.',
            'thumbnail.mimes' => 'Thumbnail harus berformat jpeg, png, jpg, atau gif.',
        ]);

        // Cek jika ada error
        if ($validator->fails()) {
            return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
        }

        // Validasi berhasil
        $validatedData = $validator->validated();

        // Generate slug
        $slug = Str::slug($validatedData['title']);
        $count = 1;

        while (Multimedia::where('slug', $slug)->exists()) {
            $slug = Str::slug($validatedData['title']) . '-' . $count;
            $count++;
        }

        $validatedData['slug'] = $slug;

        // Simpan file thumbnail
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('upload/multimedia/thumbnail', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        } else {
            if ($request->type === 'poster') {
                $validatedData['thumbnail'] = 'upload/fallback-multimedia/poster.jpeg';
            } elseif ($request->type === 'video') {
                $validatedData['thumbnail'] = 'upload/fallback-multimedia/video.jpeg';
            } elseif ($request->type === 'podcast') {
                $validatedData['thumbnail'] = 'upload/fallback-multimedia/podcast.jpeg';
            } elseif ($request->type === 'games') {
                $validatedData['thumbnail'] = 'upload/fallback-multimedia/games.jpeg';
            }
        }

        // Simpan file atau URL konten
        if ($request->type === 'poster' && $request->hasFile('content')) {
            $contentPath = $request->file('content')->store('upload/multimedia/content', 'public');
            $validatedData['content'] = $contentPath;
        } else {
            $validatedData['content'] = $request->input('content');
        }

        // Tambahkan informasi pembuat dan status
        $validatedData['created_by'] = Auth::id();
        $user = Auth::user();
        $validatedData['status'] = ($user->role === 'admin' || $user->role === 'superadmin') ? 'approved' : 'pending';
        
        // Simpan data multimedia
        Multimedia::create($validatedData);

        return redirect()->route('admin.list.multimedia.index')->with('success', 'Data berhasil disimpan!');
    }

    public function edit(string $slug)
    {
        $multimedia = Multimedia::where('slug', $slug)->firstOrFail();

        return inertia('Admin/Multimedia/Daftar/MultimediaEdit', [
            'multimedia' => $multimedia,
        ]);
    }

    public function update(Request $request, string $slug)
    {
        $multimedia = Multimedia::where('slug', $slug)->firstOrFail();
        dd($request->all());

        // Buat validator dengan validasi kondisional untuk konten
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255|unique:multimedia,title,' . $multimedia->id,
            'description' => 'nullable|string',
            'content' => $request->type === 'poster' 
            ? 'nullable'
            : 'required|string|url',
            'type' => 'required|in:video,podcast,poster,games',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ], [
            'title.required' => 'Judul wajib diisi.',
            'title.string' => 'Judul harus berupa teks.',
            'title.max' => 'Judul tidak boleh lebih dari :max karakter.',
            'title.unique' => 'Judul sudah digunakan, harap pilih judul lain.',
            
            'description.string' => 'Deskripsi harus berupa teks.',

            'content.url' => 'Konten harus berupa URL yang valid.',
            
            'type.required' => 'Tipe konten wajib dipilih.',
            'type.in' => 'Tipe konten harus salah satu dari: video, podcast, poster, atau games.',
            
            'thumbnail.image' => 'Thumbnail harus berupa gambar.',
            'thumbnail.mimes' => 'Thumbnail harus berformat jpeg, png, jpg, atau gif.',
        ]);

        // Cek jika ada error
        if ($validator->fails()) {
            return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
        }

        // Validasi berhasil
        $validatedData = $validator->validated();

        // Generate slug jika ada perubahan judul
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
            // Hapus file thumbnail lama
            if ($multimedia->thumbnail) {
                Storage::disk('public')->delete($multimedia->thumbnail);
            }
            $thumbnailPath = $request->file('thumbnail')->store('upload/multimedia/thumbnail', 'public');
            $validatedData['thumbnail'] = $thumbnailPath;
        } else {
            // Tetapkan gambar fallback jika tidak ada thumbnail baru
            $validatedData['thumbnail'] = $multimedia->thumbnail ?: 'upload/fallback-multimedia/' . $request->type . '.jpeg';
        }

        // Update konten jika tipe adalah poster
        if ($request->type === 'poster' && $request->hasFile('content')) {
            // Hapus file konten lama
            if ($multimedia->content) {
                Storage::disk('public')->delete($multimedia->content);
            }
            $contentPath = $request->file('content')->store('upload/multimedia/content', 'public');
            $validatedData['content'] = $contentPath;
        } elseif ($request->type === 'poster') {
            // Gunakan konten lama jika tidak ada file baru
            $validatedData['content'] = $multimedia->content;
        }


        // Tambahkan informasi pembaruan
        $validatedData['updated_by'] = Auth::id();

        // Update data multimedia
        $multimedia->update($validatedData);

        return redirect()->route('admin.list.multimedia.index')->with('success', 'Data berhasil diperbarui!');
    }

    public function destroy($id)
{
        // Temukan data berdasarkan ID
        $multimedia = Multimedia::findOrFail($id);

        // Hapus thumbnail dari penyimpanan jika ada
        if ($multimedia->thumbnail && $multimedia->content !== 'upload/fallback-multimedia/games.jpeg' && $multimedia->content !== 'upload/fallback-multimedia/podcast.jpeg' && $multimedia->content !== 'upload/fallback-multimedia/video.jpeg' && $multimedia->content !== 'upload/fallback-multimedia/poster.jpeg') {
            Storage::disk('public')->delete($multimedia->thumbnail);
        }

        // Hapus content dari penyimpanan jika ada dan jika typenya poster
        if ($multimedia->type === 'poster') {
            Storage::disk('public')->delete($multimedia->content);
        }

        // Hapus data dari database
        $multimedia->delete();

        return redirect()->route('admin.list.multimedia.index')->with('success', 'Data berhasil dihapus!');
    }
}
