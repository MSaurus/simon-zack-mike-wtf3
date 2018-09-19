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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ajax/index.ts":
/*!***************************!*\
  !*** ./src/ajax/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction get(url) {\n    return new Promise(function (resolve, reject) {\n        var request = new XMLHttpRequest();\n        request.open(\"GET\", url, true);\n        request.send();\n        request.onreadystatechange = function () {\n            if (request.readyState == XMLHttpRequest.DONE) {\n                if (request.getResponseHeader(\"content-type\") == \"application/json; charset=utf-8\") {\n                    var resp = JSON.parse(request.responseText);\n                    resolve(resp);\n                }\n                else {\n                    reject(new Error(\"That's not an json\"));\n                }\n            }\n        };\n    });\n}\nexports.get = get;\n\n\n//# sourceURL=webpack:///./src/ajax/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Users = __importStar(__webpack_require__(/*! ./users/index */ \"./src/users/index.ts\"));\nwindow.addEventListener(\"load\", function () {\n    console.log(\"Sending Ajax request\");\n    Users.send_ajax();\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/users/index.ts":
/*!****************************!*\
  !*** ./src/users/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AJAX = __importStar(__webpack_require__(/*! ../ajax/index */ \"./src/ajax/index.ts\"));\nfunction send_ajax() {\n    console.log(\"Entering send_ajax function\");\n    var url = \"\";\n    if (window.location.href != \"http://localhost:3000/users\") {\n        var id = window.location.href.substr(window.location.href.lastIndexOf(\"/\") + 1);\n        url = \"http://localhost:3000/api/users/\" + id;\n    }\n    else {\n        url = \"http://localhost:3000/api/users\";\n    }\n    AJAX.get(url)\n        // ask David\n        .then(function (response) {\n        console.log(response.data);\n        if (response.data == null || undefined) {\n            response.data = [];\n        }\n        for (var i = 0; i < response.data.length; i++) {\n            console.log(response.data[i]);\n            console.log(response.data[i].user_info);\n            var user = document.createElement(\"h1\");\n            var id = document.createElement(\"h1\");\n            var hr = document.createElement(\"hr\");\n            user.innerHTML = \"User: \" + response.data[i].user_info.username;\n            id.innerHTML = \"ID: \" + response.data[i].user_info.id;\n            document.body.appendChild(user);\n            document.body.appendChild(id);\n            document.body.appendChild(hr);\n        }\n        // let user = document.getElementById(\"user\")!\n        // let id = document.getElementById(\"id\")!\n        // user.innerHTML += response.user_info.username\n        // id.innerHTML += response.user_info.id\n    })\n        .catch(function (response) {\n        console.log(response);\n    });\n}\nexports.send_ajax = send_ajax;\n\n\n//# sourceURL=webpack:///./src/users/index.ts?");

/***/ })

/******/ });