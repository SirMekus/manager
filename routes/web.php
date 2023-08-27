<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

//When a user logs in
Route::prefix('dashboard')->middleware(['auth'])->group(function () {
    Route::get('tasks', function () {
        return view('vue');
    })->name('tasks');
});

Route::fallback(function () {
    return view('vue');
});