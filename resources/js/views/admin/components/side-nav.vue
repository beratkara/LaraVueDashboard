<template>
<!-- ========== Left Sidebar Start ========== -->

<!--- Sidemenu -->
<div id="sidebar-menu">
    <!-- Left Menu Start -->
    <ul id="side-menu" class="metismenu list-unstyled">

        <template v-for="(link, index) in mainMenu">


            <li class="menu-title" v-if="link.hasOwnProperty('seperator')">{{ $t("menu." + link.seperator) }}</li>

            <li v-else>
                <a v-if="link.hasOwnProperty('children')" href="/" class="has-arrow">
                    <i :class="link.icon"></i>
                    <span>{{ $t("menu." + link.name) }}</span>
                </a>
                <router-link v-else :to="{ name: link.invoke }">
                    <i :class="link.icon"></i>
                    <span>{{ $t("menu." + link.name) }}</span>
                </router-link>
                <ul class="sub-menu" aria-expanded="false" v-if="link.children">
                <template v-for="(children, childIndex) in link.children">
                    <li>
                        <router-link :to="{ name: children.invoke }">
                            <span class="side-nav-link-ref">{{ $t("menu." + children.name) }}</span>
                        </router-link>
                    </li>
                </template>
                </ul>
            </li>

        </template>

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
                        seperator: 'informations',
                        auths: this.$auth.check([
                            'dashboard-show'
                        ])
                    },
                    {
                        name: 'dashboard',
                        icon: 'bx bx-home-circle',
                        iconSize: '18',
                        invoke: 'admin.dashboard',
                        auth: this.$auth.check([
                            'dashboard-show'
                        ])
                    },


                    {
                        seperator: 'company',
                        auths: this.$auth.check([
                            'dealers-show',
                            'dealers-create'
                        ])
                    },
                    {
                        name: 'dealers',
                        icon: 'bx bxs-building-house',
                        iconSize: '18',
                        auth: this.$auth.check([
                            'dealers-show',
                            'dealers-create'
                        ]),
                        children: [
                            {
                                name: 'dealers_show',
                                invoke: 'admin.dealers.show',
                                auth: this.$auth.check([
                                    'dealers-show'
                                ])
                            },
                            {
                                name: 'dealers_create',
                                invoke: 'admin.dealers.create',
                                auth: this.$auth.check([
                                    'dealers-create'
                                ])
                            },
                        ]
                    },
                    {
                        name: 'persons',
                        icon: 'bx bxs-building-house',
                        iconSize: '18',
                        auth: this.$auth.check([
                            'persons-show',
                            'persons-create'
                        ]),
                        children: [
                            {
                                name: 'persons_show',
                                invoke: 'admin.persons.show',
                                auth: this.$auth.check([
                                    'persons-show'
                                ])
                            },
                            {
                                name: 'persons_create',
                                invoke: 'admin.persons.create',
                                auth: this.$auth.check([
                                    'persons-create'
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
