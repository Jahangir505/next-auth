/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/auth */ \"./src/store/auth.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_auth__WEBPACK_IMPORTED_MODULE_3__]);\n_store_auth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// components/Navbar.js\n\n\n\n\nfunction Navbar() {\n    const { user, role, logout } = (0,_store_auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLogout = ()=>{\n        logout();\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-blue-500 p-4 text-white flex justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold text-xl\",\n                        children: \"MyApp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/dashboard\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        role === \"admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/admin\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Admin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogout,\n                            className: \"hover:underline\",\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/register\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\components\\\\Navbar.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7O0FBQ007QUFDVztBQUNDO0FBRTFCLFNBQVNHO0lBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHSix1REFBWUE7SUFDM0MsTUFBTUssU0FBU04sc0RBQVNBO0lBRXhCLE1BQU1PLGVBQWU7UUFDbkJGO1FBQ0FDLE9BQU9FLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFDQyw0RUFBQ1osa0RBQUlBO29CQUFDYSxNQUFLOzhCQUNULDRFQUFDQzt3QkFBRUgsV0FBVTtrQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWlAscUJBQ0M7O3NDQUNFLDhEQUFDSixrREFBSUE7NEJBQUNhLE1BQUs7c0NBQ1QsNEVBQUNDOzBDQUFFOzs7Ozs7Ozs7Ozt3QkFFSlQsU0FBUyx5QkFDUiw4REFBQ0wsa0RBQUlBOzRCQUFDYSxNQUFLO3NDQUNULDRFQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7c0NBR1AsOERBQUNDOzRCQUFPQyxTQUFTUjs0QkFBY0csV0FBVTtzQ0FBa0I7Ozs7Ozs7aURBSzdEOztzQ0FDRSw4REFBQ1gsa0RBQUlBOzRCQUFDYSxNQUFLO3NDQUNULDRFQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7c0NBRUwsOERBQUNkLGtEQUFJQTs0QkFBQ2EsTUFBSztzQ0FDVCw0RUFBQ0M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250LWVuZC8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcz8zZDBlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvTmF2YmFyLmpzXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VBdXRoU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2F1dGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCB7IHVzZXIsIHJvbGUsIGxvZ291dCB9ID0gdXNlQXV0aFN0b3JlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC00IHRleHQtd2hpdGUgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGxcIj5NeUFwcDwvcD5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgIHt1c2VyID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICA8cD5EYXNoYm9hcmQ8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAge3JvbGUgPT09IFwiYWRtaW5cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgPHA+QWRtaW48L3A+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICA8cD5Mb2dpbjwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgPHA+UmVnaXN0ZXI8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZUF1dGhTdG9yZSIsIk5hdmJhciIsInVzZXIiLCJyb2xlIiwibG9nb3V0Iiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\File\\\\Jahangir\\\\auth-blade\\\\front-end\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1g7QUFFZixTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFOzswQkFDRSw4REFBQ0gsMERBQU1BOzs7OzswQkFDUCw4REFBQ0U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/store/auth.js":
/*!***************************!*\
  !*** ./src/store/auth.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/middleware */ \"zustand/middleware\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__]);\n([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst useAuthStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set)=>({\n        user: null,\n        token: null,\n        role: null,\n        login: (userData)=>set(userData),\n        logout: ()=>set({\n                user: null,\n                token: null,\n                role: null\n            })\n    }), {\n    name: \"auth-storage\"\n}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthStore);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFDZ0I7QUFFN0MsTUFBTUUsZUFBZUYsbURBQU1BLENBQ3pCQywyREFBT0EsQ0FDTCxDQUFDRSxNQUFTO1FBQ1JDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU8sQ0FBQ0MsV0FBYUwsSUFBSUs7UUFDekJDLFFBQVEsSUFBTU4sSUFBSTtnQkFBRUMsTUFBTTtnQkFBTUMsT0FBTztnQkFBTUMsTUFBTTtZQUFLO0lBQzFELElBQ0E7SUFDRUksTUFBTTtBQUNSO0FBSUosaUVBQWVSLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvc3RvcmUvYXV0aC5qcz82MWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmRcIjtcclxuaW1wb3J0IHsgcGVyc2lzdCB9IGZyb20gXCJ6dXN0YW5kL21pZGRsZXdhcmVcIjtcclxuXHJcbmNvbnN0IHVzZUF1dGhTdG9yZSA9IGNyZWF0ZShcclxuICBwZXJzaXN0KFxyXG4gICAgKHNldCkgPT4gKHtcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgIHJvbGU6IG51bGwsXHJcbiAgICAgIGxvZ2luOiAodXNlckRhdGEpID0+IHNldCh1c2VyRGF0YSksXHJcbiAgICAgIGxvZ291dDogKCkgPT4gc2V0KHsgdXNlcjogbnVsbCwgdG9rZW46IG51bGwsIHJvbGU6IG51bGwgfSksXHJcbiAgICB9KSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJhdXRoLXN0b3JhZ2VcIiwgLy8gdW5pcXVlIG5hbWUgZm9yIHN0b3JhZ2VcclxuICAgIH1cclxuICApXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VBdXRoU3RvcmU7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwZXJzaXN0IiwidXNlQXV0aFN0b3JlIiwic2V0IiwidXNlciIsInRva2VuIiwicm9sZSIsImxvZ2luIiwidXNlckRhdGEiLCJsb2dvdXQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/auth.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ "zustand/middleware":
/*!*************************************!*\
  !*** external "zustand/middleware" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand/middleware");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();