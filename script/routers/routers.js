import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Menger from '../components/Home/Main/MainCont/Menger/Menger.vue'
import Internation from '../components/Home/Main/MainCont/Internation/Internation.vue'
import Plublic from '../components/Home/Main/MainCont/Public/Plublic.vue'
const routes = [
    {
        path: '/',
        redirect: 'home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                redirect: 'plublic'
            },
            {
                path: 'menger',
                name: 'Menger',
                component: Menger
            },
            {
                path: 'internation',
                name: 'Internation',
                component: Internation
            },
            {
                path: 'plublic',
                name: 'Plublic',
                component: Plublic
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
export default routes
