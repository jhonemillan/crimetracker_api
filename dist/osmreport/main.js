(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app-routing.module.ts":
/*!***********************************!*\
  !*** ./src/app-routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _app_components_map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _app_components_socialauth_socialauth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/socialauth/socialauth.component */ "./src/app/components/socialauth/socialauth.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/components/home/home.component */ "./src/app/components/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
    { path: 'login', component: _app_components_socialauth_socialauth_component__WEBPACK_IMPORTED_MODULE_1__["SocialauthComponent"], pathMatch: 'full' },
    { path: 'map', component: _app_components_map_map_component__WEBPACK_IMPORTED_MODULE_0__["MapComponent"], pathMatch: 'full' },
    { path: 'map/:id', component: _app_components_map_map_component__WEBPACK_IMPORTED_MODULE_0__["MapComponent"], pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  .rightalign{\n    flex: 1 1 auto;\n  }\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.clickLogin = function () {
        this.router.navigateByUrl('/login');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_socialauth_socialauth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/socialauth/socialauth.component */ "./src/app/components/socialauth/socialauth.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-routing.module */ "./src/app-routing.module.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_socialauth_socialauth_component__WEBPACK_IMPORTED_MODULE_8__["SocialauthComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .rightalign{\n    flex: 1 1 auto;\n  }\n  "

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Crime Tracker</span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"rightalign\"></span>\n\n  <button mat-button (click) = 'clickLogin()' *ngIf=\"!enabled\" >Login</button>\n  <button mat-button (click) = 'clickLogout()' *ngIf=\"enabled\" >Logout</button>\n</mat-toolbar>\n\n<!-- https://loiane.com/2017/08/angular-hide-navbar-login-page/ -->"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn$ = this.auth.isLoggedIn;
        this.isLoggedIn$.subscribe(function (data) {
            _this.enabled = data;
            console.log('result', data);
        });
    };
    HeaderComponent.prototype.clickLogin = function () {
        this.router.navigateByUrl('/login');
    };
    HeaderComponent.prototype.clickLogout = function () {
        window.localStorage.removeItem('id');
        this.auth.logout();
        this.router.navigateByUrl('/');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Globals\n */\n\n/* Links */\n\na,\na:focus,\na:hover {\n  color: #fff;\n}\n\n/* Custom default button */\n\n.btn-secondary,\n.btn-secondary:hover,\n.btn-secondary:focus {\n  color: #333;\n  text-shadow: none; /* Prevent inheritance from `body` */\n  background-color: #fff;\n  border: .05rem solid #fff;\n}\n\n/*\n * Base structure\n */\n\nhtml,\nbody {\n  height: 100%;\n  background-color: #333;\n}\n\nbody {\n  display: flex;\n  color: #fff;\n  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\n  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\n}\n\n.cover-container {\n  max-width: 42em;\n}\n\n/*\n * Header\n */\n\n.masthead {\n  margin-bottom: 2rem;\n}\n\n.masthead-brand {\n  margin-bottom: 0;\n}\n\n.nav-masthead .nav-link {\n  padding: .25rem 0;\n  font-weight: 700;\n  color: rgba(255, 255, 255, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n\n@media (min-width: 48em) {\n  .masthead-brand {\n    float: left;\n  }\n  .nav-masthead {\n    float: right;\n  }\n}\n\n/*\n * Cover\n */\n\n.cover {\n  padding: 0 1.5rem;\n}\n\n.cover .btn-lg {\n  padding: .75rem 1.25rem;\n  font-weight: 700;\n}\n\n/*\n * Footer\n */\n\n.mastfoot {\n  color: rgba(255, 255, 255, .5);\n}\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n    <meta name=\"description\" content=\"\">\n    <meta name=\"author\" content=\"\">\n    <link rel=\"icon\" href=\"../../../../favicon.ico\">\n\n    <title>Cover Template for Bootstrap</title>\n\n    <!-- Custom styles for this template -->\n   \n  </head>\n\n  <body class=\"text-center\">\n\n    <div class=\"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column\">\n     \n      <main role=\"main\" class=\"inner cover\">\n        <h1 class=\"cover-heading\">Puedes ayudar a otros</h1>\n        <p class=\"lead\">Si ves un crimen por pequeño que parezca, marcalo en el mapa para que puedas evitar que otra persona sea afectada en el futuro en el mismo lugar, o tu mismo puedes darte cuenta si en el lugar donde estas ha sido afectado por delincuencia. Solo inicia sesion y marca con un toque la ubicacion del incidente, deja un comentario descriptivo de lo que viste, y ya esta!. Te recuerdo que tus datos nunca seran compartidos. Esta app solo es informativa, no tiene ningun nexo con alguna entidad de seguridad ni privada ni del gobierno.</p>\n    \n      </main>\n\n    </div>\n  </body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n    height: 100%;\n    padding: 0;\n  }\n\n  div{\n    height: 90%;\n    width: 100%;\n  }"

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='map'></div>"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _services_operations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/operations.service */ "./src/app/services/operations.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = /** @class */ (function () {
    function MapComponent(location, auth, route, router, operations, zone, snackBar) {
        this.location = location;
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.operations = operations;
        this.zone = zone;
        this.snackBar = snackBar;
        this.title = 'app';
        this.myIcon = L.icon({
            iconUrl: 'assets/leaflet/images/marker-icon.png',
            shadowUrl: '../assets/leaflet/images/marker-shadow.png'
        });
        this.IconDanger = L.icon({
            iconUrl: 'assets/leaflet/images/pirates.png',
            shadowUrl: '../assets/leaflet/images/marker-shadow.png'
        });
        this.markersCount = 0;
        this.drawPoints();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getGeoLocation();
            _this.map = L.map('map').fitWorld();
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(_this.map);
            _this.addListenersEvent();
        });
        this.auth.login();
        var _id;
        this.route.paramMap.subscribe(function (params) {
            localStorage.setItem('id', params.get('id'));
        });
    };
    MapComponent.prototype.addListenersEvent = function () {
        var _this = this;
        this.map.locate({ setView: true, maxZoom: 16 })
            .on('locationfound', function (e) {
            _this.onLocationFound(e);
        });
        this.map.on('locationerror', function (e) {
            _this.onLocationError(e);
        });
        this.map.on('moveend', function (e) {
            _this.gettingBounds(e);
        });
        this.map.on('click', function (e) {
            _this.onClickMap(e);
        });
    };
    MapComponent.prototype.gettingBounds = function (e) {
        var _this = this;
        this.zone.run(function () {
            var southWest = _this.map.getBounds().getSouthWest();
            var southEast = _this.map.getBounds().getSouthEast();
            var northWest = _this.map.getBounds().getNorthWest();
            var northEast = _this.map.getBounds().getNorthEast();
            var bounds = [southWest, southEast, northEast, northWest];
            var boundsMap = {
                geometry: {
                    type: 'Polygon',
                    coordinates: [[southWest.lng, southWest.lat],
                        [southEast.lng, southEast.lat],
                        [northEast.lng, northEast.lat],
                        [northWest.lng, northWest.lat]
                    ]
                }
            };
        });
    };
    MapComponent.prototype.onLocationFound = function (e) {
        var marker1 = L.marker([e.latitude, e.longitude], { icon: this.myIcon });
        marker1.addTo(this.map);
        this.map.setZoom(16);
    };
    MapComponent.prototype.onLocationError = function (e) {
        console.log(e.message);
    };
    MapComponent.prototype.onClickMap = function (e) {
        var _this = this;
        this.markersCount++;
        var marker1 = L.marker([e.latlng.lat, e.latlng.lng], { icon: this.IconDanger });
        var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent('<p><input type="text" id="message' + this.markersCount.toString() + '"/> <button id="sendlocation' + this.markersCount.toString() + '">Send </button></p>');
        marker1.bindPopup(popup);
        marker1.addTo(this.map).openPopup();
        var button = document.getElementById('sendlocation' + this.markersCount.toString());
        button.onclick = function () {
            var message = document.getElementById('message' + _this.markersCount.toString());
            var comment = message.value;
            _this.savePointInDB(e.latlng.lat, e.latlng.lng, comment);
            marker1.closePopup();
        };
    };
    MapComponent.prototype.savePointInDB = function (lat, lng, comment) {
        var _this = this;
        var newPoint = {
            user_id: localStorage.getItem("id"),
            comment: comment,
            date: new Date(),
            location: {
                type: 'Point',
                lat: lat,
                lng: lng
            }
        };
        this.operations.addPoint(newPoint).subscribe(function (res) {
            _this.openSnackBar("Your report has been saved", "");
        });
    };
    MapComponent.prototype.drawPoints = function () {
        var _this = this;
        this.operations.getAllPoints().subscribe(function (points) {
            points.forEach(function (item) {
                var pointer = L.latLng(item.location.lat, item.location.lng);
                var marker = L.marker([pointer.lat, pointer.lng], { icon: _this.IconDanger });
                var popup = L.popup()
                    .setContent('<div class="alert alert-primary" role="alert"><strong>' + new Date(item.date).toLocaleDateString() + '</strong><br>' + item.comment + '</div>');
                marker.bindPopup(popup);
                marker.addTo(_this.map);
            });
        });
    };
    MapComponent.prototype.getGeoLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.SetLocation(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MapComponent.prototype.SetLocation = function (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    };
    MapComponent.prototype.ErrorLocation = function () {
        this.openSnackBar("Error trying to get coords", "undo");
    };
    MapComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, "", {
            duration: 2000,
        });
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_operations_service__WEBPACK_IMPORTED_MODULE_0__["OperationsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/socialauth/socialauth.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/socialauth/socialauth.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\");\n\n.social-btns{\n    font-size: 22px;\n    list-style: none;\n}\n\n.social-btns li{\n    margin-bottom: 5px;\n}\n\n.social-btns li i{\n    font-size: 22px;\n}\n\n.social-btns .btn-facebook {\n  background-color: #38519f;\n  border-color: #293b75;\n  color: #ffffff;\n  min-width: 250px;\n}\n\n.social-btns .btn-facebook:hover {\n  color: #ffffff;\n  background-color: #293b75;\n}\n\n.social-btns .btn-twitter {\n  background-color: #00a8fa;\n  border-color: #048cce;\n  color: #ffffff;\n  min-width: 250px;\n}\n\n.social-btns .btn-twitter:hover {\n  color: #ffffff;\n  background-color: #048cce;\n}\n\n.social-btns .btn-linkedin {\n  background-color: #00629e;\n  border-color: #044a75;\n  color: #ffffff;\n  min-width: 250px;\n}\n\n.social-btns .btn-linkedin:hover {\n  color: #ffffff;\n  background-color: #044a75;\n}\n\n.social-btns .btn-google {\n  background-color: #df270b;\n  border-color: #a01b03;\n  color: #ffffff;\n  min-width: 250px;\n}\n\n.social-btns .btn-google:hover {\n  color: #ffffff;\n  background-color: #a01b03;\n}\n\n.social-btns .btn-tumblr{\n    background-color: #274665;\n    border-color: #182b3d;\n    color: #ffffff;\n    min-width: 250px;\n}\n\n.social-btns .btn-tumblr:hover {\n  color: #ffffff;\n  background-color: #182b3d;\n}\n\n.social-btns .btn-pinterest{\n    background-color: #cc0000;\n    border-color: #9b0404;\n    color: #ffffff;\n    min-width: 250px;\n}\n\n.social-btns .btn-pinterest:hover {\n  color: #ffffff;\n  background-color: #9b0404;\n}"

/***/ }),

/***/ "./src/app/components/socialauth/socialauth.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/socialauth/socialauth.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n<div class=\"row\">\n  \n</div>\n  <form class=\"col-md-12\">\n    <div class=\"row text-center\">\n        <div class=\"col-md-4 col-sm-12\">\n            <button type=\"button\" class=\"btn btn-primary btn-block\">Facebook</button>\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n            <button type=\"button\" class=\"btn btn-info btn-block\">Twitter</button>\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n            <button type=\"button\" onclick=\"location.href='http://localhost:3000/auth/google';\" class=\"btn btn-danger btn-block\">Google+</button>\n        </div>\n    </div>\n    <hr />\n    <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Email\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control input-lg\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control input-lg\" placeholder=\"Confirm Password\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-lg btn-block\">Sign In</button>\n    </div>\n  </form>\n</div>\n\n      \n"

/***/ }),

/***/ "./src/app/components/socialauth/socialauth.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/socialauth/socialauth.component.ts ***!
  \***************************************************************/
/*! exports provided: SocialauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialauthComponent", function() { return SocialauthComponent; });
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialauthComponent = /** @class */ (function () {
    function SocialauthComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    SocialauthComponent.prototype.ngOnInit = function () {
    };
    SocialauthComponent.prototype.login = function () {
        window.location.href = 'auth/google';
    };
    SocialauthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-socialauth',
            template: __webpack_require__(/*! ./socialauth.component.html */ "./src/app/components/socialauth/socialauth.component.html"),
            styles: [__webpack_require__(/*! ./socialauth.component.css */ "./src/app/components/socialauth/socialauth.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]])
    ], SocialauthComponent);
    return SocialauthComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function () {
        this.loggedIn.next(true);
    };
    AuthenticationService.prototype.logout = function () {
        this.loggedIn.next(false);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/operations.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/operations.service.ts ***!
  \************************************************/
/*! exports provided: OperationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsService", function() { return OperationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperationsService = /** @class */ (function () {
    function OperationsService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    OperationsService.prototype.addPoint = function (point) {
        return this.http.post(this.baseUrl + '/map/add', point);
    };
    OperationsService.prototype.getAllPoints = function () {
        return this.http.get(this.baseUrl + '/map/all');
    };
    OperationsService.prototype.getUser = function () {
        return this.http.get(this.baseUrl + '/auth/getuser');
    };
    OperationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OperationsService);
    return OperationsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jem/Documents/Dev/Angular/osmcrimetracker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map