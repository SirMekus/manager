<template>
    <div class="container-fluid bg-white">
        <div class="row justify-content-center">
        <div class="col-md-7 logo">
        </div>
            <div class="col-md-5">
                <div class="card" style='border-radius:30px; box-shadow:5px 10px;'>

                    <div class="card-body">
                        <form :action="action" role="form" id="form" method="post" :data-bc="eventName">
                            
                            <div class="form-floating form-group">
                                <input type="email" class="form-control borderless-input" id="emailAddr" placeholder="name@example.com"  autocomplete required="required" name='email'>
                                <label for="emailAddr">Email</label>
                            </div>

                            <div class="form-floating form-group mt-3">
                                <input type="password" class="form-control form-control-lg borderless-input"
                                    placeholder="password" id="userPassword" autocomplete name="password" />
                                <label for="userPassword">Password</label>
                            </div>

                            <div class="form-group mt-3">
                                <input checked class="custom-control-input check" type="checkbox" id="customSwitch"
                                    name="remember" />
                                <label class="custom-control-label" for="customSwitch">Remember Me</label>
                            </div>

                            <div class="form-group mt-3">
                                <input class="btn btn-home btn-lg w-100" type="submit" value="Log In" />
                            </div>
                        </form>

                        <hr />
                        <div class='d-flex justify-content-center'>
                            <span>Don't have an account? Let's create one for you.
                                <a class="mt-0 fw-bold text-decoration-none" title="sign up"
                                    :href="api.auth.signup" style='color:var(--color-theme) !important'> Sign up </a>now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { useRouter } from "vue-router"
import { api } from '@/api.js'

export default {
    setup() {
        const eventName = 'login'
        const action = api.auth.login
        const router = useRouter()

        document.addEventListener(eventName, (value) => {
            router.push({ name: 'tasks', replace: true })
            location.reload();
        });

        //get CSRF protection
        axios.get('sanctum/csrf-cookie').then(response => {
            //do nothing
        });

        return {
            eventName,
            action,
            api
        }
    },
}
</script>