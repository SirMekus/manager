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

//import * as apolloProvider from './apolloProvider'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
})

let app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
})


//let app = createApp({});

app.use(createPinia());

app.use(vuelarPlugin)

//app.use(apolloProvider.provider);

app.config.productionTip = false;

let component

for(component in asyncComponent){
    app.component(component, asyncComponent[component]);
}

app.component('Login', Login).component('SignUp', SignUp);

router.beforeResolve(async (to, from) => {
    //This is specific to founder(s) of an organisation. Only founder(s) should have access/permission
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
    if(from.name == undefined && (location.pathname != to.fullPath) && document.querySelector("body").children[0].nextElementSibling){
        // location.href = to.fullPath
        // return false
    }

    if(document.querySelector("#close-menu") && document.querySelector("#close-menu").parentElement.parentElement.classList.contains('show')){
        document.querySelector("#close-menu").click()
    }
    
    showSpinner();
});

router.afterEach((to, from) => {
    document.body.removeAttribute("style");
    removeSpinner();

    if(to.name == undefined && !document.querySelector("body").children[0].nextElementSibling){
        //location.reload()
    }
});

app.use(router);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
app.mount("#app");


let app2 = createApp({});
app2.component("VueFooter", asyncComponent.Footer);

if(document.querySelector("#spaFooter")){
    app2.use(router);
    app2.mount("#spaFooter");
}


export { app, app2 };
