<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuruMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Cek apakah pengguna sedang login dan memiliki peran 'guru'
        if (Auth::check() && Auth::user()->role === 'guru') {
            return $next($request);
        }

        // Jika tidak, arahkan ke halaman akses ditolak atau halaman lain
        return redirect('/')->with('error', 'Anda tidak memiliki izin untuk mengakses halaman ini.');
    }
}
