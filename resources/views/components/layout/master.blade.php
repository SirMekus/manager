<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>{{ $title ?? config('app.name') }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="school management system, parental control and guidance platform to monitor child(ren) or ward's academic journey. Empowering education, uniting minds.">
        <meta name="keywords" content="school management system, parental control, school, children, students, wards, education, academics, cheap, free">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="base_url" content="{{ URL::to('/') }}/">
        <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="theme-color" content="#f3047dd9">

        <link rel="icon" type="image/png" sizes="192x192"  href="{{asset('storage/for_site/favicon/android-chrome-192x192.png')}}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{asset('storage/for_site/favicon/apple-touch-icon.png')}}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{asset('storage/for_site/favicon/favicon-32x32.png')}}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{asset('storage/for_site/favicon/favicon-16x16.png')}}">
        <link rel="manifest" href="{{asset('site.webmanifest')}}" >
        @vite('resources/js/app.js')
        @stack('styles')
    </head>
    <body>
        {{ $slot }}
         
        @stack('scripts')
    </body>
</html>