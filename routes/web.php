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
use App\Http\Controllers\Admin\BerandaController as AdminBeranda;
use App\Http\Controllers\Admin\ForumController as AdminForum;
use App\Http\Controllers\Admin\UsersController as AdminUsers;
use App\Http\Controllers\Admin\MateriController as AdminMateri;
use App\Http\Controllers\Admin\ArtikelController as AdminArtikel;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\MultimediaController as AdminMultimedia;
use App\Http\Controllers\Admin\PenelitiController as AdminPeneliti;

// Guest
Route::middleware('guest')->group(function () {
    Route::get('/login', [GuestLogin::class, 'index'])->name('login');
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
Route::prefix('dashboard')->group(function () {
    Route::controller(AdminDashboard::class)->group(function () {
        Route::get('/', 'index');
    });
    Route::prefix('beranda')->group(function () {
        Route::controller(AdminBeranda::class)->group(function () {
            Route::get('/', 'index');
        });
    });
    Route::prefix('multimedia')->group(function () {
        Route::prefix('konten-halaman')->group(function () {
            Route::controller(AdminMultimedia::class)->group(function () {
                Route::get('/', 'index_konten');
            });
        });
        Route::prefix('daftar-multimedia')->group(function () {
            Route::controller(AdminMultimedia::class)->group(function () {
                Route::get('/', 'index_daftar')->name('admin.list.multimedia.index');
                Route::get('/create', 'create_daftar')->name('admin.list.multimedia.craete');
                Route::post('/create', 'create_daftar')->name('admin.list.multimedia.post');
                Route::get('/edit/{slug}', 'edit_daftar')->name('admin.list.multimedia.edit');
                Route::put('/edit/{slug}', 'update_daftar')->name('admin.list.multimedia.update');
                Route::delete('/delete/{slug}', 'destroy_daftar')->name('admin.list.multimedia.destroy');
            });
        });
    });
    Route::prefix('materi')->group(function () {
        Route::prefix('konten-halaman')->group(function () {
            Route::controller(AdminMateri::class)->group(function () {
                Route::get('/', 'index_konten');
            });
        });
        Route::prefix('daftar-materi')->group(function () {
            Route::controller(AdminMateri::class)->group(function () {
                Route::get('/', 'index_daftar');
            });
        });
    });
        Route::prefix('forum')->group(function () {

        });
    Route::prefix('artikel')->group(function () {
        Route::prefix('konten-halaman')->group(function () {
            Route::controller(AdminArtikel::class)->group(function () {
                Route::get('/', 'index_konten');
            });
        });
        Route::prefix('daftar-artikel')->group(function () {
            Route::controller(AdminArtikel::class)->group(function () {
                Route::get('/', 'index_daftar');
            });
        });
    });
    Route::prefix('peneliti')->group(function () {
        Route::prefix('konten-halaman')->group(function () {
            Route::controller(AdminPeneliti::class)->group(function () {
                Route::get('/', 'index_konten');
            });
        });
        Route::prefix('daftar-peneliti')->group(function () {
            Route::controller(AdminPeneliti::class)->group(function () {
                Route::get('/', 'index_daftar');
            });
        });
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
