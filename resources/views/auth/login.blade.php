<x-layout.master>
    <x-slot name="title">
        @switch(request()->type)
        @case('staff')
        Staff Login
        @break

        @case('student')
        Student Login
        @break

        @case('guardian')
        Guardian Login
        @break

        @default
        Login
        @endswitch
    </x-slot>
    <x-top-menu> </x-top-menu>

    <div id='app'>
        @switch(request()->type)
        @case('staff')
        <staff-login></staff-login>
        @break

        @case('student')
        <student-login></student-login>
        @break

        @case('guardian')
        <guardian-login></guardian-login>
        @break

        @default
        <login></login>
        @endswitch

    </div>
    <x-footer></x-footer>
</x-layout.master>