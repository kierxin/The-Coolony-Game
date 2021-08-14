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

eval("var board = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log(board(\"Thisis a test str\")); // board(); // from grid.js //RENDER.JS\n\n  draggable(); // drag-to-scroll on board //DRAGGABLE.JS\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLCtDQUFELENBQXJCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWhEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBSyxDQUFDLG1CQUFELENBQWpCLEVBRmdELENBR2hEOztBQUNBTSxFQUFBQSxTQUFTLEdBSnVDLENBSW5DO0FBRWhCLENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9hcmQgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2JvYXJkXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gICAgY29uc29sZS5sb2coYm9hcmQoXCJUaGlzaXMgYSB0ZXN0IHN0clwiKSk7XG4gICAgLy8gYm9hcmQoKTsgLy8gZnJvbSBncmlkLmpzIC8vUkVOREVSLkpTXG4gICAgZHJhZ2dhYmxlKCk7IC8vIGRyYWctdG8tc2Nyb2xsIG9uIGJvYXJkIC8vRFJBR0dBQkxFLkpTXG5cbn0pOyJdLCJuYW1lcyI6WyJib2FyZCIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZHJhZ2dhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(module) {

eval("function Board(strToPrintAsTest) {\n  var starterBoard1 = [[\"\", \"T\", \"\", \"\", \"\", \"\", \"\", \"\", \"C\", \"\"], [\"O\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\"], [\"\", \"T\", \"\", \"\", \"\", \"O\", \"\", \"\", \"T\", \"C\"], [\"\", \"T\", \"\", \"T\", \"\", \"\", \"N\", \"N\", \"T\", \"\"], [\"\", \"F\", \"T\", \"T\", \"T\", \"T\", \"N\", \"N\", \"\", \"\"], [\"\", \"F\", \"\", \"\", \"E\", \"\", \"\", \"\", \"\", \"\"]];\n  var starterBoard2 = [[\"\", \"\", \"\", \"\", \"O\", \"\", \"T\", \"\", \"\", \"\"], [\"\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\", \"C\"], [\"\", \"\", \"N\", \"N\", \"T\", \"\", \"\", \"T\", \"\", \"O\"], [\"\", \"T\", \"N\", \"N\", \"\", \"\", \"C\", \"T\", \"\", \"\"], [\"\", \"T\", \"\", \"T\", \"\", \"\", \"\", \"T\", \"T\", \"T\"], [\"F\", \"F\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"E\"]];\n  var starterBoard3 = [[\"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"\", \"T\"], [\"O\", \"T\", \"\", \"\", \"\", \"T\", \"C\", \"T\", \"T\", \"T\"], [\"\", \"T\", \"T\", \"\", \"C\", \"\", \"T\", \"T\", \"T\", \"\"], [\"\", \"T\", \"\", \"\", \"\", \"\", \"T\", \"\", \"F\", \"F\"], [\"\", \"N\", \"N\", \"T\", \"T\", \"T\", \"T\", \"T\", \"\", \"\"], [\"\", \"N\", \"N\", \"E\", \"\", \"\", \"\", \"O\", \"\", \"\"]];\n  var potentialStarterBoards = [starterBoard1, starterBoard2, starterBoard3]; // const gameBoard = document.querySelector(\".game-grid\");\n\n  gridRender(potentialStarterBoards, strToPrintAsTest);\n}\n\nfunction gridRender(potentialStarterBoards, strToPrintAsTest) {\n  console.log(strToPrintAsTest);\n  console.log(potentialStarterBoards[1]);\n}\n\nmodule.exports = Board;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaGUtQ29vbG9ueS1HYW1lLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJuYW1lcyI6WyJCb2FyZCIsInN0clRvUHJpbnRBc1Rlc3QiLCJzdGFydGVyQm9hcmQxIiwic3RhcnRlckJvYXJkMiIsInN0YXJ0ZXJCb2FyZDMiLCJwb3RlbnRpYWxTdGFydGVyQm9hcmRzIiwiZ3JpZFJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxLQUFULENBQWVDLGdCQUFmLEVBQWlDO0FBRTdCLE1BQU1DLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixFQUF0QixFQUEwQixFQUExQixFQUE4QixFQUE5QixFQUFrQyxHQUFsQyxFQUF1QyxFQUF2QyxDQUFELEVBQ0EsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsRUFBOUMsQ0FEQSxFQUVBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixFQUFsQixFQUFzQixHQUF0QixFQUEyQixFQUEzQixFQUErQixFQUEvQixFQUFtQyxHQUFuQyxFQUF3QyxHQUF4QyxDQUZBLEVBR0EsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsRUFBYyxHQUFkLEVBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDLEdBQXJDLEVBQTBDLEVBQTFDLENBSEEsRUFJQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkMsRUFBd0MsRUFBeEMsRUFBNEMsRUFBNUMsQ0FKQSxFQUtBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLEVBQWMsRUFBZCxFQUFrQixHQUFsQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxFQUF1QyxFQUF2QyxDQUxBLENBQXRCO0FBT0EsTUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEdBQWpCLEVBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLEVBQStCLEVBQS9CLEVBQW1DLEVBQW5DLEVBQXVDLEVBQXZDLENBQUQsRUFDQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkMsRUFBd0MsRUFBeEMsRUFBNEMsR0FBNUMsQ0FEQSxFQUVBLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQixHQUFuQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxHQUFoQyxFQUFxQyxFQUFyQyxFQUF5QyxHQUF6QyxDQUZBLEVBR0EsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEdBQTVCLEVBQWlDLEdBQWpDLEVBQXNDLEVBQXRDLEVBQTBDLEVBQTFDLENBSEEsRUFJQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLEdBQWQsRUFBbUIsRUFBbkIsRUFBdUIsRUFBdkIsRUFBMkIsRUFBM0IsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsQ0FKQSxFQUtBLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixFQUFuQixFQUF1QixFQUF2QixFQUEyQixFQUEzQixFQUErQixFQUEvQixFQUFtQyxFQUFuQyxFQUF1QyxHQUF2QyxDQUxBLENBQXRCO0FBT0EsTUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEdBQXJDLENBQUQsRUFDQSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsRUFBWCxFQUFlLEVBQWYsRUFBbUIsRUFBbkIsRUFBdUIsR0FBdkIsRUFBNEIsR0FBNUIsRUFBaUMsR0FBakMsRUFBc0MsR0FBdEMsRUFBMkMsR0FBM0MsQ0FEQSxFQUVBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsRUFBZixFQUFtQixHQUFuQixFQUF3QixFQUF4QixFQUE0QixHQUE1QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0QyxFQUEyQyxFQUEzQyxDQUZBLEVBR0EsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEdBQTFCLEVBQStCLEVBQS9CLEVBQW1DLEdBQW5DLEVBQXdDLEdBQXhDLENBSEEsRUFJQSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsR0FBbkMsRUFBd0MsRUFBeEMsRUFBNEMsRUFBNUMsQ0FKQSxFQUtBLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxHQUFoQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxDQUxBLENBQXRCO0FBT0EsTUFBTUMsc0JBQXNCLEdBQUcsQ0FBQ0gsYUFBRCxFQUFnQkMsYUFBaEIsRUFBK0JDLGFBQS9CLENBQS9CLENBdkI2QixDQXlCN0I7O0FBRUFFLEVBQUFBLFVBQVUsQ0FBQ0Qsc0JBQUQsRUFBeUJKLGdCQUF6QixDQUFWO0FBRUg7O0FBRUQsU0FBU0ssVUFBVCxDQUFvQkQsc0JBQXBCLEVBQTRDSixnQkFBNUMsRUFBOEQ7QUFDMURNLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxnQkFBWjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsc0JBQXNCLENBQUMsQ0FBRCxDQUFsQztBQUNIOztBQUdESSxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQm9hcmQoc3RyVG9QcmludEFzVGVzdCkge1xuXG4gICAgY29uc3Qgc3RhcnRlckJvYXJkMSA9IFtbXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiQ1wiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiT1wiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiT1wiLCBcIlwiLCBcIlwiLCBcIlRcIiwgXCJDXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJUXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIlwiLCBcIk5cIiwgXCJOXCIsIFwiVFwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiRlwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJOXCIsIFwiTlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiRlwiLCBcIlwiLCBcIlwiLCBcIkVcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl1dO1xuXG4gICAgY29uc3Qgc3RhcnRlckJvYXJkMiA9IFtbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJPXCIsIFwiXCIsIFwiVFwiLCBcIlwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlwiLCBcIkNcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlwiLCBcIlwiLCBcIk5cIiwgXCJOXCIsIFwiVFwiLCBcIlwiLCBcIlwiLCBcIlRcIiwgXCJcIiwgXCJPXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJcIiwgXCJUXCIsIFwiTlwiLCBcIk5cIiwgXCJcIiwgXCJcIiwgXCJDXCIsIFwiVFwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiVFwiLCBcIlwiLCBcIlRcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkZcIiwgXCJGXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiRVwiXV07XG5cbiAgICBjb25zdCBzdGFydGVyQm9hcmQzID0gW1tcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIk9cIiwgXCJUXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiVFwiLCBcIkNcIiwgXCJUXCIsIFwiVFwiLCBcIlRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlwiLCBcIlRcIiwgXCJUXCIsIFwiXCIsIFwiQ1wiLCBcIlwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiVFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIlRcIiwgXCJcIiwgXCJGXCIsIFwiRlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiTlwiLCBcIk5cIiwgXCJUXCIsIFwiVFwiLCBcIlRcIiwgXCJUXCIsIFwiVFwiLCBcIlwiLCBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiXCIsIFwiTlwiLCBcIk5cIiwgXCJFXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiT1wiLCBcIlwiLCBcIlwiXV07XG5cbiAgICBjb25zdCBwb3RlbnRpYWxTdGFydGVyQm9hcmRzID0gW3N0YXJ0ZXJCb2FyZDEsIHN0YXJ0ZXJCb2FyZDIsIHN0YXJ0ZXJCb2FyZDNdXG5cbiAgICAvLyBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtZ3JpZFwiKTtcblxuICAgIGdyaWRSZW5kZXIocG90ZW50aWFsU3RhcnRlckJvYXJkcywgc3RyVG9QcmludEFzVGVzdCk7XG5cbn1cblxuZnVuY3Rpb24gZ3JpZFJlbmRlcihwb3RlbnRpYWxTdGFydGVyQm9hcmRzLCBzdHJUb1ByaW50QXNUZXN0KSB7XG4gICAgY29uc29sZS5sb2coc3RyVG9QcmludEFzVGVzdCk7XG4gICAgY29uc29sZS5sb2cocG90ZW50aWFsU3RhcnRlckJvYXJkc1sxXSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiJdLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

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