import { Register, Login, Home, Offer, Profile } from '../Pages/index';

export const match = [
    {
        path: "/",
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: "/offer",
        component: Offer
    },
    {
        path: "/profile",
        component: Profile
    },
]
