import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const GuestLayout = () => import('./views/guest/layouts/GuestLayout');
const GuestLogin = () => import('./views/guest/layouts/GuestLogin');
const GuestForbidden = () => import('./views/guest/layouts/GuestForbidden');

const UnitLayout = () => import('./views/admin/layouts/UnitLayout');
const AdminIndex = () => import('./views/admin/pages/dashboard/Index');

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'green',
    routes: [

        {
            path: '/login',
            component: GuestLayout,
            meta: {
                auth: false
            },
            children: [
                {
                    path:'',
                    name:'login',
                    component: GuestLogin
                },
                {
                    path:'admin/403',
                    name:'forbidden',
                    component: GuestForbidden
                },
            ]
        },

        {
            path: '',
            component: UnitLayout,
            meta: {
                auth: true
            },
            children: [
                {
                    path:'dashboard',
                    name:'admin.dashboard',
                    component: AdminIndex,
                },
            ]
        },

    ],
});

router.beforeResolve((to, from, next) => {
    next();
});

router.afterEach((to, from) => {

});

export default router;
