<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Auth/Login');
    }

    public function login(Request $request)
    {   
        // Validasi input
        $request->validate([
            'username_or_email' => 'required', // Menggunakan satu field untuk username/email
            'password' => 'required',
        ]);

        // Ambil username atau email
        $usernameOrEmail = $request->username_or_email;

        // Cek apakah input adalah email atau username
        $field = filter_var($usernameOrEmail, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        // Cek kredensial
        if (Auth::attempt([$field => $usernameOrEmail, 'password' => $request->password])) {
            $user = Auth::user(); // Ambil data pengguna yang sedang login
            
            // Redirect berdasarkan peran
            if ($user->role === 'admin' || $user->role === 'superadmin') {
                return redirect()->intended('/dashboard'); // Arahkan ke dashboard jika admin atau superadmin
            }
            
            // Login berhasil, redirect ke halaman beranda
            return redirect()->intended('/');
        }

        // Jika login gagal, lemparkan kesalahan
        throw ValidationException::withMessages([
            'username_or_email' => ['Username atau password tidak sesuai.'],
        ]);
    }

    // Tambahkan method untuk logout jika diperlukan
    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
