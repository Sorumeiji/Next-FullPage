"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ \"./components/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), activeBackground = ref[0], setActiveBackground = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_toConsumableArray(BackgroundColors)), sectionsColor = ref1[0], setsectionsColor = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                activeBackground: (activeBackground, sectionsColor)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\components\\\\layout.js\",\n                lineNumber: 10,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(children, {\n                setActiveBackground: setActiveBackground,\n                setsectionsColor: setsectionsColor\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kaleb\\\\Documents\\\\Github\\\\Next-FullPage\\\\components\\\\layout.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, _this));\n};\n_s(Layout, \"/zRPief+8YU14HjW7ulVk0X+6Bw=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsR0FBSyxDQUFDRyxNQUFNLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDekIsR0FBSyxDQUEyQ0YsR0FBVSxHQUFWQSwrQ0FBUSxJQUFqREcsZ0JBQWdCLEdBQXlCSCxHQUFVLEtBQWpDSSxtQkFBbUIsR0FBSUosR0FBVTtJQUMxRCxHQUFLLENBQXFDQSxJQUErQixHQUEvQkEsK0NBQVEsb0JBQUtLLGdCQUFnQixJQUFoRUMsYUFBYSxHQUFzQk4sSUFBK0IsS0FBbkRPLGdCQUFnQixHQUFJUCxJQUErQjtJQUV6RSxNQUFNLDZFQUNKUSxDQUFHOzt3RkFDRlYsOERBQUc7Z0JBQUNLLGdCQUFnQixHQUFHQSxnQkFBZ0IsRUFBRUcsYUFBYTs7Ozs7OzBCQUN0RFAseURBQWtCLENBQUNHLFFBQVEsRUFBRSxDQUFDO2dCQUM5QkUsbUJBQW1CLEVBQW5CQSxtQkFBbUI7Z0JBQ25CRyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtZQUNqQixDQUFDOzs7Ozs7O0FBR0osQ0FBQztHQWJLTixNQUFNO0tBQU5BLE1BQU07QUFlWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW2FjdGl2ZUJhY2tncm91bmQsIHNldEFjdGl2ZUJhY2tncm91bmRdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdCBbc2VjdGlvbnNDb2xvciwgc2V0c2VjdGlvbnNDb2xvcl0gPSB1c2VTdGF0ZShbLi4uQmFja2dyb3VuZENvbG9yc10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PE5hdiBhY3RpdmVCYWNrZ3JvdW5kPXsoYWN0aXZlQmFja2dyb3VuZCwgc2VjdGlvbnNDb2xvcil9IC8+XHJcblx0XHRcdHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuXHRcdFx0XHRzZXRBY3RpdmVCYWNrZ3JvdW5kLFxyXG5cdFx0XHRcdHNldHNlY3Rpb25zQ29sb3IsXHJcblx0XHRcdH0pfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIk5hdiIsIlJlYWN0IiwidXNlU3RhdGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImFjdGl2ZUJhY2tncm91bmQiLCJzZXRBY3RpdmVCYWNrZ3JvdW5kIiwiQmFja2dyb3VuZENvbG9ycyIsInNlY3Rpb25zQ29sb3IiLCJzZXRzZWN0aW9uc0NvbG9yIiwiZGl2IiwiY2xvbmVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

});