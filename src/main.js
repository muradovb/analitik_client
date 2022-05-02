import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import store from './store'
import AboutView from './views/AboutView'
import CatalogView from './views/CatalogView'
import ContactView from './views/ContactView'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/about', component: AboutView},
        {path: '/contact', component: ContactView},
        {path: '/catalog', component: CatalogView}
    ]

});


createApp(App).use(store).use(router).mount('#app')
