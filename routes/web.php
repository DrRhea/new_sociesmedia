<?php

use Illuminate\Support\Facades\Route;

// Guest
use App\Http\Controllers\Auth\LoginController as GuestLogin;
use App\Http\Controllers\Auth\RegisterController as GuestRegister;

// User
use App\Http\Controllers\User\HomeController as UserHome;
use App\Http\Controllers\User\MultimediaController as UserMultimedia;
use App\Http\Controllers\User\MateriController as UserMateri;
use App\Http\Controllers\User\ForumController as UserForum;
use App\Http\Controllers\User\ArtikelController as UserArtikel;
use App\Http\Controllers\User\PenelitiController as UserPeneliti;
use App\Http\Controllers\User\KontakController as UserKontak;

// Administrator
use App\Http\Controllers\Admin\ForumController as AdminForum;
use App\Http\Controllers\Admin\UsersController as AdminUsers;
use App\Http\Controllers\Admin\MateriController as AdminMateri;
use App\Http\Controllers\Admin\ArtikelController as AdminArtikel;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\MultimediaController as AdminMultimedia;

// Guest
Route::middleware('guest')->group(function () {
    Route::get('/login', [GuestLogin::class, 'index']);
    Route::get('/register', [GuestRegister::class, 'index']);
});

// User (Siswa / Guru)
Route::controller(UserHome::class)->group(function () {
    Route::get('/', 'index');
});

Route::prefix('multimedia')->group(function () {
    Route::controller(UserMultimedia::class)->group(function () {
        Route::get('/', 'index');
    });
});

Route::prefix('materi')->group(function () {
    Route::controller(UserMateri::class)->group(function () {
        Route::get('/', 'index');
    });
});

Route::prefix('forum')->group(function () {
    Route::controller(UserForum::class)->group(function () {
        Route::get('/', 'index');
    });
});

Route::prefix('artikel')->group(function () {
    Route::controller(UserArtikel::class)->group(function () {
        Route::get('/', 'index');
    });
});

Route::prefix('peneliti')->group(function () {
    Route::controller(UserPeneliti::class)->group(function () {
        Route::get('/', 'index');
    });
});

Route::prefix('kontak')->group(function () {
    Route::controller(UserKontak::class)->group(function () {
        Route::get('/', 'index');
    });
});

// Administrator
Route::prefix('dashboard')->middleware('auth')->group(function () {
    Route::controller(AdminDashboard::class)->group(function () {
        Route::get('/', 'index');
    });
    Route::controller(AdminMultimedia::class)->group(function () {
        Route::get('/multimedia', 'index');
    });
    Route::controller(AdminMateri::class)->group(function () {
        Route::get('/materi', 'index');
    });
    Route::controller(AdminForum::class)->group(function () {
        Route::get('/forum', 'index');
    });
    Route::controller(AdminArtikel::class)->group(function () {
        Route::get('/artikel', 'index');
    });
    Route::controller(AdminUsers::class)->group(function () {
        Route::get('/users', 'index');
    });
});
