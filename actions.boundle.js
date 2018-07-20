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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })),
/* 1 */
/***/ ((function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const ADD_COMMENT = "ADD_COMMENT";
/* harmony export (immutable) */ __webpack_exports__["ADD_COMMENT"] = ADD_COMMENT;

const REMOVE_COMMENT = "REMOVE_COMMENT";
/* harmony export (immutable) */ __webpack_exports__["REMOVE_COMMENT"] = REMOVE_COMMENT;

const EDIT_COMMENT = "EDIT_COMMENT";
/* harmony export (immutable) */ __webpack_exports__["EDIT_COMMENT"] = EDIT_COMMENT;

const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
/* harmony export (immutable) */ __webpack_exports__["THUMB_UP_COMMENT"] = THUMB_UP_COMMENT;

const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";
/* harmony export (immutable) */ __webpack_exports__["THUMB_DOWN_COMMENT"] = THUMB_DOWN_COMMENT;


//action creator

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
};

const boundAddComment = text => dispatch(addComment(text));

boundAddComment("New comment!");
boundAddComment("Another new comment!");

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    };
}

const boundRemoveComment = id => dispatchEvent(removeComment(id));

function thumbsUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    };
}

function thumbsDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    };
}

/***/ }))
/******/ ]);