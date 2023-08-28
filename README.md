## Installation

For these instructions I assume you have a development server on your local machine that runs on "localhost".

1. Run composer install
1. Create and fill the .env file (example included /.env-example)
1. Run `php artisan migrate` to create database tables
1. Surf the site and create an account first before proceeding. A default account was intentionally not created.
1. Seed the database by running `php artisan db:seed --class=TaskSeeder`. This will create some random tasks.
1. Run `php artisan storage:link` (If you run into any issue delete any 'storage' folder you come across in the 'public' folder and then try again)

1. Visit http://localhost and happy surfing