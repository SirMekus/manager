import { on, registerEventListeners, lazyLoadImages } from "mmuo"
import * as bootstrap from '~bootstrap';
import axios from 'axios';

window.addEventListener("DOMContentLoaded", function() {
    registerEventListeners()

    lazyLoadImages()
}, false);


try {
window.bootstrap =  bootstrap;
} catch (e) {}

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.headers.common['Accept'] = 'application/json';

window.axios.defaults.withCredentials = true;