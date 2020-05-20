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
                <div class="dropdown-item notify-item" @click="setLanguage(item)">
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

        <b-dropdown
          right
          menu-class="dropdown-menu-lg p-0"
          toggle-class="header-item noti-icon"
          variant="black"
        >
          <template v-slot:button-content>
            <i class="bx bx-bell bx-tada"></i>
            <span class="badge badge-danger badge-pill">3</span>
          </template>

          <div class="p-3">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="m-0">Notifications</h6>
              </div>
              <div class="col-auto">
                <a href="#!" class="small">View All</a>
              </div>
            </div>
          </div>
          <simplebar style="max-height: 230px;">
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-primary rounded-circle font-size-16">
                    <i class="bx bx-cart"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your order is placed</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">If several languages coalesce the grammar</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 3 min ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="/images/users/avatar-3.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">James Lemire</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">It will seem like simplified English.</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 1 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a href class="text-reset notification-item">
              <div class="media">
                <div class="avatar-xs mr-3">
                  <span class="avatar-title bg-success rounded-circle font-size-16">
                    <i class="bx bx-badge-check"></i>
                  </span>
                </div>
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Your item is shipped</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">If several languages coalesce the grammar</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 3 min ago
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href class="text-reset notification-item">
              <div class="media">
                <img
                  src="/images/users/avatar-4.jpg"
                  class="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                />
                <div class="media-body">
                  <h6 class="mt-0 mb-1">Salena Layfield</h6>
                  <div class="font-size-12 text-muted">
                    <p class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                    <p class="mb-0">
                      <i class="mdi mdi-clock-outline"></i> 1 hours ago
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </simplebar>
          <div class="p-2 border-top">
            <a class="btn btn-sm btn-light btn-block text-center" href="javascript:void(0)">
              <i class="mdi mdi-arrow-down-circle mr-1"></i> Load More..
            </a>
          </div>
        </b-dropdown>

        <b-dropdown right variant="black" toggle-class="header-item">
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
              src="/images/users/avatar-1.jpg"
              alt="Header Avatar"
            />
            <span class="d-none d-xl-inline-block ml-1">Henry</span>
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
          <a class="dropdown-item text-danger" href="/logout">
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
                this.$parent.toggleMenu();
            },
            toggleRightSidebar() {
                this.$parent.toggleRightSidebar();
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
            },
        },
        created() {
            this.currentLocales = this.$i18n.locale;
            this.availableLocales = this.$i18n.availableLocales;
            console.log(this.$i18n);
        }
    };
</script>
