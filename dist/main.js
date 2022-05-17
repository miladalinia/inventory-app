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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_CategoryView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/CategoryView */ \"./src/js/CategoryView.js\");\n/* harmony import */ var _js_ProductView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ProductView */ \"./src/js/ProductView.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  _js_CategoryView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setApp();\n  _js_ProductView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setApp();\n  console.log(_js_ProductView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  _js_CategoryView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createCategoriesList();\n  _js_ProductView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createProductsList(_js_ProductView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products);\n  _js_ProductView__WEBPACK_IMPORTED_MODULE_1__[\"default\"].productsCount();\n});\n\n//# sourceURL=webpack://inventory-app/./src/index.js?");

/***/ }),

/***/ "./src/js/CategoryView.js":
/*!********************************!*\
  !*** ./src/js/CategoryView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/js/Storage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar categoryTitle = document.querySelector(\"#category-title\");\nvar addNewCategoryBtn = document.querySelector(\"#add-new-category\");\nvar selectCategories = document.querySelector(\"#selectCategories\");\nvar toggleAddCategoryBtn = document.getElementById(\"toggle-add-category\");\nvar categoryWrapper = document.getElementById(\"category-wrapper\");\nvar cancelAddCategoryBtn = document.querySelector(\"#cancel-add-category-btn\");\n\nvar CategoryView = /*#__PURE__*/function () {\n  function CategoryView() {\n    var _this = this;\n\n    _classCallCheck(this, CategoryView);\n\n    addNewCategoryBtn.addEventListener(\"click\", function (e) {\n      return _this.addNewCategory(e);\n    });\n    toggleAddCategoryBtn.addEventListener(\"click\", function (e) {\n      return _this.toggleAddCategory(e);\n    });\n    cancelAddCategoryBtn.addEventListener(\"click\", function (e) {\n      return _this.cancelAddCategoryBtn(e);\n    });\n    this.categories = [];\n  }\n\n  _createClass(CategoryView, [{\n    key: \"addNewCategory\",\n    value: function addNewCategory(e) {\n      e.preventDefault();\n      var title = categoryTitle.value;\n      if (!title) return;\n      _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveCategories({\n        title: title\n      });\n      this.categories = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllCategories(); //update DOM\n\n      this.createCategoriesList();\n      categoryTitle.value = '';\n      categoryWrapper.classList.add(\"hidden\");\n      toggleAddCategoryBtn.classList.remove(\"hidden\");\n    }\n  }, {\n    key: \"setApp\",\n    value: function setApp() {\n      this.categories = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllCategories();\n    }\n  }, {\n    key: \"createCategoriesList\",\n    value: function createCategoriesList() {\n      var result = \"<option class=\\\"bg-slate-500 text-slate-300\\\" value=\\\"\\\">Select a category</option>\";\n      this.categories.forEach(function (element) {\n        result += \"<option class=\\\"bg-slate-500 text-slate-300\\\" value=\\\"\".concat(element.id, \"\\\">\").concat(element.title, \"</option>\");\n      });\n      selectCategories.innerHTML = result;\n    }\n  }, {\n    key: \"toggleAddCategory\",\n    value: function toggleAddCategory(e) {\n      e.preventDefault();\n      toggleAddCategoryBtn.classList.add(\"hidden\");\n      categoryWrapper.classList.remove(\"hidden\");\n    }\n  }, {\n    key: \"cancelAddCategoryBtn\",\n    value: function cancelAddCategoryBtn(e) {\n      e.preventDefault();\n      toggleAddCategoryBtn.classList.remove(\"hidden\");\n      categoryWrapper.classList.add(\"hidden\");\n    }\n  }]);\n\n  return CategoryView;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new CategoryView());\n\n//# sourceURL=webpack://inventory-app/./src/js/CategoryView.js?");

/***/ }),

/***/ "./src/js/ProductView.js":
/*!*******************************!*\
  !*** ./src/js/ProductView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/js/Storage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar addNewProductBtn = document.querySelector(\"#add-new-product\");\nvar productTitle = document.querySelector(\"#product-title\");\nvar productDescription = document.querySelector(\"#product-description\");\nvar productQuantity = document.querySelector(\"#product-quantity\");\nvar selectedCategories = document.querySelector(\"#selectCategories\");\nvar searchInput = document.querySelector(\"#search-input\");\nvar sortProducts = document.querySelector(\"#sort-products\");\nvar productsList = document.querySelector(\"#products-list\");\n\nvar ProductView = /*#__PURE__*/function () {\n  function ProductView() {\n    var _this = this;\n\n    _classCallCheck(this, ProductView);\n\n    addNewProductBtn.addEventListener(\"click\", function (e) {\n      return _this.addNewProduct(e);\n    });\n    searchInput.addEventListener(\"input\", function (e) {\n      return _this.searchProducts(e);\n    });\n    sortProducts.addEventListener(\"change\", function (e) {\n      return _this.sortProducts(e);\n    });\n    this.products = [];\n  }\n\n  _createClass(ProductView, [{\n    key: \"addNewProduct\",\n    value: function addNewProduct(e) {\n      e.preventDefault();\n      var title = productTitle.value;\n      var description = productDescription.value;\n      var quantity = productQuantity.value;\n      var category = selectedCategories.value;\n      if (!title || !description || !quantity) return;\n      _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProducts({\n        title: title,\n        description: description,\n        quantity: quantity,\n        category: category\n      });\n      this.products = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProducts(); //update DOM\n\n      this.createProductsList(this.products);\n      productTitle.value = '';\n      productDescription.value = '';\n      productQuantity.value = '';\n    }\n  }, {\n    key: \"setApp\",\n    value: function setApp() {\n      this.products = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProducts();\n    }\n  }, {\n    key: \"createProductsList\",\n    value: function createProductsList(products) {\n      var _this2 = this;\n\n      var result = '';\n      products.forEach(function (item) {\n        var selectedCategory = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllCategories().find(function (c) {\n          return c.id === parseInt(item.category);\n        });\n        result += \"<div class=\\\"flex items-center justify-between mb-2\\\">\\n                    <span class=\\\"text-slate-500\\\">\".concat(item.title, \"</span>\\n                    <div class=\\\"flex items-center gap-x-3\\\">\\n                        <span class=\\\"text-slate-400\\\">\").concat(new Date().toLocaleDateString(\"fa-IR\"), \"</span>\\n                        <span class=\\\"block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl\\\">\").concat(selectedCategory.title, \"</span>\\n                        <span class=\\\"flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300\\\">\").concat(item.quantity, \"</span>\\n                        <button data-product-id=\\\"\").concat(item.id, \"\\\" class=\\\"delete-product border-2 bg-transparent text-slate-600 px-2 py-0.5 rounded-2xl border-red-400 mb-1\\\">delete</button>\\n                    </div>\\n                </div>\");\n      });\n      productsList.innerHTML = result;\n      var deleteBtns = document.querySelectorAll(\".delete-product\"); // console.log(deleteBtns)\n\n      deleteBtns.forEach(function (deleteBtn) {\n        deleteBtn.addEventListener(\"click\", function (e) {\n          return _this2.deleteProduct(e);\n        });\n      });\n    }\n  }, {\n    key: \"productsCount\",\n    value: function productsCount() {\n      var count = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProducts().length;\n      var productsCount = document.querySelector(\"#productsCount\");\n      productsCount.innerText = count;\n    }\n  }, {\n    key: \"searchProducts\",\n    value: function searchProducts(e) {\n      var value = e.target.value.trim().toLowerCase();\n      var filteredProducts = this.products.filter(function (product) {\n        return product.title.toLowerCase().includes(value);\n      });\n      this.createProductsList(filteredProducts);\n    }\n  }, {\n    key: \"sortProducts\",\n    value: function sortProducts(e) {\n      var value = e.target.value;\n      this.products = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProducts(value);\n      this.createProductsList(this.products);\n    }\n  }, {\n    key: \"deleteProduct\",\n    value: function deleteProduct(e) {\n      var productId = e.target.dataset.productId;\n      _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProduct(productId);\n      this.products = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProducts();\n      this.createProductsList(this.products);\n    }\n  }]);\n\n  return ProductView;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ProductView());\n\n//# sourceURL=webpack://inventory-app/./src/js/ProductView.js?");

/***/ }),

/***/ "./src/js/Storage.js":
/*!***************************!*\
  !*** ./src/js/Storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n//localstorage\nvar Storage = /*#__PURE__*/function () {\n  function Storage() {\n    _classCallCheck(this, Storage);\n  }\n\n  _createClass(Storage, null, [{\n    key: \"getAllProducts\",\n    value: function getAllProducts() {\n      var sort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"newest\";\n      var savedProducts = JSON.parse(localStorage.getItem(\"products\")) || [];\n      return savedProducts.sort(function (a, b) {\n        if (sort === \"newest\") {\n          return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;\n        } else if (sort === \"oldest\") {\n          return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;\n        }\n      });\n    }\n  }, {\n    key: \"saveProducts\",\n    value: function saveProducts(productToSave) {\n      var savedProducts = Storage.getAllProducts();\n      var existedItem = savedProducts.find(function (product) {\n        return product.id === productToSave.id;\n      });\n\n      if (existedItem) {\n        //edit\n        existedItem.title = productToSave.title;\n        existedItem.description = productToSave.description;\n        existedItem.category = productToSave.category;\n        existedItem.quantity = productToSave.quantity;\n      } else {\n        //push\n        productToSave.id = new Date().getTime();\n        productToSave.createdAt = new Date().toISOString();\n        savedProducts.push(productToSave);\n      }\n\n      localStorage.setItem(\"products\", JSON.stringify(savedProducts));\n    }\n  }, {\n    key: \"getAllCategories\",\n    value: function getAllCategories() {\n      var savedcategories = JSON.parse(localStorage.getItem(\"categories\")) || [];\n      return savedcategories.sort(function (a, b) {\n        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;\n      });\n    }\n  }, {\n    key: \"saveCategories\",\n    value: function saveCategories(categoryToSave) {\n      var savedcategories = Storage.getAllCategories();\n      var existedItem = savedcategories.find(function (category) {\n        return category.id === categoryToSave.id;\n      });\n\n      if (existedItem) {\n        //edit\n        existedItem.title = categoryToSave.title;\n      } else {\n        //push\n        categoryToSave.id = new Date().getTime();\n        categoryToSave.createdAt = new Date().toISOString();\n        savedcategories.push(categoryToSave);\n      }\n\n      localStorage.setItem(\"categories\", JSON.stringify(savedcategories));\n    }\n  }, {\n    key: \"deleteProduct\",\n    value: function deleteProduct(id) {\n      var savedProducts = Storage.getAllProducts();\n      var filteredProducts = savedProducts.filter(function (product) {\n        return product.id !== parseInt(id);\n      });\n      localStorage.setItem(\"products\", JSON.stringify(filteredProducts));\n    }\n  }]);\n\n  return Storage;\n}();\n\n\n\n//# sourceURL=webpack://inventory-app/./src/js/Storage.js?");

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