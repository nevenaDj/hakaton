webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var ngx_rating_1 = __webpack_require__("../../../../ngx-rating/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var main_component_1 = __webpack_require__("../../../../../src/app/main/main.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/register/register.component.ts");
var posts_component_1 = __webpack_require__("../../../../../src/app/posts/posts.component.ts");
var user_profile_component_1 = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
var post_service_1 = __webpack_require__("../../../../../src/app/posts/post.service.ts");
var post_details_component_1 = __webpack_require__("../../../../../src/app/post-details/post-details.component.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user-profile/user.service.ts");
var token_interceptor_service_1 = __webpack_require__("../../../../../src/app/token-interceptor.service.ts");
var comment_service_1 = __webpack_require__("../../../../../src/app/post-details/comment.service.ts");
var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        return _this;
    }
    return CustomOption;
}(ng2_toastr_1.ToastOptions));
exports.CustomOption = CustomOption;
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: main_component_1.MainComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: user_profile_component_1.UserProfileComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                main_component_1.MainComponent,
                register_component_1.RegisterComponent,
                posts_component_1.PostsComponent,
                user_profile_component_1.UserProfileComponent,
                post_details_component_1.PostDetailsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_toastr_1.ToastModule.forRoot(),
                ngx_rating_1.RatingModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                )
            ],
            providers: [
                auth_service_1.AuthService,
                post_service_1.PostService,
                user_service_1.UserService,
                comment_service_1.CommentService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/login/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (username, password) {
        return this.http
            .post('/api/login', { username: username, password: password }, { responseType: 'text' })
            .toPromise()
            .then(function (res) { return localStorage.setItem('token', res); })
            .catch(this.handleError);
    };
    AuthService.prototype.signup = function (user) {
        return this.http
            .post('/api/signup', user)
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    AuthService.prototype.redirect = function () {
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['home']);
        }
    };
    AuthService.prototype.me = function () {
        return this.http
            .get('/api/me')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n\r\n@font-face {\r\n    font-family: Poppins-Regular;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Regular.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Medium;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Medium.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Bold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Bold.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-SemiBold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-SemiBold.ttf")) + "); \r\n  }\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ RESTYLE TAG ]*/\r\n\r\n* {\r\n\tmargin: 0px; \r\n\tpadding: 0px; \r\n\t-webkit-box-sizing: border-box; \r\n\t        box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n\theight: 100%;\r\n\tfont-family: Poppins-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n\tmargin: 0px;\r\n}\r\n\r\np {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\nul, li {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ninput:focus:-moz-placeholder { color:transparent; }\r\n\r\ninput:focus::-moz-placeholder { color:transparent; }\r\n\r\ninput:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ninput::-webkit-input-placeholder { color: #fff;}\r\n\r\ninput:-moz-placeholder { color: #fff;}\r\n\r\ninput::-moz-placeholder { color: #fff;}\r\n\r\ninput:-ms-input-placeholder { color: #fff;}\r\n\r\ntextarea::-webkit-input-placeholder { color: #fff;}\r\n\r\ntextarea:-moz-placeholder { color: #fff;}\r\n\r\ntextarea::-moz-placeholder { color: #fff;}\r\n\r\ntextarea:-ms-input-placeholder { color: #fff;}\r\n\r\nlabel {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\niframe {\r\n\tborder: none !important;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 13px;\r\n  color: #e5e5e5;\r\n  line-height: 1.5;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ login ]*/\r\n\r\n.limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 15px;\r\n  \r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;  \r\n  }\r\n\r\n.container-login100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(255,255,255,0.9);\r\n  }\r\n\r\n.wrap-login100 {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 55px 55px 37px 55px;\r\n  \r\n    background: #9152f8;\r\n    background:  -webkit-gradient(linear,left top, left bottom,from(#060238), to(#2578bb86));\r\n    background:  linear-gradient(to bottom,#060238, #2578bb86);\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Form ]*/\r\n\r\n.login100-form {\r\n    width: 100%;\r\n  }\r\n\r\n.login100-form-logo {\r\n    font-size: 60px; \r\n    color: #333333;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.login100-form-title {\r\n    font-family: Poppins-Medium;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  \r\n    display: block;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Input ]*/\r\n\r\n.wrap-input100 {\r\n    width: 100%;\r\n    position: relative;\r\n    border-bottom: 2px solid rgba(255,255,255,0.24);\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n.input100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    background: transparent;\r\n    padding: 0 5px 0 38px;\r\n  }\r\n\r\n/*---------------------------------------------*/\r\n\r\n.focus-input100 {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n  }\r\n\r\n.focus-input100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -2px;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  \r\n    background: #fff;\r\n  }\r\n\r\n.focus-input100::after {\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 22px;\r\n    color: #fff;\r\n  \r\n    content: attr(data-placeholder);\r\n    display: block;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 0px;\r\n    padding-left: 5px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.input100:focus {\r\n    padding-left: 5px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 {\r\n    padding-left: 5px;\r\n  }\r\n\r\n/*==================================================================\r\n[ Restyle Checkbox ]*/\r\n\r\n.contact100-form-checkbox {\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n.input-checkbox100 {\r\n    display: none;\r\n  }\r\n\r\n.label-checkbox100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    position: relative;\r\n    padding-left: 26px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.label-checkbox100::before {\r\n    content: \"\\F26B\";\r\n    font-family: Material-Design-Font;\r\n    font-size: 13px;\r\n    color: transparent;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    left: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n  }\r\n\r\n.input-checkbox100:checked + .label-checkbox100::before {\r\n    color: #555555;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Button ]*/\r\n\r\n.container-login100-form-btn {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n.login100-form-btn {\r\n    font-family: Poppins-Medium;\r\n    font-size: 16px;\r\n    color: #555555;\r\n    line-height: 1.2;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 20px;\r\n    min-width: 120px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n  \r\n    background: #9152f8;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#060238), to(#2578bb86));\r\n    background: linear-gradient(to bottom, #060238, #2578bb86);\r\n    position: relative;\r\n    z-index: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 25px;\r\n    background-color: #fff;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn:hover {\r\n    color: #fff;\r\n  }\r\n\r\n.login100-form-btn:hover:before {\r\n    opacity: 0;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n    .wrap-login100 {\r\n      padding: 55px 15px 37px 15px;\r\n    }\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n.validate-input {\r\n    position: relative;\r\n  }\r\n\r\n.alert-validate::before {\r\n    content: attr(data-validate);\r\n    position: absolute;\r\n    max-width: 70%;\r\n    background-color: #fff;\r\n    border: 1px solid #c80000;\r\n    border-radius: 2px;\r\n    padding: 4px 25px 4px 10px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 0px;\r\n    pointer-events: none;\r\n  \r\n    font-family: Poppins-Regular;\r\n    color: #c80000;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n  \r\n    -webkit-transition: opacity 0.4s;\r\n    transition: opacity 0.4s;\r\n  }\r\n\r\n.alert-validate::after {\r\n    content: \"\\F12A\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    color: #c80000;\r\n  \r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 5px;\r\n  }\r\n\r\n.alert-validate:hover:before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .alert-validate::before {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n  <div class=\"container-login100\" style=\"background-image: url('assets/1.jpg');\">\n    <div class=\"wrap-login100\">\n      <form name=\"form\" (ngSubmit)=\"login()\" class=\"login100-form validate-form\">\n        <span class=\"login100-form-logo\">\n          <i class=\"fa fa-expeditedssl\" aria-hidden=\"true\"></i>\n        </span>\n        <br>\n        <span class=\"login100-form-title p-b-34 p-t-27\">\n          Log in\n        </span>\n\n        <div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n          <input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Username\">\n          <span class=\"focus-input100\" > <i class=\"glyphicon glyphicon-user\"></i> </span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass\" placeholder=\"Password\">\n          <span class=\"focus-input100\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n        </div>\n\n        <div class=\"contact100-form-checkbox\">\n        </div>\n\n        <div class=\"container-login100-form-btn\">\n          <button type=\"submit\" class=\"login100-form-btn\">\n            Log in\n          </button>\n        </div>\n        <br>\n        <div class=\"text-center p-t-90\">\n          <a class=\"txt1\" href=\"#/register\" >\n            Registration\n          </a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr, vcr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        this.user = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        localStorage.removeItem('token');
        this.auth.login(this.user.username, this.user.password)
            .then(function (res) { return _this.router.navigate(['home']); })
            .catch(function (res) { return _this.toastr.error('Incorrect username or pasword.'); });
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigate(['register']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    padding-top: 90px;\r\n}\r\n\r\nimg {\r\n    width: 190px;\r\n    height: 125px;\r\n    position: center;\r\n    padding-left: 3px;\r\n    padding-bottom: 30px\r\n}\r\n\r\nh1 {\r\n\tpadding-left: 27pt;\r\n}\r\n\r\nlabel {\r\n\tfont-size: 16px;\r\n\tpadding-left: 7pt;\r\n}\r\n\r\n.paragraph {\r\n\tborder-color: #ccc;\r\n\t-webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\r\n\tbox-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\r\n\ttext-justify: auto;\r\n\tpadding-left: 10px;\r\n\tpadding-top: 7px;\r\n\tpadding-top: 7px;\r\n}\r\n\r\n.panel-login {\r\n\tborder-color: #ccc;\r\n\t-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n.panel-login>.panel-heading {\r\n\tcolor: rgb(230, 118, 118);\r\n\tbackground-color: #fff;\r\n\tborder-color: #fff;\r\n\ttext-align:center;\r\n}\r\n\r\n.panel-login>.panel-heading a{\r\n\ttext-decoration: none;\r\n\tcolor: #666;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\t-webkit-transition: all 0.1s linear;\r\n\ttransition: all 0.1s linear;\r\n}\r\n\r\n.panel-login>.panel-heading a.active{\r\n\tcolor: rgb(209, 8, 8);\r\n\tfont-size: 18px;\r\n}\r\n\r\n.panel-login>.panel-heading hr{\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tclear: both;\r\n\tborder: 0;\r\n\theight: 1px;\r\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\r\n}\r\n\r\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\r\n\theight: 45px;\r\n\tborder: 1px solid #ddd;\r\n\tfont-size: 16px;\r\n\t-webkit-transition: all 0.1s linear;\r\n\ttransition: all 0.1s linear;\r\n}\r\n\r\n.panel-login input:hover,\r\n.panel-login input:focus {\r\n\toutline:none;\r\n\t-webkit-box-shadow: none;\r\n\tbox-shadow: none;\r\n\tborder-color: #ccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n\t<div class=\"container\" >\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\">AppAche</a>\n\t\t</div>\n\t\t<div id=\"navbar\" class=\"navbar-collapse collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li class=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\n\t\t\t\t<li><a [routerLink]=\"['/profile']\">Profile</a></li>\n                <li class=\"pull-right\"><a (click)=\"logout()\">Log out</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n<div class=\"container\" role=\"main\" style=\"padding-top: 7%;\">\n        <div class=\"col-md-8\">\n                <form class=\"form-inline\">\n                    <button type=\"submit\" class=\"btn btn-primary mb-2 col-md-offset-1 pull-right\" (click)=\"moveRight()\">\n                        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                    </button>\n                    <h4 class=\"mb-2 pull-right col-md-offset-1\" style=\"height: 25px; font-size: 14pt;\"> Page: {{page+1}} </h4>\n                    <button type=\"submit\" class=\"btn btn-primary mb-2  pull-right\" (click)=\"moveLeft()\">\n                        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                    </button>\n                  </form>\n            </div>              \n          <div class=\"row\" *ngFor=\"let post of posts\">\n              <div class=\"col-md-8 col-md-offset-1\">\n                  <div class=\"panel panel-login\">\n                          <h3 style=\"padding-left: 14pt;\">User: {{post.user.username}}</h3>\n                          <h4 style=\"padding-left: 14pt;\">Time and location: {{post.time}}, {{post.date}}, {{post.location}}</h4>\n                           <!-- rating with custom titles -->\n                         <rating [(ngModel)]=\"rating\" (click)=\"addRating(post.id)\"  [readonly]=\"flag\"  [disabled]=\"flag\"\n                            [titles]=\"['one', 'two', 'three', 'four', 'five']\"></rating> ({{post.rating}})\n                \n                          <div class=\"panel-body\">\n                          <div class=\"row\">\n                              <div class=\"col-lg-12\">\n                                  <form id=\"project-form\"  method=\"post\" role=\"form\" style=\"display: block;\">\n                                      <div class=\"form-group\">\n                                        <p class=\"paragraph\">{{post.text}}</p>\n                                      </div>\n                                      <div class=\"form-group\" style=\"padding-left: 10%; padding-right:10%\">\n                                            <h4>Comments: </h4>\n                                            <div class=\"paragraph\" *ngFor=\"let comment of post.comments\">\n                                                <div class=\"form-group\">\n                                                    <p style=\"padding-top: 4px;\">User: {{comment.user.username}}</p>\n                                                    <p class=\"comments\" style=\"padding-bottom: 7px; padding-top: 7px\">{{comment.text}}</p>\n                                                </div>\n                                            </div>\n                                      </div>\n                                      <br>\n                                      <div class=\"input-group\">\n                                            <input type=\"text\" name=\"addComm\" id=\"addComm\" tabindex=\"2\" class=\"form-control\" placeholder=\"Add comment\" [(ngModel)]=\"text\">\n                                            <span class=\"input-group-btn\" style=\"height: 50px\">\n                                                <button class=\"btn btn-primary\" type=\"button\" style=\"height: 40px; width: 80px;\" (click)=\"add(post.id)\">Comment</button>\n                                           </span>\n                                      </div>\n                                  </form>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>   \n    </div>\n\n<!--    <ul class=\"pager\">\n            <li [ngClass]=\"{disabled:currentPage === 0}\"><a (click)=\"nextLeft()\">&larr; Previous</a></li>\n            <li [ngClass]=\"{disabled:currentPage === maxSize - 1}\"><a (click)=\"nextRight()\">Next &rarr;</a></li>\n    </ul>-->"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var post_service_1 = __webpack_require__("../../../../../src/app/posts/post.service.ts");
var comment_service_1 = __webpack_require__("../../../../../src/app/post-details/comment.service.ts");
var MainComponent = /** @class */ (function () {
    function MainComponent(authService, postService, commentService) {
        this.authService = authService;
        this.postService = postService;
        this.commentService = commentService;
        this.page = 0;
        this.helper = 0;
        this.size = 10;
        this.flag = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.redirect();
        this.getPosts(this.page, this.size);
        this.postService.getSize().subscribe(function (size) {
            _this.maxSize = size;
        });
    };
    MainComponent.prototype.getPosts = function (page, size) {
        var _this = this;
        this.postService.findAll(page, size)
            .subscribe(function (posts) {
            _this.posts = posts['content'];
            console.log(posts);
            //this.maxSize = posts['totalPages'];
            //console.log(posts['totalPages']);
            //console.log(this.posts);
        });
    };
    MainComponent.prototype.add = function (id) {
        var _this = this;
        //alert(id);
        this.newComment = {
            text: this.text,
            date: '',
            time: '',
            post: null,
            user: null,
        };
        this.commentService.save(this.newComment, id).subscribe(function (post) { _this.getPosts(_this.page, _this.size); });
    };
    MainComponent.prototype.logout = function () {
        this.authService.logout();
    };
    MainComponent.prototype.addRating = function (id) {
        var _this = this;
        // alert(this.rating);
        this.flag = true;
        this.postService.addRating(this.rating, id)
            .subscribe(function (r) {
            _this.getPosts(_this.page, _this.size);
        });
    };
    MainComponent.prototype.moveLeft = function () {
        if (this.page > 0) {
            this.page--;
            this.getPosts(this.page, this.size);
        }
    };
    MainComponent.prototype.moveRight = function () {
        // this.helper = this.posts.length;
        //  var sum = this.helper/15;
        //  console.log(sum);
        var size_1 = this.maxSize / this.size;
        if (this.page < size_1 - 1) {
            this.page++;
            this.getPosts(this.page, this.size);
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            post_service_1.PostService,
            comment_service_1.CommentService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "../../../../../src/app/post-details/comment.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.findOne = function (id) {
        return this.http.get("/api/comments/" + id);
    };
    CommentService.prototype.findAll = function (page, size, id) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var httpParams = new http_1.HttpParams().set('page', page.toString()).set('size', size.toString());
        return this.http.get("/api/posts/" + id + "/comments", { params: httpParams });
    };
    CommentService.prototype.save = function (comment, id) {
        return this.http.post("/api/posts/" + id + "/comments", comment);
    };
    CommentService.prototype.update = function (comment, id) {
        return this.http.put("/api/comments/" + id, comment);
    };
    CommentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;


/***/ }),

/***/ "../../../../../src/app/post-details/post-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-details/post-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  post-details works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/post-details/post-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent() {
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-post-details',
            template: __webpack_require__("../../../../../src/app/post-details/post-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post-details/post-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;


/***/ }),

/***/ "../../../../../src/app/posts/post.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.findOne = function (id) {
        return this.http.get("/api/posts/" + id);
    };
    PostService.prototype.findAll = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var httpParams = new http_1.HttpParams().set('page', page.toString()).set('size', size.toString());
        return this.http.get('/api/posts/desc', { params: httpParams });
    };
    PostService.prototype.save = function (post) {
        return this.http.post('/api/posts', post);
    };
    PostService.prototype.update = function (post, id) {
        return this.http.put("/api/posts/" + id, post);
    };
    PostService.prototype.findAllPostsOfUsers = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var httpParams = new http_1.HttpParams().set('page', page.toString()).set('size', size.toString());
        return this.http.get('/api/posts/me', { params: httpParams });
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete("/api/posts/" + id);
    };
    PostService.prototype.addRating = function (rating, id) {
        return this.http.put("/api/posts/" + id + "/rating", { 'rating': rating });
    };
    PostService.prototype.getSize = function () {
        return this.http.get('/api/posts/size');
    };
    PostService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;


/***/ }),

/***/ "../../../../../src/app/posts/posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  posts works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/posts/posts.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            template: __webpack_require__("../../../../../src/app/posts/posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;


/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*//////////////////////////////////////////////////////////////////\r\n[ FONT ]*/\r\n\r\n@font-face {\r\n    font-family: Poppins-Regular;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Regular.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Medium;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Medium.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-Bold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-Bold.ttf")) + "); \r\n  }\r\n\r\n@font-face {\r\n    font-family: Poppins-SemiBold;\r\n    src: url(" + escape(__webpack_require__("../../../../../src/assets/Poppins-SemiBold.ttf")) + "); \r\n  }\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ RESTYLE TAG ]*/\r\n\r\n* {\r\n\tmargin: 0px; \r\n\tpadding: 0px; \r\n\t-webkit-box-sizing: border-box; \r\n\t        box-sizing: border-box;\r\n}\r\n\r\nbody, html {\r\n\theight: 100%;\r\n\tfont-family: Poppins-Regular, sans-serif;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\na {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n\ttransition: all 0.4s;\r\n\t-webkit-transition: all 0.4s;\r\n  -o-transition: all 0.4s;\r\n  -moz-transition: all 0.4s;\r\n}\r\n\r\na:focus {\r\n\toutline: none !important;\r\n}\r\n\r\na:hover {\r\n\ttext-decoration: none;\r\n  color: #fff;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n\tmargin: 0px;\r\n}\r\n\r\np {\r\n\tfont-family: Poppins-Regular;\r\n\tfont-size: 14px;\r\n\tline-height: 1.7;\r\n\tcolor: #666666;\r\n\tmargin: 0px;\r\n}\r\n\r\nul, li {\r\n\tmargin: 0px;\r\n\tlist-style-type: none;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\ninput {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\n\r\ntextarea {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\ntextarea:focus, input:focus {\r\n  border-color: transparent !important;\r\n}\r\n\r\ninput:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ninput:focus:-moz-placeholder { color:transparent; }\r\n\r\ninput:focus::-moz-placeholder { color:transparent; }\r\n\r\ninput:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-webkit-input-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus::-moz-placeholder { color:transparent; }\r\n\r\ntextarea:focus:-ms-input-placeholder { color:transparent; }\r\n\r\ninput::-webkit-input-placeholder { color: #fff;}\r\n\r\ninput:-moz-placeholder { color: #fff;}\r\n\r\ninput::-moz-placeholder { color: #fff;}\r\n\r\ninput:-ms-input-placeholder { color: #fff;}\r\n\r\ntextarea::-webkit-input-placeholder { color: #fff;}\r\n\r\ntextarea:-moz-placeholder { color: #fff;}\r\n\r\ntextarea::-moz-placeholder { color: #fff;}\r\n\r\ntextarea:-ms-input-placeholder { color: #fff;}\r\n\r\nlabel {\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n/*---------------------------------------------*/\r\n\r\nbutton {\r\n\toutline: none !important;\r\n\tborder: none;\r\n\tbackground: transparent;\r\n}\r\n\r\nbutton:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\niframe {\r\n\tborder: none !important;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ Utility ]*/\r\n\r\n.txt1 {\r\n  font-family: Poppins-Regular;\r\n  font-size: 13px;\r\n  color: #e5e5e5;\r\n  line-height: 1.5;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n[ login ]*/\r\n\r\n.limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 15px;\r\n  \r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 1;  \r\n  }\r\n\r\n.container-login100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(255,255,255,0.9);\r\n  }\r\n\r\n.wrap-login100 {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 55px 55px 37px 55px;\r\n  \r\n    background: #9152f8;\r\n    background:  -webkit-gradient(linear,left top, left bottom,from(#060238), to(#2578bb86));\r\n    background:  linear-gradient(to bottom,#060238, #2578bb86);\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Form ]*/\r\n\r\n.login100-form {\r\n    width: 100%;\r\n  }\r\n\r\n.login100-form-logo {\r\n    font-size: 60px; \r\n    color: #333333;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.login100-form-title {\r\n    font-family: Poppins-Medium;\r\n    font-size: 30px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n  \r\n    display: block;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Input ]*/\r\n\r\n.wrap-input100 {\r\n    width: 100%;\r\n    position: relative;\r\n    border-bottom: 2px solid rgba(255,255,255,0.24);\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n.input100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    background: transparent;\r\n    padding: 0 5px 0 38px;\r\n  }\r\n\r\n/*---------------------------------------------*/\r\n\r\n.focus-input100 {\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n  }\r\n\r\n.focus-input100::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: -2px;\r\n    left: 0;\r\n    width: 0;\r\n    height: 2px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  \r\n    background: #fff;\r\n  }\r\n\r\n.focus-input100::after {\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 22px;\r\n    color: #fff;\r\n  \r\n    content: attr(data-placeholder);\r\n    display: block;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 6px;\r\n    left: 0px;\r\n    padding-left: 5px;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.input100:focus {\r\n    padding-left: 5px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.input100:focus + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::after {\r\n    top: -22px;\r\n    font-size: 18px;\r\n  }\r\n\r\n.has-val.input100 + .focus-input100::before {\r\n    width: 100%;\r\n  }\r\n\r\n.has-val.input100 {\r\n    padding-left: 5px;\r\n  }\r\n\r\n/*==================================================================\r\n[ Restyle Checkbox ]*/\r\n\r\n.contact100-form-checkbox {\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    padding-bottom: 35px;\r\n  }\r\n\r\n.input-checkbox100 {\r\n    display: none;\r\n  }\r\n\r\n.label-checkbox100 {\r\n    font-family: Poppins-Regular;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    position: relative;\r\n    padding-left: 26px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.label-checkbox100::before {\r\n    content: \"\\F26B\";\r\n    font-family: Material-Design-Font;\r\n    font-size: 13px;\r\n    color: transparent;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    width: 16px;\r\n    height: 16px;\r\n    border-radius: 2px;\r\n    background: #fff;\r\n    left: 0;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n  }\r\n\r\n.input-checkbox100:checked + .label-checkbox100::before {\r\n    color: #555555;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Button ]*/\r\n\r\n.container-login100-form-btn {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n\r\n.login100-form-btn {\r\n    font-family: Poppins-Medium;\r\n    font-size: 16px;\r\n    color: #555555;\r\n    line-height: 1.2;\r\n  \r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0 20px;\r\n    min-width: 120px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n  \r\n    background: #9152f8;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#060238), to(#2578bb86));\r\n    background: linear-gradient(to bottom, #060238, #2578bb86);\r\n    position: relative;\r\n    z-index: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 25px;\r\n    background-color: #fff;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 1;\r\n  \r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n  }\r\n\r\n.login100-form-btn:hover {\r\n    color: #fff;\r\n  }\r\n\r\n.login100-form-btn:hover:before {\r\n    opacity: 0;\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n[ Responsive ]*/\r\n\r\n@media (max-width: 576px) {\r\n    .wrap-login100 {\r\n      padding: 55px 15px 37px 15px;\r\n    }\r\n  }\r\n\r\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\r\n\r\n.validate-input {\r\n    position: relative;\r\n  }\r\n\r\n.alert-validate::before {\r\n    content: attr(data-validate);\r\n    position: absolute;\r\n    max-width: 70%;\r\n    background-color: #fff;\r\n    border: 1px solid #c80000;\r\n    border-radius: 2px;\r\n    padding: 4px 25px 4px 10px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 0px;\r\n    pointer-events: none;\r\n  \r\n    font-family: Poppins-Regular;\r\n    color: #c80000;\r\n    font-size: 13px;\r\n    line-height: 1.4;\r\n    text-align: left;\r\n  \r\n    visibility: hidden;\r\n    opacity: 0;\r\n  \r\n    -webkit-transition: opacity 0.4s;\r\n    transition: opacity 0.4s;\r\n  }\r\n\r\n.alert-validate::after {\r\n    content: \"\\F12A\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    color: #c80000;\r\n  \r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    right: 5px;\r\n  }\r\n\r\n.alert-validate:hover:before {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n@media (max-width: 992px) {\r\n    .alert-validate::before {\r\n      visibility: visible;\r\n      opacity: 1;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\n  <div class=\"container-login100\" style=\"background-image: url('assets/1.jpg');\">\n    <div class=\"wrap-login100\">\n      <form name=\"form\" (ngSubmit)=\"registration()\" class=\"login100-form validate-form\">\n        <span class=\"login100-form-logo\">\n          <i class=\"fa fa-expeditedssl\" aria-hidden=\"true\"></i>\n        </span>\n        <br>\n        <span class=\"login100-form-title p-b-34 p-t-27\">\n          Sign up\n        </span>\n\n        <div class=\"wrap-input100 validate-input\" data-validate = \"Enter username\">\n          <input class=\"input100\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" placeholder=\"Username\">\n          <span class=\"focus-input100\" ><i class=\"glyphicon glyphicon-user\"></i></span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"password\" [(ngModel)]=\"user.password\" name=\"pass\" placeholder=\"Password\">\n          <span class=\"focus-input100\"> <i class=\"glyphicon glyphicon-lock\"></i> </span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"password\" [(ngModel)]=\"password\" name=\"pass2\" placeholder=\"Confirm password\">\n          <span class=\"focus-input100\"> <i class=\"glyphicon glyphicon-lock\"></i> </span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"text\" [(ngModel)]=\"user.firstName\" name=\"firstName\" placeholder=\"First name\">\n          <span class=\"focus-input100\" ><i class=\"glyphicon glyphicon-user\"></i></span>\n        </div>\n\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n          <input class=\"input100\" type=\"text\" [(ngModel)]=\"user.lastName\" name=\"lastName\" placeholder=\"Last name\">\n          <span class=\"focus-input100\"><i class=\"glyphicon glyphicon-user\"></i></span>\n        </div>\n\n        <div class=\"contact100-form-checkbox\">\n        </div>\n\n        <div class=\"container-login100-form-btn\">\n          <button type=\"submit\" class=\"login100-form-btn\">\n            Sign up\n          </button>\n        </div>\n        <br>\n        <div class=\"text-center p-t-90\">\n            <a class=\"txt1\" href=\"#/login\" >\n              Login\n            </a>\n          </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router, toastr, vcr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
        this.password = '';
        this.user = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registration = function () {
        var _this = this;
        if (this.password === this.user.password) {
            this.auth.signup(this.user)
                .then(function (res) { return _this.router.navigate(['login']); });
        }
        else {
            this.toastr.error("Passwords don't match.");
        }
        /*localStorage.removeItem('token');
        this.auth.signup(this.user).
          then(); */
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/token-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        if (localStorage.getItem('token') != null) {
            request = request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + localStorage.getItem('token')
                }
            });
        }
        else {
            request = request.clone({});
        }
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.Injector])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());
exports.TokenInterceptorService = TokenInterceptorService;


/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n    DEMO STYLE\r\n*/\r\n\r\n\r\n.navbar-btn {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    outline: none !important;\r\n    border: none;\r\n}\r\n\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n\r\n#sidebar {\r\n    padding-top: 4%;\r\n    min-width: 200px;\r\n    max-width: 200px;\r\n    background: rgb(44, 45, 104);\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    text-align: center;\r\n    color: azure\r\n}\r\n\r\n\r\n#sidebar.active {\r\n    margin-left: -250px;\r\n}\r\n\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 20px;\r\n    background: #6d7fcc;\r\n}\r\n\r\n\r\n#sidebar ul.components {\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #47748b;\r\n}\r\n\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n    color: #fff;\r\n    background: #6d7fcc;\r\n}\r\n\r\n\r\na[data-toggle=\"collapse\"] {\r\n    position: relative;\r\n}\r\n\r\n\r\n.dropdown-toggle::after {\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 20px;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n\r\n\r\nul ul a {\r\n    font-size: 0.9em !important;\r\n    padding-left: 30px !important;\r\n    background: #6d7fcc;\r\n}\r\n\r\n\r\nul.CTAs {\r\n    padding: 20px;\r\n}\r\n\r\n\r\nul.CTAs a {\r\n    text-align: center;\r\n    font-size: 0.9em !important;\r\n    display: block;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n\r\n#content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    min-height: 100vh;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -250px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\nbody {\r\n    padding-top: 90px;\r\n}\r\n\r\n\r\nimg {\r\n    width: 190px;\r\n    height: 125px;\r\n    position: center;\r\n    padding-left: 3px;\r\n    padding-bottom: 30px\r\n}\r\n\r\n\r\nh1 {\r\n\tpadding-left: 27pt;\r\n}\r\n\r\n\r\nlabel {\r\n\tfont-size: 16px;\r\n\tpadding-left: 7pt;\r\n}\r\n\r\n\r\n.paragraph {\r\n\tborder-color: #ccc;\r\n\t-webkit-box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\r\n\tbox-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);\r\n\ttext-justify: auto;\r\n\tpadding-left: 10px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n.panel-login {\r\n\tborder-color: #ccc;\r\n\t-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n\r\n\r\n.panel-login>.panel-heading {\r\n\tcolor: rgb(230, 118, 118);\r\n\tbackground-color: #fff;\r\n\tborder-color: #fff;\r\n\ttext-align:center;\r\n}\r\n\r\n\r\n.panel-login>.panel-heading a{\r\n\ttext-decoration: none;\r\n\tcolor: #666;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\t-webkit-transition: all 0.1s linear;\r\n\ttransition: all 0.1s linear;\r\n}\r\n\r\n\r\n.panel-login>.panel-heading a.active{\r\n\tcolor: rgb(209, 8, 8);\r\n\tfont-size: 18px;\r\n}\r\n\r\n\r\n.panel-login>.panel-heading hr{\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tclear: both;\r\n\tborder: 0;\r\n\theight: 1px;\r\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\r\n}\r\n\r\n\r\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\r\n\theight: 45px;\r\n\tborder: 1px solid #ddd;\r\n\tfont-size: 16px;\r\n\t-webkit-transition: all 0.1s linear;\r\n\ttransition: all 0.1s linear;\r\n}\r\n\r\n\r\n.panel-login input:hover,\r\n.panel-login input:focus {\r\n\toutline:none;\r\n\t-webkit-box-shadow: none;\r\n\tbox-shadow: none;\r\n\tborder-color: #ccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\">AppAche</a>\n      </div>\n      <div id=\"navbar-top\" class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li><a [routerLink]=\"['/home']\">Home</a></li>\n          <li class=\"active\"><a [routerLink]=\"['/home']\">Profile</a></li>\n          <li><a (click)=\"logout()\">Log out</a></li>\n        </ul>\n      </div>\n    </div>\n</nav>\n    <div class=\"col-md-4 col-md-offset-4\" style=\"padding-top:7%\">\n        <h2>Username: {{user.username}}</h2>\n        <h3>Name: {{user.firstName}} {{user.lastName}}</h3>\n    </div>\n    <div class=\"col-md-8 col-md-offset-1\">\n        <div class=\"container\">\n            <div class=\"col-md-8\" style=\"padding-bottom: 15px\">\n            <h2>Add new post:</h2>\n            <input type=\"text\" name=\"addComm\" id=\"addComm\" tabindex=\"2\" class=\"form-control\" [(ngModel)]=\"text\">\n            <br>\n            <button class=\"btn btn-primary\" type=\"button\" style=\"height: 40px; width: 80px;\" (click)=\"add()\">Post</button>\n            <button class=\"btn btn-warning\" type=\"reset\" style=\"height: 40px; width: 80px;\" (click)=\"reset()\">Reset</button>\n        </div>\n            <br>\n            <br>\n            <div class=\"row\" *ngFor=\"let post of posts\">\n                <div class=\"col-md-8 \">\n                    <div class=\"panel panel-login\">\n                            <h3 style=\"padding-left: 14pt;\">User: {{user.username}}</h3>\n                            <h4 style=\"padding-left: 14pt;\">Time and location: {{post.time}}, {{post.date}}, {{post.location}}</h4>\n                        <div class=\"panel-body\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <form id=\"project-form\"  method=\"post\" role=\"form\" style=\"display: block;\">\n                                        <div class=\"input-group\">\n                                            <input type=\"text\" name=\"addComm\" id=\"addComm\" tabindex=\"2\" class=\"form-control\" [(ngModel)]=\"post.text\">\n                                            <span class=\"input-group-btn\" style=\"height: 50px\">\n                                                <button class=\"btn btn-primary\" type=\"button\" style=\"height: 40px; width: 80px;\" (click)=\"update(post)\">Update</button>\n                                            </span>\n                                            <span class=\"input-group-btn\">\n                                                <button class=\"btn btn-warning\" type=\"button\" style=\"height: 40px; width: 80px\"(click)=\"delete(post.id)\">Delete</button>\n                                        </span>\n                                            </div>\n                                        <div class=\"form-group\" style=\"padding-left: 10%; padding-right:10%\">\n                                                <h4>Comments: </h4>\n                                                <div class=\"paragraph\" *ngFor=\"let comment of post.comments\">\n                                                    <div class=\"form-group\">\n                                                        <p style=\"padding-top: 4px;\">User: {{comment.user.username}}</p>\n                                                        <p class=\"comments\" style=\"padding-bottom: 7px; padding-top: 7px\">{{comment.text}}</p>\n                                                    </div>\n                                                </div>\n                                        </div>\n                                        <br>\n                                        <div class=\"form-group\">\n                                            <input type=\"text\" name=\"addComm\" id=\"addComm\" tabindex=\"2\" class=\"form-control\" placeholder=\"Add comment\">\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                </div>\n        </div>\n    </div>   \n  </div>"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/login/auth.service.ts");
var post_service_1 = __webpack_require__("../../../../../src/app/posts/post.service.ts");
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authService, postService) {
        this.authService = authService;
        this.postService = postService;
        this.user = {
            id: null,
            username: '',
            firstName: '',
            lastName: '',
            roles: []
        };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.me()
            .then(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        this.getPosts();
    };
    UserProfileComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.findAllPostsOfUsers()
            .subscribe(function (posts) {
            _this.posts = posts['content'];
            console.log(_this.posts);
        });
    };
    UserProfileComponent.prototype.delete = function (id) {
        var _this = this;
        this.postService.delete(id)
            .subscribe(function (p) {
            _this.getPosts();
        });
    };
    UserProfileComponent.prototype.update = function (post) {
        var _this = this;
        //console.log(post);
        this.postService.update(post, post.id).subscribe(function (p) {
            _this.getPosts();
        });
    };
    UserProfileComponent.prototype.add = function () {
        var _this = this;
        this.newPost = {
            text: this.text,
            date: '',
            time: '',
            user: this.user,
            attachment: null,
            rating: 0,
            views: 0,
            comments: null
        };
        this.postService.save(this.newPost).subscribe(function (p) {
            _this.getPosts();
            _this.text = "";
        });
    };
    UserProfileComponent.prototype.reset = function () {
        this.text = "";
    };
    UserProfileComponent.prototype.logout = function () {
        this.authService.logout();
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            post_service_1.PostService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;


/***/ }),

/***/ "../../../../../src/app/user-profile/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.findOne = function (id) {
        return this.http.get("/api/users/" + id);
    };
    UserService.prototype.findAll = function (page, size) {
        if (page === void 0) { page = 0; }
        if (size === void 0) { size = 10; }
        var httpParams = new http_1.HttpParams().set('page', page.toString()).set('size', size.toString());
        return this.http.get('/api/users', { params: httpParams });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/assets/Poppins-Bold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Bold.7940efc40d8e3b477e16.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-Medium.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Medium.a4e11dda40531debd374.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-Regular.731a28a413d642522667.ttf";

/***/ }),

/***/ "../../../../../src/assets/Poppins-SemiBold.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Poppins-SemiBold.e63b93dfac2600782654.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map