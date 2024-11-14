<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class CheckProfileCompletion
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
        // Jika pengguna belum login, izinkan akses
        if (!Auth::check()) {

            return $next($request);
        }

        // Ambil pengguna yang sedang login
        $user = Auth::user();

        // Jika pengguna sudah login dan profilnya lengkap (is_profile_complete === 1), 
        // larang akses ke rute 'profile.completion'
        if ($user->is_profile_complete === 1 && $request->route()->getName() === 'profile.completion') {
            return redirect('/'); // Arahkan ke halaman lain, misalnya homepage
        }

        // Jika pengguna belum melengkapi profil (is_profile_complete === 0), 
        // izinkan akses ke rute 'profile.completion'
        if ($user->is_profile_complete === 0 && $request->route()->getName() !== 'profile.completion') {
            return redirect()->route('profile.completion');
        }

        // Jika tidak ada kondisi di atas yang terpenuhi, izinkan akses
        return $next($request);
    }
}
