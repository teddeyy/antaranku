webpackJsonp([16],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, iab, navParams, http, callNumber, alertCtrl, formBuilder, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.http = http;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.obj = '';
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__config_constants__["a" /* domainConfig */].base_url + 'api/settings_api/settings').subscribe(function (data) {
            _this.obj = data.json();
            console.log(data.json());
        });
        this.form_contact = this.formBuilder.group({
            full_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(60), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(60), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(200), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    AboutPage.prototype.nav_more = function (url) {
        var browser = this.iab.create(url);
    };
    AboutPage.prototype.send_message = function () {
        var _this = this;
        // alert(this.form_contact.value.full_name);
        var full_name = this.form_contact.value.full_name;
        var email = this.form_contact.value.email;
        var message = this.form_contact.value.message;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var lst_data = 'full_name=' + full_name + '&email=' + email + '&message=' + message;
        if (full_name != null && email != null && message != null && full_name != '' && email != '' && message != '') {
            this.http.post(__WEBPACK_IMPORTED_MODULE_4__config_constants__["a" /* domainConfig */].base_url + 'api/contact_api/contact', lst_data, { headers: headers }).subscribe(function (data) {
                if (data.json() != null) {
                    var alert_1 = _this.alertCtrl.create({
                        'message': 'Message sent to success',
                        buttons: [{
                                text: 'Ok',
                                role: 'cancel',
                                handler: function (data) {
                                    console.log('Cancel clicked');
                                }
                            }]
                    });
                    alert_1.present();
                }
            });
        }
    };
    AboutPage.prototype.facebook = function () {
        var browser = this.iab.create(this.obj.facebook);
    };
    AboutPage.prototype.twitter = function () {
        var browser = this.iab.create(this.obj.twitter);
    };
    AboutPage.prototype.call = function () {
        this.callNumber.callNumber(this.obj.phone, true);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'about\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-row class="map">\n    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0454242593996!2d106.61615941483383!3d-6.257746895470487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sUniversitas+Multimedia+Nusantara!5e0!3m2!1sid!2sid!4v1559064673289!5m2!1sid!2sid" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>\n  </ion-row>\n\n	<div padding class="address">\n		<h4>{{\'find_us\' | translate}} <br>{{\'contact_us\' | translate}}</h4>\n		<ion-row>\n			<ion-icon col-2 name="ios-pin"></ion-icon>\n			<span col-9>\n				<p>{{obj.address}}</p>\n        <p ng-if="obj.sub_address != null">{{obj.sub_address}}</p>\n			</span>\n		</ion-row>\n		<ion-row>\n			<ion-icon col-2 name="ios-mail"></ion-icon>\n			<span col-9>\n  			<p>{{obj.mail}}</p>\n  			<p ng-if="obj.sub_mail != null">{{obj.sub_mail}}</p>\n  		</span>\n		</ion-row>\n		<ion-row>\n			<ion-icon col-2 name="ios-call"></ion-icon>\n			<span col-9>\n				<p>{{obj.phone}}</p>\n				<p ng-if="obj.sub_phone != null">{{obj.sub_phone}}</p>\n			</span>\n		</ion-row>\n    <ion-row ng-if="obj.website != null">\n      <ion-icon col-2 name="ios-globe"></ion-icon>\n      <span col-9>\n        <p>{{obj.website}}</p>\n      </span>\n    </ion-row>\n    <ion-row class="social">\n      <h5>{{\'social\' | translate}}</h5>\n      <button ion-button small clear icon-only *ngIf="obj.facebook != null" (click)="nav_more(obj.facebook)">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-button small clear icon-only *ngIf="obj.instagram != null" (click)="nav_more(obj.instagram)">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </button>\n      <button ion-button small clear icon-only *ngIf="obj.twitter != null" (click)="nav_more(obj.twitter)">\n        <ion-icon name="logo-twitter" ></ion-icon>\n      </button>\n      <button ion-button small clear icon-only *ngIf="obj.pinterest != null" (click)="nav_more(obj.pinterest)">\n        <ion-icon name="logo-pinterest" ></ion-icon>\n      </button>\n      <button ion-button small clear icon-only *ngIf="obj.google_plus != null" (click)="nav_more(obj.google_plus)">\n        <ion-icon name="logo-google" ></ion-icon>\n      </button>\n      <button ion-button small clear icon-only *ngIf="obj.youtube != null" (click)="nav_more(obj.youtube)">\n        <ion-icon name="logo-youtube" ></ion-icon>\n      </button>\n    </ion-row>\n  </div>\n\n  <div padding class="ter_cond" ng-if="obj.terms_and_conditions != null">\n    <ion-row>\n      <h5>{{\'termcond\' | translate}}</h5>\n      <p>{{obj.terms_and_conditions}}</p>\n    </ion-row>\n	</div>\n\n  <ion-row padding class="form-contact">\n		<h4>{{\'send_messages\' | translate}}</h4>\n    <form [formGroup]="form_contact" (ngSubmit)="send_message()">\n      <ion-item>\n        <input type="text" formControlName="full_name" placeholder="{{\'full_name\' | translate}}"/>\n      </ion-item>\n\n      <ion-item>\n        <input type="email" formControlName="email" placeholder="{{\'email\' | translate}}"/>\n      </ion-item>\n      <ion-item>\n        <textarea formControlName="message" placeholder="{{\'messages\' | translate}}"></textarea>\n      </ion-item>\n      <button ion-button type="submit" round>{{\'submit\' | translate}}</button>\n    </form>\n  </ion-row>\n\n  <ion-fab bottom right>\n  <button ion-fab>{{\'contact\' | translate}}</button>\n  <ion-fab-list side="left">\n    <button ion-fab (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n    <button ion-fab (click)="facebook()"><ion-icon name="logo-facebook"></ion-icon></button>\n    <button ion-fab (click)="call()"><ion-icon name="call"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=16.js.map