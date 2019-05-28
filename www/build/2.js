webpackJsonp([2],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageModule", function() { return OfferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OfferPageModule = /** @class */ (function () {
    function OfferPageModule() {
    }
    OfferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], OfferPageModule);
    return OfferPageModule;
}());

//# sourceMappingURL=offer.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, socialSharing, callNumber, iab, navParams, http, currencyProvider, storage, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.callNumber = callNumber;
        this.iab = iab;
        this.navParams = navParams;
        this.http = http;
        this.currencyProvider = currencyProvider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.settings = '';
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url;
        this.list = new Array();
        this.storage.ready().then(function () {
            _this.storage.get('settings').then(function (obj) {
                _this.settings = obj;
            });
            _this.storage.get('favoriest_list').then(function (data) {
                _this.favoriest_list = data;
            });
        });
        events.subscribe('user:add_cart', function (user, time) {
            _this.total_card += 1;
        });
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter HomePage');
        this.storage.get('carts').then(function (obj) {
            _this.total_card = obj.length;
        });
    };
    SearchPage.prototype.search = function (request) {
        var _this = this;
        this.list = new Array();
        if (request == '' || request == null) {
            this.list = null;
        }
        else {
            this.http.get(this.base_url + 'api/foods_api/foods?title=' + request).subscribe(function (data) {
                if (data.json().empty == null) {
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
                }
                else {
                    _this.list = null;
                    _this.msg_err = 'Product not found matching the keyword';
                }
            });
        }
    };
    SearchPage.prototype.modalAddCart = function (item) {
        console.log(item);
        var modal = this.modalCtrl.create('AddCartPage', { 'food_id': item.id, 'discount': item.discount_percent, 'price': item.price });
        modal.present();
    };
    SearchPage.prototype.openCartPage = function () {
        this.navCtrl.push('CartPage');
    };
    SearchPage.prototype.openPage = function (id) {
        this.navCtrl.push('FoodDetailPage', { id: id });
    };
    SearchPage.prototype.addFavoriest = function (item) {
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
    SearchPage.prototype.share = function (item) {
        this.socialSharing.share(item.name, item.description, null, __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'food?id=' + item.id);
    };
    SearchPage.prototype.facebook = function () {
        var browser = this.iab.create(this.settings.facebook);
    };
    SearchPage.prototype.twitter = function () {
        var browser = this.iab.create(this.settings.twitter);
    };
    SearchPage.prototype.call = function () {
        this.callNumber.callNumber(this.settings.phone, true);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/search/search.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>{{\'search\' | translate}}</ion-title>\n      <div class="group-btn-nav">\n          <button clear small color="light" ion-button class="cart-nav" (click)="openCartPage()">\n            <ion-icon name="cart"></ion-icon><p>{{total_card}}</p>\n          </button>\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar> -->\n\n  <ion-searchbar (ionInput)="search($event.target.value)"></ion-searchbar>\n\n\n  <ion-row *ngIf="msg_err != null" padding>\n    <h4 class="msg_err">{{msg_err}}</h4>\n  </ion-row>\n\n\n  <ion-row *ngIf="list != null && list != 0" class="lst-food">\n      <div padding class="name-st">\n        <b>{{\'search_1\' | translate}}</b>\n        <h4>{{\'search_1\' | translate}}</h4>\n        <p>{{\'search_1\' | translate}}</p>\n      </div>\n\n      <ion-card *ngFor="let item of list, let i = index">\n        <img (click)="openPage(item.id)" src="{{item.image}}"/>\n        <div class="sale_off" *ngIf="item.discount_percent != null">\n          <img class="badge" src="assets/img/badge.png" alt="">\n          <p><b>Sale</b><br>-{{(\'0\' + item.discount_percent).slice(-2)}}<small> %</small></p>\n        </div>\n        <ion-card-content (click)="openPage(item.id)">\n          <ion-card-title>{{item.name}}</ion-card-title>\n          <p class="price" *ngIf="item.discount_percent == null || item.discount_percent == 0">{{currencyProvider.formatMoney(item.price)}}</p>\n          <p class="price_sale_off" *ngIf="item.discount_percent != null && item.discount_percent != 0">\n            <span class="price old-price"> &nbsp; {{currencyProvider.formatMoney(item.price)}} &nbsp; </span>\n            <span class="price">{{currencyProvider.formatMoney(item.price - item.price*item.discount_percent/100)}}</span>\n          </p>\n          <p>{{item.description.substr(0, 150)+\'...\'}}</p>\n        </ion-card-content>\n        <ion-row no-padding>\n            <ion-col col-4>\n              <button clear icon-left ion-button small (click)="modalAddCart(item)">\n                  <ion-icon name="cart"></ion-icon>{{\'add_cart\' | translate}}\n              </button>\n            </ion-col>\n            <ion-col col-4 text-center>\n                    <button clear icon-left ion-button small [ngClass]="item.favoriest ? \'active\':\'\'" (click)="addFavoriest(item)">\n  <ion-icon name="heart"></ion-icon>{{\'favoriest\' | translate}}\n</button>\n            </ion-col>\n            <ion-col col-4 text-right>\n              <button clear icon-left ion-button small (click)="share(item)">\n                  <ion-icon name="share-alt"></ion-icon>{{\'share\' | translate}}\n              </button>\n            </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-row>\n    <ion-fab bottom right>\n  <button ion-fab>{{\'contact\' | translate}}</button>\n  <ion-fab-list side="left">\n    <button ion-fab (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n    <button ion-fab (click)="facebook()"><ion-icon name="logo-facebook"></ion-icon></button>\n    <button ion-fab (click)="call()"><ion-icon name="call"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(211);
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










var OfferPage = /** @class */ (function () {
    function OfferPage(navCtrl, navParams, http, socialSharing, storage, callNumber, iab, toastCtrl, currencyProvider, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this.callNumber = callNumber;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.currencyProvider = currencyProvider;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.settings = '';
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url;
        events.subscribe('user:add_cart', function (user, time) {
            _this.total_card += 1;
        });
    }
    OfferPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter OfferPage');
        this.storage.get('carts').then(function (obj) {
            _this.total_card = obj.length;
        });
        this.storage.ready().then(function () {
            _this.storage.get('settings').then(function (obj) {
                _this.settings = obj;
            });
            _this.favoriest_list = new Array();
            _this.storage.get('favoriest_list').then(function (data) {
                _this.favoriest_list = data;
                _this.first = -5;
                _this.list = new Array();
                _this.loadMore();
            });
        });
    };
    OfferPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.first += 5;
        this.http.get(this.base_url + 'api/foods_api/foods?is_offered=1' + '&first=' + this.first + '&offset=' + 5).subscribe(function (data) {
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
            console.log(data.json());
            var jsonData = data.json();
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
        }, function (error) {
            if (infiniteScroll != null) {
                infiniteScroll.enable(false);
            }
        });
    };
    OfferPage.prototype.modalAddCart = function (item) {
        console.log(item);
        var modal = this.modalCtrl.create('AddCartPage', { 'food_id': item.id, 'discount': item.discount_percent, 'price': item.price });
        modal.present();
    };
    OfferPage.prototype.addFavoriest = function (item) {
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
    OfferPage.prototype.openPage = function (id) {
        this.navCtrl.push('FoodDetailPage', { id: id });
    };
    OfferPage.prototype.openCartPage = function () {
        this.navCtrl.push('CartPage');
    };
    OfferPage.prototype.openSearchPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    OfferPage.prototype.share = function (item) {
        this.socialSharing.share(item.name, item.description, null, __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'food?id=' + item.id);
    };
    OfferPage.prototype.facebook = function () {
        var browser = this.iab.create(this.settings.facebook);
    };
    OfferPage.prototype.twitter = function () {
        var browser = this.iab.create(this.settings.twitter);
    };
    OfferPage.prototype.call = function () {
        this.callNumber.callNumber(this.settings.phone, true);
    };
    OfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-offer',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/offer/offer.html"*/'<ion-header>\n<ion-navbar>\n<button ion-button menuToggle>\n  <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>{{\'offer\' | translate}}</ion-title>\n<div class="group-btn-nav">\n  <button clear small color="light" ion-button class="cart-nav" (click)="openCartPage()">\n    <ion-icon name="cart"></ion-icon><p>{{total_card}}</p>\n  </button>\n  <button clear small color="light" ion-button class="search-nav" (click)="openSearchPage()">\n    <ion-icon name="search"></ion-icon>\n  </button>\n</div>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n<div class="name-st" padding>\n  <b>{{\'offer_1\' | translate}}</b>\n  <h4>{{\'offer_2\' | translate}}</h4>\n  <p>{{\'offer_3\' | translate}}</p>\n</div>\n\n<ion-card *ngFor="let item of list, let i = index">\n<img (click)="openPage(item.id)" src="{{item.image}}"/>\n<div class="sale_off" *ngIf="item.discount_percent != null">\n  <img class="badge" src="assets/img/badge.png" alt="">\n  <p><b>{{\'sale\' | translate}}</b><br>-{{(\'0\' + item.discount_percent).slice(-2)}}<small> %</small></p>\n</div>\n<ion-card-content (click)="openPage(item.id)">\n<ion-card-title>{{item.name}}</ion-card-title>\n<p class="price" *ngIf="item.discount_percent == null || item.discount_percent == 0">\n\n{{currencyProvider.formatMoney(item.price)}}\n\n</p>\n<p class="price_sale_off" *ngIf="item.discount_percent != null && item.discount_percent != 0">\n <span class="price old-price">\n  {{currencyProvider.formatMoney(item.price)}},\n</span>\n  <span class="price">\n\n  {{currencyProvider.formatMoney(item.price - item.price*item.discount_percent/100)}}\n\n</span>\n</p>\n<p>{{item.description.substr(0, 150)+\'...\'}}</p>\n</ion-card-content>\n<ion-row no-padding>\n<ion-col col-4>\n<button clear icon-left ion-button small (click)="modalAddCart(item)">\n <ion-icon name="cart"></ion-icon>{{\'add_cart\' | translate}}\n</button>\n</ion-col>\n<ion-col col-4 text-center>\n<button clear icon-left ion-button small [ngClass]="item.favoriest ? \'active\':\'\'" (click)="addFavoriest(item)">\n  <ion-icon name="heart"></ion-icon>{{\'favoriest\' | translate}}\n</button>\n</ion-col>\n<ion-col col-4 text-right>\n<button clear icon-left ion-button small (click)="share(item)">\n <ion-icon name="share-alt"></ion-icon>{{\'share\' | translate}}\n</button>\n</ion-col>\n</ion-row>\n</ion-card>\n\n<ion-infinite-scroll (ionInfinite)="loadMore($event)">\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n<ion-fab bottom right>\n  <button ion-fab>{{\'contact\' | translate}}</button>\n  <ion-fab-list side="left">\n    <button ion-fab (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n    <button ion-fab (click)="facebook()"><ion-icon name="logo-facebook"></ion-icon></button>\n    <button ion-fab (click)="call()"><ion-icon name="call"></ion-icon></button>\n  </ion-fab-list>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/offer/offer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], OfferPage);
    return OfferPage;
}());

//# sourceMappingURL=offer.js.map

/***/ })

});
//# sourceMappingURL=2.js.map