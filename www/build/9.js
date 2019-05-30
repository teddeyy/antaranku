webpackJsonp([9],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionsPageModule = /** @class */ (function () {
    function TransactionsPageModule() {
    }
    TransactionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions__["a" /* TransactionsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], TransactionsPageModule);
    return TransactionsPageModule;
}());

//# sourceMappingURL=transactions.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_currency__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(navCtrl, socialSharing, callNumber, iab, navParams, http, currencyProvider, events, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.callNumber = callNumber;
        this.iab = iab;
        this.navParams = navParams;
        this.http = http;
        this.currencyProvider = currencyProvider;
        this.events = events;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.user_id = '';
        this.settings = '';
        this.storage.get('settings').then(function (data) {
            _this.settings = data;
        });
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url;
        this.list = new Array();
        this.events.subscribe('user: change', function () {
            _this.ionViewWillEnter();
        });
    }
    TransactionsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (obj) {
            console.log(obj);
            if (obj == null) {
                _this.user_id = null;
            }
            else {
                _this.user_id = obj.id;
                _this.first = -5;
                _this.list = new Array();
                _this.loadMore();
            }
        });
    };
    TransactionsPage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.first += 5;
        this.http.get(this.base_url + 'api/orders_api/transactions?first=' + this.first + '&user_id=' + this.user_id + '&offset=' + 5).subscribe(function (data) {
            var jsonData = data.json();
            for (var i = 0; i < jsonData.length; i++) {
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
    TransactionsPage.prototype.openCartPage = function () {
        this.navCtrl.push('CartPage');
    };
    TransactionsPage.prototype.openSearchPage = function () {
        this.navCtrl.push('SearchPage');
    };
    TransactionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transactions',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/transactions/transactions.html"*/'<ion-header>\n\n<ion-navbar>\n\n<button ion-button menuToggle>\n\n	<ion-icon name="menu"></ion-icon>\n\n</button>\n\n<ion-title>{{\'transactions\' | translate}}</ion-title>\n\n<div class="group-btn-nav">\n\n	<button clear small color="light" ion-button class="cart-nav" (click)="openCartPage()">\n\n		<ion-icon name="cart"></ion-icon><p>{{total_card}}</p>\n\n	</button>\n\n	<button clear small color="light" ion-button class="search-nav" (click)="openSearchPage()">\n\n		<ion-icon name="search"></ion-icon>\n\n	</button>\n\n</div>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="list == 0" padding>\n\n<div class="no-item">\n\n	<span>\n\n		<b>{{\'oops\' | translate}}</b>\n\n		<h4>{{\'you_have_not_any_transactions\' | translate}}</h4>\n\n		<p>{{\'come_to_store\' | translate}}</p>\n\n	</span>\n\n</div>\n\n\n\n<ion-fab bottom right>\n\n<button ion-fab>{{\'contact\' | translate}}</button>\n\n<ion-fab-list side="left">\n\n<button ion-fab (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n\n<button ion-fab (click)="facebook()"><ion-icon name="logo-facebook"></ion-icon></button>\n\n<button ion-fab (click)="call()"><ion-icon name="call"></ion-icon></button>\n\n</ion-fab-list>\n\n</ion-fab>\n\n</ion-content>\n\n\n\n\n\n<ion-content *ngIf="list != 0">\n\n\n\n<ion-list>\n\n<ion-item *ngFor="let item of list">\n\n<p class="name">{{\'order_no\' | translate}}: #{{item.id}}</p>\n\n<p class="phone">{{\'phone\' | translate}}: {{item.phone}}</p>\n\n<p class="address">{{\'address\' | translate}}: {{item.address}}</p>\n\n\n\n<h3 class="section-name">{{\'items\' | translate}}</h3>\n\n\n\n<div class="item-food" *ngFor="let lst_food of item.lst_food_order">\n\n	<ion-icon name=""></ion-icon>\n\n	{{lst_food.name}}(\n\n\n\n	{{currencyProvider.formatMoney(lst_food.price)}}\n\n\n\n	) x {{lst_food.quantity}}\n\n	<div *ngIf="lst_food.extras_name">&nbsp;Extras: {{lst_food.extras_name}}</div>\n\n</div>\n\n\n\n<h3 class="section-name">{{\'total_include_tax\' | translate}}:&nbsp;\n\n\n\n{{currencyProvider.formatMoney(item.total)}}\n\n\n\n</h3>\n\n\n\n\n\n<ion-row>\n\n<p class="status-success" style="color: " *ngIf="item.received == 1"> {{\'delivered\' | translate}}</p>\n\n<p class="status-received" *ngIf="item.received == 0">{{\'pending\' | translate}}</p>\n\n</ion-row>\n\n</ion-item>\n\n</ion-list>\n\n\n\n\n\n\n\n<ion-infinite-scroll (ionInfinite)="loadMore($event)">\n\n<ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n\n\n\n\n\n\n<ion-fab bottom right>\n\n<button ion-fab>{{\'contact\' | translate}}</button>\n\n<ion-fab-list side="left">\n\n<button ion-fab (click)="twitter()"><ion-icon name="logo-twitter"></ion-icon></button>\n\n<button ion-fab (click)="facebook()"><ion-icon name="logo-facebook"></ion-icon></button>\n\n<button ion-fab (click)="call()"><ion-icon name="call"></ion-icon></button>\n\n</ion-fab-list>\n\n</ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/transactions/transactions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_8__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], TransactionsPage);
    return TransactionsPage;
}());

//# sourceMappingURL=transactions.js.map

/***/ })

});
//# sourceMappingURL=9.js.map