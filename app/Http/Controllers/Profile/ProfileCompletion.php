<?php

namespace App\Http\Controllers\Profile;

use Inertia\Inertia;
use App\Models\School;
use App\Models\Student;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProfileCompletion extends Controller
{
    public function index ()
    {
        return inertia('Profile/ProfileCompletion');
    }

    public function storeStudent(Request $request)
    {
        // Validasi data
        $request->validate([
            'nis' => 'required|string|max:255',
            'place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'gender' => 'required|in:male,female',
            'phone' => 'required|string|max:20',
            'address' => 'required|string',
            'school' => 'required|string',
            'grade' => 'required|in:7,8,9',
        ]);

        $user = Auth::user();

        // Simpan data siswa
        Student::create([
            'user_id' =>  $user->id,
            'nis' => $request->nis,
            'place' => $request->place,
            'birth_date' => $request->birth_date,
            'gender' => $request->gender,
            'phone' => $request->phone,
            'address' => $request->address,
            'school' => $request->school,
            'grade' => $request->grade,
        ]);

        $user->role = 'murid';
        $user->is_profile_complete = 1;
        $user->save();

        return redirect()->intended('/')->with('success', '');
    }

    public function storeTeacher(Request $request)
    {
        // Validasi data
        $request->validate([
            'nip' => 'required|string|max:255',
            'place' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'gender' => 'required|in:male,female',
            'phone' => 'required|string|max:20',
            'address' => 'required|string',
            'school' => 'required|string',
            'position' => 'required|in:class_teacher,subject_teacher,headmaster',
        ]);
        
        $user = Auth::user();

        // Simpan data guru
        Teacher::create([
            'user_id' => Auth::id(),
            'nip' => $request->nip,
            'place' => $request->place,
            'birth_date' => $request->birth_date,
            'gender' => $request->gender,
            'phone' => $request->phone,
            'address' => $request->address,
            'school' => $request->school,
            'position' => $request->position,
        ]);

        $user->role = 'guru';
        $user->is_profile_complete = 1;
        $user->save();

        return redirect()->intended('/')->with('success', '');
    }
}
