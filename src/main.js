import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/Home.vue'
import Rsvp from './components/Rsvp.vue'
import Info from './components/Info.vue'

import './style.css'
import App from './App.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/rsvp', component: Rsvp },
    { path: '/info', component: Info },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});



createApp(App).use(router).mount('#app')
