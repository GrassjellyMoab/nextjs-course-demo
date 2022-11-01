"use strict";
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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n//api/new-meetup\n// POST /api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description} = data;\n        console.log(data);\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Planking:qwertyuiop@cluster0.0stzx4p.mongodb.net/meetupList?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        // insert one new document into the collection (the data object)\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        // close the database connection\n        client.close();\n        // Handle the response and show a message in the client side console (not working though?)\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFDdEMsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUV2QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdCLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2QixNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUNyQixzREFBc0Q7UUFDdERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQztRQUVsQixNQUFNSSxNQUFNLEdBQUcsTUFBTVQsd0RBQW1CLENBQUMsdUdBQXVHLENBQUM7UUFDakosTUFBTVcsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUV0QixNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBRWxELGdFQUFnRTtRQUNoRSxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1YsSUFBSSxDQUFDO1FBRXRERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLENBQUM7UUFFcEIsZ0NBQWdDO1FBQ2hDTCxNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO1FBRWYsMEZBQTBGO1FBQzFGYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxrQkFBa0I7U0FBRSxDQUFDLENBQUM7SUFFMUQsQ0FBQztBQUNMLENBQUM7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vYXBpL25ldy1tZWV0dXBcbi8vIFBPU1QgL2FwaS9uZXctbWVldHVwXG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICAvLyBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb259ID0gZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9QbGFua2luZzpxd2VydHl1aW9wQGNsdXN0ZXIwLjBzdHp4NHAubW9uZ29kYi5uZXQvbWVldHVwTGlzdD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIik7XG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGluc2VydCBvbmUgbmV3IGRvY3VtZW50IGludG8gdGhlIGNvbGxlY3Rpb24gKHRoZSBkYXRhIG9iamVjdClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgLy8gY2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICAgICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBhbmQgc2hvdyBhIG1lc3NhZ2UgaW4gdGhlIGNsaWVudCBzaWRlIGNvbnNvbGUgKG5vdCB3b3JraW5nIHRob3VnaD8pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJNZWV0dXAgaW5zZXJ0ZWQhXCIgfSk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();