<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\PaymentRepositoryInterface;
use App\Repositories\PaystackRepository;

use App\Interfaces\FileUploaderRepositoryInterface;
use App\Repositories\FileUploaderRepository;

use App\Interfaces\EmailRepositoryInterface;
use App\Repositories\PhpMailerRepository;


class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(PaymentRepositoryInterface::class, PaystackRepository::class);
        $this->app->bind(FileUploaderRepositoryInterface::class, FileUploaderRepository::class);
        $this->app->bind(EmailRepositoryInterface::class, PhpMailerRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
