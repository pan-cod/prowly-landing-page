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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "multi /src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "g7Pl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/scripts/modules/showData.js
var showDataFromLocalStorage = function showDataFromLocalStorage(dataFromLocalStorage) {
  var list = document.querySelector('.c-result');

  if (list) {
    var storedData = dataFromLocalStorage;
    var listItem;

    for (var i = 0; i < storedData.length; i += 1) {
      listItem = "<li id=\"".concat(storedData[i].id, "\" class=\"c-result__item js-input-result\">\n      <img src=\"").concat(storedData[i].avatar, "\" alt=\"avatar\" class=\"c-result__img\">\n      <div class=\"c-result__details\">\n      <h5>").concat(storedData[i].name, "</h5>\n      <p>").concat(storedData[i].jobtitle, "</p>\n      </div>\n      </li>");
      list.insertAdjacentHTML('beforeend', listItem);
    }
  }
};

/* harmony default export */ var showData = (showDataFromLocalStorage);
// CONCATENATED MODULE: ./src/scripts/utils/utils.js
var utils = {
  /* eslint-disable  no-param-reassign */
  addClass: function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex === -1) {
        classes.push(className);
      }

      el.className = classes.join(' ');
    }
  },
  removeClass: function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)".concat(className.split(' ').join('|'), "(\\b|$)"), 'gi'), ' ');
    }
  },

  /* eslint-enable  no-param-reassign */
  debounce: function debounce(fn, time) {
    var timeout;
    return function () {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var functionCall = function functionCall() {
        return fn.apply(_this, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(functionCall, time);
    };
  }
};
/* harmony default export */ var utils_utils = (utils);
// CONCATENATED MODULE: ./src/scripts/modules/inputFilter.js


var inputFilter_inputFilter = function inputFilter() {
  var input = document.querySelector('.js-input');

  if (input) {
    input.onkeyup = utils_utils.debounce(function () {
      var filter = input.value.toLowerCase();
      var items = document.querySelectorAll('.js-input-result');

      for (var i = 0; i < items.length; i += 1) {
        if (items[i].innerText.toLowerCase().indexOf(filter) > -1) {
          utils_utils.removeClass(items[i], 'u-hidden');
        } else {
          utils_utils.addClass(items[i], 'u-hidden');
        }
      }
    }, 500);
  }
};

/* harmony default export */ var modules_inputFilter = (inputFilter_inputFilter);
// CONCATENATED MODULE: ./src/scripts/app.js
/*
  Project: Prowly Landing Page
  Author: pan-cod
 */


var data = [{
  id: 1,
  name: 'Joanna Wiśniewska',
  jobtitle: 'Journalist',
  avatar: 'http://i.pravatar.cc/300'
}, {
  id: 2,
  name: 'Paulina Wiśniowska',
  jobtitle: 'Reporter',
  avatar: 'http://i.pravatar.cc/302'
}, {
  id: 3,
  name: 'Rafał Wiśniowski',
  jobtitle: 'Journalist',
  avatar: 'http://i.pravatar.cc/303'
}, {
  id: 4,
  name: 'Katarzyna Wiśniewska',
  jobtitle: 'Journalist',
  avatar: 'http://i.pravatar.cc/304'
}, {
  id: 5,
  name: 'Jan Wiśniewski',
  jobtitle: 'Reporter',
  avatar: 'http://i.pravatar.cc/305'
}];
localStorage.setItem('data', JSON.stringify(data));
var dataFromLocalStorage = JSON.parse(localStorage.getItem('data'));
showData(dataFromLocalStorage);
modules_inputFilter();

/***/ }),

/***/ "multi /src/scripts/app.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("g7Pl");


/***/ })

/******/ });
