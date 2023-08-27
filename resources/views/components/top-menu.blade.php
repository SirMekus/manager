<nav class="navbar navbar-expand-lg navbar-light home-color">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">
      <img style="width:45px; height:45px;" class="img-thumbnail"
        src="{{asset('storage/for_site/clocking.jpg')}}" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          @if(!request()->user())
          <a class="fs-5 nav-link text-white fw-bolder" href="{{route('login')}}"> Login</a>
          @else
          <a class="fs-5 nav-link text-white fw-bolder" href="{{route('tasks')}}"> Dashboard</a>
          @endif
        </li>

        @if(!request()->user())
        <li v-if="!user.data" class="nav-item">
          <a class="fs-5 nav-link text-white fw-bolder" href="{{route('register')}}"> Sign Up
          </a>
        </li>
        @endif
      </ul>
    </div>
  </div>
</nav>