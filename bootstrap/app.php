<?php

use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\AdminSuperAdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
        
        $middleware->alias([
            'guest_or_profile_completed' => \App\Http\Middleware\CheckProfileCompletion::class,
            'admin.superadmin' => \App\Http\Middleware\AdminSuperAdminMiddleware::class,
            'superadmin' => \App\Http\Middleware\SuperAdminMiddleware::class,
            'murid' => \App\Http\Middleware\MuridMiddleware::class,
            'guru' => \App\Http\Middleware\GuruMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();