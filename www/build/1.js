webpackJsonp([1],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

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

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_currency__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, callNumber, iab, http, storage, alertCtrl, toastCtrl, socialSharing, platform, currencyProvider, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.iab = iab;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.platform = platform;
        this.currencyProvider = currencyProvider;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.settings = '';
        this.currencyProvider;
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url;
        this.carts = Array();
        this.favoriest_list = Array();
        this.storage.ready().then(function () {
            _this.storage.get('settings').then(function (data) {
                _this.settings = data;
            });
            _this.storage.get('carts').then(function (obj) {
                if (obj == null) {
                    _this.storage.set('carts', _this.carts);
                }
            });
            _this.storage.get('favoriest_list').then(function (data) {
                if (data == null) {
                    _this.storage.set('favoriest_list', _this.favoriest_list);
                    _this.favoriest_list = new Array();
                }
                else {
                    _this.favoriest_list = data;
                }
                _this.first = -5;
                _this.list = new Array();
                _this.loadMore();
            });
        });
        events.subscribe('user:add_cart', function (user, time) {
            _this.total_card += 1;
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter HomePage');
        this.storage.get('carts').then(function (obj) {
            _this.total_card = obj.length;
        });
    };
    HomePage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.first += 5;
        this.http.get(this.base_url + 'api/foods_api/foods?first=' + this.first + '&offset=' + 5).subscribe(function (data) {
            var jsonData = data.json();
            for (var i = 0; i < jsonData.length; i++) {
                if (_this.favoriest_list.indexOf(jsonData[i].id) != -1) {
                    jsonData[i].favoriest = true;
                }
                else {
                    jsonData[i].favoriest = false;
                }
                _this.list.push(jsonData[i]);
            }
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }, function (error) {
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
        });
    };
    HomePage.prototype.addFavoriest = function (item) {
        if (item.favoriest) {
            item.favoriest = false;
            var index_of = this.favoriest_list.indexOf(item.id);
            this.favoriest_list.splice(index_of, 1);
        }
        else {
            item.favoriest = true;
            this.favoriest_list.push(item.id);
        }
        this.storage.set('favoriest_list', this.favoriest_list);
    };
    HomePage.prototype.send_message = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.modalAddCart = function (item) {
        console.log(item);
        var modal = this.modalCtrl.create('AddCartPage', { 'food_id': item.id, 'discount': item.discount_percent, 'price': item.price });
        modal.present();
    };
    HomePage.prototype.openPage = function (id) {
        this.navCtrl.push('FoodDetailPage', { id: id });
    };
    HomePage.prototype.openCartPage = function () {
        this.navCtrl.push('CartPage');
    };
    HomePage.prototype.openCatPage = function () {
        this.navCtrl.push('CategoriesPage');
    };
    HomePage.prototype.openSearchPage = function () {
        this.navCtrl.push('SearchPage');
    };
    HomePage.prototype.share = function (item) {
        this.socialSharing.share(item.name, item.description, null, __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'food?id=' + item.id);
    };
    HomePage.prototype.facebook = function () {
        var browser = this.iab.create(this.settings.facebook);
    };
    HomePage.prototype.twitter = function () {
        var browser = this.iab.create(this.settings.twitter);
    };
    HomePage.prototype.call = function () {
        this.callNumber.callNumber(this.settings.phone, true);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/home/home.html"*/'<ion-header>\n<ion-navbar>\n<button ion-button menuToggle>\n  <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title> {{\'home\' | translate}}</ion-title>\n<div class="group-btn-nav">\n  <button clear small color="light" ion-button class="cart-nav" (click)="openCartPage()">\n    <ion-icon name="cart"></ion-icon><p>{{total_card}}</p>\n  </button>\n  <button clear small color="light" ion-button class="search-nav" (click)="openSearchPage()">\n    <ion-icon name="search"></ion-icon>\n  </button>\n</div>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-row class="banner">\n<img class="banner-bg" src="assets/img/home-banner.jpg" alt="">\n<div class="slogan">\n  <h3> {{\'app_name\' | translate}}</h3>\n  <p>{{\'intro\' | translate}}</p>\n  <button color="light" ion-button (click)="openCatPage()"> {{\'our_menu\' | translate}}</button>\n</div>\n<img class="decor" src="assets/img/torn.png" alt="">\n</ion-row>\n\n<ion-row class="lst-food">\n<div class="name-st" padding>\n  <b>{{\'special_food_items\' | translate}}</b>\n  <h4> {{\'discover_now\' | translate}}</h4>\n  <p>Thousands of delicious food are waiting for you to explore below, quick order to go.</p>\n</div>\n\n<ion-card *ngFor="let lst of list">\n<img (click)="openPage(lst.id)" src="{{lst.image}}"/>\n<div class="sale_off" *ngIf="lst.discount_percent != null">\n  <img class="badge" src="assets/img/badge.png" alt="">\n  <p><b>Sale</b><br>-{{(\'0\' + lst.discount_percent).slice(-2)}}<small> %</small></p>\n</div>\n<ion-card-content (click)="openPage(lst.id)">\n<ion-card-title>{{lst.name}}</ion-card-title>\n<p class="price" *ngIf="lst.discount_percent == null || lst.discount_percent == 0">\n\n{{currencyProvider.formatMoney(lst.price)}} \n\n</p>\n<p class="price_sale_off" *ngIf="lst.discount_percent != null && lst.discount_percent != 0">\n\n  <span class="price old-price">\n\n    {{currencyProvider.formatMoney(lst.price)}}\n  \n  </span>\n\n\n    <span class="price">\n\n    {{currencyProvider.formatMoney(lst.price - lst.price*lst.discount_percent/100)}}\n\n  </span>\n</p>\n<p>{{lst.description.substr(0, 150)+\'...\'}}</p>\n</ion-card-content>\n<ion-row no-padding>\n<ion-col col-4>\n<button clear icon-left ion-button small (click)="modalAddCart(lst)">\n  <ion-icon name="cart"></ion-icon> {{\'add_cart\' | translate}}\n</button>\n</ion-col>\n<ion-col col-4 text-center>\n<button clear icon-left ion-button small [ngClass]="lst.favoriest ? \'active\':\'\'" (click)="addFavoriest(lst)">\n  <ion-icon name="heart"></ion-icon>Favorites\n</button>\n</ion-col>\n<ion-col col-4 text-right>\n<button clear icon-left ion-button small (click)=\'share(lst)\'>\n  <ion-icon name="share-alt"></ion-icon> {{\'share\' | translate}}\n</button>\n</ion-col>\n</ion-row>\n</ion-card>\n</ion-row>\n\n<ion-infinite-scroll (ionInfinite)="loadMore($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n\n<ion-row padding class="send-mail">\n<b> {{\'send_us_contact\' | translate}}</b>\n<h4> {{\'send_messages\' | translate}}</h4>\n<p> {{\'send_email_quote\' | translate}}</p>\n<button color="light" icon-right ion-button (click)="send_message(email)">\n {{\'send\' | translate}}\n <ion-icon name="send"></ion-icon>\n</button>\n</ion-row>\n\n<ion-fab bottom right>\n  <button ion-fab>{{\'contact\' | translate}}</button>\n  <ion-fab-list side="left">\n    <button ion-fab (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n    <button ion-fab (click)="facebook()"><ion-icon name="logo-facebook"></ion-icon></button>\n    <button ion-fab (click)="call()"><ion-icon name="call"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, events, http, storage, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.http = http;
        this.storage = storage;
        this.fb = fb;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */];
        this.base_url = '';
        this.user_name = '';
        this.password = '';
        this.msg_err = null;
        this.base_url = __WEBPACK_IMPORTED_MODULE_4__config_constants__["a" /* domainConfig */].base_url;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.user_name != null && this.user_name != '' && this.password != null && this.password != '') {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            this.http.post(this.base_url + 'api/users_api/login', 'user_name=' + this.user_name + '&pwd=' + this.password, { headers: headers }).subscribe(function (data) {
                console.log(data.json());
                if (data.json().empty == null) {
                    var user = data.json()[0];
                    _this.storage.set('user', user);
                    _this.events.publish('user: change');
                    _this.events.publish('user: login');
                }
                else {
                    _this.msg_err = 'Your username or password is wrong';
                }
            }, function (error) {
            });
        }
        else {
            this.msg_err = 'You enter not enough information';
        }
    };
    LoginPage.prototype.fb_login = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            var params = new Array();
            _this.fb.api('/me?fields=name,gender,email', params).then(function (user) {
                console.log(JSON.stringify(user));
                _this.http.get(_this.base_url + 'api/users_api/facebook_user_check?fb_id=' + user.id).subscribe(function (data) {
                    //check user facebook
                    if (data.json().success == 0) {
                        //if do not have user, insert it 
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/x-www-form-urlencoded'
                        });
                        var username = user.email.substring(0, user.email.indexOf("@"));
                        //console.log(username.substring(0,4));
                        username = username.substring(0, 4) + '_' + user.id;
                        var params_1 = 'fb_id=' + user.id + '&email=' + user.email + '&fullname=' + user.name + '&user_name=' + username;
                        _this.http.post(_this.base_url + 'api/users_api/facebook_user_register', params_1, { headers: headers }).subscribe(function (data) {
                            console.log(JSON.stringify(data));
                            var user = data.json();
                            user = user[0];
                            _this.storage.set('user', user);
                            _this.events.publish('user: change');
                            //this.nav.setRoot(HomePage);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else {
                        var user_1 = data.json().data[0];
                        _this.storage.set('user', user_1);
                        _this.events.publish('user: change');
                        // this.nav.setRoot(HomePage);
                    }
                }, function (error) {
                });
            }).catch(function (e) {
                alert("Facebook login failed, try again !!!" + JSON.stringify(e));
            });
        })
            .catch(function (e) {
            alert("Facebook login failed, try again !!!" + JSON.stringify(e));
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'login\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="content-login">\n	<img src="http://www.zigview.co.uk/wp-content/uploads/2015/07/FOOD-photography-42.jpg" alt="">\n	<div padding class="wrapper-login">\n		<div>\n\n			<ion-row class="form-login">\n				<input [(ngModel)]="user_name" type="text" placeholder="{{\'user_name\' | translate}}">\n				<input [(ngModel)]="password" type="password" placeholder="{{\'password\' | translate}}">\n				<p style="color: #fff; text-align: center; display: block; width: 100%;" *ngIf="msg_err != null || msg_err != \'\'">{{msg_err}}</p>\n				<button ion-button round color="light" (click)="login()">{{\'login\' | translate}}</button>\n			</ion-row>\n			<ion-row class="more-login">\n				<button ion-button block round (click)="fb_login()">{{\'login_with_facebook\' | translate}}</button>\n			</ion-row>\n			<ion-row class="more-opt">\n				<button ion-button small clear round (click)="signup()">{{\'new_account\' | translate}}</button>\n			</ion-row>\n		</div>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map