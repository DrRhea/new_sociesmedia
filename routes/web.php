<?php

use Illuminate\Support\Facades\Route;

// Guest
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\Auth\LoginController as GuestLogin;
use App\Http\Controllers\Auth\RegisterController as GuestRegister;

// User
use App\Http\Controllers\Profile\ProfileCompletion as UserProfileCompletion;
use App\Http\Controllers\User\HomeController as UserHome;
use App\Http\Controllers\User\MultimediaController as UserMultimedia;
use App\Http\Controllers\User\KontakController as UserKontak;
use App\Http\Controllers\User\MateriController as UserMateri;
use App\Http\Controllers\User\ForumController as UserForum;
use App\Http\Controllers\User\ArtikelController as UserArtikel;
use App\Http\Controllers\User\PenelitiController as UserPeneliti;
use App\Http\Controllers\Profile\UserProfileController as UserProfile;

// Administrator
use App\Http\Controllers\Admin\UsersController as AdminUsers;
use App\Http\Controllers\Admin\BerandaController as AdminBeranda;
use App\Http\Controllers\Admin\PenelitiController as AdminPeneliti;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;

use App\Http\Controllers\Admin\Multimedia\MediaManagementController as AdminManajemenMultimedia;
use App\Http\Controllers\Admin\Multimedia\ContentDisplayController as AdminContentMultimedia;
use App\Http\Controllers\Admin\Multimedia\ContentApprovalController as AdminApprovalMultimedia;

use App\Http\Controllers\Admin\Materi\MediaManagementController as AdminManajemenMateri;
use App\Http\Controllers\Admin\Materi\ContentDisplayController as AdminContentMateri;
use App\Http\Controllers\Admin\Materi\ContentApprovalController as AdminApprovalMateri;

use App\Http\Controllers\Admin\Forum\MediaManagementController as AdminManajemenForum;
use App\Http\Controllers\Admin\Forum\ContentDisplayController as AdminContentForum;
use App\Http\Controllers\Admin\Forum\ContentApprovalController as AdminApprovalForum;

use App\Http\Controllers\Admin\Researcher\MediaManagementController as AdminManajemenPeneliti;
use App\Http\Controllers\Admin\Researcher\ContentDisplayController as AdminContentPeneliti;
use App\Http\Controllers\Admin\Researcher\ContentApprovalController as AdminApprovalPeneliti;

use App\Http\Controllers\Admin\Article\MediaManagementController as AdminManajemenArtikel;
use App\Http\Controllers\Admin\Article\ContentDisplayController as AdminContentArtikel;
use App\Http\Controllers\Admin\Article\ContentApprovalController as AdminApprovalArtikel;

// Guest
Route::middleware('guest')->group(function () {
    Route::get('/login', [GuestLogin::class, 'index'])->name('login');
    Route::post('/login', [GuestLogin::class, 'login'])->name('login.post'); // Mengubah nama
    Route::get('/login/google', function () {
        return Socialite::driver('google')->redirect();
    });
    
    Route::get('/login/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);
    
    Route::get('/register', [GuestRegister::class, 'index']);
    Route::post('/register', [GuestRegister::class, 'register']);
    
    Route::get('auth/google', [GoogleAuthController::class, 'redirectToGoogle']);
    Route::get('auth/google/callback', [GoogleAuthController::class, 'handleGoogleCallback']);
});

Route::post('/logout', [GuestLogin::class, 'logout'])->middleware('auth')->name('logout');


Route::post('/profile/student', [UserProfileCompletion::class, 'storeStudent'])->middleware('auth');
Route::post('/profile/teacher', [UserProfileCompletion::class, 'storeTeacher'])->middleware('auth');


Route::middleware(['guest_or_profile_completed'])->group(function () {
    Route::get('/lengkapi-data', [UserProfileCompletion::class, 'index'])->middleware('auth')->name('profile.completion');
    Route::controller(UserHome::class)->group(function () {
        Route::get('/', 'index');
    });

    Route::prefix('multimedia')->group(function () {
        Route::controller(UserMultimedia::class)->group(function () {
            Route::get('/', 'index');
            Route::get('/{slug}', 'show');
        });
    });

    Route::prefix('materi')->group(function () {
        Route::controller(UserMateri::class)->group(function () {
            Route::get('/', 'index');
            Route::get('/{slug}', 'show');
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
            Route::get('/{slug}', 'show');
        });
    });

    Route::prefix('kontak')->group(function () {
        Route::controller(UserKontak::class)->group(function () {
            Route::get('/', 'index');
        });
    });

    Route::prefix('profile')->group(function () {
        Route::controller(UserProfile::class)->group(function () {
            Route::get('/', 'index');
        });
    });
});

// Administrator
Route::prefix('dashboard')->middleware(['auth', 'admin.superadmin'])->group(function () {
        Route::controller(AdminDashboard::class)->group(function () {
            Route::get('/', 'index');
        });
        Route::prefix('beranda')->group(function () {
            Route::controller(AdminBeranda::class)->group(function () {
                Route::get('/', 'index');
            });
        });

        Route::prefix('multimedia')->group(function () {
            Route::get('/', function () {
                return redirect()->route('admin.list.multimedia.index');
            });
            
            Route::prefix('kelola-konten')->group(function () {
                Route::controller(AdminContentMultimedia::class)->group(function () {
                    Route::get('/', 'index')->name('admin.content.multimedia.index');
                });
            });

            Route::prefix('manajemen-multimedia')->group(function () {
                Route::controller(AdminManajemenMultimedia::class)->group(function () {
                    Route::get('/', 'index')->name('admin.list.multimedia.index');
                    Route::get('/create', 'create')->name('admin.list.multimedia.create');
                    Route::post('/create', 'store')->name('admin.list.multimedia.post');
                    Route::get('/edit/{slug}', 'edit')->name('admin.list.multimedia.edit');
                    Route::put('/edit/{slug}', 'update')->name('admin.list.multimedia.update');
                    Route::delete('/delete/{id}', 'destroy')->name('admin.list.multimedia.destroy');
                });
            });
        });
        
        Route::prefix('materi')->group(function () {
            Route::prefix('konten-halaman')->group(function () {
                Route::controller(AdminContentMateri::class)->group(function () {
                    Route::get('/', 'index')->name('admin.list.materi.index');
                });
            });
            Route::prefix('manajemen-materi')->group(function () {
                Route::controller(AdminManajemenMateri::class)->group(function () {
                    Route::get('/', 'index')->name('admin.list.materi.index');
                    Route::get('/create', 'create')->name('admin.list.materi.create');
                    Route::post('/create', 'store')->name('admin.list.materi.post');
                    Route::get('/edit/{slug}', 'edit')->name('admin.list.materi.edit');
                    Route::put('/edit/{slug}', 'update')->name('admin.list.materi.update');
                    Route::delete('/delete/{slug}', 'destroy')->name('admin.list.materi.destroy');
                });
            });
        });
        Route::prefix('forum')->group(function () {
            // Tambahkan rute forum administrator jika ada
        });
        Route::prefix('artikel')->group(function () {
            Route::prefix('konten-halaman')->group(function () {
                Route::controller(AdminContentArtikel::class)->group(function () {
                    Route::get('/', 'index_konten');
                });
            });
            Route::prefix('daftar-artikel')->group(function () {
                Route::controller(AdminManajemenArtikel::class)->group(function () {
                    Route::get('/', 'index')->name('admin.list.artikel.index');
                    Route::get('/create', 'create')->name('admin.list.artikel.create');
                    Route::post('/create', 'store')->name('admin.list.artikel.post');
                    Route::get('/edit/{slug}', 'edit')->name('admin.list.artikel.edit');
                    Route::put('/edit/{slug}', 'update')->name('admin.list.artikel.update');
                    Route::delete('/delete/{slug}', 'destroy')->name('admin.list.artikel.destroy');
                });
            });
        });
        Route::prefix('peneliti')->group(function () {
            Route::prefix('konten-halaman')->group(function () {
                Route::controller(AdminContentPeneliti::class)->group(function () {
                    Route::get('/', 'index_konten');
                });
            });
            Route::prefix('manajemen-peneliti')->group(function () {
                Route::controller(AdminManajemenPeneliti::class)->group(function () {
                    Route::get('/', 'index')->name('admin.list.peneliti.index');
                    Route::get('/tambah-peneliti', 'create')->name('admin.list.peneliti.create');
                    Route::post('/tambah-peneliti', 'store')->name('admin.list.peneliti.post');
                    Route::get('/edit/{id}', 'edit')->name('admin.list.peneliti.edit');
                    Route::put('/edit/{id}', 'update')->name('admin.list.peneliti.update');
                    Route::delete('/delete/{id}', 'destroy')->name('admin.list.peneliti.destroy');
                });
            });
        });
        Route::prefix('guru')->group(function () {
            Route::controller(AdminUsers::class)->group(function () {
                Route::get('/', 'index');
            });
        });
        Route::prefix('siswa')->group(function () {
            Route::controller(AdminUsers::class)->group(function () {
                Route::get('/', 'index');
            });
        });
});