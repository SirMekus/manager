<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-10 col-xl-10 col-md-10 col-md-10">
                <div class="bg-dark offcanvas offcanvas-start" tabindex="-1" id="offcanvasStart"
                    aria-labelledby="offcanvasTopLabel">

                    <div class="offcanvas-header">
                        <a class="nav-link fw-bold text-light" href="/">
                            <span id="offcanvasTopLabel" class="text-white fw-bolder fs-2">{{ appName }}</span>
                        </a>

                        <button type="button" id='close-menu' class="btn-close text-reset bg-light"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <nav class="nav flex-column">

                            <div style="border-bottom: medium solid white; height:8px;"></div>

                            <router-link class="nav-link font-weight-bold text-light anchor-tags"
                                :to="{ name: 'tasks' }">
                                <i class="fas fa-home"></i>Task Manager
                            </router-link>

                            <router-link class="nav-link font-weight-bold text-light anchor-tags"
                                :to="{ name: 'task_editor' }">
                                <i class="fas fa-home"></i>Add/Create Task
                            </router-link>

                        </nav>
                    </div>

                </div>
                <!-- - - - - - - -- - - - - - - - - - - - - - - Dashboard Menu ends here - - - - - - - -  - - -- - - - - - - - - - - - - - - -->


                <nav class="nav navbar navbar-expand nav-fill justify-content-center home-color sticky-top"
                    role="navigation">
                    <div class="bg-light position-absolute start-0" style="height:26px; width:35px; z-index:1000;">
                        <a id="dashboard-menu-toggle" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart"
                            aria-controls="offcanvasStart">
                            <svg class="bg-dark text-white" x-show="!showMenu" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="4" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </a>
                    </div>

                    <div v-if="user.data" class="dropdown">
                        <a class="dropdown-toggle text-dark" href="#" role="button" id="dropdownMenuLink"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img v-if="user.data" style="width:45px; height:45px;" :src="storage(user.data.dp, 'dp')"
                                class='rounded-circle' />
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item pre-run" data-caption="Are you sure you want to logout?"
                                data-classname="run-get-request" data-bc="logout" href="#">
                                <i class="fas fa-sign-out-alt"></i>Log Out
                            </a>
                        </div>
                    </div>

                </nav>

                <div class="pb-5">
                    <slot></slot>
                </div>

            </div>
        </div>
    </div>
</template>
    
<script>
import { useAuthStore } from "@/store/auth.js"
import { storage } from "@/helper.js"
import { reactive } from 'vue'
import { api } from '@/router.js'
import { auth } from '@/auth.js'


export default {
    setup() {
        const appName = import.meta.env.VITE_APP_NAME
        const user = useAuthStore()
        const state = reactive({
            notification: null,
        })

        document.addEventListener('logout', (value) => {
            auth.logout(user)
        });

        return {
            appName,
            user,
            state,
            storage,
            api,
        }
    }
}
</script>