webpackJsonp([13],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, platform, statusBar, splashScreen, http, events, storage, translate, oneSignal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.oneSignal = oneSignal;
        this.base_url = '';
        this.user = '';
        this.user_id = '';
        this.check_edit = false;
        this.base_url = __WEBPACK_IMPORTED_MODULE_5__config_constants__["a" /* domainConfig */].base_url;
        this.events.subscribe('user: change', function () {
            _this.ionViewWillEnter();
        });
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter ProfilePage');
        this.storage.get('user').then(function (obj) {
            console.log(obj);
            _this.user = new Array;
            if (obj == null) {
                _this.user = null;
            }
            else {
                _this.user = obj;
                _this.user_id = obj.id;
                _this.full_name = obj.full_name;
                _this.phone = obj.phone;
                _this.address = obj.address;
            }
        });
    };
    ProfilePage.prototype.update_profile = function () {
        var _this = this;
        alert(this.user_id);
        var reg = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
        if (this.full_name.length >= 5 &&
            this.full_name.length <= 60 &&
            reg.test(this.phone) == true &&
            this.address.length >= 5 &&
            this.address.length <= 250) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            this.http.post(this.base_url + 'api/users_api/update', 'id=' + this.user_id + '&full_name=' + this.full_name + '&phone=' + this.phone + '&address=' + this.address, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
                if (data.json().ok == 0) {
                    _this.msg_err_edit = 'You enter a missing or incorrect input 2';
                }
                else {
                    var user = data.json()[0];
                    _this.storage.remove('user').then(function (success) {
                    });
                    _this.storage.set('user', user);
                    _this.msg_err_edit = 'Update Profile successfully';
                }
            }, function (error) { });
        }
        else {
            this.msg_err_edit = 'You enter a missing or incorrect input 1';
        }
    };
    ProfilePage.prototype.change_pwd = function () {
        var _this = this;
        var reg = /^[a-zA-Z0-9]+$/;
        if (this.old_pwd != null && this.new_pwd != null && this.new_pwd == this.confirm_pwd && this.new_pwd.length <= 60 && this.new_pwd.length >= 5 && reg.test(this.new_pwd) == true) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            this.http.post(this.base_url + 'api/users_api/pwd', 'id=' + this.user_id + '&old_pass=' + this.old_pwd + '&new_pass=' + this.new_pwd, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
                if (data.json().ok == 1) {
                    _this.msg_err_pwd = 'Change password successfully';
                    _this.old_pwd = null;
                    _this.new_pwd = null;
                    _this.confirm_pwd = null;
                }
                else {
                    _this.msg_err_pwd = 'Your username or password is wrong';
                }
            }, function (error) {
            });
        }
        else {
            this.msg_err_pwd = 'You enter a missing or incorrect input';
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'profile\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile">\n	<ion-row class="info">\n<!-- 		<div class="top-bg">\n			<img *ngIf="user.avt != \'\' || user.avt != null" src="{{base_url + user.avt}}" alt="">\n			<img *ngIf="user.avt == \'\' || user.avt == null" src="../../assets/img/home-banner.jpg" alt="">\n		</div> -->\n		<div padding class="main-info">\n<!-- 			<div *ngIf="user.avt != \'\' || user.avt != null">\n	  			<img src="{{base_url + user.avt}}" alt="">\n	  		</div>\n	  		<div *ngIf="user.avt == \'\' || user.avt == null">\n	  			<img src="../../assets/img/home-banner.jpg" alt="">\n			</div> -->\n			<h2>{{user.user_name}}</h2>\n			<p>{{user.email}}</p>\n		</div>\n  	</ion-row>\n  	<ion-row padding class="main-profile">\n	  	<label for="">{{\'full_name\' | translate}}</label>\n	  	<input [(ngModel)]="full_name" type="text">\n	  	<label for="">{{\'phone\' | translate}}</label>\n	  	<input [(ngModel)]="phone" type="number">\n	  	<label for="">{{\'address\' | translate}}</label>\n	  	<input [(ngModel)]="address" type="text">\n	  	<p style="width: 100%; display: block;" *ngIf="msg_err_edit != \'\' || msg_err_edit != null">{{this.msg_err_edit}}</p>\n	  	<button ion-button round color="light" (click)="update_profile()">{{\'update\' | translate}}</button>\n	</ion-row>\n	<ion-row padding class="change-pass">\n	  	<h3>{{\'change_password\' | translate}}</h3>\n	  	<label for="">{{\'old_password\' | translate}}</label>\n	  	<input [(ngModel)]="old_pwd" type="Password">\n	  	<label for="">{{\'new_password\' | translate}}</label>\n	  	<input [(ngModel)]="new_pwd" type="Password">\n	  	<label for="">{{\'confirm_password\' | translate}}</label>\n	  	<input [(ngModel)]="confirm_pwd" type="Password">\n	  	<p style="width: 100%; display: block;" *ngIf="msg_err_pwd != \'\' || msg_err_pwd != null">{{this.msg_err_pwd}}</p>\n	  	<button ion-button round color="light" (click)="change_pwd()">{{\'change\' | translate}}</button>\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=13.js.map