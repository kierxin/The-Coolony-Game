/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var Board = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\"); // also utilizes draggable.js\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var b = new Board();\n  console.log(b);\n  draggable(); // drag-to-scroll on board //DRAGGABLE.JS\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXJCLEMsQ0FFQTs7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFFaEQsTUFBTUMsQ0FBQyxHQUFHLElBQUlKLEtBQUosRUFBVjtBQUNBSyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUdBRyxFQUFBQSxTQUFTLEdBTnVDLENBTW5DO0FBRWhCLENBUkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2JvYXJkXCIpO1xuXG4vLyBhbHNvIHV0aWxpemVzIGRyYWdnYWJsZS5qc1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY29uc3QgYiA9IG5ldyBCb2FyZCgpO1xuICAgIGNvbnNvbGUubG9nKGIpO1xuXG5cbiAgICBkcmFnZ2FibGUoKTsgLy8gZHJhZy10by1zY3JvbGwgb24gYm9hcmQgLy9EUkFHR0FCTEUuSlNcblxufSk7Il0sIm5hbWVzIjpbIkJvYXJkIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImIiLCJjb25zb2xlIiwibG9nIiwiZHJhZ2dhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var starterBoard = __webpack_require__(/*! ./starterBoard */ \"./src/scripts/starterBoard.js\");\n\nfunction Board() {\n  this.starter = starterBoard();\n  this.gridRender(this.starter);\n}\n\nBoard.prototype.gridRender = function (starterBoard) {\n  console.log(starterBoard);\n};\n\nmodule.exports = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxZQUFZLEdBQUdDLG1CQUFPLENBQUMscURBQUQsQ0FBNUI7O0FBR0EsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLE9BQUtDLE9BQUwsR0FBZUgsWUFBWSxFQUEzQjtBQUNBLE9BQUtJLFVBQUwsQ0FBZ0IsS0FBS0QsT0FBckI7QUFDSDs7QUFFREQsS0FBSyxDQUFDRyxTQUFOLENBQWdCRCxVQUFoQixHQUE2QixVQUFTSixZQUFULEVBQXVCO0FBQ2hETSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsWUFBWjtBQUNILENBRkQ7O0FBS0FRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlAsS0FBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGFydGVyQm9hcmQgPSByZXF1aXJlKFwiLi9zdGFydGVyQm9hcmRcIik7XG5cblxuZnVuY3Rpb24gQm9hcmQoKSB7XG4gICAgdGhpcy5zdGFydGVyID0gc3RhcnRlckJvYXJkKCk7XG4gICAgdGhpcy5ncmlkUmVuZGVyKHRoaXMuc3RhcnRlcik7XG59XG5cbkJvYXJkLnByb3RvdHlwZS5ncmlkUmVuZGVyID0gZnVuY3Rpb24oc3RhcnRlckJvYXJkKSB7XG4gICAgY29uc29sZS5sb2coc3RhcnRlckJvYXJkKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyJdLCJuYW1lcyI6WyJzdGFydGVyQm9hcmQiLCJyZXF1aXJlIiwiQm9hcmQiLCJzdGFydGVyIiwiZ3JpZFJlbmRlciIsInByb3RvdHlwZSIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/starterBoard.js":
/*!*************************************!*\
  !*** ./src/scripts/starterBoard.js ***!
  \*************************************/
/***/ (function(module) {

eval("function StarterBoard() {\n  this.starterBoard1 = [[\"\", \"T\", \"\", \"\", \"\", \"\", \"\", \"\", \"C\", \"\"], [\"O\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\"], [\"\", \"T\", \"\", \"\", \"\", \"O\", \"\", \"\", \"T\", \"C\"], [\"\", \"T\", \"\", \"T\", \"\", \"\", \"N\", \"N\", \"T\", \"\"], [\"\", \"F\", \"T\", \"T\", \"T\", \"T\", \"N\", \"N\", \"\", \"\"], [\"\", \"F\", \"\", \"\", \"E\", \"\", \"\", \"\", \"\", \"\"]];\n  this.starterBoard2 = [[\"\", \"\", \"\", \"\", \"O\", \"\", \"T\", \"\", \"\", \"\"], [\"\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\", \"C\"], [\"\", \"\", \"N\", \"N\", \"T\", \"\", \"\", \"T\", \"\", \"O\"], [\"\", \"T\", \"N\", \"N\", \"\", \"\", \"C\", \"T\", \"\", \"\"], [\"\", \"T\", \"\", \"T\", \"\", \"\", \"\", \"T\", \"T\", \"T\"], [\"F\", \"F\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"E\"]];\n  this.starterBoard3 = [[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"T\"], [\"O\", \"T\", \"\", \"\", \"\", \"T\", \"C\", \"T\", \"T\", \"T\"], [\"\", \"T\", \"T\", \"\", \"C\", \"\", \"T\", \"T\", \"T\", \"\"], [\"\", \"T\", \"\", \"\", \"\", \"\", \"T\", \"\", \"F\", \"F\"], [\"\", \"N\", \"N\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\", \"\"], [\"\", \"N\", \"N\", \"E\", \"\", \"\", \"\", \"O\", \"\", \"\"]];\n  this.potentialStarterBoards = [this.starterBoard1, this.starterBoard2, this.starterBoard3];\n\n  var randomized = function randomized() {\n    return Math.floor(Math.random(2.9));\n  };\n\n  var starterBoardResult = this.potentialStarterBoards[randomized()];\n  return starterBoardResult;\n}\n\nmodule.exports = StarterBoard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL3NjcmlwdHMvc3RhcnRlckJvYXJkLmpzPzkyYzkiXSwibmFtZXMiOlsiU3RhcnRlckJvYXJkIiwic3RhcnRlckJvYXJkMSIsInN0YXJ0ZXJCb2FyZDIiLCJzdGFydGVyQm9hcmQzIiwicG90ZW50aWFsU3RhcnRlckJvYXJkcyIsInJhbmRvbWl6ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFydGVyQm9hcmRSZXN1bHQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxZQUFULEdBQXdCO0FBRXBCLE9BQUtDLGFBQUwsR0FBcUIsQ0FDakIsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEVBQTlCLEVBQWtDLEdBQWxDLEVBQXVDLEVBQXZDLENBRGlCLEVBRWpCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEVBQTlDLENBRmlCLEVBR2pCLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixHQUF0QixFQUEyQixFQUEzQixFQUErQixFQUEvQixFQUFtQyxHQUFuQyxFQUF3QyxHQUF4QyxDQUhpQixFQUlqQixDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsR0FBckMsRUFBMEMsRUFBMUMsQ0FKaUIsRUFLakIsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlC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QUVBLE1BQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxDQUFZLEdBQVosQ0FBWCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxrQkFBa0IsR0FBRyxLQUFLTCxzQkFBTCxDQUE0QkMsVUFBVSxFQUF0QyxDQUEzQjtBQUNBLFNBQU9JLGtCQUFQO0FBQ0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsWUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTdGFydGVyQm9hcmQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0ZXJCb2FyZDEgPSBbXG4gICAgICAgIFtcIlwiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJDXCIsIFwiXCJdLFxuICAgICAgICBbXCJPXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJcIl0sXG4gICAgICAgIFtcIlwiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJPXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIkNcIl0sXG4gICAgICAgIFtcIlwiLCBcIlRcIiwgXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiTlwiLCBcIk5cIiwgXCJUXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJGXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIk5cIiwgXCJOXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJGXCIsIFwiXCIsIFwiXCIsIFwiRVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXVxuICAgIF07XG5cbiAgICB0aGlzLnN0YXJ0ZXJCb2FyZDIgPSBbXG4gICAgICAgIFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIk9cIiwgXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCIsIFwiQ1wiXSxcbiAgICAgICAgW1wiXCIsIFwiXCIsIFwiTlwiLCBcIk5cIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIk9cIl0sXG4gICAgICAgIFtcIlwiLCBcIlRcIiwgXCJOXCIsIFwiTlwiLCBcIlwiLCBcIlwiLCBcIkNcIiwgXCJUXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJUXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiXSxcbiAgICAgICAgW1wiRlwiLCBcIkZcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJFXCJdXG4gICAgXTtcblxuICAgIHRoaXMuc3RhcnRlckJvYXJkMyA9IFtcbiAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiVFwiXSxcbiAgICAgICAgW1wiT1wiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJUXCIsIFwiQ1wiLCBcIlRcIiwgXCJUXCIsIFwiVFwiXSxcbiAgICAgICAgW1wiXCIsIFwiVFwiLCBcIlRcIiwgXCJcIiwgXCJDXCIsIFwiXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIkZcIiwgXCJGXCJdLFxuICAgICAgICBbXCJcIiwgXCJOXCIsIFwiTlwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBbXCJcIiwgXCJOXCIsIFwiTlwiLCBcIkVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJPXCIsIFwiXCIsIFwiXCJdXG4gICAgXTtcblxuICAgIHRoaXMucG90ZW50aWFsU3RhcnRlckJvYXJkcyA9IFt0aGlzLnN0YXJ0ZXJCb2FyZDEsIHRoaXMuc3RhcnRlckJvYXJkMiwgdGhpcy5zdGFydGVyQm9hcmQzXTtcblxuICAgIGNvbnN0IHJhbmRvbWl6ZWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKDIuOSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ZXJCb2FyZFJlc3VsdCA9IHRoaXMucG90ZW50aWFsU3RhcnRlckJvYXJkc1tyYW5kb21pemVkKCldO1xuICAgIHJldHVybiBzdGFydGVyQm9hcmRSZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhcnRlckJvYXJkO1xuIl0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL3N0YXJ0ZXJCb2FyZC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/starterBoard.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;