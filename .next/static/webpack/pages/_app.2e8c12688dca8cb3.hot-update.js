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

/***/ "./components/solid.js":
/*!*****************************!*\
  !*** ./components/solid.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar Spline = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_splinetool_react-spline_dist_react-spline_es_js\").then(__webpack_require__.bind(__webpack_require__, /*! @splinetool/react-spline */ \"./node_modules/@splinetool/react-spline/dist/react-spline.es.js\"));\n});\n_c = Spline;\nvar Model = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n            fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                children: \"Loading...\"\n            }, void 0, false, void 0, void 0),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spline, {\n                scene: \"https://prod.spline.design/Nr1IG6OjFOHiAz7G/scene.splinecode\"\n            }, void 0, false, {\n                fileName: \"/home/qolors/repos/portfolio/components/solid.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/qolors/repos/portfolio/components/solid.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/qolors/repos/portfolio/components/solid.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Model;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\nvar _c, _c1;\n$RefreshReg$(_c, \"Spline\");\n$RefreshReg$(_c1, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbGlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUFrRDtBQUNYO0FBRXZDLElBQU1JLE1BQU0saUJBQUdGLGlEQUFVLENBQUM7V0FBTSw0UEFBa0M7Q0FBQSxDQUFDO0FBQTdERSxLQUFBQSxNQUFNO0FBR1osSUFBTUUsS0FBSyxHQUFHLFdBQU07SUFDbEIscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0EsNEVBQUNKLDJDQUFRO1lBQUNLLFFBQVEsZ0JBQUUsOERBQUNSLGlEQUFHOzBCQUFDLFlBQVU7NkNBQU07c0JBQ3JDLDRFQUFDSSxNQUFNO2dCQUFDSyxLQUFLLEVBQUMsOERBQThEOzs7OztxQkFBRzs7Ozs7aUJBQ3hFOzs7OzthQUNULENBQ047Q0FDSDtBQVJLSCxNQUFBQSxLQUFLO0FBV1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2xpZC5qcz81NjRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQm94LCBDb250YWluZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTcGxpbmUgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydCgnQHNwbGluZXRvb2wvcmVhY3Qtc3BsaW5lJykpO1xuXG5cbmNvbnN0IE1vZGVsID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PEJveD5Mb2FkaW5nLi4uPC9Cb3g+fT5cbiAgICAgICAgICAgIDxTcGxpbmUgc2NlbmU9XCJodHRwczovL3Byb2Quc3BsaW5lLmRlc2lnbi9OcjFJRzZPakZPSGlBejdHL3NjZW5lLnNwbGluZWNvZGVcIiAvPlxuICAgICAgICA8L1N1c3BlbnNlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsIl0sIm5hbWVzIjpbIkJveCIsIkNvbnRhaW5lciIsIlJlYWN0IiwiU3VzcGVuc2UiLCJTcGxpbmUiLCJsYXp5IiwiTW9kZWwiLCJkaXYiLCJmYWxsYmFjayIsInNjZW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/solid.js\n"));

/***/ })

});