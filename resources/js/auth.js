import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'
// Auth base configuration some of this options
// can be override in method calls
const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'dashboard_session',
    tokenStore: ['localStorage'],
    authRedirect: { name: 'login' },
    registerData: {url: "auth/register", method: 'POST', redirect: '/login'},
    loginData: {url: "auth/login", method: 'POST', redirect: '/dashboard', fetchUser: true},
    logoutData: {url: "auth/logout", method: 'POST', redirect: '/login', makeRequest: true},
    fetchData: {url: "auth/user", method: 'GET', enabled: true},
    refreshData: {url: "auth/refresh", method: 'GET', enabled: true, interval: 30},
    rolesVar: 'permissions',
    perseUserData: (data) => {
        data['permissions'] = data.current.permissions.map((permission) => permission.slug);
        return data;
    }
};
export default config
