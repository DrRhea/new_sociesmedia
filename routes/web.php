<?php

use Illuminate\Support\Facades\Route;

// Guest

// User
use App\Http\Controllers\Auth\LoginController as GuestLogin;

// Administrator
use App\Http\Controllers\User\HomeController as UserHome;
use App\Http\Controllers\Admin\ForumController as AdminForum;
use App\Http\Controllers\Admin\UsersController as AdminUsers;
use App\Http\Controllers\Admin\MateriController as AdminMateri;
use App\Http\Controllers\Admin\ArtikelController as AdminArtikel;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\MultimediaController as AdminMultimedia;

// Guest
Route::middleware('guest')->group(function () {
    Route::get('/login', [GuestLogin::class, 'index']);
});

// User (Siswa / Guru)
Route::controller(UserHome::class)->group(function () {
    Route::get('/', 'index');
});

Route::get('/multimedia', function () {
    return inertia('User/Multimedia/MultimediaMain');
});

Route::get('/materi', function () {
    return inertia('User/Materi/MateriMain');
});

Route::get('/forum', function () {
    return inertia('User/Forum/ForumMain');
});

Route::get('/artikel', function () {
    return inertia('User/Artikel/ArtikelMain');
});

Route::get('/peneliti', function () {
    return inertia('User/Peneliti/PenelitiMain');
});

Route::get('/kontak', function () {
    return inertia('User/Kontak/KontakMain');
});

// Administrator
Route::prefix('dashboard')->group(function () {
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

