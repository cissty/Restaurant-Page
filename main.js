/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction createContact(){\r\n    const contact = document.createElement('div');\r\n    contact.classList.add('contact');\r\n\r\n    const phoneNumber = document.createElement('p')\r\n    phoneNumber.textContent = '📞 123 456 789'\r\n\r\n    const address = document.createElement('p')\r\n    address.textContent = '🏠 Fire & Forks, Zoo Road, Dakka, Banglades'\r\n\r\n    const restaurantLocation = document.createElement('img')\r\n    restaurantLocation.src = 'images/map.jpg'\r\n    restaurantLocation.alt = 'restaurant location'\r\n\r\n    contact.appendChild(phoneNumber);\r\n    contact.appendChild(address);\r\n    contact.appendChild(restaurantLocation);\r\n\r\n    return contact\r\n}\r\n\r\nfunction loadContact() {\r\n    const main = document.getElementById('main');\r\n    main.textContent = '';\r\n    main.appendChild(createContact());\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n \r\n \r\n function createHome() {\r\n\r\n        const home = document.createElement('div');\r\n        home.classList.add('home')\r\n\r\n        const restaurantName = document.createElement('h1');\r\n        restaurantName.setAttribute('class', 'restaurant-name');\r\n        restaurantName.textContent = 'Fire & Forks';\r\n        \r\n        const button = document.createElement('button');\r\n        button.setAttribute('class', 'menu-button')\r\n        button.textContent = 'SEE MENU'\r\n        \r\n        button.addEventListener('click', () =>{\r\n            const home = document.getElementById('home');\r\n            home.setAttribute('class', 'button-nav');\r\n            const menu = document.getElementById('menu');\r\n                menu.setAttribute('class', 'button-nav active')\r\n                ;(0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        });\r\n\r\n        const checkMenu = document.createElement('p')\r\n        checkMenu.textContent = 'Check the menu!';\r\n        checkMenu.classList.add('check-menu-p')\r\n        checkMenu.style.fontStyle = 'italic';\r\n\r\n        home.appendChild(restaurantName)\r\n        home.appendChild(createParagraph('Grilling with Intensity'));\r\n        home.appendChild(checkMenu);\r\n        home.appendChild(button)\r\n        return home;\r\n    }\r\n\r\n\r\n        function createParagraph(text){\r\n            const paragraph = document.createElement('p');\r\n            paragraph.textContent = text;\r\n            return paragraph;\r\n        }\r\n        \r\n       function loadHome(){\r\n        const main = document.getElementById('main');\r\n        main.textContent = '';\r\n        main.appendChild(createHome());\r\n    }\r\n        \r\n\r\n   \r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n    const menu = document.createElement(\"div\");\r\n    menu.classList.add(\"menu\");\r\n  \r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Barbecue beef burger\",\r\n        \"A classic beef burger with Pack blue cheese in the centre to make it a little more special\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Chicken shish kebabs\",\r\n        \"Offer some chilli sauce on the side for those who like heat, and serve with flatbread\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Maple-glazed hot wings\",\r\n        \"The sticky maple and butter glaze on these wings adds extra succulence\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Miso mushroom halloumi burgers\",\r\n        \"Tomato sauce, Bacon, Pineapple, Olives, Basil\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Piri-piri pork ribs\",\r\n        \"Pork ribs with smoky piri-piri spices and a sticky barbecue sauce.\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Spatchcock gochujang chicken\",\r\n        \"Forget run-of-the-mill sausages and and burgers\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Black bean veggie burger\",\r\n        \"Try making these satisfying veggie burgers as a meat-free treat\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Lamb kebab burger\",\r\n        \"Jazz up a shop-bought lamb burger with garlic mayo, gherkins and chilli for a hot and spicy twist.\"\r\n      )\r\n    );\r\n  \r\n    return menu;\r\n  }\r\n  \r\n  function createMenuItem(name, description) {\r\n    const menuItem = document.createElement(\"div\");\r\n  \r\n    const foodName = document.createElement(\"h2\");\r\n    foodName.textContent = name;\r\n    foodName.classList.add(\"food-name\");\r\n\r\n  \r\n    const foodDescription = document.createElement(\"p\");\r\n    foodDescription.textContent = description;\r\n  \r\n    const foodImage = document.createElement(\"img\");\r\n\r\n    const modifiedName = name.replace(/\\s+/g, '-');\r\n\r\n    foodImage.src = 'images/items/' + modifiedName + '.webp';\r\n    foodImage.alt = `${name}`;\r\n  \r\n    menuItem.appendChild(foodImage);\r\n    menuItem.appendChild(foodName);\r\n    menuItem.appendChild(foodDescription);\r\n  \r\n    return menuItem;\r\n  }\r\n  \r\n  function loadMenu() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createMenu());\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"header\");\r\n  header.appendChild(createNav());\r\n\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement(\"nav\");\r\n\r\n  const homeButton = document.createElement(\"button\");\r\n  homeButton.classList.add(\"button-nav\");\r\n  homeButton.setAttribute('id', 'home');\r\n  homeButton.textContent = \"Home\";\r\n  homeButton.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(homeButton);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const menuButton = document.createElement(\"button\");\r\n  menuButton.classList.add(\"button-nav\");\r\n  menuButton.setAttribute('id', 'menu');\r\n  menuButton.textContent = \"Menu\";\r\n  menuButton.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(menuButton);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const contactButton = document.createElement(\"button\");\r\n  contactButton.classList.add(\"button-nav\");\r\n  contactButton.textContent = \"Contact\";\r\n  contactButton.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(contactButton);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  nav.appendChild(homeButton);\r\n  nav.appendChild(menuButton);\r\n  nav.appendChild(contactButton);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n  const buttons = document.querySelectorAll(\".button-nav\");\r\n\r\n  buttons.forEach((button) => {\r\n    if (button !== this) {\r\n      button.classList.remove(\"active\");\r\n    }\r\n  });\r\n\r\n  button.classList.add(\"active\");\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"footer\");\r\n\r\n  const copyright = document.createElement(\"p\");\r\n  copyright.textContent = `Copyright © ${new Date().getFullYear()} Cissty`;\r\n\r\n  const githubLink = document.createElement(\"a\");\r\n  githubLink.href = \"https://github.com/cissty\";\r\n  githubLink.setAttribute('target', '_blank');\r\n\r\n  const githubIcon = document.createElement(\"i\");\r\n  githubIcon.classList.add(\"fab\");\r\n  githubIcon.classList.add(\"fa-github\");\r\n\r\n  githubLink.appendChild(githubIcon);\r\n  footer.appendChild(copyright);\r\n  footer.appendChild(githubLink);\r\n\r\n  return footer;\r\n}\r\n\r\n\r\nfunction initializeWebsite() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  setActiveButton(document.querySelector(\".button-nav\"));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  window.addEventListener('resize', function() {\r\n    resizeBackgroundImage();\r\n  });\r\n  resizeBackgroundImage();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;