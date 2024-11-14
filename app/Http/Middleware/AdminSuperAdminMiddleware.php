<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminSuperAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Pastikan pengguna telah login
        if (Auth::check()) {
            // Cek apakah pengguna memiliki peran admin atau superadmin
            if (in_array(Auth::user()->role, ['admin', 'superadmin'])) {
                return $next($request); // Lanjutkan jika peran sesuai
            }
        }

        // Redirect ke halaman yang berbeda jika tidak memiliki izin
        return redirect('/')->with('error', 'Anda tidak memiliki izin untuk mengakses halaman ini.');
    }
}
