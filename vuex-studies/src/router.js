import Vue from 'vue'
import Router from 'vue-router'
import Products from './components/Products'

Vue.use(Router)

const routes = [
    {
        name: 'products',
        path: '/products',
        component: Products
    }
]

const router = new Router({ routes })

export default router