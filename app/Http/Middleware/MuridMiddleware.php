<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MuridMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Cek apakah pengguna sedang login dan memiliki peran 'murid'
        if (Auth::check() && Auth::user()->role === 'murid') {
            return $next($request);
        }

        // Jika tidak, arahkan ke halaman akses ditolak atau halaman lain
        return redirect('/')->with('error', 'Anda tidak memiliki izin untuk mengakses halaman ini.');
    }
}
