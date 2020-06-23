(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/persons/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/persons/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services_api_PersonsService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/api/PersonsService */ "./resources/js/services/api/PersonsService.js");








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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "show",
  data: function data() {
    return {
      page: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      search: null,
      awaitingSearch: false,
      orderBy: "name",
      sortedBy: "desc",
      sortDesc: true,
      loading: true,
      items: {
        data: [],
        meta: {
          current_page: 1,
          per_page: 10,
          total: 0
        }
      }
    };
  },
  computed: {
    headers: function headers() {
      return [{
        key: 'name',
        label: this.$t('person.name'),
        sortable: true
      }, {
        key: 'owner',
        label: this.$t('person.owner'),
        sortable: true
      }];
    },
    loadingMessage: function loadingMessage() {
      return this.$t('common.loading');
    }
  },
  mounted: function mounted() {
    this.list({
      page: this.page,
      perPage: this.perPage,
      orderBy: this.orderBy,
      sortedBy: this.sortedBy
    });
  },
  methods: {
    list: function list(_ref) {
      var _this = this;

      return Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _ref$page, page, _ref$perPage, perPage, _ref$orderBy, orderBy, _ref$sortedBy, sortedBy, includes, query, _yield$query, items;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$page = _ref.page, page = _ref$page === void 0 ? 1 : _ref$page, _ref$perPage = _ref.perPage, perPage = _ref$perPage === void 0 ? 10 : _ref$perPage, _ref$orderBy = _ref.orderBy, orderBy = _ref$orderBy === void 0 ? 'id' : _ref$orderBy, _ref$sortedBy = _ref.sortedBy, sortedBy = _ref$sortedBy === void 0 ? 'desc' : _ref$sortedBy;
                _this.loading = true;
                includes = ['info'];
                query = new _services_api_PersonsService__WEBPACK_IMPORTED_MODULE_8__["default"]().paginate(page, perPage).filter(_this.search).sort(orderBy, sortedBy).include(includes).all();
                _context.next = 6;
                return query;

              case 6:
                _yield$query = _context.sent;
                items = _yield$query.data;
                _this.items = items;
                _this.loading = false;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    pageChange: function pageChange() {
      this.list({
        page: this.page,
        perPage: this.perPage,
        orderBy: this.orderBy,
        sortedBy: this.sortedBy
      });
    },
    sortChanged: function sortChanged(sort) {
      this.perPage = sort.perPage;
      this.orderBy = sort.sortBy;
      this.sortedBy = sort.sortDesc ? 'desc' : 'asc';
      this.sortDesc = sort.sortDesc;
      this.list({
        page: this.page,
        perPage: this.perPage,
        orderBy: this.orderBy,
        sortedBy: this.sortedBy
      });
    }
  },
  watch: {
    search: function search(val) {
      var _this2 = this;

      if (!this.awaitingSearch) {
        setTimeout(function () {
          _this2.list({});

          _this2.awaitingSearch = false;
        }, 1000);
      }

      this.awaitingSearch = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/persons/show.vue?vue&type=template&id=2b93b150&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/pages/persons/show.vue?vue&type=template&id=2b93b150&scoped=true& ***!
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
    _c("h4", { staticClass: "card-title" }, [
      _vm._v(_vm._s(_vm.$t("menu.dealers")))
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-sm-12 col-md-12" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_filter text-md-right",
            attrs: { id: "tickets-table_filter" }
          },
          [
            _c(
              "label",
              { staticClass: "d-inline-flex align-items-center" },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("common.search")) +
                    ":\n                    "
                ),
                _c("b-form-input", {
                  staticClass: "form-control form-control-sm ml-2",
                  attrs: {
                    type: "search",
                    placeholder: this.$t("common.search") + "..."
                  },
                  model: {
                    value: _vm.search,
                    callback: function($$v) {
                      _vm.search = $$v
                    },
                    expression: "search"
                  }
                })
              ],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive mb-0" },
      [
        _c("b-table", {
          attrs: {
            items: _vm.items.data,
            fields: _vm.headers,
            responsive: "sm",
            "per-page": _vm.items.meta.per_page,
            busy: _vm.loading,
            "sort-by": _vm.orderBy,
            "sort-desc": _vm.sortDesc
          },
          on: {
            "update:busy": function($event) {
              _vm.loading = $event
            },
            "update:sortBy": function($event) {
              _vm.orderBy = $event
            },
            "update:sort-by": function($event) {
              _vm.orderBy = $event
            },
            "update:sortDesc": function($event) {
              _vm.sortDesc = $event
            },
            "update:sort-desc": function($event) {
              _vm.sortDesc = $event
            },
            "sort-changed": _vm.sortChanged
          },
          scopedSlots: _vm._u([
            {
              key: "table-busy",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "text-center text-danger my-2" },
                    [
                      _c("b-spinner", { staticClass: "align-middle" }),
                      _vm._v(" "),
                      _c("strong", [_vm._v(_vm._s(_vm.loadingMessage + "..."))])
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "cell(owner)",
              fn: function(ref) {
                var item = ref.item
                return [
                  _vm._l(item.owner, function(owners, index) {
                    return item.hasOwnProperty("owner")
                      ? [
                          _c("b-link", { attrs: { href: owners.uuid } }, [
                            _vm._v(_vm._s(owners.name))
                          ])
                        ]
                      : _vm._e()
                  })
                ]
              }
            }
          ])
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c(
          "div",
          {
            staticClass: "dataTables_paginate paging_simple_numbers float-right"
          },
          [
            _c(
              "ul",
              { staticClass: "pagination pagination-rounded mb-0" },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("common.show")) +
                    ":\n                    "
                ),
                _c("b-form-select", {
                  attrs: { small: "", options: _vm.pageOptions },
                  on: { input: _vm.pageChange },
                  model: {
                    value: _vm.perPage,
                    callback: function($$v) {
                      _vm.perPage = $$v
                    },
                    expression: "perPage"
                  }
                }),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: {
                    "total-rows": _vm.items.meta.total,
                    "per-page": _vm.perPage
                  },
                  on: { input: _vm.pageChange },
                  model: {
                    value: _vm.page,
                    callback: function($$v) {
                      _vm.page = $$v
                    },
                    expression: "page"
                  }
                })
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "card-title-desc" }, [
      _vm._v("\n        Create responsive tables by wrapping any\n        "),
      _c("code", [_vm._v(".table")]),
      _vm._v(" in\n        "),
      _c("code", [_vm._v(".table-responsive")]),
      _vm._v(
        "\n        to make them scroll horizontally on small devices (under 768px).\n    "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/Query.js":
/*!****************************************!*\
  !*** ./resources/js/services/Query.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var _default = /*#__PURE__*/function () {
  function _default() {
    Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    this.queries = [];
  }

  Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "query",
    value: function query() {
      var query = '?' + this.queries.join('&');
      this.queries = [];
      return query;
    }
  }, {
    key: "filter",
    value: function filter(value) {
      if (value) {
        this.queries.push("searches=".concat(value));
      }

      return this;
    }
  }, {
    key: "fields",
    value: function fields(_fields) {
      this.queries.push("fields=".concat(_fields.join(',')));
      return this;
    }
  }, {
    key: "include",
    value: function include(relations) {
      this.queries.push("include=".concat(relations.join(',')));
      return this;
    }
  }, {
    key: "parameter",
    value: function parameter(key, value) {
      this.queries.push("".concat(key).concat(value ? '=' + value : ''));
      return this;
    }
  }, {
    key: "sort",
    value: function sort(field) {
      var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

      if (field) {
        this.queries.push("orderBy=".concat(field));
        this.queries.push("sortedBy=".concat(sortBy));
      }

      return this;
    }
  }, {
    key: "paginate",
    value: function paginate() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      this.queries.push("paginate=".concat(perPage));
      this.queries.push("page=".concat(page));
      return this;
    }
  }, {
    key: "all",
    value: function all() {
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(this.resource).concat(this.query()));
    }
  }, {
    key: "show",
    value: function show(id) {
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(this.resource, "/").concat(id).concat(this.query()));
    }
  }, {
    key: "store",
    value: function store(params) {
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("".concat(this.resource).concat(this.query()), params);
    }
  }, {
    key: "update",
    value: function update(id, params) {
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a.put("".concat(this.resource, "/").concat(id).concat(this.query()), params);
    }
  }, {
    key: "destroy",
    value: function destroy(id) {
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("".concat(this.resource, "/").concat(id).concat(this.query()));
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/services/api/PersonsService.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/api/PersonsService.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Query */ "./resources/js/services/Query.js");







var _default = /*#__PURE__*/function (_Query) {
  Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, _Query);

  var _super = Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(_default);

  function _default() {
    var _this;

    Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = _super.call(this);
    _this.resource = '/auth/persons';
    return _this;
  }

  Object(_Users_beratkara_Desktop_Project_LaraVueDashboard_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "test",
    value: function test() {
      var resource = this.resource + '/test/';
      return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(resource));
    }
  }]);

  return _default;
}(_Query__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./resources/js/views/admin/pages/persons/show.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/admin/pages/persons/show.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_2b93b150_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=2b93b150&scoped=true& */ "./resources/js/views/admin/pages/persons/show.vue?vue&type=template&id=2b93b150&scoped=true&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/pages/persons/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_2b93b150_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_2b93b150_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b93b150",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/pages/persons/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/pages/persons/show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/admin/pages/persons/show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/persons/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/pages/persons/show.vue?vue&type=template&id=2b93b150&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/admin/pages/persons/show.vue?vue&type=template&id=2b93b150&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2b93b150_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=2b93b150&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/pages/persons/show.vue?vue&type=template&id=2b93b150&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2b93b150_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_2b93b150_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);