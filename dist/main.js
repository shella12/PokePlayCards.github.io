"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcapstone2"] = self["webpackChunkcapstone2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: cursive;\\n  background-color: rgb(255, 255, 255);\\n}\\n\\nnav {\\n  width: 70%;\\n  margin: 2rem;\\n  padding-left: 2rem;\\n}\\n\\nnav ul {\\n  display: flex;\\n  justify-content: space-around;\\n  list-style: none;\\n  align-items: baseline;\\n  font-size: 1.2rem;\\n}\\n\\nnav ul li:nth-child(1) {\\n  border: 1px solid;\\n  border-radius: 50%;\\n  padding: 1rem 1.4rem;\\n  text-align: center;\\n}\\n\\nnav ul li:nth-child(2) {\\n  font-weight: bold;\\n  text-decoration: underline;\\n}\\n\\nnav ul li a {\\n  text-decoration: none;\\n  color: #000;\\n}\\n\\n/* comments */\\n.comments {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.comment-h1 {\\n  text-align: center;\\n}\\n\\n.comments form {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.comments .name {\\n  width: 10rem;\\n  margin: 10px;\\n  padding: 3px;\\n}\\n\\n.comments .insights {\\n  width: 15rem;\\n  height: 5rem;\\n  margin: 10px;\\n}\\n\\n.comments ::placeholder {\\n  color: #000;\\n  font-weight: bold;\\n}\\n\\n.comments button {\\n  width: 10rem;\\n  margin: 10px;\\n  font-size: 22px;\\n  box-shadow: 3px 3px 3px #000;\\n}\\n\\n.comments button:hover {\\n  cursor: pointer;\\n}\\n\\n/* main */\\n.cards {\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n  gap: 1.5rem;\\n  margin: 3rem;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n  width: 100%;\\n}\\n\\n.card .pokemon-img {\\n  border: 1px solid black;\\n  border-radius: 2px;\\n}\\n\\n.card .card-title {\\n  display: flex;\\n  padding: 0 1rem;\\n}\\n\\n.card .card-title img {\\n  margin-left: auto;\\n  gap: 1rem;\\n}\\n\\n.card .like-count {\\n  align-self: flex-end;\\n  margin-bottom: 0.7rem;\\n}\\n\\n.card .buttons button {\\n  font-size: 1rem;\\n  padding: 0.3rem 0.9rem;\\n  margin: 5px;\\n  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\n  -webkit-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\n}\\n\\n.card .buttons button:hover {\\n  color: #fff;\\n  background-color: #000;\\n}\\n\\n.card .buttons button:active {\\n  transform: scale(0.95);\\n}\\n\\n.popup {\\n  position: fixed;\\n  overflow: auto;\\n  display: none;\\n  flex-direction: column;\\n  align-items: center;\\n  top: 0;\\n  left: 0;\\n  transform: translate(5%, 15px);\\n  width: 90%;\\n  height: 95vh;\\n  z-index: 20;\\n  padding: 3rem;\\n  border: 1px solid black;\\n  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\n  -webkit-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\n  -moz-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\\n}\\n\\n.popup img#pokemonImage {\\n  width: 200px;\\n}\\n\\n.popup #cancelBtn {\\n  align-self: flex-end;\\n}\\n\\n.popup .power {\\n  display: flex;\\n  gap: 2rem;\\n  justify-content: space-between;\\n}\\n\\n.popup .dimension {\\n  display: flex;\\n  gap: 2rem;\\n  justify-content: space-between;\\n}\\n\\ntable tr {\\n  display: flex;\\n  flex-direction: column;\\n  width: 250px;\\n  max-height: 200px;\\n  overflow-y: auto;\\n}\\n\\n/* footer */\\n.footer {\\n  width: 100%;\\n  border-top: 2px solid;\\n  border-bottom: 2px solid;\\n  padding: 1rem 0 1rem 0;\\n}\\n\\n.footer p {\\n  padding-left: 2rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/addComment.js */ \"./src/module/addComment.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemons.js */ \"./src/pokemons.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/likes.js\");\n\n\n\n\n\nconst itemNumbers = document.getElementById('udateItemNumbers');\n(0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.likeGet)('0YSAdjw9FalqCv0vGDYS')\n  .then((data) => {\n    data.forEach((element) => {\n      const targetItem = element[1].item_id.split('likeId').slice(1);\n      document.querySelector(`#like-count${targetItem[0]}`).innerHTML = `${element[1].likes} Likes`;\n    });\n  });\ndocument.body.addEventListener('click', (e) => {\n  if (e.target && e.target.className === 'likeBtn') {\n    (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('0YSAdjw9FalqCv0vGDYS', e.target);\n    (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.likeGet)('0YSAdjw9FalqCv0vGDYS');\n    const targetId = (e.target.id).split('likeId').slice(1);\n    const targetHeart = document.querySelector(`#like-count${targetId}`).innerHTML.split(' ');\n    document.querySelector(`#like-count${targetId}`).innerHTML = `${(Number(targetHeart[0])) + 1} Likes`;\n  }\n});\n(0,_pokemons_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then((response) => {\n  itemNumbers.innerHTML = `Pokemons(${response})`;\n});\n\n// StudentB work\ndocument.body.addEventListener('submit', (e) => {\n  if (e.target && e.target.className === 'form') {\n    e.preventDefault();\n    const newid = document.querySelector('.comments').getAttribute('data-id');\n    const names = document.querySelector('.name').value;\n    const insights = document.querySelector('.insights').value;\n    const commmentObj = {\n      item_id: newid,\n      username: names,\n      comment: insights,\n    };\n    (0,_module_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(commmentObj, newid);\n  }\n});\n\n\n//# sourceURL=webpack://capstone2/./src/index.js?");

/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"likeGet\": () => (/* binding */ likeGet)\n/* harmony export */ });\n/* harmony import */ var _like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.png */ \"./src/like.png\");\n\n\nconst likeGet = async (id) => {\n  const data = fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`)\n    .then((response) => response.json())\n    .then((obj) => Object.entries(obj))\n    .catch((err) => {\n      throw ('Failed to Get likes ', err);\n    });\n  return data;\n};\n\nconst likesPost = async (id, target) => {\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`, {\n\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: target.id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n\n  })\n    .catch((err) => {\n      throw ('Failed to Post likes ', err);\n    });\n  target.src = _like_png__WEBPACK_IMPORTED_MODULE_0__;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesPost);\n\n//# sourceURL=webpack://capstone2/./src/likes.js?");

/***/ }),

/***/ "./src/module/addComment.js":
/*!**********************************!*\
  !*** ./src/module/addComment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/module/displayComments.js\");\n\n\nconst addComment1 = async (commmentObj, newid) => {\n  const getApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments/';\n  await fetch(getApiComment, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(commmentObj),\n  });\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newid);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment1);\n\n//# sourceURL=webpack://capstone2/./src/module/addComment.js?");

/***/ }),

/***/ "./src/module/displayComments.js":
/*!***************************************!*\
  !*** ./src/module/displayComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayData = async (id) => {\n  const itemId = id;\n  const pokemonApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/comments?item_id=${itemId}`;\n  const response = await fetch(pokemonApi);\n  if (response.ok) {\n    const allComments = await response.json();\n    document.querySelector('.comments-count').innerHTML = allComments.length;\n    let stringText = '';\n    allComments.forEach((el) => {\n      stringText += `<td>${el.creation_date} ${el.username}: ${el.comment}</td>`;\n    });\n    document.querySelector('.comment-body').innerHTML = stringText;\n    document.querySelector('.name').value = '';\n    document.querySelector('.insights').value = '';\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayData);\n\n//# sourceURL=webpack://capstone2/./src/module/displayComments.js?");

/***/ }),

/***/ "./src/pokemonDetail.js":
/*!******************************!*\
  !*** ./src/pokemonDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel.png */ \"./src/cancel.png\");\n/* harmony import */ var _module_displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/displayComments.js */ \"./src/module/displayComments.js\");\n\n\n\nconst cards = document.body.querySelector('.cards');\nconst popup = document.createElement('div');\npopup.className = 'popup';\n\ncards.addEventListener('click', (e) => {\n  if (e.target && e.target.id === 'cancelBtn') {\n    popup.style.display = 'none';\n    document.body.style.overflowY = 'scroll';\n  }\n});\nconst detail = (url, dataid) => {\n  fetch(url).then((response) => response.json())\n    .then((data) => {\n      let pokeName = data.name;\n      pokeName = pokeName[0].toUpperCase() + pokeName.slice(1);\n      let typeOfPoke = ''; let i = 1;\n      const n = data.types.length;\n      data.types.forEach((element) => {\n        if (n === i) typeOfPoke += element.type.name;\n        else typeOfPoke += `${element.type.name}, `;\n        i += 1;\n      });\n\n      const popupCode = ` \n    <img id=\"cancelBtn\" src=${_cancel_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"cancel popup image\">\n    <img id=\"pokemonImage\" src=\"${data.sprites.other['official-artwork'].front_default}\" alt=\"Pokemon image\">\n    <h1>${pokeName}</h1>\n    <div class=\"power\">\n        <p>HP: ${data.base_experience}</p>\n        <p>Types: ${typeOfPoke}</p>\n    </div>\n    <div class=\"dimension\">\n        <p>Weight: ${data.weight}</p>\n        <p>Height: ${data.height}</p>\n    </div>\n    <div class=\"comments\" data-id=${dataid}>\n    <h1 class=\"comment-h1\">Comments (<span class=\"comments-count\"></span>)</h1>\n    <table>\n      <tbody class=\"comment-body\">\n      </tbody>\n    </table>\n    <div class=\"popup\"></div>\n    <form class=\"form\">\n      <label for=\"name\"></label>\n      <input type=\"text\" class=\"name\" placeholder=\"your name\">\n      <label for=\"insights\"></label>\n      <input type=\"text\" class=\"insights\" placeholder=\"your insights\">\n      <button type=\"submit\" class=\"formButton\">Comment</button>\n    </form>\n  </div>\n`;\n      (0,_module_displayComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataid);\n      popup.innerHTML = popupCode;\n      popup.style.display = 'flex';\n      cards.appendChild(popup);\n      document.body.style.overflowY = 'hidden';\n    })\n    .catch((err) => {\n      throw (\"Couldn't fetch Pokemons details \", err);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detail);\n\n//# sourceURL=webpack://capstone2/./src/pokemonDetail.js?");

/***/ }),

/***/ "./src/pokemons.js":
/*!*************************!*\
  !*** ./src/pokemons.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _unlike_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlike.png */ \"./src/unlike.png\");\n/* harmony import */ var _pokemonDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonDetail.js */ \"./src/pokemonDetail.js\");\n\n\n\nlet numberOfItems = 0;\nconst cards = document.body.querySelector('.cards');\ncards.addEventListener('click', (e) => {\n  if (e.target && e.target.className === 'comment') {\n    const url = `https://pokeapi.co/api/v2/pokemon/${e.target.id}`;\n    (0,_pokemonDetail_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, e.target.id);\n  }\n});\n\nconst pokemons = async (url) => {\n  await fetch(url).then((response) => response.json())\n    .then((data) => data.results)\n    .then((obj) => Object.entries(obj))\n    .then((arr) => {\n      numberOfItems = arr.length;\n      arr.forEach((element) => {\n        const id = Number(element[0]);\n        let pokemonName = element[1].name;\n        pokemonName = pokemonName[0].toUpperCase() + pokemonName.slice(1);\n        fetch(element[1].url).then((response) => response.json())\n          .then((data) => data.sprites.other['official-artwork'].front_default)\n          .then((src) => {\n            const card = `<div class=\"card\">\n            <img class=\"pokemon-img\" id=${id + 1} src=\"${src}\" alt=\"Pokemon1\">\n            <div class=\"card-title\">\n            <h2>${pokemonName}</h2>\n            <img id=\"likeId${id + 1}\" class=\"likeBtn\" src=${_unlike_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"heart icon for like\">\n            </div> \n            <p class=\"like-count\" id=\"like-count${id + 1}\">0 Likes</p>\n            <div class=\"buttons\">\n              <button type=\"button\" id=\"${id + 1}\" class=\"comment\">Comments</button>\n              <button type=\"button\" class=\"reservations\">Reservations</button>\n            </div>\n          </div>`;\n            cards.innerHTML += card;\n          });\n      });\n    })\n    .catch((err) => {\n      throw (\"Couldn't fetch pokemons\", err);\n    });\n  return numberOfItems;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemons);\n\n//# sourceURL=webpack://capstone2/./src/pokemons.js?");

/***/ }),

/***/ "./src/cancel.png":
/*!************************!*\
  !*** ./src/cancel.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0166704ee69b633562a2.png\";\n\n//# sourceURL=webpack://capstone2/./src/cancel.png?");

/***/ }),

/***/ "./src/like.png":
/*!**********************!*\
  !*** ./src/like.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b3d543fa411ab9c2474.png\";\n\n//# sourceURL=webpack://capstone2/./src/like.png?");

/***/ }),

/***/ "./src/unlike.png":
/*!************************!*\
  !*** ./src/unlike.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d66523f643ecf5753f5.png\";\n\n//# sourceURL=webpack://capstone2/./src/unlike.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);