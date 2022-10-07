/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ (() => {

eval("const listTemplate = document.createElement(\"template\")\nconst listItemTemplate = document.createElement(\"template\")\n\nlistTemplate.innerHTML = `\n<style>\n.list {\n    max-width: 300px;\n}\n\n.list .input-area {\n    display: grid;\n    grid-template-columns: max-content max-content 30px;\n    gap: 1rem;\n    place-items: center;\n}\n\n.list .input-area [data-button-add] {\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n\n.list-item {\n    display: grid;\n    grid-template-columns: 1fr 30px;\n}\n\n.list-item [data-button-remove] {\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n</style>\n<div class=\"list\">\n<h2 data-title>\n    <slot name=\"title\">\n</h2>\n<ul data-list>\n</ul>\n<div class=\"input-area\">\n    <span data-button-text>\n        <slot name=\"button-title\">\n    </span>\n    <input type=\"text\" data-input>\n    <div data-button-add>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n            stroke=\"currentColor\" class=\"w-6 h-6\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                d=\"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\" />\n        </svg>\n    </div>\n</div></div>\n`\n\nlistItemTemplate.innerHTML = `\n<div class=\"list-item\">\n<span data-text>\n</span>\n<div data-button-remove>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\"\n        stroke=\"currentColor\" class=\"w-6 h-6\">\n        <path stroke-linecap=\"round\" stroke-linejoin=\"round\"\n            d=\"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\" />\n    </svg>\n</div>\n</div>\n`\n\n// impementaion with listItem being just a template\n\nclass TodoList extends HTMLElement {\n\tconstructor() {\n\t\tsuper()\n\n\t\tthis.attachShadow({ mode: \"open\" })\n\n\t\tthis.shadowRoot.appendChild(listTemplate.content.cloneNode(true))\n\n\t\tthis.addItem(\"item1\")\n\t\tthis.addItem(\"item2\")\n\t\tthis.addItem(\"item3\")\n\t}\n\n\taddItem(value) {\n\t\tconst list = this.shadowRoot.querySelector(\"[data-list]\")\n\t\tconst item = listItemTemplate.content.cloneNode(true)\n\n\t\titem.querySelector(\"[data-text]\").textContent = value\n\n\t\tlist.appendChild(item)\n\t}\n\n\tconnectedCallback() {\n\t\tthis.shadowRoot\n\t\t\t.querySelector(\"[data-button-add]\")\n\t\t\t.addEventListener(\"click\", (e) => {\n\t\t\t\tconst input = this.shadowRoot.querySelector(\"[data-input]\")\n\t\t\t\tconst value = input.value\n\t\t\t\tif (value == \"\") return\n\t\t\t\tthis.addItem(value)\n\t\t\t\tinput.value = \"\"\n\t\t\t})\n\t\tthis.shadowRoot\n\t\t\t.querySelector(\".list\")\n\t\t\t.addEventListener(\"click\", (e) => {\n\t\t\t\tthis.removeItem(e)\n\t\t\t})\n\t}\n\n\tremoveItem(e) {\n\t\tif (!e?.target?.parentNode?.parentNode?.matches(\".list-item\")) return\n\n\t\tconst item = e.target.parentNode.parentNode\n\t\titem.remove()\n\t}\n}\n\ncustomElements.define(\"todo-list\", TodoList)\n\n\n//# sourceURL=webpack://mdntodolist/./src/todoList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/todoList.js"]();
/******/ 	
/******/ })()
;