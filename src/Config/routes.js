import { Register, Login, Home, Offer, Profile } from './../Pages/index';

export const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/offer',
        component: Offer
    },
    {
        path: '/profile',
        component: Profile
    },
]
