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
exports.id = "pages/api/blog";
exports.ids = ["pages/api/blog"];
exports.modules = {

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/blog/index.js":
/*!*********************************!*\
  !*** ./pages/api/blog/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ \"(api)/./utils/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_3__]);\nuuid__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction handler(req, res) {\n    const postsfolder = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), `/_posts/${(0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)()}.md`);\n    if (true) {\n        if (req.method === \"POST\") {\n            const data = gray_matter__WEBPACK_IMPORTED_MODULE_1___default().stringify(\"# New Blog\", {\n                date: new Date().toISOString(),\n                title: \"New Blog\",\n                tagline: \"Amazing New Blog\",\n                preview: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\",\n                image: (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getRandomImage)()\n            });\n            fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(postsfolder, data, (err)=>console.error(err)\n            );\n            res.status(200).json({\n                status: \"CREATED\"\n            });\n        }\n        if (req.method === \"DELETE\") {\n            const deleteFile = (0,path__WEBPACK_IMPORTED_MODULE_2__.join)(process.cwd(), `/_posts/${req.body.slug}.md`);\n            fs__WEBPACK_IMPORTED_MODULE_0___default().unlinkSync(deleteFile);\n            res.status(200).json({\n                status: \"DONE\"\n            });\n        }\n    } else {}\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDYTtBQUNMO0FBQ1E7QUFDWTtBQUVqQyxTQUFTTSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU1DLFdBQVcsR0FBR1AsMENBQUksQ0FBQ1EsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRVAsd0NBQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLElBQUlNLElBQXNDLEVBQUU7UUFDMUMsSUFBSUgsR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFFO1lBQ3pCLE1BQU1DLElBQUksR0FBR1osNERBQWdCLENBQUMsWUFBWSxFQUFFO2dCQUMxQ2MsSUFBSSxFQUFFLElBQUlDLElBQUksRUFBRSxDQUFDQyxXQUFXLEVBQUU7Z0JBQzlCQyxLQUFLLEVBQUUsVUFBVTtnQkFDakJDLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCQyxPQUFPLEVBQ0wsdVBBQXVQO2dCQUN6UEMsS0FBSyxFQUFFaEIsc0RBQWMsRUFBRTthQUN4QixDQUFDO1lBQ0ZMLHVEQUFnQixDQUFDUyxXQUFXLEVBQUVJLElBQUksRUFBRSxDQUFDVSxHQUFHLEdBQUtDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixHQUFHLENBQUM7WUFBQSxDQUFDLENBQUM7WUFDakVmLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFRCxNQUFNLEVBQUUsU0FBUzthQUFFLENBQUMsQ0FBQztTQUM3QztRQUNELElBQUluQixHQUFHLENBQUNLLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDM0IsTUFBTWdCLFVBQVUsR0FBRzFCLDBDQUFJLENBQUNRLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUVKLEdBQUcsQ0FBQ3NCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JFOUIsb0RBQWEsQ0FBQzRCLFVBQVUsQ0FBQyxDQUFDO1lBQzFCcEIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVELE1BQU0sRUFBRSxNQUFNO2FBQUUsQ0FBQyxDQUFDO1NBQzFDO0tBQ0YsTUFBTSxFQUVOO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1wb3J0Zm9saW8tdGVtcGxhdGUvLi9wYWdlcy9hcGkvYmxvZy9pbmRleC5qcz9jMTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcImdyYXktbWF0dGVyXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21JbWFnZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHBvc3RzZm9sZGVyID0gam9pbihwcm9jZXNzLmN3ZCgpLCBgL19wb3N0cy8ke3V1aWR2NCgpfS5tZGApO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgY29uc3QgZGF0YSA9IG1hdHRlci5zdHJpbmdpZnkoXCIjIE5ldyBCbG9nXCIsIHtcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB0aXRsZTogXCJOZXcgQmxvZ1wiLFxuICAgICAgICB0YWdsaW5lOiBcIkFtYXppbmcgTmV3IEJsb2dcIixcbiAgICAgICAgcHJldmlldzpcbiAgICAgICAgICBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suXCIsXG4gICAgICAgIGltYWdlOiBnZXRSYW5kb21JbWFnZSgpLFxuICAgICAgfSk7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHBvc3RzZm9sZGVyLCBkYXRhLCAoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdGF0dXM6IFwiQ1JFQVRFRFwiIH0pO1xuICAgIH1cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xuICAgICAgY29uc3QgZGVsZXRlRmlsZSA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgYC9fcG9zdHMvJHtyZXEuYm9keS5zbHVnfS5tZGApO1xuICAgICAgZnMudW5saW5rU3luYyhkZWxldGVGaWxlKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3RhdHVzOiBcIkRPTkVcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBcIlRoaXMgcm91dGUgd29ya3MgaW4gZGV2ZWxvcG1lbnQgbW9kZSBvbmx5XCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJmcyIsIm1hdHRlciIsImpvaW4iLCJ2NCIsInV1aWR2NCIsImdldFJhbmRvbUltYWdlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBvc3RzZm9sZGVyIiwicHJvY2VzcyIsImN3ZCIsIm1ldGhvZCIsImRhdGEiLCJzdHJpbmdpZnkiLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidGl0bGUiLCJ0YWdsaW5lIiwicHJldmlldyIsImltYWdlIiwid3JpdGVGaWxlU3luYyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJkZWxldGVGaWxlIiwiYm9keSIsInNsdWciLCJ1bmxpbmtTeW5jIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blog/index.js\n");

/***/ }),

/***/ "(api)/./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ISOToDate\": () => (/* binding */ ISOToDate),\n/* harmony export */   \"getRandomImage\": () => (/* binding */ getRandomImage),\n/* harmony export */   \"useIsomorphicLayoutEffect\": () => (/* binding */ useIsomorphicLayoutEffect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\nfunction ISOToDate(date) {\n    if (date) {\n        let convertDate = new Date(date);\n        return convertDate.getFullYear() + \"-\" + (convertDate.getMonth() + 1) + \"-\" + convertDate.getDate();\n    }\n}\nfunction getRandomImage() {\n    const randomImageUrl = [\n        \"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80\",\n        \"https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80\",\n        \"https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80\",\n        \"https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80\", \n    ];\n    return randomImageUrl[Math.floor(Math.random() * randomImageUrl.length)];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUU1QyxNQUFNRSx5QkFBeUIsR0FDcEMsTUFBNkIsR0FBR0YsQ0FBZSxHQUFHQyw0Q0FBUyxDQUFDO0FBRXZELFNBQVNFLFNBQVMsQ0FBQ0MsSUFBSSxFQUFFO0lBQzlCLElBQUlBLElBQUksRUFBRTtRQUNSLElBQUlDLFdBQVcsR0FBRyxJQUFJQyxJQUFJLENBQUNGLElBQUksQ0FBQztRQUNoQyxPQUNFQyxXQUFXLENBQUNFLFdBQVcsRUFBRSxHQUN6QixHQUFHLEdBQ0gsQ0FBQ0YsV0FBVyxDQUFDRyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FDNUIsR0FBRyxHQUNISCxXQUFXLENBQUNJLE9BQU8sRUFBRSxDQUNyQjtLQUNIO0NBQ0Y7QUFFTSxTQUFTQyxjQUFjLEdBQUc7SUFDL0IsTUFBTUMsY0FBYyxHQUFHO1FBQ3JCLGdLQUFnSztRQUNoSyxnS0FBZ0s7UUFDaEssZ0tBQWdLO1FBQ2hLLCtKQUErSjtLQUNoSztJQUNELE9BQU9BLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdILGNBQWMsQ0FBQ0ksTUFBTSxDQUFDLENBQUMsQ0FBQztDQUMxRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXBvcnRmb2xpby10ZW1wbGF0ZS8uL3V0aWxzL2luZGV4LmpzP2QyZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPVxuICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG5leHBvcnQgZnVuY3Rpb24gSVNPVG9EYXRlKGRhdGUpIHtcbiAgaWYgKGRhdGUpIHtcbiAgICBsZXQgY29udmVydERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgY29udmVydERhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgICBcIi1cIiArXG4gICAgICAoY29udmVydERhdGUuZ2V0TW9udGgoKSArIDEpICtcbiAgICAgIFwiLVwiICtcbiAgICAgIGNvbnZlcnREYXRlLmdldERhdGUoKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUltYWdlKCkge1xuICBjb25zdCByYW5kb21JbWFnZVVybCA9IFtcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjIwNjQxNzg4NDIxLTdhMWMzNDJlYTQyZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA3NCZxPTgwXCIsXG4gICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzODc0MjM4NTE2Ny05NmZjNjBlMTJmNTk/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE2MzImcT04MFwiLFxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTgzNjc1ODg0MTEtZDlhOTBmZWZhODgxP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDc0JnE9ODBcIixcbiAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjU3Mjk1NzkxOTEzLTUwNzRjOTEyMzk4ZT9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9OTk2JnE9ODBcIixcbiAgXTtcbiAgcmV0dXJuIHJhbmRvbUltYWdlVXJsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbUltYWdlVXJsLmxlbmd0aCldO1xufVxuIl0sIm5hbWVzIjpbInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJJU09Ub0RhdGUiLCJkYXRlIiwiY29udmVydERhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRSYW5kb21JbWFnZSIsInJhbmRvbUltYWdlVXJsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blog/index.js"));
module.exports = __webpack_exports__;

})();