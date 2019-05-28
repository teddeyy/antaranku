webpackJsonp([14],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartPageModule", function() { return AddCartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_cart__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddCartPageModule = /** @class */ (function () {
    function AddCartPageModule() {
    }
    AddCartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_cart__["a" /* AddCartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_cart__["a" /* AddCartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_cart__["a" /* AddCartPage */]
            ]
        })
    ], AddCartPageModule);
    return AddCartPageModule;
}());

//# sourceMappingURL=add-cart.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_currency__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCartPage = /** @class */ (function () {
    function AddCartPage(navCtrl, navParams, http, storage, currencyProvider, toastCtrl, viewCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.currencyProvider = currencyProvider;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.discount = 0;
        this.snug_size_price = 0;
        this.total_price = '';
        this.select_size = '';
        this.settings = '';
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url;
        this.discount = this.navParams.get('discount');
        this.food_id = this.navParams.get('food_id');
        this.price = this.navParams.get("price");
        this.temp_ext_id = new Array();
        this.list = new Array();
        this.storage.get('settings').then(function (data) {
            _this.settings = data;
        });
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'api/food_sizes_api/size?food_id=' + this.food_id).subscribe(function (data) {
            if (data.json().empty == null) {
                _this.list = data.json();
                console.log(_this.list);
            }
            else {
                _this.list = null;
                _this.total_price = _this.price * 1 - _this.price * _this.discount / 100;
                _this.snug_size_name = 'default';
                _this.snug_size_price = _this.total_price;
            }
        });
        this.list_ext = new Array();
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'api/food_extras_api/extra?food_id=' + this.food_id).subscribe(function (data) {
            if (data.json().empty == null) {
                _this.list_ext = data.json();
            }
            else {
                _this.list_ext = null;
            }
            console.log(_this.list_ext);
        });
    }
    AddCartPage.prototype.selectSize = function (name, price) {
        this.snug_size_name = name;
        this.total_price = this.total_price * 1 - this.snug_size_price * 1 + (price * 1 - price * this.discount / 100);
        this.snug_size_price = price - price * this.discount / 100;
    };
    AddCartPage.prototype.selectExt = function (price, id) {
        var index_of = this.temp_ext_id.indexOf(id);
        if (index_of == -1) {
            this.temp_ext_id.push(id);
            this.total_price = this.total_price * 1 + price * 1;
        }
        else {
            this.temp_ext_id.splice(index_of, 1);
            this.total_price = this.total_price * 1 - price * 1;
        }
        var arr = this.temp_ext_id.sort(function (a, b) { return a - b; });
        this.snug_ext_id = '';
        this.snug_ext_name = '';
        this.snug_ext_price = '';
        if (arr != '') {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < this.list_ext.length; j++) {
                    if (arr[i] == this.list_ext[j].id) {
                        this.snug_ext_id += arr[i] + ',';
                        this.snug_ext_name += this.list_ext[j].name + ',';
                        this.snug_ext_price += this.list_ext[j].price + ',';
                    }
                }
            }
        }
    };
    AddCartPage.prototype.addToCart = function () {
        var _this = this;
        if (this.list != null && this.select_size == '') {
            alert("Please select an size");
        }
        else {
            this.storage.ready().then(function () {
                _this.storage.get('carts').then(function (data) {
                    var carts = data;
                    var check = false;
                    for (var i in carts) {
                        if (carts[i].id == _this.food_id && carts[i].size_name == _this.snug_size_name && carts[i].lst_extras_id == _this.snug_ext_id) {
                            check = true;
                            carts[i].quantity = carts[i].quantity * 1 + 1;
                            _this.storage.set('carts', carts);
                            //this.events.publish('user:add_cart');
                            break;
                        }
                    }
                    ;
                    if (check == false) {
                        _this.http.get(__WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'api/foods_api/foods?product_id=' + _this.food_id).subscribe(function (obj) {
                            var temp_obj = obj.json()[0];
                            temp_obj.quantity = 1;
                            temp_obj.lst_extras_name = _this.snug_ext_name;
                            temp_obj.lst_extras_id = _this.snug_ext_id;
                            temp_obj.lst_extras_price = _this.snug_ext_price;
                            temp_obj.size_name = _this.snug_size_name;
                            temp_obj.size_price = _this.snug_size_price;
                            temp_obj.total_price = _this.total_price;
                            carts.push(temp_obj);
                            _this.storage.set('carts', carts);
                            _this.events.publish('user:add_cart');
                        });
                    }
                    ;
                });
            });
            this.viewCtrl.dismiss();
            var toast = this.toastCtrl.create({
                message: 'Successfully Added',
                duration: 1000,
                position: 'top'
            });
            toast.present();
        }
        return;
    };
    AddCartPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/modal/add-cart.html"*/'\n\n<ion-content padding class="food-detail alert-ios">\n\n<ion-row class="close-modal" (click)="dismiss()"></ion-row>\n\n<ion-row class="main-modal alert-wrapper">\n\n\n\n<ion-list *ngIf="list != null" radio-group [(ngModel)]="select_size">\n\n<ion-list-header>{{\'select_size\' | translate}}</ion-list-header>\n\n<ion-item *ngFor="let lst of list">\n\n<ion-label>{{lst.name}}</ion-label>\n\n<ion-label *ngIf="discount == 0 || discount == null">\n\n\n\n{{currencyProvider.formatMoney(lst.price)}}\n\n\n\n</ion-label>\n\n<ion-label *ngIf="discount != 0 && discount != null">\n\n\n\n{{currencyProvider.formatMoney(lst.price - lst.price*discount/100)}}\n\n\n\n</ion-label>\n\n<ion-radio  value="{{lst.name}}" (click)="selectSize(lst.name, lst.price)"></ion-radio>\n\n</ion-item>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="list == null" radio-group [(ngModel)]="select_size">\n\n<ion-list-header>{{\'select_size\' | translate}}</ion-list-header>\n\n<ion-item>\n\n<ion-label>default</ion-label>\n\n<ion-label>\n\n\n\n{{currencyProvider.formatMoney(price*1 - price*1*discount*1/100)}}\n\n\n\n\n\n</ion-label>\n\n<ion-radio checked value="" (click)="selectSize(lst.name, lst.price)"></ion-radio>\n\n</ion-item>\n\n</ion-list>\n\n\n\n<ion-list *ngIf="list_ext != null">\n\n<ion-list-header>{{\'select_extras\' | translate}}</ion-list-header>\n\n<ion-item *ngFor="let lst of list_ext, let i = index">\n\n<ion-label>{{lst.name}}</ion-label>\n\n<ion-label>\n\n\n\n{{currencyProvider.formatMoney(lst.price)}}\n\n\n\n</ion-label>\n\n<ion-checkbox (ionChange)="selectExt(lst.price, lst.id)"></ion-checkbox>\n\n</ion-item>\n\n</ion-list>\n\n\n\n<div class="add-button">\n\n  <div class="total-price">\n\n    <p>\n\n\n\n      {{\'total\' | translate}}: \n\n\n\n      <b>{{currencyProvider.formatMoney(total_price)}}\n\n\n\n      </b></p>\n\n    </div>\n\n    <button ion-button clear block round (click)="addToCart()">{{\'ok\' | translate}}</button>\n\n  </div>\n\n\n\n</ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/modal/add-cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], AddCartPage);
    return AddCartPage;
}());

//# sourceMappingURL=add-cart.js.map

/***/ })

});
//# sourceMappingURL=14.js.map