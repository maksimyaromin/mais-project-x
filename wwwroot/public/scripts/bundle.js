/**
 * @project     mais
 * @author      Max Eremin
 * @build       Thursday, May 3, 2018 5:48 PM
 * @release     a996ca2 [master]
 * @copyright   Copyright (c) 2018, Max Eremin
*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _STATUSES, _STATUSES_COD, _MaisAPI, _REDUX_ACTIONS, _CONTACT_TYPES, _CONTACT_TYPES_COD, _CONTACT_STATUSES, _CONTACT_STATUSES_COD;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar STATUSES = (_STATUSES = {}, _defineProperty(_STATUSES, 1, \"connected\"), _defineProperty(_STATUSES, 0, \"disconnected\"), _defineProperty(_STATUSES, -100, \"unknown\"), _defineProperty(_STATUSES, 100, \"hidden\"), _STATUSES);\nvar STATUSES_COD = (_STATUSES_COD = {}, _defineProperty(_STATUSES_COD, \"connected\", 1), _defineProperty(_STATUSES_COD, \"disconnected\", 0), _defineProperty(_STATUSES_COD, \"unknown\", -100), _defineProperty(_STATUSES_COD, \"hidden\", 100), _STATUSES_COD);\nvar WELCOME_PAGE_STATE = {\n  REGISTER: 100,\n  LOGIN: 200\n};\nvar API = \"http://127.0.0.1:8002/\";\nvar COOKIE = \"bearer\";\nvar MaisAPI = (_MaisAPI = {}, _defineProperty(_MaisAPI, \"AUTH.CREATE\", \"\".concat(API, \"auth/create\")), _defineProperty(_MaisAPI, \"AUTH.TOKEN-MAIS\", \"\".concat(API, \"auth/token/mais\")), _defineProperty(_MaisAPI, \"AUTH.TOKEN-PZK\", \"\".concat(API, \"auth/token/pzk\")), _defineProperty(_MaisAPI, \"USER\", \"\".concat(API, \"user\")), _MaisAPI);\nvar SOCKET = API + \"mais\";\nvar REDUX_ACTIONS = (_REDUX_ACTIONS = {}, _defineProperty(_REDUX_ACTIONS, \"CABINET.USER-ADD\", \"CABINET.USER-ADD\"), _defineProperty(_REDUX_ACTIONS, \"CABINET.USER-CONNECT\", \"CABINET.USER-CONNECT\"), _defineProperty(_REDUX_ACTIONS, \"CABINET.CONTACTS-BOOK\", \"CABINET.CONTACTS-BOOK\"), _defineProperty(_REDUX_ACTIONS, \"CABINET.SEARCH-BOOK\", \"CABINET.SEARCH-BOOK\"), _defineProperty(_REDUX_ACTIONS, \"CONTACTS.SET-LIST\", \"CONTACTS.SET-LIST\"), _defineProperty(_REDUX_ACTIONS, \"MESSENGER.SELECT-CONTACT\", \"MESSENGER.SELECT-CONTACT\"), _REDUX_ACTIONS);\n\nvar SOCKET_EVENTS = _defineProperty({}, \"CABINET.USER-CONNECTED\", \"CABINET.USER-CONNECTED\");\n\nvar CONTACT_TYPES = (_CONTACT_TYPES = {}, _defineProperty(_CONTACT_TYPES, 100, \"DIALOG\"), _defineProperty(_CONTACT_TYPES, 101, \"PRIVATE-DIALOG\"), _defineProperty(_CONTACT_TYPES, 200, \"GROUP\"), _defineProperty(_CONTACT_TYPES, 201, \"PRIVATE-GROUP\"), _CONTACT_TYPES);\nvar CONTACT_TYPES_COD = (_CONTACT_TYPES_COD = {}, _defineProperty(_CONTACT_TYPES_COD, \"DIALOG\", 100), _defineProperty(_CONTACT_TYPES_COD, \"PRIVATE-DIALOG\", 101), _defineProperty(_CONTACT_TYPES_COD, \"GROUP\", 200), _defineProperty(_CONTACT_TYPES_COD, \"PRIVATE-GROUP\", 201), _CONTACT_TYPES_COD);\nvar CONTACT_STATUSES = (_CONTACT_STATUSES = {}, _defineProperty(_CONTACT_STATUSES, 1, \"CREATED\"), _defineProperty(_CONTACT_STATUSES, 10, \"ESTABLISHED\"), _defineProperty(_CONTACT_STATUSES, -10, \"BLOCKED\"), _CONTACT_STATUSES);\nvar CONTACT_STATUSES_COD = (_CONTACT_STATUSES_COD = {}, _defineProperty(_CONTACT_STATUSES_COD, \"CREATED\", 1), _defineProperty(_CONTACT_STATUSES_COD, \"ESTABLISHED\", 10), _defineProperty(_CONTACT_STATUSES_COD, \"BLOCKED\", -10), _CONTACT_STATUSES_COD);\nmodule.exports = {\n  STATUSES: STATUSES,\n  STATUSES_COD: STATUSES_COD,\n  WELCOME_PAGE_STATE: WELCOME_PAGE_STATE,\n  API: API,\n  MaisAPI: MaisAPI,\n  COOKIE: COOKIE,\n  SOCKET: SOCKET,\n  REDUX_ACTIONS: REDUX_ACTIONS,\n  SOCKET_EVENTS: SOCKET_EVENTS,\n  CONTACT_TYPES: CONTACT_TYPES,\n  CONTACT_TYPES_COD: CONTACT_TYPES_COD,\n  CONTACT_STATUSES: CONTACT_STATUSES,\n  CONTACT_STATUSES_COD: CONTACT_STATUSES_COD\n};\n\n//# sourceURL=webpack:///./constants/index.js?");

/***/ }),

/***/ "./models/contact.js":
/*!***************************!*\
  !*** ./models/contact.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar User = __webpack_require__(/*! ./user */ \"./models/user.js\");\n\nvar _require = __webpack_require__(/*! ../constants */ \"./constants/index.js\"),\n    STATUSES_COD = _require.STATUSES_COD,\n    CONTACT_TYPES = _require.CONTACT_TYPES,\n    CONTACT_TYPES_COD = _require.CONTACT_TYPES_COD,\n    CONTACT_STATUSES = _require.CONTACT_STATUSES,\n    CONTACT_STATUSES_COD = _require.CONTACT_STATUSES_COD;\n\nvar Contact =\n/*#__PURE__*/\nfunction () {\n  function Contact(_ref) {\n    var id = _ref.id,\n        me = _ref.me,\n        name = _ref.name,\n        isCreator = _ref.isCreator,\n        _ref$settings = _ref.settings,\n        settings = _ref$settings === void 0 ? {} : _ref$settings,\n        _ref$contact = _ref.contact,\n        contact = _ref$contact === void 0 ? null : _ref$contact;\n\n    _classCallCheck(this, Contact);\n\n    this.id = id;\n    this.contactId = settings.id;\n    this.me = me;\n    this.name = name;\n    this.contact = contact;\n    this.isCreator = isCreator;\n    this.settings = settings;\n    this.message = \"В лучшие времена надо будет придумать оптимальный способ получать последние сообщения\";\n  }\n\n  _createClass(Contact, [{\n    key: \"contact\",\n    set: function set(contact) {\n      switch (contact.constructor) {\n        case User:\n          this.userId = contact.id;\n          this.isGroup = false;\n          this.item = contact;\n          break;\n\n        default:\n          this.userId = contact.id;\n          this.isGroup = false;\n          this.item = new User(contact);\n      }\n    }\n  }, {\n    key: \"title\",\n    get: function get() {\n      return this.name || this.item.full_name;\n    }\n  }, {\n    key: \"key\",\n    get: function get() {\n      return this.item.last_name;\n    }\n  }, {\n    key: \"status\",\n    get: function get() {\n      switch (this.settings.status) {\n        case CONTACT_STATUSES_COD.ESTABLISHED:\n        case CONTACT_STATUSES_COD.BLOCKED:\n          return this.item.status;\n\n        case CONTACT_STATUSES_COD.CREATED:\n        default:\n          return STATUSES_COD.hidden;\n      }\n    }\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this.settings.type;\n    }\n  }, {\n    key: \"noty\",\n    get: function get() {\n      switch (this.settings.status) {\n        case CONTACT_STATUSES_COD.CREATED:\n          return this.isCreator ? \"Вы отправили запрос на добавление в контакты этому пользователю\" : \"Этот пользователь хочет установить с вами контакт\";\n\n        case CONTACT_STATUSES_COD.BLOCKED:\n          return \"Этот контакт заблокирован\";\n\n        case CONTACT_STATUSES_COD.ESTABLISHED:\n          return this.message;\n\n        default:\n          return null;\n      }\n    }\n  }, {\n    key: \"notyIcon\",\n    get: function get() {\n      switch (this.settings.status) {\n        case CONTACT_STATUSES_COD.CREATED:\n          return this.isCreator ? \"send\" : \"inbox\";\n\n        case CONTACT_STATUSES_COD.BLOCKED:\n          return \"lock\";\n\n        case CONTACT_STATUSES_COD.ESTABLISHED:\n        default:\n          return null;\n      }\n    }\n  }]);\n\n  return Contact;\n}();\n\n;\nmodule.exports = Contact;\n\n//# sourceURL=webpack:///./models/contact.js?");

/***/ }),

/***/ "./models/settings.js":
/*!****************************!*\
  !*** ./models/settings.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Settings = function Settings(_ref) {\n  var id = _ref.id,\n      imagesDir = _ref.imagesDir,\n      avatar = _ref.avatar,\n      category = _ref.category,\n      businessCategory = _ref.businessCategory,\n      displayName = _ref.displayName,\n      tabNumber = _ref.tabNumber;\n\n  _classCallCheck(this, Settings);\n\n  this.id = id;\n  this.imagesDir = imagesDir;\n  this.avatar = avatar;\n  this.category = category;\n  this.businessCategory = businessCategory;\n  this.displayName = displayName;\n  this.tabNumber = tabNumber;\n};\n\n;\nmodule.exports = Settings;\n\n//# sourceURL=webpack:///./models/settings.js?");

/***/ }),

/***/ "./models/token.js":
/*!*************************!*\
  !*** ./models/token.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar moment = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n\nvar Token = function Token(_ref) {\n  var id = _ref.id,\n      token = _ref.token,\n      updatedAt = _ref.updatedAt;\n\n  _classCallCheck(this, Token);\n\n  this.id = id;\n  this.token = token;\n  this.updatedAt = moment(updatedAt);\n};\n\n;\nmodule.exports = Token;\n\n//# sourceURL=webpack:///./models/token.js?");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Settings = __webpack_require__(/*! ./settings */ \"./models/settings.js\"),\n    Token = __webpack_require__(/*! ./token */ \"./models/token.js\"),\n    STATUSES = __webpack_require__(/*! ../constants */ \"./constants/index.js\").STATUSES;\n\nvar User =\n/*#__PURE__*/\nfunction () {\n  function User(_ref) {\n    var id = _ref.id,\n        username = _ref.username,\n        hash = _ref.hash,\n        first_name = _ref.first_name,\n        last_name = _ref.last_name,\n        middle_name = _ref.middle_name,\n        email = _ref.email,\n        status_pzk = _ref.status_pzk,\n        status_mais = _ref.status_mais,\n        status = _ref.status,\n        _ref$settings = _ref.settings,\n        settings = _ref$settings === void 0 ? {} : _ref$settings,\n        _ref$maisToken = _ref.maisToken,\n        maisToken = _ref$maisToken === void 0 ? {} : _ref$maisToken,\n        _ref$pzkToken = _ref.pzkToken,\n        pzkToken = _ref$pzkToken === void 0 ? {} : _ref$pzkToken;\n\n    _classCallCheck(this, User);\n\n    this.id = id;\n    this.username = username;\n    this.hash = hash;\n    this.first_name = first_name;\n    this.last_name = last_name;\n    this.middle_name = middle_name;\n    this.email = email;\n    this.status_pzk = status_pzk;\n    this.status_mais = status_mais;\n    this.status = status;\n    this.settings = new Settings(settings);\n    this.maisToken = new Token(maisToken);\n    this.pzkToken = new Token(pzkToken);\n  }\n\n  _createClass(User, [{\n    key: \"full_name\",\n    get: function get() {\n      return \"\".concat(this.first_name, \" \").concat(this.last_name);\n    }\n  }, {\n    key: \"statusName\",\n    get: function get() {\n      return STATUSES[this.status];\n    }\n  }, {\n    key: \"displayName\",\n    get: function get() {\n      return this.settings.displayName ? this.settings.displayName : this.full_name;\n    }\n  }]);\n\n  return User;\n}();\n\n;\nmodule.exports = User;\n\n//# sourceURL=webpack:///./models/user.js?");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./dv\": \"./node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"./node_modules/moment/locale/dv.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-nz\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"./node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"./node_modules/moment/locale/fy.js\",\n\t\"./gd\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gom-latn\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"./node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"./node_modules/moment/locale/gu.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"./node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"./node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"./node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"./node_modules/moment/locale/kk.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./kn\": \"./node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"./node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ky\": \"./node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"./node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./me\": \"./node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"./node_modules/moment/locale/me.js\",\n\t\"./mi\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"./node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"./node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"./node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"./node_modules/moment/locale/mt.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./pa-in\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"./node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"./node_modules/moment/locale/sd.js\",\n\t\"./se\": \"./node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"./node_modules/moment/locale/se.js\",\n\t\"./si\": \"./node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"./node_modules/moment/locale/si.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"./node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"./node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"./node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"./node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./te\": \"./node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"./node_modules/moment/locale/te.js\",\n\t\"./tet\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"./node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"./node_modules/moment/locale/tg.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"./node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"./node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"./node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"./node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/book/contacts-book.js":
/*!*****************************************************************!*\
  !*** ./wwwroot/scripts/source/components/book/contacts-book.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _list = _interopRequireDefault(__webpack_require__(/*! ../contacts/list */ \"./wwwroot/scripts/source/components/contacts/list.js\"));\n\nvar _messenger = __webpack_require__(/*! ../../models/messenger */ \"./wwwroot/scripts/source/models/messenger.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _onSelect = function onSelect(e, contact, selectedContact) {\n  e.preventDefault();\n\n  if (selectedContact === contact.id) {\n    return;\n  }\n\n  (0, _messenger.selectContact)(contact);\n};\n\nvar ContactsBook = function ContactsBook(props) {\n  return _react.default.createElement(\"div\", {\n    className: \"book__content contacts-book\"\n  }, _react.default.createElement(_list.default, {\n    contacts: props.contacts,\n    selectedContact: props.selectedContact,\n    onSelect: function onSelect(e, contact) {\n      return _onSelect(e, contact, props.selectedContact);\n    }\n  }));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    contacts: state.contacts.toArray(),\n    selectedContact: state.messenger.get(\"contactId\")\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(ContactsBook);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/book/contacts-book.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/book/header.js":
/*!**********************************************************!*\
  !*** ./wwwroot/scripts/source/components/book/header.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BookHeader = function BookHeader(props) {\n  return _react.default.createElement(\"h3\", {\n    className: \"book__header\"\n  }, _react.default.createElement(\"span\", null, props.text));\n};\n\nBookHeader.propTypes = {\n  text: _propTypes.default.string.isRequired\n};\nvar _default = BookHeader;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/book/header.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/cabinet/header.js":
/*!*************************************************************!*\
  !*** ./wwwroot/scripts/source/components/cabinet/header.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _cabinet = __webpack_require__(/*! ../../models/cabinet */ \"./wwwroot/scripts/source/models/cabinet.js\");\n\nvar _avatar = _interopRequireDefault(__webpack_require__(/*! ../images/avatar */ \"./wwwroot/scripts/source/components/images/avatar.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CabinetHeader = function CabinetHeader(props) {\n  var user = props.user;\n  var image = user.status_pzk ? \"data:image/jpeg;base64,\".concat(user.settings.avatar) : \"\".concat(user.settings.imagesDir).concat(user.settings.avatar);\n  return _react.default.createElement(\"header\", {\n    className: \"user\"\n  }, _react.default.createElement(\"div\", {\n    className: \"user__name\"\n  }, _react.default.createElement(\"div\", {\n    className: \"user__name-text\"\n  }, _react.default.createElement(\"span\", null, user.displayName))), _react.default.createElement(_avatar.default, {\n    className: \"user__avatar\",\n    source: image,\n    status: user.status,\n    alt: user.username\n  }));\n};\n\nCabinetHeader.propTypes = {\n  user: _propTypes.default.instanceOf(_cabinet.User).isRequired\n};\nvar _default = CabinetHeader;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/cabinet/header.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/cabinet/menu-item.js":
/*!****************************************************************!*\
  !*** ./wwwroot/scripts/source/components/cabinet/menu-item.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _functions = __webpack_require__(/*! ../../functions */ \"./wwwroot/scripts/source/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar MenuItem = function MenuItem(props) {\n  var icon = (0, _functions.svgIcon)(props.icon);\n  return _react.default.createElement(\"li\", {\n    className: \"menu-item \".concat(props.className || \"\", \" \").concat(props.isActive ? \"menu-item_active\" : \"\"),\n    onClick: props.onClick\n  }, _react.default.createElement(\"svg\", {\n    className: \"menu-item__icon icon\",\n    dangerouslySetInnerHTML: {\n      __html: icon\n    }\n  }));\n};\n\nMenuItem.propTypes = {\n  icon: _propTypes.default.string.isRequired,\n  onClick: _propTypes.default.func.isRequired,\n  isActive: _propTypes.default.bool\n};\nMenuItem.defaultProps = {\n  isActive: false\n};\nvar _default = MenuItem;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/cabinet/menu-item.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/cabinet/search-box.js":
/*!*****************************************************************!*\
  !*** ./wwwroot/scripts/source/components/cabinet/search-box.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _functions = __webpack_require__(/*! ../../functions */ \"./wwwroot/scripts/source/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar onSearch = function onSearch(e) {\n  e.preventDefault();\n};\n\nvar SearchBox = function SearchBox(props) {\n  return _react.default.createElement(\"form\", {\n    className: \"search-box\"\n  }, _react.default.createElement(\"button\", {\n    type: \"button\",\n    className: \"button-back\",\n    onClick: props.onBack\n  }, _react.default.createElement(\"svg\", {\n    className: \"icon\",\n    dangerouslySetInnerHTML: {\n      __html: (0, _functions.svgIcon)(\"back\")\n    }\n  })), _react.default.createElement(\"input\", {\n    className: \"search-box__input\",\n    type: \"text\",\n    name: \"query\",\n    id: \"query\"\n  }), _react.default.createElement(\"button\", {\n    type: \"submit\",\n    className: \"button-go\",\n    onClick: onSearch\n  }, _react.default.createElement(\"svg\", {\n    className: \"icon\",\n    dangerouslySetInnerHTML: {\n      __html: (0, _functions.svgIcon)(\"search\")\n    }\n  })));\n};\n\nSearchBox.propTypes = {\n  onBack: _propTypes.default.func.isRequired\n};\nvar _default = SearchBox;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/cabinet/search-box.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/contacts/contact.js":
/*!***************************************************************!*\
  !*** ./wwwroot/scripts/source/components/contacts/contact.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _contact = _interopRequireDefault(__webpack_require__(/*! ../../../../../models/contact */ \"./models/contact.js\"));\n\nvar _avatar = _interopRequireDefault(__webpack_require__(/*! ../images/avatar */ \"./wwwroot/scripts/source/components/images/avatar.js\"));\n\nvar _functions = __webpack_require__(/*! ../../functions */ \"./wwwroot/scripts/source/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ContactItem = function ContactItem(props) {\n  var contact = props.contact;\n  var contactItem = contact.item;\n  var image = contactItem.status_pzk ? \"data:image/jpeg;base64,\".concat(contactItem.settings.avatar) : \"\".concat(contactItem.settings.imagesDir).concat(contactItem.settings.avatar);\n  var notyIcon = contact.notyIcon ? _react.default.createElement(\"svg\", {\n    className: \"contact__noty-icon icon\",\n    dangerouslySetInnerHTML: {\n      __html: (0, _functions.svgIcon)(contact.notyIcon)\n    }\n  }) : null;\n  var isSelected = contact.id === props.selectedContact;\n  return _react.default.createElement(\"li\", {\n    className: \"contact\".concat(isSelected ? \" contact_selected\" : \"\"),\n    onClick: props.onClick\n  }, _react.default.createElement(_avatar.default, {\n    className: \"contact__image\",\n    source: image,\n    status: contact.status,\n    alt: contactItem.username\n  }), _react.default.createElement(\"div\", {\n    className: \"contact__content\"\n  }, _react.default.createElement(\"div\", {\n    className: \"contact__title\"\n  }, _react.default.createElement(\"span\", null, contact.title)), _react.default.createElement(\"div\", {\n    className: \"contact__noty\"\n  }, _react.default.createElement(\"span\", null, contact.noty))));\n};\n\nContactItem.propTypes = {\n  contact: _propTypes.default.instanceOf(_contact.default).isRequired,\n  selectedContact: _propTypes.default.number,\n  onClick: _propTypes.default.func.isRequired\n};\nvar _default = ContactItem;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/contacts/contact.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/contacts/list.js":
/*!************************************************************!*\
  !*** ./wwwroot/scripts/source/components/contacts/list.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _contact = _interopRequireDefault(__webpack_require__(/*! ../../../../../models/contact */ \"./models/contact.js\"));\n\nvar _contact2 = _interopRequireDefault(__webpack_require__(/*! ./contact */ \"./wwwroot/scripts/source/components/contacts/contact.js\"));\n\nvar _functions = __webpack_require__(/*! ../../functions */ \"./wwwroot/scripts/source/functions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar ContactsList = function ContactsList(props) {\n  var contacts = (0, _functions.groupBy)(props.contacts, function (contact) {\n    return contact.key[0];\n  });\n\n  var content = _react.default.createElement(\"span\", {\n    className: \"contacts-list-empty\"\n  }, \"\\u0423\\u0436\\u0430\\u0441, \\u0443 \\u0432\\u0430\\u0441 \\u043D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u0430! \\u042D\\u0442\\u043E \\u043D\\u0443\\u0436\\u043D\\u043E \\u0441\\u0440\\u043E\\u0447\\u043D\\u043E \\u0438\\u0441\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C.\");\n\n  if (contacts.size) {\n    var alphabet = [];\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = contacts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            letter = _step$value[0],\n            items = _step$value[1];\n\n        var list = items.map(function (item) {\n          return _react.default.createElement(_contact2.default, {\n            key: item.id + item.key,\n            contact: item,\n            selectedContact: props.selectedContact,\n            onClick: function onClick(e) {\n              return props.onSelect(e, item);\n            }\n          });\n        });\n        alphabet.push(_react.default.createElement(\"div\", {\n          key: letter,\n          className: \"contacts__group\"\n        }, _react.default.createElement(\"dt\", {\n          className: \"contacts__group-key\"\n        }, _react.default.createElement(\"span\", null, letter)), _react.default.createElement(\"dd\", {\n          className: \"contacts__group-items\"\n        }, _react.default.createElement(\"ul\", {\n          className: \"contacts__list\"\n        }, list))));\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    content = _react.default.createElement(\"dl\", {\n      className: \"contacts__groups\"\n    }, alphabet);\n  }\n\n  return _react.default.createElement(\"div\", {\n    className: \"contacts\"\n  }, content);\n};\n\nContactsList.propTypes = {\n  contacts: _propTypes.default.arrayOf(_propTypes.default.instanceOf(_contact.default)).isRequired,\n  selectedContact: _propTypes.default.number,\n  onSelect: _propTypes.default.func.isRequired\n};\nContactsList.defaultProps = {\n  selectedContact: 0\n};\nvar _default = ContactsList;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/contacts/list.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/forms/login.js":
/*!**********************************************************!*\
  !*** ./wwwroot/scripts/source/components/forms/login.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar LoginForm = function LoginForm(props) {\n  return _react.default.createElement(\"div\", {\n    className: \"login\"\n  }, _react.default.createElement(\"header\", {\n    className: \"login__header\"\n  }, _react.default.createElement(\"div\", {\n    className: \"login__header-title\"\n  }, _react.default.createElement(\"span\", null, \"\\u0412\\u043E\\u0439\\u0434\\u0438\\u0442\\u0435\")), _react.default.createElement(\"div\", {\n    className: \"login__header-note\"\n  }, _react.default.createElement(\"span\", null, \"\\u0435\\u0441\\u043B\\u0438 \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0432\\u043E\\u0439\\u0442\\u0438 \\u0432 \\u0447\\u0430\\u0442 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u041F\\u0417\\u041A, \\u0443\\u0441\\u0442\\u0430\\u043D\\u043E\\u0432\\u0438\\u0442\\u0435 \\u0441\\u043E\\u043E\\u0442\\u0432\\u0435\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0449\\u0438\\u0439 \\u043F\\u0440\\u0438\\u0437\\u043D\\u0430\\u043A\"))), _react.default.createElement(\"form\", {\n    className: \"form login__form\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"username\",\n    className: \"form__label\"\n  }, \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\"), _react.default.createElement(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    id: \"username\",\n    placeholder: \"\\u041B\\u043E\\u0433\\u0438\\u043D\",\n    className: \"form__input\",\n    value: props.username,\n    onChange: props.onInput\n  }))), _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"password\",\n    className: \"form__label\"\n  }, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\"), _react.default.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    id: \"password\",\n    placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n    className: \"form__input\",\n    value: props.password,\n    onChange: props.onInput\n  }))), _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control checkbox\"\n  }, _react.default.createElement(\"input\", {\n    type: \"checkbox\",\n    name: \"isPzk\",\n    id: \"isPzk\",\n    className: \"form__input\",\n    checked: props.isPzk,\n    onChange: props.onInput\n  }), _react.default.createElement(\"label\", {\n    htmlFor: \"isPzk\",\n    className: \"form__label\"\n  }, \"\\u0412\\u043E\\u0439\\u0442\\u0438 \\u0447\\u0435\\u0440\\u0435\\u0437 \\u043F\\u043E\\u0440\\u0442\\u0430\\u043B\"))), _react.default.createElement(\"div\", {\n    className: \"form__actions\"\n  }, _react.default.createElement(\"button\", {\n    className: \"form__action btn btn-primary\",\n    onClick: props.onLogin\n  }, \"\\u0412\\u043E\\u0439\\u0442\\u0438\"), _react.default.createElement(\"a\", {\n    href: \"#\",\n    className: \"form__action btn-link\",\n    onClick: function onClick(e) {\n      return props.changeView(e, _constants.WELCOME_PAGE_STATE.REGISTER);\n    }\n  }, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\n};\n\nLoginForm.propTypes = {\n  username: _propTypes.default.string.isRequired,\n  password: _propTypes.default.string.isRequired,\n  isPzk: _propTypes.default.bool.isRequired\n};\nvar _default = LoginForm;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/forms/login.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/forms/register.js":
/*!*************************************************************!*\
  !*** ./wwwroot/scripts/source/components/forms/register.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar RegisterForm = function RegisterForm(props) {\n  return _react.default.createElement(\"div\", {\n    className: \"login\"\n  }, _react.default.createElement(\"header\", {\n    className: \"login__header\"\n  }, _react.default.createElement(\"div\", {\n    className: \"login__header-title\"\n  }, _react.default.createElement(\"span\", null, \"\\u0417\\u0430\\u0440\\u0435\\u0433\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u0443\\u0439\\u0442\\u0435\\u0441\\u044C\")), _react.default.createElement(\"div\", {\n    className: \"login__header-note\"\n  }, _react.default.createElement(\"span\", null, \"\\u0447\\u0442\\u043E\\u0431\\u044B \\u0438\\u043D\\u043E\\u0433\\u0434\\u0430 \\u043F\\u043E\\u043A\\u0438\\u0434\\u0430\\u0442\\u044C \\u044D\\u0442\\u043E\\u0442 \\u0436\\u0435\\u0441\\u0442\\u043E\\u043A\\u0438\\u0439 \\u043C\\u0438\\u0440 \\u0438 \\u0440\\u0430\\u0441\\u0442\\u0432\\u043E\\u0440\\u044F\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430 \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E\\u0440\\u0430\\u0445 \\u043D\\u0430\\u0448\\u0435\\u0433\\u043E \\u0447\\u0430\\u0442\\u0430\"))), _react.default.createElement(\"form\", {\n    className: \"form login__form\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"username\",\n    className: \"form__label\"\n  }, \"\\u0418\\u043C\\u044F \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F\"), _react.default.createElement(\"input\", {\n    type: \"text\",\n    name: \"username\",\n    id: \"username\",\n    placeholder: \"\\u041B\\u043E\\u0433\\u0438\\u043D\",\n    className: \"form__input\",\n    value: props.username,\n    onChange: props.onInput\n  }))), _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control form__control_50\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"password\",\n    className: \"form__label\"\n  }, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\"), _react.default.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    id: \"password\",\n    placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n    className: \"form__input\",\n    value: props.password,\n    onChange: props.onInput\n  })), _react.default.createElement(\"div\", {\n    className: \"form__control form__control_50\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"password2\",\n    className: \"form__label\"\n  }, \"\\u041F\\u043E\\u0432\\u0442\\u043E\\u0440\\u0438\\u0442\\u0435 \\u043F\\u0430\\u0440\\u043E\\u043B\\u044C\"), _react.default.createElement(\"input\", {\n    type: \"password2\",\n    name: \"password2\",\n    id: \"password2\",\n    placeholder: \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C\",\n    className: \"form__input\",\n    value: props.password2,\n    onChange: props.onInput\n  }))), _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control form__control_50\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"firstName\",\n    className: \"form__label\"\n  }, \"\\u0418\\u043C\\u044F\"), _react.default.createElement(\"input\", {\n    type: \"text\",\n    name: \"firstName\",\n    id: \"firstName\",\n    placeholder: \"\\u0418\\u043C\\u044F\",\n    className: \"form__input\",\n    value: props.firstName,\n    onChange: props.onInput\n  })), _react.default.createElement(\"div\", {\n    className: \"form__control form__control_50\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"lastName\",\n    className: \"form__label\"\n  }, \"\\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F\"), _react.default.createElement(\"input\", {\n    type: \"text\",\n    name: \"lastName\",\n    id: \"lastName\",\n    placeholder: \"\\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F\",\n    className: \"form__input\",\n    value: props.lastName,\n    onChange: props.onInput\n  }))), _react.default.createElement(\"div\", {\n    className: \"form__group\"\n  }, _react.default.createElement(\"div\", {\n    className: \"form__control\"\n  }, _react.default.createElement(\"label\", {\n    htmlFor: \"email\",\n    className: \"form__label\"\n  }, \"\\u0410\\u0434\\u0440\\u0435\\u0441 \\u044D\\u043B\\u0435\\u043A\\u0442\\u0440\\u043E\\u043D\\u043D\\u043E\\u0439 \\u043F\\u043E\\u0447\\u0442\\u044B\"), _react.default.createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"E-mail\",\n    className: \"form__input\",\n    value: props.email,\n    onChange: props.onInput\n  }))), _react.default.createElement(\"div\", {\n    className: \"form__actions\"\n  }, _react.default.createElement(\"button\", {\n    className: \"form__action btn btn-primary\",\n    onClick: props.onRegister\n  }, \"\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C\"), _react.default.createElement(\"a\", {\n    href: \"#\",\n    className: \"form__action btn-link\",\n    onClick: function onClick(e) {\n      return props.changeView(e, _constants.WELCOME_PAGE_STATE.LOGIN);\n    }\n  }, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F\"))));\n};\n\nRegisterForm.propTypes = {\n  username: _propTypes.default.string.isRequired,\n  password: _propTypes.default.string.isRequired,\n  password2: _propTypes.default.string.isRequired,\n  firstName: _propTypes.default.string.isRequired,\n  lastName: _propTypes.default.string.isRequired,\n  email: _propTypes.default.string.isRequired\n};\nvar _default = RegisterForm;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/forms/register.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/images/avatar.js":
/*!************************************************************!*\
  !*** ./wwwroot/scripts/source/components/images/avatar.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Avatar = function Avatar(props) {\n  return _react.default.createElement(\"div\", {\n    className: \"avatar \".concat(props.className, \" status-\").concat(_constants.STATUSES[props.status])\n  }, _react.default.createElement(\"img\", {\n    className: \"avatar__image\",\n    src: props.source,\n    alt: props.alt || \"no\"\n  }), _react.default.createElement(\"span\", {\n    className: \"avatar__status\"\n  }));\n};\n\nAvatar.propTypes = {\n  source: _propTypes.default.string.isRequired,\n  status: _propTypes.default.number.isRequired\n};\nvar _default = Avatar;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/images/avatar.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/messenger/header.js":
/*!***************************************************************!*\
  !*** ./wwwroot/scripts/source/components/messenger/header.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _contact = _interopRequireDefault(__webpack_require__(/*! ../../../../../models/contact */ \"./models/contact.js\"));\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ContactHeader = function ContactHeader(props) {\n  var contact = props.contact;\n  return _react.default.createElement(\"header\", {\n    className: \"contact-header status-\".concat(_constants.STATUSES[contact.status])\n  }, _react.default.createElement(\"div\", {\n    className: \"contact__title\"\n  }, _react.default.createElement(\"span\", null, contact.title), _react.default.createElement(\"span\", {\n    className: \"contact__status\"\n  })));\n};\n\nContactHeader.propTypes = {\n  contact: _propTypes.default.instanceOf(_contact.default).isRequired\n};\nvar _default = ContactHeader;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/messenger/header.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/messenger/index.js":
/*!**************************************************************!*\
  !*** ./wwwroot/scripts/source/components/messenger/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _screen = _interopRequireDefault(__webpack_require__(/*! ./screen */ \"./wwwroot/scripts/source/components/messenger/screen.js\"));\n\nvar _header = _interopRequireDefault(__webpack_require__(/*! ./header */ \"./wwwroot/scripts/source/components/messenger/header.js\"));\n\nvar _messageEditor = _interopRequireDefault(__webpack_require__(/*! ./message-editor */ \"./wwwroot/scripts/source/components/messenger/message-editor.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nvar Messenger =\n/*#__PURE__*/\nfunction (_Component) {\n  function Messenger() {\n    _classCallCheck(this, Messenger);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Messenger).apply(this, arguments));\n  }\n\n  _createClass(Messenger, [{\n    key: \"render\",\n    value: function render() {\n      var contact = this.props.contact;\n      /*  if(!contact) {\r\n           return (\r\n               <Screen className=\"screen_welcome\">\r\n                   <span>Добро пожаловать в Mais Messenger</span>\r\n                   <span>\r\n                       Маленький но гордый чат, который скроет вас от мирских забот, укроет клетчатым пледиком \r\n                       и, пока будет заваривать вам горячий шоколад, расскажет что же нового произошло у \r\n                       ваших друзей и коллег.\r\n                   </span>\r\n               </Screen>\r\n           );\r\n       } */\n\n      return _react.default.createElement(\"div\", {\n        className: \"messenger\"\n      }, _react.default.createElement(\"header\", {\n        className: \"contact-header status-connected\"\n      }, _react.default.createElement(\"div\", {\n        className: \"contact__title\"\n      }, _react.default.createElement(\"span\", null, \"\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C \\u0415\\u0440\\u0451\\u043C\\u0438\\u043D\"), _react.default.createElement(\"span\", {\n        className: \"contact__status\"\n      }))), _react.default.createElement(\"div\", {\n        className: \"messenger__history\"\n      }), _react.default.createElement(_messageEditor.default, null));\n    }\n  }]);\n\n  _inherits(Messenger, _Component);\n\n  return Messenger;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    contact: state.messenger.get(\"contact\")\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Messenger);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/messenger/index.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/messenger/message-editor.js":
/*!***********************************************************************!*\
  !*** ./wwwroot/scripts/source/components/messenger/message-editor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _showdown = _interopRequireDefault(__webpack_require__(/*! showdown */ \"./node_modules/showdown/dist/showdown.js\"));\n\nvar _draftJs = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nvar MessageEditor =\n/*#__PURE__*/\nfunction (_Component) {\n  function MessageEditor(props) {\n    var _this;\n\n    _classCallCheck(this, MessageEditor);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageEditor).call(this, props));\n    _this.converter = new _showdown.default.Converter({\n      emoji: true\n    });\n    _this.state = {\n      text: _draftJs.EditorState.createEmpty(),\n      textHTML: \"\"\n    };\n    console.log(_this.state.text);\n    return _this;\n  }\n\n  _createClass(MessageEditor, [{\n    key: \"onChange\",\n    value: function onChange(state) {\n      /*const textHTML = this.converter.makeHtml(e.target.value);\r\n      this.setState({\r\n          text: e.target.value,\r\n          textHTML\r\n      });*/\n      console.log(state.getCurrentContent());\n      this.setState({\n        text: state\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react.default.createElement(\"div\", {\n        className: \"messenger__editor\"\n      }, _react.default.createElement(_draftJs.Editor, {\n        editorState: this.state.text,\n        onChange: this.onChange.bind(this)\n      }));\n    }\n  }]);\n\n  _inherits(MessageEditor, _Component);\n\n  return MessageEditor;\n}(_react.Component);\n\nvar _default = MessageEditor;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/messenger/message-editor.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/components/messenger/screen.js":
/*!***************************************************************!*\
  !*** ./wwwroot/scripts/source/components/messenger/screen.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Screen = function Screen(props) {\n  return _react.default.createElement(\"div\", {\n    className: \"screen\".concat(props.className ? \" \".concat(props.className) : \"\")\n  }, _react.default.createElement(\"div\", {\n    className: \"screen__message\"\n  }, props.children));\n};\n\nvar _default = Screen;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/components/messenger/screen.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/functions.js":
/*!*********************************************!*\
  !*** ./wwwroot/scripts/source/functions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.groupBy = exports.svgIcon = void 0;\n\nvar svgIcon = function svgIcon(name) {\n  return \"\\n        <use xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xlink:href=\\\"/assets/images/icons.svg#\".concat(name, \"\\\"></use>\");\n};\n\nexports.svgIcon = svgIcon;\n\nvar groupBy = function groupBy(array, func) {\n  var groups = new Map();\n\n  if (array instanceof Array) {\n    array.forEach(function (item) {\n      var key = func(item);\n      groups.has(key) ? groups.get(key).push(item) : groups.set(key, [item]);\n    });\n  }\n\n  return groups;\n};\n\nexports.groupBy = groupBy;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/functions.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/index.js":
/*!*****************************************!*\
  !*** ./wwwroot/scripts/source/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _welcome = _interopRequireDefault(__webpack_require__(/*! ./pages/welcome */ \"./wwwroot/scripts/source/pages/welcome.js\"));\n\nvar _cabinet = _interopRequireDefault(__webpack_require__(/*! ./pages/cabinet */ \"./wwwroot/scripts/source/pages/cabinet.js\"));\n\nvar _registerServiceWorker = _interopRequireDefault(__webpack_require__(/*! ./registerServiceWorker */ \"./wwwroot/scripts/source/registerServiceWorker.js\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./redux/store */ \"./wwwroot/scripts/source/redux/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom.default.render(_react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(\"div\", {\n  className: \"wrapper\"\n}, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {\n  exact: true,\n  path: \"/\",\n  component: _welcome.default\n}), _react.default.createElement(_reactRouterDom.Route, {\n  exact: true,\n  path: \"/cabinet\",\n  render: function render(props) {\n    return _react.default.createElement(_reactRedux.Provider, {\n      store: _store.default\n    }, _react.default.createElement(_cabinet.default, props));\n  }\n})))), document.getElementById(\"root\"));\n\n(0, _registerServiceWorker.default)();\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/index.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/models/cabinet.js":
/*!**************************************************!*\
  !*** ./wwwroot/scripts/source/models/cabinet.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"User\", {\n  enumerable: true,\n  get: function get() {\n    return _user.default;\n  }\n});\nexports.showSearchBook = exports.showContactsBook = exports.addUser = void 0;\n\nvar _actions = __webpack_require__(/*! ../redux/actions */ \"./wwwroot/scripts/source/redux/actions.js\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../redux/store */ \"./wwwroot/scripts/source/redux/store.js\"));\n\nvar _user = _interopRequireDefault(__webpack_require__(/*! ../../../../models/user */ \"./models/user.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar addUser = function addUser(userDTO) {\n  var user = new _user.default(userDTO);\n\n  _store.default.dispatch(_actions.CABINET_ACTIONS.ADD_USER(user));\n\n  _store.default.dispatch(_actions.CABINET_ACTIONS.CONNECT_USER());\n};\n\nexports.addUser = addUser;\n\nvar showContactsBook = function showContactsBook() {\n  _store.default.dispatch(_actions.CABINET_ACTIONS.SHOW_CONTACTS_BOOK());\n};\n\nexports.showContactsBook = showContactsBook;\n\nvar showSearchBook = function showSearchBook() {\n  _store.default.dispatch(_actions.CABINET_ACTIONS.SHOW_SEARCH_BOOK());\n};\n\nexports.showSearchBook = showSearchBook;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/models/cabinet.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/models/contacts.js":
/*!***************************************************!*\
  !*** ./wwwroot/scripts/source/models/contacts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setContactsList = void 0;\n\nvar _actions = __webpack_require__(/*! ../redux/actions */ \"./wwwroot/scripts/source/redux/actions.js\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../redux/store */ \"./wwwroot/scripts/source/redux/store.js\"));\n\nvar _contact = _interopRequireDefault(__webpack_require__(/*! ../../../../models/contact */ \"./models/contact.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar setContactsList = function setContactsList(contacts) {\n  if (!contacts || !contacts.length) {\n    return;\n  }\n\n  contacts = contacts.map(function (contact) {\n    return new _contact.default(_objectSpread({}, contact, {\n      contact: contact.item\n    }));\n  });\n\n  _store.default.dispatch(_actions.CONTACTS_ACTIONS.SET_CONTACTS_LIST(contacts));\n};\n\nexports.setContactsList = setContactsList;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/models/contacts.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/models/messenger.js":
/*!****************************************************!*\
  !*** ./wwwroot/scripts/source/models/messenger.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selectContact = void 0;\n\nvar _actions = __webpack_require__(/*! ../redux/actions */ \"./wwwroot/scripts/source/redux/actions.js\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../redux/store */ \"./wwwroot/scripts/source/redux/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar selectContact = function selectContact(contact) {\n  _store.default.dispatch(_actions.MESSENGER_ACTIONS.SELECT_CONTACT(contact));\n};\n\nexports.selectContact = selectContact;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/models/messenger.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/pages/cabinet.js":
/*!*************************************************!*\
  !*** ./wwwroot/scripts/source/pages/cabinet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _jsCookie = _interopRequireDefault(__webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\"));\n\nvar _constants = __webpack_require__(/*! ../../../../constants */ \"./constants/index.js\");\n\nvar _socket = __webpack_require__(/*! ../socket */ \"./wwwroot/scripts/source/socket.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _header = _interopRequireDefault(__webpack_require__(/*! ../components/cabinet/header */ \"./wwwroot/scripts/source/components/cabinet/header.js\"));\n\nvar _menuItem = _interopRequireDefault(__webpack_require__(/*! ../components/cabinet/menu-item */ \"./wwwroot/scripts/source/components/cabinet/menu-item.js\"));\n\nvar _header2 = _interopRequireDefault(__webpack_require__(/*! ../components/book/header */ \"./wwwroot/scripts/source/components/book/header.js\"));\n\nvar _searchBox = _interopRequireDefault(__webpack_require__(/*! ../components/cabinet/search-box */ \"./wwwroot/scripts/source/components/cabinet/search-box.js\"));\n\nvar _contactsBook = _interopRequireDefault(__webpack_require__(/*! ../components/book/contacts-book */ \"./wwwroot/scripts/source/components/book/contacts-book.js\"));\n\nvar _messenger = _interopRequireDefault(__webpack_require__(/*! ../components/messenger */ \"./wwwroot/scripts/source/components/messenger/index.js\"));\n\nvar _cabinet = __webpack_require__(/*! ../models/cabinet */ \"./wwwroot/scripts/source/models/cabinet.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nvar CabinetPage =\n/*#__PURE__*/\nfunction (_Component) {\n  function CabinetPage() {\n    _classCallCheck(this, CabinetPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CabinetPage).apply(this, arguments));\n  }\n\n  _createClass(CabinetPage, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this = this;\n\n      (0, _socket.connect)(function () {\n        _this.listContact();\n      });\n    }\n  }, {\n    key: \"onExit\",\n    value: function onExit(e) {\n      e.preventDefault();\n\n      _jsCookie.default.remove(_constants.COOKIE);\n\n      window.location.href = \"/\";\n    }\n  }, {\n    key: \"onBack\",\n    value: function onBack(e) {\n      this.listContact(e);\n    }\n  }, {\n    key: \"listContact\",\n    value: function listContact(e) {\n      if (e) {\n        e.preventDefault();\n      }\n\n      ;\n\n      if (this.props.isContactsBook) {\n        return;\n      }\n\n      (0, _cabinet.showContactsBook)();\n    }\n  }, {\n    key: \"boxSearch\",\n    value: function boxSearch(e) {\n      if (e) {\n        e.preventDefault();\n      }\n\n      ;\n\n      if (this.props.isSearchBook) {\n        return;\n      }\n\n      (0, _cabinet.showSearchBook)();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var cabinet = _react.default.createElement(\"span\", null, \"Loading...\");\n\n      if (this.props.isConnected) {\n        var book = _react.default.createElement(\"span\", {\n          className: \"book-spinner\"\n        }, \"Loading...\");\n\n        var boxSearch = null;\n\n        if (this.props.isContactsBook) {\n          book = _react.default.createElement(\"section\", {\n            className: \"book book__contacts\"\n          }, _react.default.createElement(_header2.default, {\n            text: \"\\u041C\\u043E\\u0438 \\u043A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B\"\n          }), _react.default.createElement(_contactsBook.default, null));\n        }\n\n        if (this.props.isSearchBook) {\n          boxSearch = _react.default.createElement(_searchBox.default, {\n            onBack: this.onBack.bind(this)\n          });\n          book = _react.default.createElement(\"section\", {\n            className: \"book book__search\"\n          }, _react.default.createElement(_header2.default, {\n            text: \"\\u0420\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u044B \\u043F\\u043E\\u0438\\u0441\\u043A\\u0430\"\n          }));\n        }\n\n        cabinet = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"div\", {\n          className: \"cabinet\"\n        }, _react.default.createElement(\"aside\", {\n          className: \"cabinet__aside\"\n        }, _react.default.createElement(_header.default, {\n          user: this.props.user\n        }), this.props.isSearchBook ? boxSearch : _react.default.createElement(\"ul\", {\n          className: \"cabinet__menu\"\n        }, _react.default.createElement(_menuItem.default, {\n          key: \"contacts\",\n          icon: \"contact\",\n          onClick: this.listContact.bind(this),\n          isActive: this.props.isContactsBook\n        }), _react.default.createElement(_menuItem.default, {\n          key: \"search\",\n          icon: \"search\",\n          onClick: this.boxSearch.bind(this)\n        }), _react.default.createElement(_menuItem.default, {\n          key: \"exit\",\n          icon: \"exit\",\n          onClick: this.onExit.bind(this),\n          className: \"to-end\"\n        })), book), _react.default.createElement(\"main\", {\n          className: \"cabinet__content\"\n        }, _react.default.createElement(_messenger.default, null))));\n      }\n\n      return _react.default.createElement(_react.default.Fragment, null, cabinet);\n    }\n  }]);\n\n  _inherits(CabinetPage, _Component);\n\n  return CabinetPage;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.cabinet.get(\"user\"),\n    isConnected: state.cabinet.get(\"isConnected\"),\n    isContactsBook: state.cabinet.get(\"isContactsBook\"),\n    isSearchBook: state.cabinet.get(\"isSearchBook\")\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(CabinetPage);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/pages/cabinet.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/pages/welcome.js":
/*!*************************************************!*\
  !*** ./wwwroot/scripts/source/pages/welcome.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _login = _interopRequireDefault(__webpack_require__(/*! ../components/forms/login */ \"./wwwroot/scripts/source/components/forms/login.js\"));\n\nvar _register = _interopRequireDefault(__webpack_require__(/*! ../components/forms/register */ \"./wwwroot/scripts/source/components/forms/register.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _constants = __webpack_require__(/*! ../../../../constants */ \"./constants/index.js\");\n\nvar _user = _interopRequireDefault(__webpack_require__(/*! ../../../../models/user */ \"./models/user.js\"));\n\nvar _jsCookie = _interopRequireDefault(__webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }\n\nvar WelcomePage =\n/*#__PURE__*/\nfunction (_Component) {\n  function WelcomePage(props) {\n    var _this;\n\n    _classCallCheck(this, WelcomePage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(WelcomePage).call(this, props));\n    _this.state = {\n      viewMode: _constants.WELCOME_PAGE_STATE.LOGIN,\n      username: \"Eremin_MY\",\n      password: \"VegasmaN17FacebooK111\",\n      password2: \"\",\n      isPzk: true,\n      firstName: \"\",\n      lastName: \"\",\n      email: \"\"\n    };\n    return _this;\n  }\n\n  _createClass(WelcomePage, [{\n    key: \"changeView\",\n    value: function changeView(e, viewMode) {\n      if (e) {\n        e.preventDefault();\n      }\n\n      this.setState({\n        viewMode: viewMode,\n        username: \"\",\n        password: \"\"\n      });\n    }\n  }, {\n    key: \"onRegister\",\n    value: function onRegister(e) {\n      e.preventDefault();\n      fetch(_constants.MaisAPI[\"AUTH.CREATE\"], {\n        method: \"PUT\",\n        headers: {\n          \"Content-Type\": \"application/x-www-form-urlencoded; charset=utf-8\"\n        },\n        body: \"id=0&username=\".concat(this.state.username, \"&hash=\").concat(this.state.password, \"&first_name=\").concat(this.state.firstName, \"&last_name=\").concat(this.state.lastName, \"&email=\").concat(this.state.email),\n        mode: \"cors\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        if (response.success) {\n          _jsCookie.default.set(_constants.COOKIE, response.token, {\n            expires: 1\n          });\n\n          return window.location.href = \"/cabinet\";\n        }\n\n        console.error(response.error);\n      });\n    }\n  }, {\n    key: \"onLogin\",\n    value: function onLogin(e) {\n      e.preventDefault();\n      var method = this.state.isPzk ? _constants.MaisAPI[\"AUTH.TOKEN-PZK\"] : _constants.MaisAPI[\"AUTH.TOKEN-MAIS\"];\n      fetch(method, {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/x-www-form-urlencoded; charset=utf-8\"\n        },\n        body: \"username=\".concat(this.state.username, \"&password=\").concat(this.state.password),\n        mode: \"cors\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        if (response.success) {\n          _jsCookie.default.set(_constants.COOKIE, response.token, {\n            expires: 1\n          });\n\n          return window.location.href = \"/cabinet\";\n        }\n\n        console.error(response.error);\n      });\n    }\n  }, {\n    key: \"onInput\",\n    value: function onInput(e) {\n      var target = e.target;\n\n      switch (target.type) {\n        case \"password\":\n        case \"email\":\n        case \"text\":\n          this.setState(_defineProperty({}, target.name, target.value));\n          break;\n\n        case \"checkbox\":\n          this.setState(_defineProperty({}, target.name, target.checked));\n          break;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (_jsCookie.default.get(_constants.COOKIE)) {\n        return _react.default.createElement(_reactRouterDom.Redirect, {\n          to: \"/cabinet\"\n        });\n      }\n\n      var widget = null;\n\n      switch (this.state.viewMode) {\n        case _constants.WELCOME_PAGE_STATE.LOGIN:\n          widget = _react.default.createElement(_login.default, {\n            changeView: this.changeView.bind(this),\n            onInput: this.onInput.bind(this),\n            username: this.state.username,\n            password: this.state.password,\n            isPzk: this.state.isPzk,\n            onLogin: this.onLogin.bind(this)\n          });\n          break;\n\n        case _constants.WELCOME_PAGE_STATE.REGISTER:\n          widget = _react.default.createElement(_register.default, {\n            changeView: this.changeView.bind(this),\n            onInput: this.onInput.bind(this),\n            username: this.state.username,\n            password: this.state.password,\n            password2: this.state.password2,\n            firstName: this.state.firstName,\n            lastName: this.state.lastName,\n            email: this.state.email,\n            onRegister: this.onRegister.bind(this)\n          });\n          break;\n      }\n\n      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"header\", {\n        className: \"header\"\n      }, _react.default.createElement(\"div\", {\n        className: \"header__logo\"\n      }, _react.default.createElement(\"span\", null, \"mais messenger\"))), _react.default.createElement(\"main\", {\n        className: \"content\"\n      }, _react.default.createElement(\"div\", {\n        className: \"widget\"\n      }, widget)));\n    }\n  }]);\n\n  _inherits(WelcomePage, _Component);\n\n  return WelcomePage;\n}(_react.Component);\n\nvar _default = WelcomePage;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/pages/welcome.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/redux/actions.js":
/*!*************************************************!*\
  !*** ./wwwroot/scripts/source/redux/actions.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MESSENGER_ACTIONS = exports.CONTACTS_ACTIONS = exports.CABINET_ACTIONS = void 0;\n\nvar _constants = __webpack_require__(/*! ../../../../constants */ \"./constants/index.js\");\n\nvar CABINET_ACTIONS = {\n  ADD_USER: function ADD_USER(user) {\n    return {\n      type: _constants.REDUX_ACTIONS[\"CABINET.USER-ADD\"],\n      user: user\n    };\n  },\n  CONNECT_USER: function CONNECT_USER() {\n    return {\n      type: _constants.REDUX_ACTIONS[\"CABINET.USER-CONNECT\"]\n    };\n  },\n  SHOW_CONTACTS_BOOK: function SHOW_CONTACTS_BOOK() {\n    return {\n      type: _constants.REDUX_ACTIONS[\"CABINET.CONTACTS-BOOK\"]\n    };\n  },\n  SHOW_SEARCH_BOOK: function SHOW_SEARCH_BOOK() {\n    return {\n      type: _constants.REDUX_ACTIONS[\"CABINET.SEARCH-BOOK\"]\n    };\n  }\n};\nexports.CABINET_ACTIONS = CABINET_ACTIONS;\nvar CONTACTS_ACTIONS = {\n  SET_CONTACTS_LIST: function SET_CONTACTS_LIST(contacts) {\n    return {\n      type: _constants.REDUX_ACTIONS[\"CONTACTS.SET-LIST\"],\n      contacts: contacts\n    };\n  }\n};\nexports.CONTACTS_ACTIONS = CONTACTS_ACTIONS;\nvar MESSENGER_ACTIONS = {\n  SELECT_CONTACT: function SELECT_CONTACT(contact) {\n    return {\n      type: _constants.REDUX_ACTIONS[\"MESSENGER.SELECT-CONTACT\"],\n      contact: contact\n    };\n  }\n};\nexports.MESSENGER_ACTIONS = MESSENGER_ACTIONS;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/redux/actions.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/redux/reducers/cabinet-reducer.js":
/*!******************************************************************!*\
  !*** ./wwwroot/scripts/source/redux/reducers/cabinet-reducer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n\nvar Cabinet = (0, _immutable.Record)({\n  isConnected: false,\n  user: null,\n  isContactsBook: false,\n  isSearchBook: false\n});\n\nvar _default = function _default() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Cabinet();\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants.REDUX_ACTIONS[\"CABINET.USER-CONNECT\"]:\n      {\n        return state.set(\"isConnected\", true);\n      }\n\n    case _constants.REDUX_ACTIONS[\"CABINET.USER-ADD\"]:\n      {\n        return state.set(\"user\", action.user);\n      }\n\n    case _constants.REDUX_ACTIONS[\"CABINET.CONTACTS-BOOK\"]:\n      {\n        state = state.set(\"isContactsBook\", true);\n        state = state.set(\"isSearchBook\", false);\n        return state;\n      }\n\n    case _constants.REDUX_ACTIONS[\"CABINET.SEARCH-BOOK\"]:\n      {\n        state = state.set(\"isContactsBook\", false);\n        state = state.set(\"isSearchBook\", true);\n        return state;\n      }\n  }\n\n  ;\n  return state;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/redux/reducers/cabinet-reducer.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/redux/reducers/contacts-reducer.js":
/*!*******************************************************************!*\
  !*** ./wwwroot/scripts/source/redux/reducers/contacts-reducer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n\nvar contacts = (0, _immutable.List)();\n\nvar _default = function _default() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : contacts;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants.REDUX_ACTIONS[\"CONTACTS.SET-LIST\"]:\n      return (0, _immutable.List)(action.contacts);\n  }\n\n  return state;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/redux/reducers/contacts-reducer.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/redux/reducers/index.js":
/*!********************************************************!*\
  !*** ./wwwroot/scripts/source/redux/reducers/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _cabinetReducer = _interopRequireDefault(__webpack_require__(/*! ./cabinet-reducer */ \"./wwwroot/scripts/source/redux/reducers/cabinet-reducer.js\"));\n\nvar _contactsReducer = _interopRequireDefault(__webpack_require__(/*! ./contacts-reducer */ \"./wwwroot/scripts/source/redux/reducers/contacts-reducer.js\"));\n\nvar _messengerReducer = _interopRequireDefault(__webpack_require__(/*! ./messenger-reducer */ \"./wwwroot/scripts/source/redux/reducers/messenger-reducer.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = (0, _redux.combineReducers)({\n  cabinet: _cabinetReducer.default,\n  contacts: _contactsReducer.default,\n  messenger: _messengerReducer.default\n});\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/redux/reducers/index.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/redux/reducers/messenger-reducer.js":
/*!********************************************************************!*\
  !*** ./wwwroot/scripts/source/redux/reducers/messenger-reducer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _constants = __webpack_require__(/*! ../../../../../constants */ \"./constants/index.js\");\n\nvar _immutable = __webpack_require__(/*! immutable */ \"./node_modules/immutable/dist/immutable.js\");\n\nvar Messenger = (0, _immutable.Record)({\n  contact: null,\n  contactId: 0\n});\n\nvar _default = function _default() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Messenger();\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants.REDUX_ACTIONS[\"MESSENGER.SELECT-CONTACT\"]:\n      state = state.set(\"contact\", action.contact);\n      state = state.set(\"contactId\", action.contact.id);\n      return state;\n  }\n\n  return state;\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/redux/reducers/messenger-reducer.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/redux/store.js":
/*!***********************************************!*\
  !*** ./wwwroot/scripts/source/redux/store.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ \"./wwwroot/scripts/source/redux/reducers/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _redux.createStore)(_reducers.default);\nvar _default = store;\nexports.default = _default;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/redux/store.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/registerServiceWorker.js":
/*!*********************************************************!*\
  !*** ./wwwroot/scripts/source/registerServiceWorker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = register;\nexports.unregister = unregister;\n// In production, we register a service worker to serve assets from local cache.\n// This lets the app load faster on subsequent visits in production, and gives\n// it offline capabilities. However, it also means that developers (and users)\n// will only see deployed updates on the \"N+1\" visit to a page, since previously\n// cached resources are updated in the background.\n// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.\n// This link also includes instructions on opting out of this behavior.\nvar isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.\nwindow.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.\nwindow.location.hostname.match(/^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));\n\nfunction register() {\n  if (false) { var publicUrl; }\n}\n\nfunction registerValidSW(swUrl) {\n  navigator.serviceWorker.register(swUrl).then(function (registration) {\n    registration.onupdatefound = function () {\n      var installingWorker = registration.installing;\n\n      installingWorker.onstatechange = function () {\n        if (installingWorker.state === 'installed') {\n          if (navigator.serviceWorker.controller) {\n            // At this point, the old content will have been purged and\n            // the fresh content will have been added to the cache.\n            // It's the perfect time to display a \"New content is\n            // available; please refresh.\" message in your web app.\n            console.log('New content is available; please refresh.');\n          } else {\n            // At this point, everything has been precached.\n            // It's the perfect time to display a\n            // \"Content is cached for offline use.\" message.\n            console.log('Content is cached for offline use.');\n          }\n        }\n      };\n    };\n  }).catch(function (error) {\n    console.error('Error during service worker registration:', error);\n  });\n}\n\nfunction checkValidServiceWorker(swUrl) {\n  // Check if the service worker can be found. If it can't reload the page.\n  fetch(swUrl).then(function (response) {\n    // Ensure service worker exists, and that we really are getting a JS file.\n    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {\n      // No service worker found. Probably a different app. Reload the page.\n      navigator.serviceWorker.ready.then(function (registration) {\n        registration.unregister().then(function () {\n          window.location.reload();\n        });\n      });\n    } else {\n      // Service worker found. Proceed as normal.\n      registerValidSW(swUrl);\n    }\n  }).catch(function () {\n    console.log('No internet connection found. App is running in offline mode.');\n  });\n}\n\nfunction unregister() {\n  if ('serviceWorker' in navigator) {\n    navigator.serviceWorker.ready.then(function (registration) {\n      registration.unregister();\n    });\n  }\n}\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/registerServiceWorker.js?");

/***/ }),

/***/ "./wwwroot/scripts/source/socket.js":
/*!******************************************!*\
  !*** ./wwwroot/scripts/source/socket.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.emit = exports.connect = void 0;\n\nvar _socket = _interopRequireDefault(__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\"));\n\nvar _constants = __webpack_require__(/*! ../../../constants */ \"./constants/index.js\");\n\nvar _cabinet = __webpack_require__(/*! ./models/cabinet */ \"./wwwroot/scripts/source/models/cabinet.js\");\n\nvar _contacts = __webpack_require__(/*! ./models/contacts */ \"./wwwroot/scripts/source/models/contacts.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar socket = (0, _socket.default)(_constants.SOCKET, {\n  transports: [\"websocket\"],\n  autoConnect: false\n});\n\nvar connect = function connect(done) {\n  socket.connect();\n  socket.on(\"connect\", function () {\n    if (typeof done === \"function\") {\n      done();\n    }\n\n    socket.on(_constants.SOCKET_EVENTS[\"CABINET.USER-CONNECTED\"], function (user, contacts) {\n      (0, _contacts.setContactsList)(contacts);\n      (0, _cabinet.addUser)(user);\n    });\n  });\n};\n\nexports.connect = connect;\n\nvar emit = function emit(name) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  socket.emit.apply(socket, [name].concat(args));\n};\n\nexports.emit = emit;\n\n//# sourceURL=webpack:///./wwwroot/scripts/source/socket.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./wwwroot/scripts/source/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\workshop\\chat-modules\\wwwroot\\scripts\\source\\index.js */\"./wwwroot/scripts/source/index.js\");\n\n\n//# sourceURL=webpack:///multi_./wwwroot/scripts/source/index.js?");

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///ws_(ignored)?");

/***/ })

/******/ });

//# sourceMappingURL=bundle.js.map
