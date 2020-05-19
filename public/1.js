(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/nav-bar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/nav-bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Nav-bar Component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.$parent.toggleMenu();
    },
    toggleRightSidebar: function toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    initFullScreen: function initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");

      if (!document.fullscreenElement &&
      /* alternative standard method */
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/right-bar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/right-bar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      config: {
        handler: this.handleRightBarClick,
        middleware: this.middleware,
        events: ["click"]
      }
    };
  },
  methods: {
    hide: function hide() {
      this.$parent.toggleRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    handleRightBarClick: function handleRightBarClick(e, el) {
      this.$parent.hideRightSidebar();
    },
    // eslint-disable-next-line no-unused-vars
    middleware: function middleware(event, el) {
      return !event.target.classList.contains("toggle-right");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-bar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/side-bar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var _side_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav */ "./resources/js/views/admin/components/side-nav.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideNav: _side_nav__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    isCondensed: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      settings: {
        minScrollbarLength: 60
      }
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-nav.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/side-nav.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ "./node_modules/metismenujs/dist/metismenujs.js");
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  mounted: function mounted() {
    document.body.setAttribute("data-sidebar", "dark"); // eslint-disable-next-line no-unused-vars

    var menuRef = new metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default.a("#side-menu");
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
        var parent2 = parent.parentElement.closest("ul");

        if (parent2 && parent2.id !== "side-menu") {
          parent2.classList.add("mm-show");
          var parent3 = parent2.parentElement;

          if (parent3) {
            parent3.classList.add("mm-active");
            var childAnchor = parent3.querySelector(".has-arrow");
            var childDropdown = parent3.querySelector(".has-dropdown");
            if (childAnchor) childAnchor.classList.add("mm-active");
            if (childDropdown) childDropdown.classList.add("mm-active");
            var parent4 = parent3.parentElement;
            if (parent4) parent4.classList.add("mm-show");
            var parent5 = parent4.parentElement;
            if (parent5) parent5.classList.add("mm-active");
          }
        }
      }
    }
  },
  methods: {
    defaultSidebar: function defaultSidebar() {
      localStorage.setItem("sidebar-layout", 'default-sidebar');
      document.body.setAttribute("data-sidebar", "dark");
      document.body.removeAttribute("data-layout-size", "boxed");
      document.body.removeAttribute("data-sidebar-size", "small");
      document.body.removeAttribute("data-topbar", "small");
      document.body.classList.remove("vertical-collpsed");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/nav-bar */ "./resources/js/views/admin/components/nav-bar.vue");
/* harmony import */ var _components_side_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/side-bar */ "./resources/js/views/admin/components/side-bar.vue");
/* harmony import */ var _components_right_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/right-bar */ "./resources/js/views/admin/components/right-bar.vue");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./resources/js/views/admin/components/footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UnitLayout",
  components: {
    NavBar: _components_nav_bar__WEBPACK_IMPORTED_MODULE_0__["default"],
    SideBar: _components_side_bar__WEBPACK_IMPORTED_MODULE_1__["default"],
    RightBar: _components_right_bar__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _components_footer__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isMenuCondensed: false
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/footer.vue?vue&type=template&id=464dc045&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/footer.vue?vue&type=template&id=464dc045& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "footer" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6" }, [
          _vm._v(_vm._s(new Date().getFullYear()) + " © Skote.")
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("div", { staticClass: "text-sm-right d-none d-sm-block" }, [
        _vm._v("Design & Develop by Themesbrand")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/nav-bar.vue?vue&type=template&id=54dfbb2f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/nav-bar.vue?vue&type=template&id=54dfbb2f& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { attrs: { id: "page-topbar" } }, [
    _c("div", { staticClass: "navbar-header" }, [
      _c("div", { staticClass: "d-flex" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-sm px-3 font-size-16 header-item",
            attrs: { id: "vertical-menu-btn", type: "button" },
            on: { click: _vm.toggleMenu }
          },
          [_c("i", { staticClass: "fa fa-fw fa-bars" })]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "d-flex" },
        [
          _c(
            "b-dropdown",
            {
              attrs: {
                variant: "black",
                right: "",
                "toggle-class": "header-item"
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [
                      _c("img", {
                        attrs: {
                          src: "/images/flags/us.jpg",
                          alt: "Header Language",
                          height: "16"
                        }
                      })
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item notify-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("img", {
                    staticClass: "mr-1",
                    attrs: {
                      src: "/images/flags/spain.jpg",
                      alt: "user-image",
                      height: "12"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("Spanish")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item notify-item",
                  attrs: { href: "javascript:void(0);" }
                },
                [
                  _c("img", {
                    staticClass: "mr-1",
                    attrs: {
                      src: "/images/flags/germany.jpg",
                      alt: "user-image",
                      height: "12"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "align-middle" }, [
                    _vm._v("German")
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown d-none d-lg-inline-block ml-1" }, [
            _c(
              "button",
              {
                staticClass: "btn header-item noti-icon",
                attrs: { type: "button" },
                on: { click: _vm.initFullScreen }
              },
              [_c("i", { staticClass: "bx bx-fullscreen" })]
            )
          ]),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              attrs: {
                right: "",
                "menu-class": "dropdown-menu-lg p-0",
                "toggle-class": "header-item noti-icon",
                variant: "black"
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [
                      _c("i", { staticClass: "bx bx-bell bx-tada" }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "badge badge-danger badge-pill" },
                        [_vm._v("3")]
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c("div", { staticClass: "p-3" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("h6", { staticClass: "m-0" }, [_vm._v("Notifications")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-auto" }, [
                    _c("a", { staticClass: "small", attrs: { href: "#!" } }, [
                      _vm._v("View All")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("simplebar", { staticStyle: { "max-height": "230px" } }, [
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" }
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("div", { staticClass: "avatar-xs mr-3" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "avatar-title bg-primary rounded-circle font-size-16"
                          },
                          [_c("i", { staticClass: "bx bx-cart" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("Your order is placed")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v("If several languages coalesce the grammar")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 3 min ago\n                  ")
                          ])
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" }
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "mr-3 rounded-circle avatar-xs",
                        attrs: {
                          src: "/images/users/avatar-3.jpg",
                          alt: "user-pic"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("James Lemire")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v("It will seem like simplified English.")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 1 hours ago\n                  ")
                          ])
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" }
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("div", { staticClass: "avatar-xs mr-3" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "avatar-title bg-success rounded-circle font-size-16"
                          },
                          [_c("i", { staticClass: "bx bx-badge-check" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("Your item is shipped")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v("If several languages coalesce the grammar")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 3 min ago\n                  ")
                          ])
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "text-reset notification-item",
                    attrs: { href: "" }
                  },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "mr-3 rounded-circle avatar-xs",
                        attrs: {
                          src: "/images/users/avatar-4.jpg",
                          alt: "user-pic"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h6", { staticClass: "mt-0 mb-1" }, [
                          _vm._v("Salena Layfield")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-12 text-muted" }, [
                          _c("p", { staticClass: "mb-1" }, [
                            _vm._v(
                              "As a skeptical Cambridge friend of mine occidental."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _c("i", { staticClass: "mdi mdi-clock-outline" }),
                            _vm._v(" 1 hours ago\n                  ")
                          ])
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "p-2 border-top" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-light btn-block text-center",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [
                    _c("i", { staticClass: "mdi mdi-arrow-down-circle mr-1" }),
                    _vm._v(" Load More..\n          ")
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-dropdown",
            {
              attrs: {
                right: "",
                variant: "black",
                "toggle-class": "header-item"
              },
              scopedSlots: _vm._u([
                {
                  key: "button-content",
                  fn: function() {
                    return [
                      _c("img", {
                        staticClass: "rounded-circle header-profile-user",
                        attrs: {
                          src: "/images/users/avatar-1.jpg",
                          alt: "Header Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "d-none d-xl-inline-block ml-1" },
                        [_vm._v("Henry")]
                      ),
                      _vm._v(" "),
                      _c("i", {
                        staticClass:
                          "mdi mdi-chevron-down d-none d-xl-inline-block"
                      })
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item",
                  attrs: { href: "/contacts/profile" }
                },
                [
                  _c("i", {
                    staticClass: "bx bx-user font-size-16 align-middle mr-1"
                  }),
                  _vm._v(" Profile\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item d-block",
                  attrs: { href: "javascript: void(0);" }
                },
                [
                  _c("i", {
                    staticClass: "bx bx-wrench font-size-16 align-middle mr-1"
                  }),
                  _vm._v(" Settings\n        ")
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "dropdown-item text-danger",
                  attrs: { href: "/logout" }
                },
                [
                  _c("i", {
                    staticClass:
                      "bx bx-power-off font-size-16 align-middle mr-1 text-danger"
                  }),
                  _vm._v(" Logout\n        ")
                ]
              )
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-brand-box" }, [
      _c("a", { staticClass: "logo logo-dark", attrs: { href: "/" } }, [
        _c("span", { staticClass: "logo-sm" }, [
          _c("img", {
            attrs: { src: "/images/logo.svg", alt: "", height: "22" }
          })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "logo-lg" }, [
          _c("img", {
            attrs: { src: "/images/logo-dark.png", alt: "", height: "17" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "logo logo-light", attrs: { href: "/" } }, [
        _c("span", { staticClass: "logo-sm" }, [
          _c("img", {
            attrs: { src: "/images/logo-light.svg", alt: "", height: "22" }
          })
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "logo-lg" }, [
          _c("img", {
            attrs: { src: "/images/logo-light.png", alt: "", height: "19" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/right-bar.vue?vue&type=template&id=fb4950b0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/right-bar.vue?vue&type=template&id=fb4950b0& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "right-bar" }, [
        _c("div", [
          _c("div", { staticClass: "rightbar-title px-3 py-4" }, [
            _c(
              "a",
              {
                staticClass: "right-bar-toggle float-right",
                attrs: { href: "javascript:void(0);" }
              },
              [_c("i", { staticClass: "mdi mdi-close noti-icon" })]
            ),
            _vm._v(" "),
            _c("h5", { staticClass: "m-0" }, [_vm._v("Settings")])
          ]),
          _vm._v(" "),
          _c("hr", { staticClass: "mt-0" }),
          _vm._v(" "),
          _c("h6", { staticClass: "text-center mb-0" }, [
            _vm._v("Choose Mode")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "p-4" }, [
            _c("div", { staticClass: "mb-2" }, [
              _c("a", { attrs: { href: "javascript: void(0);" } }, [
                _c("img", {
                  staticClass: "img-fluid img-thumbnail",
                  attrs: { src: "/images/layouts/layout-1.jpg", alt: "" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-2" }, [
              _c("a", { attrs: { href: "javascript: void(0);" } }, [
                _c("img", {
                  staticClass: "img-fluid img-thumbnail",
                  attrs: { src: "/images/layouts/layout-2.jpg", alt: "" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-2" }, [
              _c("a", { attrs: { href: "javascript: void(0);" } }, [
                _c("img", {
                  staticClass: "img-fluid img-thumbnail",
                  attrs: { src: "/images/layouts/layout-3.jpg", alt: "" }
                })
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "rightbar-overlay" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-bar.vue?vue&type=template&id=1f323072&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/side-bar.vue?vue&type=template&id=1f323072& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vertical-menu" },
    [
      !_vm.isCondensed
        ? _c(
            "simplebar",
            { staticClass: "h-100", attrs: { settings: _vm.settings } },
            [_c("SideNav")],
            1
          )
        : _c("simplebar", { staticClass: "h-100" }, [_c("SideNav")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-nav.vue?vue&type=template&id=6b6a0cd7&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/components/side-nav.vue?vue&type=template&id=6b6a0cd7& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "sidebar-menu" } }, [
    _c(
      "ul",
      { staticClass: "metismenu list-unstyled", attrs: { id: "side-menu" } },
      [
        _c("li", { staticClass: "menu-title" }, [_vm._v("Menu")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("li", [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "sub-menu", attrs: { "aria-expanded": "false" } },
            [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "side-nav-link-ref",
                    attrs: { href: "javascript: void(0);" },
                    on: { click: _vm.defaultSidebar }
                  },
                  [_vm._v("Default Sidebar")]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "menu-title" }, [_vm._v("Pages")]),
        _vm._v(" "),
        _c("li", [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "sub-menu", attrs: { "aria-expanded": "false" } },
            [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: { path: "dashboard" } } }, [
                    _vm._v("Login")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/register" } }, [
                    _vm._v("Register")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/recoverpw" } }, [
                    _vm._v("Recover Password")
                  ])
                ],
                1
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm._m(3)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        { staticClass: "has-arrow", attrs: { href: "javascript: void(0);" } },
        [
          _c("i", { staticClass: "bx bx-home-circle" }),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "badge badge-pill badge-info float-right" },
            [_vm._v("3")]
          ),
          _vm._v(" "),
          _c("span", [_vm._v("Dashboards")])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "sub-menu", attrs: { "aria-expanded": "false" } },
        [
          _c("li", [
            _c(
              "a",
              { staticClass: "side-nav-link-ref", attrs: { href: "/" } },
              [_vm._v("Default")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/dashboard/saas" }
              },
              [_vm._v("Saas")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/dashboard/crypto" }
              },
              [_vm._v("Crypto")]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "has-arrow", attrs: { href: "javascript: void(0);" } },
      [
        _c("i", { staticClass: "bx bx-layout" }),
        _vm._v(" "),
        _c("span", [_vm._v("Layouts")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "has-arrow", attrs: { href: "javascript: void(0);" } },
      [
        _c("i", { staticClass: "bx bx-user-circle" }),
        _vm._v(" "),
        _c("span", [_vm._v("Authentication")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        { staticClass: "has-arrow", attrs: { href: "javascript: void(0);" } },
        [
          _c("i", { staticClass: "bx bx-file" }),
          _vm._v(" "),
          _c("span", [_vm._v("Utility")])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "sub-menu", attrs: { "aria-expanded": "false" } },
        [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/starter" }
              },
              [_vm._v("Starter Page")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/maintenance" }
              },
              [_vm._v("Maintenance")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/timeline" }
              },
              [_vm._v("Timeline")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/faqs" }
              },
              [_vm._v("FAQs")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/pricing" }
              },
              [_vm._v("Pricing")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/404" }
              },
              [_vm._v("Error 404")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "side-nav-link-ref",
                attrs: { href: "/pages/500" }
              },
              [_vm._v("Error 500")]
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { attrs: { id: "layout-wrapper" } },
      [
        _c("NavBar"),
        _vm._v(" "),
        _c("SideBar", { attrs: { "is-condensed": _vm.isMenuCondensed } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "main-content" },
          [
            _c("div", { staticClass: "page-content" }, [
              _c(
                "div",
                { staticClass: "container-fluid" },
                [_vm._t("default"), _vm._v(" "), _c("router-view")],
                2
              )
            ]),
            _vm._v(" "),
            _c("Footer")
          ],
          1
        ),
        _vm._v(" "),
        _c("RightBar")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/components/footer.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/components/footer.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_464dc045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=464dc045& */ "./resources/js/views/admin/components/footer.vue?vue&type=template&id=464dc045&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _footer_vue_vue_type_template_id_464dc045___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_464dc045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/footer.vue?vue&type=template&id=464dc045&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/admin/components/footer.vue?vue&type=template&id=464dc045& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_464dc045___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=464dc045& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/footer.vue?vue&type=template&id=464dc045&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_464dc045___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_464dc045___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/components/nav-bar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/components/nav-bar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_vue_vue_type_template_id_54dfbb2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=template&id=54dfbb2f& */ "./resources/js/views/admin/components/nav-bar.vue?vue&type=template&id=54dfbb2f&");
/* harmony import */ var _nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/components/nav-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_bar_vue_vue_type_template_id_54dfbb2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_bar_vue_vue_type_template_id_54dfbb2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/nav-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/nav-bar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/components/nav-bar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/nav-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/components/nav-bar.vue?vue&type=template&id=54dfbb2f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/admin/components/nav-bar.vue?vue&type=template&id=54dfbb2f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_bar_vue_vue_type_template_id_54dfbb2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-bar.vue?vue&type=template&id=54dfbb2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/nav-bar.vue?vue&type=template&id=54dfbb2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_bar_vue_vue_type_template_id_54dfbb2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_bar_vue_vue_type_template_id_54dfbb2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/components/right-bar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/admin/components/right-bar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_bar_vue_vue_type_template_id_fb4950b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-bar.vue?vue&type=template&id=fb4950b0& */ "./resources/js/views/admin/components/right-bar.vue?vue&type=template&id=fb4950b0&");
/* harmony import */ var _right_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right-bar.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/components/right-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _right_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _right_bar_vue_vue_type_template_id_fb4950b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _right_bar_vue_vue_type_template_id_fb4950b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/right-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/right-bar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/components/right-bar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/right-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_right_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/components/right-bar.vue?vue&type=template&id=fb4950b0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/admin/components/right-bar.vue?vue&type=template&id=fb4950b0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_bar_vue_vue_type_template_id_fb4950b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./right-bar.vue?vue&type=template&id=fb4950b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/right-bar.vue?vue&type=template&id=fb4950b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_bar_vue_vue_type_template_id_fb4950b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_right_bar_vue_vue_type_template_id_fb4950b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/components/side-bar.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/components/side-bar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_bar_vue_vue_type_template_id_1f323072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar.vue?vue&type=template&id=1f323072& */ "./resources/js/views/admin/components/side-bar.vue?vue&type=template&id=1f323072&");
/* harmony import */ var _side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/components/side-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _side_bar_vue_vue_type_template_id_1f323072___WEBPACK_IMPORTED_MODULE_0__["render"],
  _side_bar_vue_vue_type_template_id_1f323072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/side-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/side-bar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/components/side-bar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./side-bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/components/side-bar.vue?vue&type=template&id=1f323072&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/components/side-bar.vue?vue&type=template&id=1f323072& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_1f323072___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./side-bar.vue?vue&type=template&id=1f323072& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-bar.vue?vue&type=template&id=1f323072&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_1f323072___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_bar_vue_vue_type_template_id_1f323072___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/components/side-nav.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/admin/components/side-nav.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _side_nav_vue_vue_type_template_id_6b6a0cd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav.vue?vue&type=template&id=6b6a0cd7& */ "./resources/js/views/admin/components/side-nav.vue?vue&type=template&id=6b6a0cd7&");
/* harmony import */ var _side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/components/side-nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _side_nav_vue_vue_type_template_id_6b6a0cd7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _side_nav_vue_vue_type_template_id_6b6a0cd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/components/side-nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/components/side-nav.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/admin/components/side-nav.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./side-nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/components/side-nav.vue?vue&type=template&id=6b6a0cd7&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/admin/components/side-nav.vue?vue&type=template&id=6b6a0cd7& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_template_id_6b6a0cd7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./side-nav.vue?vue&type=template&id=6b6a0cd7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/components/side-nav.vue?vue&type=template&id=6b6a0cd7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_template_id_6b6a0cd7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_side_nav_vue_vue_type_template_id_6b6a0cd7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/layouts/UnitLayout.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/layouts/UnitLayout.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnitLayout_vue_vue_type_template_id_584fa01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true& */ "./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true&");
/* harmony import */ var _UnitLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitLayout.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnitLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnitLayout_vue_vue_type_template_id_584fa01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnitLayout_vue_vue_type_template_id_584fa01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "584fa01a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/layouts/UnitLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnitLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitLayout_vue_vue_type_template_id_584fa01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/layouts/UnitLayout.vue?vue&type=template&id=584fa01a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitLayout_vue_vue_type_template_id_584fa01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnitLayout_vue_vue_type_template_id_584fa01a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);