webpackJsonp([12],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushSettingPageModule", function() { return PushSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_setting__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PushSettingPageModule = /** @class */ (function () {
    function PushSettingPageModule() {
    }
    PushSettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__push_setting__["a" /* PushSettingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__push_setting__["a" /* PushSettingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__push_setting__["a" /* PushSettingPage */]
            ]
        })
    ], PushSettingPageModule);
    return PushSettingPageModule;
}());

//# sourceMappingURL=push-setting.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PushSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PushSettingPage = /** @class */ (function () {
    function PushSettingPage(navCtrl, storage, onesginal, navParams, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.onesginal = onesginal;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage.get('enable_push').then(function (val) {
            _this.toggle = val;
        });
    }
    PushSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PushSettingPage');
    };
    PushSettingPage.prototype.togglePush = function () {
        var _this = this;
        this.storage.get('enable_push').then(function (val) {
            if (val == false) {
                _this.storage.set('enable_push', true);
                _this.onesginal.setSubscription(true);
            }
            else {
                _this.storage.set('enable_push', false);
                _this.onesginal.setSubscription(false);
            }
        });
    };
    PushSettingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PushSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-push-setting',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/push-setting/push-setting.html"*/'<ion-content padding class="food-detail">\n  <ion-row class="close-modal" (click)="dismiss()"></ion-row>\n  <ion-row class="main-modal" col-2>\n    <div class="wrapper">\n      	<ion-item>\n	        <ion-label>{{\'enable\' | translate}}</ion-label>\n	        <ion-toggle [(ngModel)]="toggle"  (ionChange)="togglePush()"></ion-toggle>\n	    </ion-item>\n    </div>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/push-setting/push-setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PushSettingPage);
    return PushSettingPage;
}());

//# sourceMappingURL=push-setting.js.map

/***/ })

});
//# sourceMappingURL=12.js.map