<x-layout.master>

    <x-top-menu> </x-top-menu>

    <header class="text-center">
        <div class="container-fluid p-5 bg-white">
            <div class="row">
                <div class='col-lg-12  mx-auto row'>
                    <div class='col-lg-7'>
                        <h1 style="font-size:3.4rem;" class='fw-bolder'>Did You Know?</h1>
                        <p class="fs-2 fw-bold">You can cut cost of management, save time on management as well as leverage e-tools and solutions for learning in your organisation and maximize profit just by creating a <span class="fw-bold" style="color:var(--color-theme) !important;">free</span> account.</p>
                    </div>
                    <div class='col-lg-5'>
                        <div>
                            <img class='img-fluid' src="{{asset('storage/for_site/istockphoto.jpg')}}">
                        </div>
                    </div>
                </div>
            </div>
            <a href="{{route('register')}}" class='btn mt-3 p-3 btn-home fw-bold' >Create My Free Account</a>
        </div>
    </header>

    <div class='container'>
        <div class="row">
            <div class='col-lg-12 mx-auto mt-4 alert alert-warning text-center'>
                For non-school owners (parents/guardians, staff/workers and students) who may have already been invited, please click on the <b>menu icon</b> or <b>"Login"</b> navigation link above to log in to your respective portal
            </div>
        </div>
    </div>

    <section class='container-fluid'>
        <div class="row mt-5">
            <div class='col-lg-12 mx-auto'>
                <p class='text-white text-center fs-1 fw-bold'>Let's Get Started</p>
                <p class='text-center'><a class="btn home-color fw-bold btn-lg text-light" href="{{route('register')}}" role="button">Sign Up Now</a> </p>
            </div>
        </div>
    </section>

    <x-footer></x-footer>

</x-layout.master>