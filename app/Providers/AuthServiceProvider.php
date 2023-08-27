<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Access\Response;
use App\MyClass\SiteAdmin\PermissionBox;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('has-shared-permission', function ($model) {
            //return $model;
            
            //There are pages that should be accessed by both users, staff and students (like to view assignments, read reviews, etc)
            if($model instanceof \App\Models\User or $model instanceof \App\Models\Student or $model instanceof \App\Models\Staff or $model instanceof \App\Models\Admin)
            {
                return true;
            }

        });

        Gate::define('has-permission', function ($model, $permission) {
            
            //This is the app admin or owner of the school
            if($model instanceof \App\Models\User or request()->user('admin'))
            {
                return true;
            }

            //Else we are dealing with staff now.
            $result = new PermissionBox($model, $permission);

            //It means that Admin has not defined this '$permission' for route yet. Permission must be defined for all 'permission-required' routes to prevent abuse. A list of permissions available on this site can be found under the 'permission' key in the settings.php file located in the config folder
            if($result->permissionNotCreated())
            {
                return Response::deny("Management has to set <b>'".$permission."'</b> permission before this operation from the dashboard may be carried out. Please contact management.");
            }
            else
            {
                //If this staff does not have the correct role to perform this operation.
                if(!$result->hasPermission())
                {
                    return Response::deny('You may not have permission to carry out this action.');
                }
            }

            return true;
        });

        Gate::define('is-admin', function () {
            if(request()->user('admin'))
            {
                return true;
            }

        });
    }
}
