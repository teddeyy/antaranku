webpackJsonp([15],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]
            ]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_stripe__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_currency__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_paypal__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, payPal, http, storage, callNumber, iab, toastCtrl, stripe, events, currencyProvider, loadingCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.payPal = payPal;
        this.http = http;
        this.storage = storage;
        this.callNumber = callNumber;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.stripe = stripe;
        this.events = events;
        this.currencyProvider = currencyProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.full_name = '';
        this.phone = '';
        this.address = '';
        this.message = '';
        this.email = '';
        this.user_id = '';
        /*this card info just for test, pls set it to empty string when your app go online */
        this.card_info = {
            number: '4242424242424242',
            expMonth: '12',
            expYear: '2030',
            cvc: '200'
        };
        this.carts = '';
        this.settings = '';
        this.validate = true;
        //pay on delivery;
        this.pay_method = 0;
        this.total = this.navParams.get('total');
        this.storage.ready().then(function () {
            _this.storage.get('carts').then(function (data) {
                _this.carts = data;
            });
            _this.storage.get('settings').then(function (data) {
                _this.settings = data;
            });
        });
        this.events.subscribe('user: change', function () {
            _this.ionViewWillEnter();
        });
    }
    CheckoutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user').then(function (obj) {
            console.log(obj);
            if (obj == null) {
                _this.user_id = null;
            }
            else {
                _this.user_id = obj.id;
                _this.full_name = obj.full_name;
                _this.phone = obj.phone;
                _this.email = obj.email;
            }
        });
    };
    CheckoutPage.prototype.order_now = function () {
        var _this = this;
        this.stripe.setPublishableKey(__WEBPACK_IMPORTED_MODULE_3__config_constants__["g" /* stripe_publish_key */]);
        this.stripe.createCardToken(this.card_info).then(function (token) {
            if (_this.user_id == null) {
                if (_this.full_name.length < 5 || _this.full_name.length > 50) {
                    _this.validate = false;
                    return;
                }
                if (_this.phone.length < 10 || _this.phone.length > 50) {
                    _this.validate = false;
                    return;
                }
            }
            if (_this.address.length < 5 || _this.address.length > 50) {
                _this.validate = false;
                return;
            }
            if (_this.message.length > 500) {
                _this.validate = false;
                return;
            }
            if (_this.user_id == null) {
                if (_this.email.length < 5 || _this.email.length > 50) {
                    _this.validate = false;
                    return;
                }
            }
            _this.validate = true;
            var data = 'email=' + _this.email + '&total=' + _this.total + '&token=' + token['id'] + '&full_name=' + _this.full_name + '&phone=' + _this.phone + '&address=' + _this.address + '&message=' + _this.message + '&items=' + JSON.stringify(_this.carts);
            _this.post(data);
        }).catch(function (error) {
            var alert = _this.alertCtrl.create({
                'message': error
            });
            alert.present();
        });
    };
    CheckoutPage.prototype.order_on_paypal = function () {
        var _this = this;
        if (this.user_id == null) {
            if (this.full_name.length < 5 || this.full_name.length > 50) {
                this.validate = false;
                return;
            }
            if (this.phone.length < 10 || this.phone.length > 50) {
                this.validate = false;
                return;
            }
        }
        if (this.address.length < 5 || this.address.length > 50) {
            this.validate = false;
            return;
        }
        if (this.message.length > 500) {
            this.validate = false;
            return;
        }
        if (this.user_id == null) {
            if (this.email.length < 5 || this.email.length > 50) {
                this.validate = false;
                return;
            }
        }
        this.validate = true;
        if (this.validate == true) {
            this.payPal.init({
                PayPalEnvironmentProduction: __WEBPACK_IMPORTED_MODULE_3__config_constants__["e" /* paypal_live_client_id */],
                PayPalEnvironmentSandbox: __WEBPACK_IMPORTED_MODULE_3__config_constants__["f" /* paypal_sandbox_client_id */]
            }).then(function () {
                _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_9__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                    var payment = new __WEBPACK_IMPORTED_MODULE_9__ionic_native_paypal__["c" /* PayPalPayment */](_this.total, _this.settings.currency_code, 'Buy Pizza', 'sale');
                    _this.payPal.renderSinglePaymentUI(payment).then(function () {
                        var data = 'email=' + _this.email + '&total=' + _this.total + '&full_name=' + _this.full_name + '&user_id=' + _this.user_id + '&phone=' + _this.phone + '&address=' + _this.address + '&message=' + _this.message + '&items=' + JSON.stringify(_this.carts);
                        _this.post(data);
                    }, function () {
                    });
                }, function () {
                });
            }, function () {
            });
        }
    };
    CheckoutPage.prototype.order_on_delivery = function () {
        if (this.user_id == null) {
            if (this.full_name.length < 5 || this.full_name.length > 50) {
                this.validate = false;
                return;
            }
            if (this.phone.length < 10 || this.phone.length > 50) {
                this.validate = false;
                return;
            }
        }
        if (this.address.length < 5 || this.address.length > 50) {
            this.validate = false;
            return;
        }
        if (this.message.length > 500) {
            this.validate = false;
            return;
        }
        if (this.user_id == null) {
            if (this.email.length < 5 || this.email.length > 50) {
                this.validate = false;
                return;
            }
        }
        this.validate = true;
        var data = 'email=' + this.email + '&total=' + this.total + '&full_name=' + this.full_name + '&user_id=' + this.user_id + '&phone=' + this.phone + '&address=' + this.address + '&message=' + this.message + '&items=' + JSON.stringify(this.carts);
        this.post(data);
    };
    CheckoutPage.prototype.post = function (data) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Take order, wait a minutes'
        });
        loader.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url + 'api/orders_api/add_order', data, { headers: headers }).subscribe(function (data) {
            if (data.json().success == 0) {
                var alert_1 = _this.alertCtrl.create({
                    'message': 'Error while ordering, pls try again'
                });
                alert_1.present();
            }
            else {
                _this.storage.set('carts', new Array());
                var alert_2 = _this.alertCtrl.create({
                    'message': 'Order has been successfully placed. <br> Wish you good appetite.',
                    buttons: [{
                            text: 'Ok',
                            role: 'cancel',
                            handler: function (data) {
                                _this.navCtrl.pop();
                            }
                        }]
                });
                loader.dismiss();
                alert_2.present();
            }
        }, function (error) {
            loader.dismiss();
        });
    };
    CheckoutPage.prototype.order = function () {
        if (this.pay_method == 0) {
            this.order_on_delivery();
        }
        if (this.pay_method == 1) {
            this.order_now();
        }
        if (this.pay_method == 2) {
            this.order_on_paypal();
        }
    };
    CheckoutPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CheckoutPage.prototype.facebook = function () {
        var browser = this.iab.create(this.settings.facebook);
    };
    CheckoutPage.prototype.twitter = function () {
        var browser = this.iab.create(this.settings.twitter);
    };
    CheckoutPage.prototype.call = function () {
        this.callNumber.callNumber(this.settings.phone, true);
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/checkout/checkout.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="checkout">\n  <ion-row padding>\n    <h4>Complete the order</h4>\n    <p>You need to fill in and complete the<br>information below</p>\n  </ion-row>\n\n  <ion-list radio-group [(ngModel)]="pay_method">\n\n    <ion-item>\n      <ion-label>Payment on delivery</ion-label>\n      <ion-radio value="0"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Payment by credit card</ion-label>\n      <ion-radio value="1"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Pay use Paypal</ion-label>\n      <ion-radio value="2"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n\n    <div *ngIf="pay_method==1">\n      <ion-item>\n        <ion-label stacked>Card Number</ion-label>\n        <ion-input [(ngModel)]="card_info.number" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Exp Month</ion-label>\n        <ion-input [(ngModel)]="card_info.expMonth" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Exp Year</ion-label>\n        <ion-input [(ngModel)]="card_info.expYear" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>CVC</ion-label>\n        <ion-input [(ngModel)]="card_info.cvc" type="text"></ion-input>\n      </ion-item>\n    </div>\n\n\n    <div *ngIf="user_id == null">\n      <ion-item>\n        <ion-label stacked>Full name</ion-label>\n        <ion-input [(ngModel)]="full_name" type="text"></ion-input>\n        <p padding class="err" *ngIf="full_name.length < 5 || full_name.length > 50">* More than 5 and less than 50 characters, do not contain special characters.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Phone</ion-label>\n        <ion-input type="number" [(ngModel)]="phone" type="text"></ion-input>\n        <p padding class="err" *ngIf="phone.length < 10 || phone.length > 50">* More than 10 and less than 50 digits.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="email" type="text"></ion-input>\n        <p padding class="err" *ngIf="email.length < 10 || email.length > 50">* More than 10 and less than 50 digits.</p>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <ion-label stacked>Receiving address</ion-label>\n      <ion-input [(ngModel)]="address" type="text"></ion-input>\n    </ion-item>\n    <p padding class="err" *ngIf="address.length < 5 || address.length > 250">* More than 5 and less than 250 characters.</p>\n\n    <ion-item>\n      <ion-label stacked>Message</ion-label>\n      <ion-textarea [(ngModel)]="message"></ion-textarea>\n    </ion-item>\n    <p padding class="err" *ngIf="message.length > 500">* Less than 500 characters</p>\n  </ion-list>\n\n  <ion-row class="payment" padding>\n    <p class=\'fee total-pay\'><span>Total:</span><span>\n\n        {{currencyProvider.formatMoney(total)}}\n\n      </span></p>\n    <ion-row class="err_show" *ngIf="msg_err != 0">\n      <p class="err" *ngIf="!validate">Error! You must fill in the information again.</p>\n    </ion-row>\n\n    <button icon-left ion-button round block (click)="order()">\n      <ion-icon name="card"></ion-icon>Complete the order\n    </button>\n\n    <button icon-left ion-button round block (click)="cancel()">\n      <ion-icon name="close"></ion-icon>Cancel\n    </button>\n  </ion-row>\n\n  <!-- <button (click)="order_on_paypal()">Order Paypal</button> -->\n\n  <ion-fab bottom right>\n    <button ion-fab>{{\'contact\' | translate}}</button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="twitter()">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab (click)="facebook()">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab (click)="call()">\n        <ion-icon name="call"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/checkout/checkout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_currency__["a" /* CurrencyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=15.js.map