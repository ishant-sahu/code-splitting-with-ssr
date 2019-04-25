/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets.json":
/*!*********************!*\
  !*** ./assets.json ***!
  \*********************/
/*! exports provided: main, , default */
/***/ (function(module) {

eval("module.exports = {\"main\":{\"js\":\"/main.js\"},\"\":{\"js\":[\"/0.chunk.js\",\"/1.chunk.js\"]}};\n\n//# sourceURL=webpack:///./assets.json?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/App */ \"./src/components/App.js\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets.json */ \"./assets.json\");\nvar _assets_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets.json */ \"./assets.json\", 1);\n/* harmony import */ var _src_routes_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/routes/routes */ \"./src/routes/routes.js\");\n\n\n\n\n\n\n\n\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar favicon = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"dist\"));\napp.get(\"*\", function (req, res, next) {\n  var activeRoute = _src_routes_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"matchPath\"])(req.url, route);\n  }) || {};\n  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();\n  promise.then(function (response) {\n    var data = response && response.data && response.data.items ? response.data.items : null;\n    var context = {\n      splitPoints: [] // Create an empty array\n\n    };\n    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      data: data\n    })));\n    res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>SSR with RR</title>\\n          </head>\\n\\n          <body>\\n            <div id=\\\"root\\\">\".concat(markup, \"</div>\\n            <script>window.__INITIAL_DATA__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_6___default()(data), \"</script>\\n            <script>window.splitPoints=\").concat(JSON.stringify(context.splitPoints), \"</script>\\n            <script src=\").concat(_assets_json__WEBPACK_IMPORTED_MODULE_7__.main.js, \"></script>\\n            \\n          </body>\\n        </html>\\n      \"));\n  }).catch(next);\n});\napp.listen(4500, function () {\n  console.log(\"listening at 4500\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/apis/api.js":
/*!*************************!*\
  !*** ./src/apis/api.js ***!
  \*************************/
/*! exports provided: fetchPopularRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPopularRepos\", function() { return fetchPopularRepos; });\n/* harmony import */ var _dataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataService */ \"./src/apis/dataService.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction fetchPopularRepos() {\n  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"all\";\n  console.log(language);\n  var encodedURI = encodeURI(\"https://api.github.com/search/repositories?q=stars:>1+language:\".concat(language, \"&sort=stars&order=desc&type=Repositories\"));\n  return Object(_dataService__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(encodedURI);\n}\n\n//# sourceURL=webpack:///./src/apis/api.js?");

/***/ }),

/***/ "./src/apis/dataService.js":
/*!*********************************!*\
  !*** ./src/apis/dataService.js ***!
  \*********************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction get(url, apiParams, queryParam, headers) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);\n}\n\n//# sourceURL=webpack:///./src/apis/dataService.js?");

/***/ }),

/***/ "./src/components sync recursive ^\\.\\/.*\\/index$":
/*!*********************************************!*\
  !*** ./src/components sync ^\.\/.*\/index$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Grid/index\": \"./src/components/Grid/index.js\",\n\t\"./Home/index\": \"./src/components/Home/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync recursive ^\\\\.\\\\/.*\\\\/index$\";\n\n//# sourceURL=webpack:///./src/components_sync_^\\.\\/.*\\/index$?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/routes.js */ \"./src/routes/routes.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar/Navbar */ \"./src/components/Navbar/Navbar.js\");\n/* harmony import */ var _NoMatch_NoMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoMatch/NoMatch */ \"./src/components/NoMatch/NoMatch.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, _routes_routes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].map(function (_ref) {\n        var path = _ref.path,\n            exact = _ref.exact,\n            C = _ref.component,\n            rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n          key: path,\n          path: path,\n          exact: exact,\n          render: function render(props) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest, {\n              data: _this.props.data\n            }));\n          }\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        render: function render(props) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoMatch_NoMatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], props);\n        }\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Grid/index.js":
/*!**************************************!*\
  !*** ./src/components/Grid/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\nvar Grid =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Grid, _Component);\n\n  function Grid(props) {\n    var _this;\n\n    _classCallCheck(this, Grid);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));\n    var repos = props.data || null;\n    _this.state = {\n      repos: repos,\n      loading: repos ? false : true\n    };\n    _this.fetchRepos = _this.fetchRepos.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Grid, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(\"here\");\n\n      if (!this.state.repos) {\n        this.fetchRepos(this.props.match.params.id);\n      }\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (prevProps.match.params.id !== this.props.match.params.id) {\n        this.fetchRepos(this.props.match.params.id);\n      }\n    }\n  }, {\n    key: \"fetchRepos\",\n    value: function fetchRepos(lang) {\n      var _this2 = this;\n\n      this.setState(function () {\n        return {\n          loading: true\n        };\n      });\n      this.props.fetchInitialData(lang).then(function (response) {\n        _this2.setState(function () {\n          return {\n            repos: response && response.data && response.data.items ? response.data.items : [],\n            loading: false\n          };\n        });\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (prevProps.match.params.id !== this.props.match.params.id) {\n        this.fetchRepos(this.props.match.params.id);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          repos = _this$state.repos,\n          loading = _this$state.loading;\n\n      if (loading === true) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"LOADING\");\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        style: {\n          display: \"flex\",\n          flexWrap: \"wrap\"\n        }\n      }, repos.map(function (_ref) {\n        var name = _ref.name,\n            owner = _ref.owner,\n            stargazers_count = _ref.stargazers_count,\n            html_url = _ref.html_url;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n          key: name,\n          style: {\n            margin: 30\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: html_url\n        }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"@\", owner.login), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, stargazers_count, \" stars\")));\n      }));\n    }\n  }]);\n\n  return Grid;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./src/components/Grid/index.js?");

/***/ }),

/***/ "./src/components/Home/index.js":
/*!**************************************!*\
  !*** ./src/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n //import './home.scss';\n\nfunction Home() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Select a Language\");\n}\n\n//# sourceURL=webpack:///./src/components/Home/index.js?");

/***/ }),

/***/ "./src/components/Navbar/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Navbar() {\n  var languages = [{\n    name: 'All',\n    param: 'all'\n  }, {\n    name: 'JavaScript',\n    param: 'javascript'\n  }, {\n    name: 'Ruby',\n    param: 'ruby'\n  }, {\n    name: 'Python',\n    param: 'python'\n  }, {\n    name: 'Java',\n    param: 'java'\n  }];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, languages.map(function (_ref) {\n    var name = _ref.name,\n        param = _ref.param;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: param\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n      activeStyle: {\n        fontWeight: 'bold'\n      },\n      to: \"/popular/\".concat(param)\n    }, name));\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/Navbar/Navbar.js?");

/***/ }),

/***/ "./src/components/NoMatch/NoMatch.js":
/*!*******************************************!*\
  !*** ./src/components/NoMatch/NoMatch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NoMatch; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction NoMatch() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Four Oh Four\");\n}\n\n//# sourceURL=webpack:///./src/components/NoMatch/NoMatch.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var baseUrl = \"http://localhost:4600\";\nmodule.exports = {\n  \"USER_REGISTER\": \"\".concat(baseUrl, \"/users/register\")\n};\n\n//# sourceURL=webpack:///./src/config/config.js?");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sync_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sync-routes */ \"./src/routes/sync-routes.js\");\n/* harmony import */ var _apis_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/api */ \"./src/apis/api.js\");\n\n\nvar routes = [{\n  path: \"/\",\n  exact: true,\n  component: _sync_routes__WEBPACK_IMPORTED_MODULE_0__[\"Home\"]\n}, {\n  path: \"/popular/:id\",\n  exact: true,\n  component: _sync_routes__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"],\n  fetchInitialData: function fetchInitialData() {\n    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n    return Object(_apis_api__WEBPACK_IMPORTED_MODULE_1__[\"fetchPopularRepos\"])(path.split(\"/\").pop());\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes/routes.js?");

/***/ }),

/***/ "./src/routes/sync-component.js":
/*!**************************************!*\
  !*** ./src/routes/sync-component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction syncComponent(chunkName, mod) {\n  var Component = mod.default ? mod.default : mod;\n\n  function SyncComponent(props) {\n    if (props.staticContext && props.staticContext.splitPoints) {\n      props.staticContext.splitPoints.push(chunkName);\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);\n  }\n\n  return SyncComponent;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (syncComponent);\n\n//# sourceURL=webpack:///./src/routes/sync-component.js?");

/***/ }),

/***/ "./src/routes/sync-routes.js":
/*!***********************************!*\
  !*** ./src/routes/sync-routes.js ***!
  \***********************************/
/*! exports provided: Home, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var _sync_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sync-component */ \"./src/routes/sync-component.js\");\n\n\nvar importModules = function importModules(moduleName, module) {\n  return Object(_sync_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(moduleName, __webpack_require__(\"./src/components sync recursive ^\\\\.\\\\/.*\\\\/index$\")(\"./\".concat(module, \"/index\")).default);\n};\n\nvar Home = importModules(\"Home\", 'Home');\nvar Grid = importModules(\"Grid\", 'Grid');\n\n//# sourceURL=webpack:///./src/routes/sync-routes.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n\n//# sourceURL=webpack:///external_%22serve-favicon%22?");

/***/ })

/******/ });