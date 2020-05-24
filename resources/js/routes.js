import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const GuestLayout = () => import('./views/guest/layouts/GuestLayout');
const GuestLogin = () => import('./views/guest/layouts/GuestLogin');
const GuestForbidden = () => import('./views/guest/layouts/GuestForbidden');
const GuestRegister = () => import('./views/guest/layouts/GuestRegister');

const UnitLayout = () => import('./views/admin/layouts/UnitLayout');
const AdminIndex = () => import('./views/admin/pages/dashboard/Index');
const AdminLogout = () => import('./views/admin/pages/logout');


const DealersLayout = () => import('./views/admin/pages/dealers/layout');
const DealersList = () => import('./views/admin/pages/dealers/show');
const DealersCreate = () => import('./views/admin/pages/dealers/create');

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'green',
    routes: [

        {
            path: '',
            component: GuestLayout,
            meta: {
                auth: false
            },
            redirect: '/login',
            children: [
                {
                    path:'/login',
                    name:'login',
                    component: GuestLogin
                },
                {
                    path:'/forbidden',
                    name:'forbidden',
                    component: GuestForbidden
                },
                {
                    path:'/register',
                    name:'register',
                    component: GuestRegister
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
                {
                    path:'/logout',
                    name:'admin.logout',
                    component: AdminLogout
                },

                {
                    path:'dealers',
                    component: DealersLayout,
                    children: [
                        {
                            path:'show',
                            name:'admin.dealers.show',
                            component: DealersList,
                            /*meta: {
                                auth: [
                                    'dealers-show'
                                ]
                            }*/
                        },
                        {
                            path:'create',
                            name:'admin.dealers.create',
                            component: DealersCreate,
                            /*meta: {
                                auth: [
                                    'dealers-create'
                                ]
                            }*/
                        }
                    ]
                },
            ]
        },

        {
            path: '*',
            redirect: '/dashboard',
            meta: {
                auth: true
            },
        },

    ],
});

router.beforeResolve((to, from, next) => {
    next();
});

router.afterEach((to, from) => {

});

export default router;
