<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="/images/logo.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="/images/logo-dark.png" alt height="17" />
            </span>
          </a>

          <a href="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="/images/logo-light.svg" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="/images/logo-light.png" alt height="19" />
            </span>
          </a>
        </div>

        <button
          id="vertical-menu-btn"
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

      </div>

      <div class="d-flex">

        <b-dropdown variant="black" right toggle-class="header-item">
          <template v-slot:button-content>
            <img class :src="'/images/flags/' + currentLocales + '.jpg'" alt="Header Language" height="16" />
          </template>

            <template v-for="(item, index) in availableLocales">
                <div class="dropdown-item notify-item" style="cursor: pointer" @click="setLanguage(item)">
                    <img :src="'/images/flags/' + item + '.jpg'" alt="user-image" class="mr-1" height="12" />
                    <span class="align-middle">{{ $t("common." + item) }}</span>
                </div>
            </template>

        </b-dropdown>

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>

        <b-dropdown right variant="black" toggle-class="header-item">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="/images/users/avatar-1.jpg"
              alt="Header Avatar"
            />
            <span class="d-none d-xl-inline-block ml-1">{{ $auth.user().fullname }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item-->
          <a class="dropdown-item" href="/contacts/profile">
            <i class="bx bx-user font-size-16 align-middle mr-1"></i> Profile
          </a>
          <a class="dropdown-item d-block" href="javascript: void(0);">
            <i class="bx bx-wrench font-size-16 align-middle mr-1"></i> Settings
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="javascript: void(0);" @click="logout">
            <i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout
          </a>
        </b-dropdown>

      </div>
    </div>
  </header>
</template>

<script>
    import simplebar from "simplebar-vue";

    /**
     * Nav-bar Component
     */
    export default {
        components: { simplebar },
        data() {
            return {
                currentLocales: null,
                availableLocales: null,
            }
        },
        methods: {
            toggleMenu() {
                document.body.classList.toggle("sidebar-enable");
                if (window.screen.width >= 992) {
                    // eslint-disable-next-line no-unused-vars
                    this.$router.afterEach((routeTo, routeFrom) => {
                        document.body.classList.remove("sidebar-enable");
                        document.body.classList.remove("vertical-collpsed");
                    });
                    document.body.classList.toggle("vertical-collpsed");
                } else {
                    // eslint-disable-next-line no-unused-vars
                    this.$router.afterEach((routeTo, routeFrom) => {
                        document.body.classList.remove("sidebar-enable");
                    });
                    document.body.classList.remove("vertical-collpsed");
                }
            },
            initFullScreen() {
                document.body.classList.toggle("fullscreen-enable");
                if (
                    !document.fullscreenElement &&
                    /* alternative standard method */ !document.mozFullScreenElement &&
                    !document.webkitFullscreenElement
                ) {
                    // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(
                            Element.ALLOW_KEYBOARD_INPUT
                        );
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            },
            setLanguage(lang) {
                this.$i18n.locale = lang;
                this.currentLocales = this.$i18n.locale;
            },
            logout() {
                this.$auth.logout({
                    success: function () {
                    },
                })
            },
        },
        created() {
            this.currentLocales = this.$i18n.locale;
            this.availableLocales = this.$i18n.availableLocales;
        }
    };
</script>
