<template>
<!-- ========== Left Sidebar Start ========== -->

<!--- Sidemenu -->
<div id="sidebar-menu">
    <!-- Left Menu Start -->
    <ul id="side-menu" class="metismenu list-unstyled">

        <template v-for="(link, index) in mainMenu">


            <li class="menu-title" v-show="link.hasOwnProperty('seperator')">{{ link.seperator }}</li>

            <li v-show="link.hasOwnProperty('invoke')">
                <router-link v-if="link.hasOwnProperty('children')" to="#" class="has-arrow">
                    <i :class="link.icon"></i>
                    <span>{{ link.title }}</span>
                </router-link>
                <router-link v-else :to="{ name: link.invoke }">
                    <i :class="link.icon"></i>
                    <span>{{ link.title }}</span>
                </router-link>
                <ul class="sub-menu" aria-expanded="false" v-show="link.children">
                <template v-for="(children, childIndex) in link.children">
                    <li>
                        <router-link :to="{ name: children.invoke }">
                            <span>{{ children.title }}</span>
                        </router-link>
                    </li>
                </template>
                </ul>
            </li>

        </template>

<!--        <li class="menu-title">Menu</li>-->

<!--        <li>-->
<!--            <router-link :to="{ path: 'dashboard' }">-->
<!--                <i class="bx bx-home-circle"></i>-->
<!--                <span>Dashboards</span>-->
<!--            </router-link>-->
<!--        </li>-->

<!--        <li>-->
<!--            <a href="javascript: void(0);" class="has-arrow">-->
<!--                <i class="bx bx-layout"></i>-->
<!--                <span>Layouts</span>-->
<!--            </a>-->
<!--            <ul class="sub-menu" aria-expanded="false">-->
<!--                <li>-->
<!--                    <a href="javascript: void(0);" class="side-nav-link-ref" @click="defaultSidebar">Default Sidebar</a>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </li>-->

<!--        <li class="menu-title">Pages</li>-->

<!--        <li>-->
<!--            <a href="javascript: void(0);" class="has-arrow">-->
<!--                <i class="bx bx-user-circle"></i>-->
<!--                <span>Authentication</span>-->
<!--            </a>-->
<!--            <ul class="sub-menu" aria-expanded="false">-->
<!--                <li>-->
<!--                    <router-link :to="{ path: 'dashboard' }">Login</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <router-link to="/register" >Register</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <router-link to="/recoverpw" >Recover Password</router-link>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </li>-->
<!--        <li>-->
<!--            <a href="javascript: void(0);" class="has-arrow">-->
<!--                <i class="bx bx-file"></i>-->
<!--                <span>Utility</span>-->
<!--            </a>-->
<!--            <ul class="sub-menu" aria-expanded="false">-->
<!--                <li>-->
<!--                    <a href="/pages/starter" class="side-nav-link-ref">Starter Page</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="/pages/maintenance" class="side-nav-link-ref">Maintenance</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="/pages/timeline" class="side-nav-link-ref">Timeline</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="/pages/faqs" class="side-nav-link-ref">FAQs</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="/pages/pricing" class="side-nav-link-ref">Pricing</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="/pages/404" class="side-nav-link-ref">Error 404</a>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <a href="/pages/500" class="side-nav-link-ref">Error 500</a>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </li>-->


    </ul>
</div>
<!-- Sidebar -->
</template>


<script>
    import MetisMenu from "metismenujs/dist/metismenujs";

    export default {
        components: {},
        mounted: function () {
            document.body.setAttribute("data-sidebar", "dark");
            // eslint-disable-next-line no-unused-vars
            var menuRef = new MetisMenu("#side-menu");
            var links = document.getElementsByClassName("side-nav-link-ref");
            var matchingMenuItem = null;
            for (var i = 0; i < links.length; i++) {
                if (window.location.pathname === links[i].pathname) {
                    matchingMenuItem = links[i];
                    break;
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add("active");
                var parent = matchingMenuItem.parentElement;

                /**
                 * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
                 * We should come up with non hard coded approach
                 */
                if (parent) {
                    parent.classList.add("mm-active");
                    const parent2 = parent.parentElement.closest("ul");
                    if (parent2 && parent2.id !== "side-menu") {
                        parent2.classList.add("mm-show");

                        const parent3 = parent2.parentElement;
                        if (parent3) {
                            parent3.classList.add("mm-active");
                            var childAnchor = parent3.querySelector(".has-arrow");
                            var childDropdown = parent3.querySelector(".has-dropdown");
                            if (childAnchor) childAnchor.classList.add("mm-active");
                            if (childDropdown) childDropdown.classList.add("mm-active");

                            const parent4 = parent3.parentElement;
                            if (parent4) parent4.classList.add("mm-show");
                            const parent5 = parent4.parentElement;
                            if (parent5) parent5.classList.add("mm-active");
                        }
                    }
                }
            }
        },
        methods: {
            defaultSidebar() {
                localStorage.setItem("sidebar-layout", 'default-sidebar');
                document.body.setAttribute("data-sidebar", "dark");
                document.body.removeAttribute("data-layout-size", "boxed");
                document.body.removeAttribute("data-sidebar-size", "small");
                document.body.removeAttribute("data-topbar", "small");
                document.body.classList.remove("vertical-collpsed");
            },
        },
        data: function () {
            return {
                menu: [
                    {
                        seperator: 'Bilgiler',
                        auths: this.$auth.check([
                            'dashboard-show'
                        ])
                    },
                    {
                        name: 'dashboard',
                        icon: 'bx bx-home-circle',
                        iconSize: '18',
                        invoke: 'admin.dashboard',
                        title: 'Ana Sayfa',
                        auth: this.$auth.check([
                            'dashboard-show'
                        ])
                    },


                    {
                        seperator: 'Sayfalar',
                        auths: this.$auth.check([
                            'pages-show'
                        ])
                    },
                    {
                        name: 'pages',
                        icon: 'bx bx-home-circle',
                        iconSize: '18',
                        invoke: 'admin.pages',
                        title: 'Sayfalar',
                        auth: this.$auth.check([
                            'pages-show'
                        ]),
                        children: [
                            {
                                name: 'login',
                                icon: 'bx bx-home-circle',
                                iconSize: '18',
                                invoke: 'login',
                                title: 'Giriş',
                                auth: this.$auth.check([
                                    'login'
                                ])
                            },
                            {
                                name: 'forbidden',
                                icon: 'bx bx-home-circle',
                                iconSize: '18',
                                invoke: 'forbidden',
                                title: 'Yasaklı Sayfa',
                                auth: this.$auth.check([
                                    'forbidden'
                                ])
                            },
                            {
                                name: 'register',
                                icon: 'bx bx-home-circle',
                                iconSize: '18',
                                invoke: 'register',
                                title: 'Kayıt Ol',
                                auth: this.$auth.check([
                                    'register'
                                ])
                            },
                        ]
                    },


                ]
            }
        },
        computed: {
            mainMenu() {
                return this.menu;
            }
        }
    };
</script>
