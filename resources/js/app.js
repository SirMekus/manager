/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 import './bootstrap';
 import '../sass/app.scss'
 import '../css/app.css';
 import '@fortawesome/fontawesome-free/css/all.css'

import { createApp, provide } from 'vue';

import { router, api } from "./router";
import { createPinia } from "pinia";
import { useAuthStore } from "./store/auth.js";
import { showSpinner, removeSpinner } from "mmuo";
import { asyncComponent } from "./MyComponents.js"
import  vuelarPlugin  from "@sirmekus/vuelar"

import Login from './components/auth/Login.vue'
import SignUp from './components/auth/SignUp.vue'

import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: `${location.origin + (location.port ? ':'+location.port : '')}/graphql`,
})

let app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
})

app.use(createPinia());

app.use(vuelarPlugin)

app.config.productionTip = false;

let component

for(component in asyncComponent){
    app.component(component, asyncComponent[component]);
}

app.component('Login', Login).component('SignUp', SignUp);

router.beforeResolve(async (to, from) => {
    if (to.meta.requiresAuthentication) {
        const user = useAuthStore();
        if (!user.data || !sessionStorage.auth_checked) {
            try {
                const response = await axios.get(api.auth.auth_confirm);
                user.data = response.data;
            } catch (error) {
                location.href = api.page.login
            }
        }
        sessionStorage.auth_checked = true;
    }

    if (to.meta.title) {
        document.title = to.meta.title;
    }

    return true;
});

router.beforeEach((to, from) => {
    if(document.querySelector("#close-menu") && document.querySelector("#close-menu").parentElement.parentElement.classList.contains('show')){
        document.querySelector("#close-menu").click()
    }
    
    showSpinner();
});

router.afterEach((to, from) => {
    document.body.removeAttribute("style");
    removeSpinner();
});

app.use(router);

app.mount("#app");

export { app };