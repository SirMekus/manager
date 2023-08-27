<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::enforceMorphMap([
            'staff' => 'App\Models\Staff',
            'admin' => 'App\Models\Admin',
            'school' => 'App\Models\School',
            'user' => 'App\Models\User',
            'student' => 'App\Models\Student',
        ]);
    }
}
