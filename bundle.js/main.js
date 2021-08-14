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

eval("var board = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log(board); // board(); // from grid.js //RENDER.JS\n\n  draggable(); // drag-to-scroll on board //DRAGGABLE.JS\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXJCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWixFQUZnRCxDQUdoRDs7QUFDQU0sRUFBQUEsU0FBUyxHQUp1QyxDQUluQztBQUVoQixDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGhlLUNvb2xvbnktR2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvYXJkID0gcmVxdWlyZShcIi4vc2NyaXB0cy9ib2FyZFwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKGJvYXJkKTtcbiAgICAvLyBib2FyZCgpOyAvLyBmcm9tIGdyaWQuanMgLy9SRU5ERVIuSlNcbiAgICBkcmFnZ2FibGUoKTsgLy8gZHJhZy10by1zY3JvbGwgb24gYm9hcmQgLy9EUkFHR0FCTEUuSlNcblxufSk7Il0sIm5hbWVzIjpbImJvYXJkIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJkcmFnZ2FibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("function Board() {\n  var starterBoard1 = [[\"\", \"T\", \"\", \"\", \"\", \"\", \"\", \"\", \"C\", \"\"], [\"O\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\"], [\"\", \"T\", \"\", \"\", \"\", \"O\", \"\", \"\", \"T\", \"C\"], [\"\", \"T\", \"\", \"T\", \"\", \"\", \"N\", \"N\", \"T\", \"\"], [\"\", \"F\", \"T\", \"T\", \"T\", \"T\", \"N\", \"N\", \"\", \"\"], [\"\", \"F\", \"\", \"\", \"E\", \"\", \"\", \"\", \"\", \"\"]];\n  var starterBoard2 = [[\"\", \"\", \"\", \"\", \"O\", \"\", \"T\", \"\", \"\", \"\"], [\"\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\", \"C\"], [\"\", \"\", \"N\", \"N\", \"T\", \"\", \"\", \"T\", \"\", \"O\"], [\"\", \"T\", \"N\", \"N\", \"\", \"\", \"C\", \"T\", \"\", \"\"], [\"\", \"T\", \"\", \"T\", \"\", \"\", \"\", \"T\", \"T\", \"T\"], [\"F\", \"F\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"E\"]];\n  var starterBoard3 = [[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"T\"], [\"O\", \"T\", \"\", \"\", \"\", \"T\", \"C\", \"T\", \"T\", \"T\"], [\"\", \"T\", \"T\", \"\", \"C\", \"\", \"T\", \"T\", \"T\", \"\"], [\"\", \"T\", \"\", \"\", \"\", \"\", \"T\", \"\", \"F\", \"F\"], [\"\", \"N\", \"N\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\", \"\"], [\"\", \"N\", \"N\", \"E\", \"\", \"\", \"\", \"O\", \"\", \"\"]];\n  var potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3]; // const gameBoard = document.querySelector(\".game-grid\");\n\n  gridRender(potentialStarterBoards);\n}\n\nfunction gridRender(potentialStarterBoards) {\n  console.log(potentialStarterBoards[1]);\n}\n\nmodule.exports = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJuYW1lcyI6WyJCb2FyZCIsInN0YXJ0ZXJCb2FyZDEiLCJzdGFydGVyQm9hcmQyIiwic3RhcnRlckJvYXJkMyIsInBvdGVudGlhbFN0YXJ0ZXJCb2FyZHMiLCJncmlkUmVuZGVyIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEtBQVQsR0FBaUI7QUFFYixNQUFNQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRUFBOEIsRUFBOUIsRUFBa0MsR0FBbEMsRUFBdUMsRUFBdkMsQ0FBRCxFQUNBLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEVBQTlDLENBREEsRUFFQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkIsRUFBM0IsRUFBK0IsRUFBL0IsRUFBbUMsR0FBbkMsRUFBd0MsR0FBeEMsQ0FGQSxFQUdBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxDQUhBLEVBSUEsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEdBQW5DLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLENBSkEsRUFLQSxDQUFDLEVB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QSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsc0JBQXNCLENBQUMsQ0FBRCxDQUFsQztBQUNIOztBQUdESSxNQUFNLENBQUNDLE9BQVAsR0FBaUJULEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQm9hcmQoKSB7XG5cbiAgICBjb25zdCBzdGFydGVyQm9hcmQxID0gW1tcIlwiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJDXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJPXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlwiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJPXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIkNcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlwiLCBcIlRcIiwgXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiTlwiLCBcIk5cIiwgXCJUXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJGXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIk5cIiwgXCJOXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJGXCIsIFwiXCIsIFwiXCIsIFwiRVwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiXV07XG5cbiAgICBjb25zdCBzdGFydGVyQm9hcmQyID0gW1tcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIk9cIiwgXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCIsIFwiQ1wiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiTlwiLCBcIk5cIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIk9cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlwiLCBcIlRcIiwgXCJOXCIsIFwiTlwiLCBcIlwiLCBcIlwiLCBcIkNcIiwgXCJUXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJUXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiRlwiLCBcIkZcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJFXCJdXTtcblxuICAgIGNvbnN0IHN0YXJ0ZXJCb2FyZDMgPSBbW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiVFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiT1wiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJUXCIsIFwiQ1wiLCBcIlRcIiwgXCJUXCIsIFwiVFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiVFwiLCBcIlRcIiwgXCJcIiwgXCJDXCIsIFwiXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIkZcIiwgXCJGXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJOXCIsIFwiTlwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJOXCIsIFwiTlwiLCBcIkVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJPXCIsIFwiXCIsIFwiXCJdXTtcblxuICAgIGNvbnN0IHBvdGVudGlhbFN0YXJ0ZXJCb2FyZHMgPSBbc3RhcnRlckJvYXJkMSwgc3RhcnRlckJvYXJkMiwgc3RhcnRlckJvYXJkM11cblxuICAgIC8vIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ncmlkXCIpO1xuXG4gICAgZ3JpZFJlbmRlcihwb3RlbnRpYWxTdGFydGVyQm9hcmRzKTtcblxufVxuXG5mdW5jdGlvbiBncmlkUmVuZGVyKHBvdGVudGlhbFN0YXJ0ZXJCb2FyZHMpIHtcbiAgICBjb25zb2xlLmxvZyhwb3RlbnRpYWxTdGFydGVyQm9hcmRzWzFdKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkO1xuIl0sImZpbGUiOiIuL3NyYy9zY3JpcHRzL2JvYXJkLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;