<template>
    <div class="container-fluid logo">

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" style='border-radius:30px; box-shadow:5px 10px;'>
                    <div class="card-header background-gradient-design d-flex justify-content-center"
                        style='border-radius:30px;'>
                        <h3 class='text-light fw-bold'>Sign Up</h3>
                    </div>

                    <div class="card-body">
                        <form :action="action" id="form" role="form" method="post" :data-bc="eventName">

                            <div class="row">
                                <div class="col-6">
                                    <label>First Name<span style="color:red;">*</span></label>
                                    <input type="text" class="form-control form-control-lg borderless-input"
                                        placeholder="first name" required name="firstname" />
                                </div>

                                <div class="col-6">
                                    <label>Last Name<span style="color:red;">*</span></label>
                                    <input type="text" class="form-control form-control-lg borderless-input"
                                        placeholder="last name" required name="lastname" />
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <label>Email<span style="color:red;">*</span></label>
                                    <input type="email" class="form-control form-control-lg borderless-input"
                                        placeholder="your email address" required name="email" />
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <label>Create Password<span style="color:red;">*</span></label>
                                <div class="input-group form-group input-lg mb-3">
                                    <input type="password"
                                        class="form-control form-control-lg signup-field borderless-input password-checker"
                                        placeholder="password" required="required" id="password" name="password">
                                    <div class="bg-dark input-group-text">
                                        <a class="text-light password-visibility" data-id='password' href="#">
                                            <i class="fas fa-eye-slash "></i>
                                        </a>
                                    </div>
                                </div>
                                <span class="password-checker-notification"></span>
                            </div>

                            <div class="form-group mt-3">
                                <label>Re-enter Password<span style="color:red;">*</span></label>
                                <div class="input-group">
                                    <input type="password"
                                        class="form-control form-control-lg borderless-input signup-field password-checker"
                                        data-name="second password" placeholder="enter password again"
                                        required="required" id="password2" name="password_confirmation" />
                                    <div class="bg-dark input-group-text">
                                        <a class="text-light password-visibility" href="#">
                                            <i class="fas fa-eye-slash "></i>
                                        </a>
                                    </div>
                                    <div class="bg-dark input-group-text">
                                        <button data-strength="decent_pw" data-target="password"
                                            class="text-light btn btn-sm gen-password">
                                            <i class="fas fa-key"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class=" mt-3">
                                <span class="text-muted">I have read the <a class='text-decoration-none' target="misc"
                                        href="#">
                                        <span style='color:var(--color-theme) !important'><b>Terms And
                                                Conditions</b></span></a>
                                    and I agree to them
                                </span>

                                <div class="form-check form-switch">
                                    <input class="form-check-input" v-model="state.agree" :true-value="true"
                                        :false-value="false" type="checkbox" name="agreement" role="switch"
                                        id="flexSwitchCheckDefault" />
                                    <label class="form-control-label" for="flexSwitchCheckDefault">Yes/No</label>
                                </div>
                            </div>

                            <div class="form-group mt-3">
                                <input :class="{ disabled: (!state.agree) }" class="btn btn-home btn-lg w-100 fw-bold"
                                    type="submit" value="Sign Up" />
                            </div>

                        </form>
                        <div class='d-flex justify-content-center mt-2'>
                            <span>Have an account already? <a class="fw-bold text-decoration-none"
                                    title="Sign up" :href="api.auth.login" style='color:var(--color-theme) !important'>
                                    Login </a>instead </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive } from 'vue'
import { api } from '@/api.js'

export default {
    setup() {
        const eventName = 'signup'
        const action = api.auth.signup
        const router = useRouter()
        const state = reactive({
            agree: false,
            school_owner: false
        })

        document.addEventListener(eventName, (value) => {
            router.push({ name: 'tasks', replace: true })
            location.reload();
        });

        //get CSRF protection
        axios.get('sanctum/csrf-cookie').then(response => {
            // Login...
        });


        return {
            state,
            api,
            eventName,
            action
        }
    },
}

</script>