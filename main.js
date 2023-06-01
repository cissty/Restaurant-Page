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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n function createHome() {\r\n\r\n        const home = document.createElement('div');\r\n        home.classList.add('home')\r\n\r\n        const restaurantName = document.createElement('h1');\r\n        restaurantName.setAttribute('class', 'restaurant-name');\r\n        restaurantName.textContent = 'Fire & Fork';\r\n        \r\n        const button = document.createElement('button');\r\n        button.setAttribute('class', 'menu-button')\r\n        button.textContent = 'SEE MENU'\r\n        \r\n        const checkMenu = document.createElement('p')\r\n        checkMenu.textContent = 'Check the menu!';\r\n        checkMenu.classList.add('check-menu-p')\r\n        checkMenu.style.fontStyle = 'italic';\r\n\r\n        home.appendChild(restaurantName)\r\n        home.appendChild(createParagraph('Grilling with Intensity'));\r\n        home.appendChild(checkMenu);\r\n        home.appendChild(button)\r\n        return home;\r\n    }\r\n\r\n\r\n        function createParagraph(text){\r\n            const paragraph = document.createElement('p');\r\n            paragraph.textContent = text;\r\n            return paragraph;\r\n        }\r\n        \r\n\r\n\r\n       function loadHome(){\r\n        const main = document.getElementById('main');\r\n        main.textContent = '';\r\n        main.appendChild(createHome());\r\n    }\r\n        \r\n\r\n   \r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n// const content = document.getElementById('content');\r\n\r\n// const main = document.createElement('main');\r\n// main.setAttribute('class', 'main')\r\n// content.appendChild(main)\r\n// const footer = document.createElement('footer');\r\n// content.appendChild(footer)\r\n\r\n\r\n// function headerFunc(){\r\n//     const header = document.createElement('header');\r\n//     header.setAttribute('class', 'header');\r\n//     const nav = document.createElement('nav');\r\n//     const homeButton = document.createElement('button');\r\n//     const menuButton = document.createElement('button');\r\n//     const contactButton = document.createElement('button');\r\n\r\n//     header.setAttribute('class', 'header')\r\n//         homeButton.textContent = 'Home';\r\n//         menuButton.textContent = 'Menu';\r\n//         contactButton.textContent = 'Contact';\r\n           \r\n//             nav.appendChild(homeButton);\r\n//             nav.appendChild(menuButton);\r\n//             nav.appendChild(contactButton);\r\n\r\n//             header.appendChild(nav);\r\n\r\n//             const firstChild = content.firstChild;\r\n//             content.insertBefore(header, firstChild);\r\n        \r\n//             homeButton.addEventListener('click', () => {\r\n//                 homeContent()\r\n//               });\r\n\r\n//         menuButton.addEventListener('click', () =>{\r\n//             const c = document.querySelector('.main-content');\r\n//             c.remove()\r\n//              menuFunc()\r\n\r\n//         });\r\n\r\n//     }\r\n\r\n\r\n//     function addSvg(){\r\n//         const svgNamespace = \"http://www.w3.org/2000/svg\";\r\n\r\n//         const svg = document.createElementNS(svgNamespace, 'svg');\r\n//         svg.setAttribute('class', 'design');\r\n//         svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');\r\n//         svg.setAttribute('viewBox', '0 0 289 543');\r\n\r\n//         const path = document.createElementNS(svgNamespace, 'path');\r\n//         path.setAttribute('fill', 'none');\r\n//         path.setAttribute('stroke', '#9A7D57');\r\n//         path.setAttribute('stroke-width', '0,5');\r\n//         path.setAttribute('stroke-miterlimit', '10');\r\n//         path.setAttribute('d', \"M0 0l72.457 72.457L0 144.913l72.457 72.457L0 289.826l72.457 72.456L0 434.739l72.457 72.456-36.229 36.229M72.457 0L0 72.457l72.457 72.457L0 217.37l72.457 72.457L0 362.282l72.457 72.457L0 507.195l36.229 36.229m72.457 0l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L72.457 0m72.457 0L72.457 72.457l72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.001l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L144.914 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.002l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L217.371 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229M18.113 54.343L0 36.229m54.342-18.115L36.229 0M18.113 18.114L36.228 0M126.8 18.114L108.686 0M90.571 18.114L108.686 0m90.571 18.114L181.143 0m0 0l-18.114 18.114m108.56 0L253.475 0M235.36 18.114L253.475 0m18.24 54.343l18.113-18.114m-271.715 90.57L0 108.685m271.715 18.114l18.113-18.114M18.113 199.256L0 181.142m271.715 18.114l18.113-18.114m-271.715 90.57L0 253.598m271.715 18.114l18.113-18.114M72.457 0v36.229L90.57 54.343m-36.029 0l17.916-18.114M144.914 0v36.229l18.113 18.114m-36.029 0l17.916-18.114M217.368 0v36.229l18.114 18.114M36.229 36.229v36.229l18.113 18.114m54.344-54.343v36.229L126.8 90.571m54.343-54.342v36.229l18.114 18.114M253.6 36.229v36.229l18.113 18.114m-72.262-36.229l17.917-18.114M72.457 72.457v36.229L90.57 126.8m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 144.913v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 217.37v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 289.827v36.229L90.57 344.17m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 362.282v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 434.739v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M18.313 90.571l17.916-18.114M90.77 90.571l17.916-18.114m54.541 18.114l17.916-18.114m54.541 18.114L253.6 72.457M36.229 108.685v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4 0l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0l17.916-18.114M36.229 181.142v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4-.001l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0L253.6 217.37M36.229 253.598v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M18.113 344.159L0 326.046m271.715 18.113l18.113-18.113M18.113 416.625L0 398.512m271.715 18.113l18.113-18.113M18.113 489.081L0 470.968m271.715 18.113l18.113-18.113M36.229 326.046v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115m90.373-18.115l-17.916 18.115M36.229 398.511v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M36.229 470.968v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115M72.457 507.195v36.229m72.457-36.229v36.229m72.457-36.229v36.229\");\r\n\r\n//         svg.appendChild(path);\r\n\r\n//         main.appendChild(svg);\r\n//     }\r\n\r\n\r\n   \r\n\r\n//     function footerFunc(){\r\n//         const p = document.createElement('p');\r\n//         p.textContent = 'Copyright © 2023 Cissty';\r\n\r\n//         const a = document.createElement('a');\r\n//         a.setAttribute('href', 'https://github.com/cissty')\r\n\r\n//         const i = document.createElement('i');\r\n//         i.setAttribute('class', 'fab fa-github');\r\n//         i.setAttribute('aria-hidden', 'true');\r\n\r\n//         a.appendChild(i)\r\n\r\n//         p.appendChild(a);\r\n\r\n//         footer.appendChild(p);\r\n//     }\r\n\r\n//     function menuFunc(){\r\n//         const menu = document.createElement('div');\r\n//         menu.setAttribute('class', 'menu');\r\n        \r\n//         for (let i = 0; i <= 7; i++){\r\n//             const createdDiv = document.createElement('div');\r\n//             createdDiv.setAttribute('class', 'menu-item');\r\n        \r\n//             menu.appendChild(createdDiv)\r\n//         }\r\n        \r\n//         main.appendChild(menu)\r\n//     }\r\n\r\n//     headerFunc();\r\n//     // addSvg();\r\n//     homeContent()\r\n//     // addSvg();\r\n//     footerFunc();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n    const menu = document.createElement(\"div\");\r\n    menu.classList.add(\"menu\");\r\n  \r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Barbecue beef burger\",\r\n        \"A classic beef burger with Pack blue cheese in the centre to make it a little more special\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Chicken shish kebabs\",\r\n        \"Offer some chilli sauce on the side for those who like heat, and serve with flatbread\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Maple-glazed hot wings\",\r\n        \"The sticky maple and butter glaze on these wings adds extra succulence\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Miso mushroom halloumi burgers\",\r\n        \"Tomato sauce, Bacon, Pineapple, Olives, Basil\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Piri-piri pork ribs\",\r\n        \"Pork ribs with smoky piri-piri spices and a sticky barbecue sauce.\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Spatchcock gochujang chicken\",\r\n        \"Forget run-of-the-mill sausages and and burgers\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Black bean veggie burger\",\r\n        \"Try making these satisfying veggie burgers as a meat-free treat\"\r\n      )\r\n    );\r\n    menu.appendChild(\r\n      createMenuItem(\r\n        \"Lamb kebab burger\",\r\n        \"Jazz up a shop-bought lamb burger with garlic mayo, gherkins and chilli for a hot and spicy twist.\"\r\n      )\r\n    );\r\n  \r\n    return menu;\r\n  }\r\n  \r\n  function createMenuItem(name, description) {\r\n    const menuItem = document.createElement(\"div\");\r\n    menuItem.classList.add(\"menu-item\");\r\n  \r\n    const foodName = document.createElement(\"h2\");\r\n    foodName.textContent = name;\r\n  \r\n    const foodDescription = document.createElement(\"p\");\r\n    foodDescription.textContent = description;\r\n  \r\n    const foodImage = document.createElement(\"img\");\r\n\r\n    const modifiedName = name.replace(/\\s+/g, '-');\r\n\r\n    foodImage.src = 'images/items/' + modifiedName + '.webp';\r\n    foodImage.alt = `${name}`;\r\n  \r\n    menuItem.appendChild(foodImage);\r\n    menuItem.appendChild(foodName);\r\n    menuItem.appendChild(foodDescription);\r\n  \r\n    return menuItem;\r\n  }\r\n  \r\n  function loadMenu() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createMenu());\r\n  }\r\n  \n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"header\");\r\n  header.appendChild(createNav());\r\n\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement(\"nav\");\r\n\r\n  const homeButton = document.createElement(\"button\");\r\n  homeButton.classList.add(\"button-nav\");\r\n  homeButton.textContent = \"Home\";\r\n  homeButton.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(homeButton);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const menuButton = document.createElement(\"button\");\r\n  menuButton.classList.add(\"button-nav\");\r\n  menuButton.textContent = \"Menu\";\r\n  menuButton.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(menuButton);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const contactButton = document.createElement(\"button\");\r\n  contactButton.classList.add(\"button-nav\");\r\n  contactButton.textContent = \"Contact\";\r\n  contactButton.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(contactButton);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  nav.appendChild(homeButton);\r\n  nav.appendChild(menuButton);\r\n  nav.appendChild(contactButton);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n  const buttons = document.querySelectorAll(\".button-nav\");\r\n\r\n  buttons.forEach((button) => {\r\n    if (button !== this) {\r\n      button.classList.remove(\"active\");\r\n    }\r\n  });\r\n\r\n  button.classList.add(\"active\");\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"footer\");\r\n\r\n  const copyright = document.createElement(\"p\");\r\n  copyright.textContent = `Copyright © ${new Date().getFullYear()} Cissty`;\r\n\r\n  const githubLink = document.createElement(\"a\");\r\n  githubLink.href = \"https://github.com/cissty\";\r\n\r\n  const githubIcon = document.createElement(\"i\");\r\n  githubIcon.classList.add(\"fab\");\r\n  githubIcon.classList.add(\"fa-github\");\r\n\r\n  githubLink.appendChild(githubIcon);\r\n  footer.appendChild(copyright);\r\n  footer.appendChild(githubLink);\r\n\r\n  return footer;\r\n}\r\n\r\n\r\n\r\nfunction resizeBackgroundImage() {\r\n  let windowHeight = window.innerHeight;\r\n  let backgroundImage = document.querySelector('.content');\r\n  backgroundImage.style.height = windowHeight + 'px';\r\n}\r\n\r\n\r\n\r\nfunction initializeWebsite() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  setActiveButton(document.querySelector(\".button-nav\"));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  window.addEventListener('resize', function() {\r\n    resizeBackgroundImage();\r\n  });\r\n  resizeBackgroundImage();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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