"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\n// const DUMMY_MEETUPS = [\n//   {\n//     id: \"m1\",\n//     title: \"A First Meetup\",\n//     image:\n//       \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n//     address: \"Some Address 5, 12345 Some City\",\n//     description: \"This is a first meetup!\",\n//   },\n//   {\n//     id: \"m2\",\n//     title: \"A Second Meetup\",\n//     image:\n//       \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n//     address: \"Some Address 5, 12345 Some City\",\n//     description: \"This is a second meetup!\",\n//   },\n// ];\nfunction HomePage(props) {\n    // const [loadedMeetups, setLoadedMeetups] = useState([]);\n    // useEffect(() => {\n    //   // send a http request and fetch data\n    //   setLoadedMeetups(DUMMY_MEETUPS);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"/Users/yanyixue/Desktop/HTML, CSS, JS/Learning react/Next.js/Bigger-Next.js-Project/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n// // function does not run during the build process but instead always on the server after deployment\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   // fetch data from API\n//   return {\n//     props: { meetups: DUMMY_MEETUPS },\n//   };\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUM0QztBQUNjO0FBRTFELDBCQUEwQjtBQUMxQixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLCtCQUErQjtBQUMvQixhQUFhO0FBQ2Isa0lBQWtJO0FBQ2xJLGtEQUFrRDtBQUNsRCw4Q0FBOEM7QUFDOUMsT0FBTztBQUNQLE1BQU07QUFDTixnQkFBZ0I7QUFDaEIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixrSUFBa0k7QUFDbEksa0RBQWtEO0FBQ2xELCtDQUErQztBQUMvQyxPQUFPO0FBQ1AsS0FBSztBQUVMLFNBQVNHLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3ZCLDBEQUEwRDtJQUUxRCxvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQyxVQUFVO0lBRVYscUJBQU8sOERBQUNGLHNFQUFVO1FBQUNHLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPOzs7OztZQUFlLENBQUM7QUFDM0QsQ0FBQztBQVRRRixLQUFBQSxRQUFROztBQWlEakIsc0dBQXNHO0FBQ3RHLHNEQUFzRDtBQUN0RCw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBRTdCLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IseUNBQXlDO0FBQ3pDLE9BQU87QUFDUCxJQUFJO0FBRUosK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xuXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6IFwibTFcIixcbi8vICAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxuLy8gICAgIGltYWdlOlxuLy8gICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4vLyAgICAgYWRkcmVzczogXCJTb21lIEFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXG4vLyAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCFcIixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiBcIm0yXCIsXG4vLyAgICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXG4vLyAgICAgaW1hZ2U6XG4vLyAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcbi8vICAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcbi8vICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCFcIixcbi8vICAgfSxcbi8vIF07XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIC8vIHNlbmQgYSBodHRwIHJlcXVlc3QgYW5kIGZldGNoIGRhdGFcbiAgLy8gICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9PjwvTWVldHVwTGlzdD47XG59XG5cbi8vIGNvZGUgb25seSBleGVjdXRlcyBkdXJpbmcgYnVpbGQgcHJvY2Vzcywgbm90IG9uIHNlcnZlciBzaWRlIGFuZCBub3Qgb24gY2xpZW50IHNpZGVcbi8vIHdlIGRvIG5vdCBmZXRjaCBkYXRhIGR1cmluZyB0aGUgMm5kIGNvbXBvbmVudCByZW5kZXIgY3ljbGUgb24gdGhlIGNsaWVudCwgYnV0IGluaXRpYWxseSBiZWZvcmUgdGhlIHBhZ2UgaXMgcHJlLXJlbmRlcmVkIGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBmZXRjaCBkYXRhIGZyb20gYW4gQVBJIFxuICAvLyBjb2RlIGlzIHJ1biBkdXJpbmcgYnVpbGQgdGltZS8gb24gc2VydmVyIHNpZGUgc28gaXQgd2lsbCBub3QgYmUgb24gY2xpZW50IGhlbmNlIHdlIGRvbnQgbmVlZCB0byByZWRpcmVjdCBkYXRhIGZyb20gYW4gYXBpIGFuZCBjYW4gZGlyZWN0bHlcbiAgLy8gcmV0cmlldmUgZGF0YSBpbiBnZXRTdGF0aWNQcm9wcygpXG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vUGxhbmtpbmc6cXdlcnR5dWlvcEBjbHVzdGVyMC4wc3R6eDRwLm1vbmdvZGIubmV0L21lZXR1cExpc3Q/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIilcblxuICAvLyAuZmluZCgpIGlzIGFuIGFzeW5jIHRhc2sgcmV0dXJuaW5nIGEgcHJvbWlzZSB0aGF0IHdpbGwgZmluZCBhbGwgdGhlIGRvY3VtZW50cyBpbiB0aGUgY29sbGVjdGlvblxuICAvLyAudG9BcnJheSgpIGVuc3VyZXMgd2UgZ2V0IGJhY2sgYW4gYXJyYXkgb2YgZG9jdW1lbnRzXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuXG4gIGNvbnNvbGUubG9nKG1lZXR1cHMpXG5cbiAgY2xpZW50LmNsb3NlKCk7XG4gIFxuICAvLyBhbGwgdGhpcyBjb2RlIHdpbGwgZXhlY3V0ZSB3aGVuZXZlciB0aGUgcGFnZSBpcyBwcmUtZ2VuZXJhdGVkLCBub3QgZm9yIGV2ZXJ5IGluY29taW5nIHJlcXVlc3QgYmVjYXVzZSBpdHMgZ2V0U3RhdGljUHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgLy8gbWFwIG91dCBvYmplY3Qgc2luY2UgZGVmYXVsdCBfaWQgZ2l2ZW4gYnkgbW9uZ29EQiBpcyBhbiBvYmplY3QgdHlwZSByZXN1bHRpbmcgaW4gYW4gZXJyb3JcbiAgICAgIC8vIGBvYmplY3RgIChcIltvYmplY3QgT2JqZWN0XVwiKSBjYW5ub3QgYmUgc2VyaWFsaXplZCBhcyBKU09OLlxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICAvLyBjb252ZXJ0cyBvYmplY3QgaWQgdG8gc3RyaW5nIGZvcm1hdFxuICAgICAgICBpZDptZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICB9KSksXG4gICAgfSxcbiAgICAvLyBudW1iZXIgb2Ygc2Vjb25kcyBuZXh0SnMgd2lsbCB3YWl0IHVudGlsIGl0IHJlZ2VuZXJhdGVzIHRoZSBwYWdlIGZvciBhbiBpbmNvbWluZyByZXF1ZXN0XG4gICAgcmV2YWxpZGF0ZTogMTAsXG4gIH07XG59XG5cbi8vIC8vIGZ1bmN0aW9uIGRvZXMgbm90IHJ1biBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MgYnV0IGluc3RlYWQgYWx3YXlzIG9uIHRoZSBzZXJ2ZXIgYWZ0ZXIgZGVwbG95bWVudFxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gQVBJXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgbWVldHVwczogRFVNTVlfTUVFVFVQUyB9LFxuLy8gICB9O1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1lZXR1cExpc3QiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});