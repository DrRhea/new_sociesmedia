<?php

namespace App\Http\Controllers\Admin\Researcher;

use App\Models\Peneliti;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class MediaManagementController extends Controller
{
    public function index()
    {
        $researchers = Peneliti::all();
        return inertia("Admin/Peneliti/Daftar/PenelitiMain", [
            'researchers' => $researchers,
        ]);
    }

    public function create()
    {
        return inertia("Admin/Peneliti/Daftar/PenelitiCreate");
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:researchers,email',
            'field_of_study' => 'required|string|max:255',
            'biography' => 'nullable|string',
            'contact_info' => 'required|string|max:255',
            'picture' => 'nullable|mimes:jpeg,png,jpg,gif|max:5024',
            'sinta_id' => 'nullable|string|max:255|unique:researchers,sinta_id',
        ], [
            // Pesan validasi untuk 'name'
            'name.required' => 'Nama wajib diisi.',
            'name.string' => 'Nama harus berupa teks.',
            'name.max' => 'Nama tidak boleh lebih dari :max karakter.',
        
            // Pesan validasi untuk 'email'
            'email.required' => 'Email wajib diisi.',
            'email.string' => 'Email harus berupa teks.',
            'email.email' => 'Email harus berupa alamat email yang valid.',
            'email.max' => 'Email tidak boleh lebih dari :max karakter.',
            'email.unique' => 'Email sudah terdaftar.',
        
            // Pesan validasi untuk 'field_of_study'
            'field_of_study.required' => 'Bidang studi wajib diisi.',
            'field_of_study.string' => 'Bidang studi harus berupa teks.',
            'field_of_study.max' => 'Bidang studi tidak boleh lebih dari :max karakter.',
        
            // Pesan validasi untuk 'biography'
            'biography.string' => 'Biografi harus berupa teks.',
        
            // Pesan validasi untuk 'contact_info'
            'contact_info.required' => 'Informasi kontak wajib diisi.',
            'contact_info.string' => 'Informasi kontak harus berupa teks.',
            'contact_info.max' => 'Informasi kontak tidak boleh lebih dari :max karakter.',
        
            // Pesan validasi untuk 'picture'
            'picture.mimes' => 'Gambar harus berformat jpeg, png, jpg, atau gif.',
            'picture.max' => 'Ukuran gambar tidak boleh lebih dari :max kilobyte.',
        
            // Pesan validasi untuk 'sinta_id'
            'sinta_id.string' => 'ID Sinta harus berupa teks.',
            'sinta_id.max' => 'ID Sinta tidak boleh lebih dari :max karakter.',
            'sinta_id.unique' => 'ID Sinta sudah terdaftar.',
        ]);        

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $validatedData = $validator->validated();

        $slug = Str::slug($validatedData['name']);
        $count = 1;

        while (Peneliti::where('slug', $slug)->exists()) {
            $slug = Str::slug($validatedData['name']) . '-' . $count;
            $count++;
        }

        if ($request->hasFile('picture')) {
            $pictureName = $request->file('picture')->store('upload/peneliti', 'public');;
            $validatedData['picture'] = $pictureName;
        }

        $researchers = Peneliti::create($validatedData);

        return redirect()->route('admin.list.peneliti.index')->with('success', 'Data berhasil disimpan!');
    }

    public function edit(string $id)
    {
        $researchers = Peneliti::findOrFail($id);

        return inertia("Admin/Peneliti/Daftar/PenelitiEdit", [
            'researchers' => $researchers,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:researchers,email,' . $id,
            'field_of_study' => 'required|string|max:255',
            'biography' => 'nullable|string',
            'contact_info' => 'required|string|max:255',
            'picture' => 'nullable|mimes:jpeg,png,jpg,gif|max:5024',
            'sinta_id' => 'nullable|string|max:255|unique:researchers,sinta_id,' . $id,
        ], [
            // Pesan validasi untuk 'name'
            'name.required' => 'Nama wajib diisi.',
            'name.string' => 'Nama harus berupa teks.',
            'name.max' => 'Nama tidak boleh lebih dari :max karakter.',
        
            // Pesan validasi untuk 'email'
            'email.required' => 'Email wajib diisi.',
            'email.string' => 'Email harus berupa teks.',
            'email.email' => 'Email harus berupa alamat email yang valid.',
            'email.max' => 'Email tidak boleh lebih dari :max karakter.',
            'email.unique' => 'Email sudah terdaftar.',
        
            // Pesan validasi untuk 'field_of_study'
            'field_of_study.required' => 'Bidang studi wajib diisi.',
            'field_of_study.string' => 'Bidang studi harus berupa teks.',
            'field_of_study.max' => 'Bidang studi tidak boleh lebih dari :max karakter.',
        
            // Pesan validasi untuk 'biography'
            'biography.string' => 'Biografi harus berupa teks.',
        
            // Pesan validasi untuk 'contact_info'
            'contact_info.required' => 'Informasi kontak wajib diisi.',
            'contact_info.string' => 'Informasi kontak harus berupa teks.',
            'contact_info.max' => 'Informasi kontak tidak boleh lebih dari :max karakter.',
        
            // Pesan validasi untuk 'picture'
            'picture.mimes' => 'Gambar harus berformat jpeg, png, jpg, atau gif.',
            'picture.max' => 'Ukuran gambar tidak boleh lebih dari :max kilobyte.',
        
            // Pesan validasi untuk 'sinta_id'
            'sinta_id.string' => 'ID Sinta harus berupa teks.', 
            'sinta_id.max' => 'ID Sinta tidak boleh lebih dari :max karakter.',
            'sinta_id.unique' => 'ID Sinta sudah terdaftar.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $validatedData = $validator->validated();

        if ($request->hasFile('picture')) {
            if (isset($validatedData['picture'])) {
                Storage::disk('public')->delete($validatedData['picture']);
            }
            $pictureName = $request->file('picture')->store('upload/peneliti', 'public');;
            $validatedData['picture'] = $pictureName;
        } else {
            unset($validatedData['picture']);
        }

        $researchers = Peneliti::findOrFail($id);
        $researchers->update($validatedData);

        return redirect()->route('admin.list.peneliti.index')->with('success', 'Data berhasil diperbarui!');
    }

    public function destroy(string $id)
    {
        $researchers = Peneliti::findOrFail($id);
        Storage::disk('public')->delete($researchers->picture);
        $researchers->delete();

        return redirect()->route('admin.list.peneliti.index')->with('success', 'Data berhasil dihapus!');
    }
}
