import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home' 
import Contador from '@/components/Contador' 

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/Contador', component: Contador }
    ]
})