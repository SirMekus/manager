<?php

use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('user', function () {
        return request()->user();
    });
});
