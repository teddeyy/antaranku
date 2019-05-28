webpackJsonp([0],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_constants__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_phone__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_username__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__validators_password__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = /** @class */ (function () {
    function SignupPage(http, toastCtrl, navCtrl, alertCtrl, formBuilder, navParams) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.base_url = '';
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__config_constants__["a" /* domainConfig */].base_url;
        this.form = formBuilder.group({
            full_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_7__validators_username__["a" /* UserNameValidator */].isValid, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_6__validators_phone__["a" /* PhoneValidator */].isValid],
            address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(200), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            repwd: ['', __WEBPACK_IMPORTED_MODULE_8__validators_password__["a" /* PasswordValidator */].isMatch],
            send_code_method: ['1']
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        var signup_url = '';
        if (this.form.value.send_code_method == 0) {
            //if SMS method
            signup_url = this.base_url + 'api/users_api/check_sms_register_valid';
        }
        else {
            //if mail method
            signup_url = this.base_url + 'api/users_api/check_mail_register_valid';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var data = 'user_name=' + this.form.value.user_name +
            '&full_name=' + this.form.value.full_name +
            '&email=' + this.form.value.email +
            '&address=' + this.form.value.address +
            '&pwd=' + this.form.value.pwd + '&phone=' + this.form.value.phone;
        alert(data);
        this.http.post(signup_url, data, { headers: headers }).subscribe(function (data) {
            console.log(data);
            var jsonData = data.json();
            if (jsonData.success == 3) {
                //if success go to verification page
                var alertCtrl_1 = _this.alertCtrl.create({
                    title: 'Please enter your verification code',
                    enableBackdropDismiss: false,
                    inputs: [{
                            name: 'code',
                            placeholder: 'verification code'
                        }],
                    buttons: [{
                            text: 'Cancel',
                            handler: function (data) {
                                var post_data = 'email=' + _this.form.value.email;
                                _this.http.post(_this.base_url + 'api/users_api/cancel_register', post_data, { headers: headers }).subscribe(function (data) {
                                    _this.navCtrl.pop();
                                });
                            }
                        },
                        {
                            text: 'Resend',
                            handler: function (data) {
                                var post_data = 'email=' + _this.form.value.email + '&phone=' + _this.form.value.phone + '&send_code_method=' + _this.form.value.send_code_method;
                                _this.http.post(_this.base_url + 'api/users_api/resend_verified_code', post_data, { headers: headers }).subscribe(function (data) {
                                });
                            }
                        },
                        {
                            text: 'Submit',
                            handler: function (data) {
                                var post_data = 'code=' + data.code + '&email=' + _this.form.value.email;
                                _this.http.post(_this.base_url + 'api/users_api/register', post_data, { headers: headers }).subscribe(function (data) {
                                    if (data.json().success == 1) {
                                        //register done
                                        var confirmCtl = _this.alertCtrl.create({
                                            message: 'Signup Successfully, Login now !!!',
                                            buttons: [{
                                                    text: 'Ok',
                                                    handler: function () {
                                                        alertCtrl_1.dismiss();
                                                        _this.navCtrl.pop();
                                                    }
                                                }]
                                        });
                                        confirmCtl.present();
                                    }
                                    else {
                                        //register failed
                                        var toastCtrl = _this.toastCtrl.create({
                                            message: 'your confirm code wrong, pls try again',
                                            duration: 3000,
                                            position: 'top'
                                        });
                                        toastCtrl.present();
                                    } //end if else
                                });
                                return false;
                            }
                        }]
                });
                alertCtrl_1.present();
            }
            if (jsonData.success == 1) {
                var alertCtrl = _this.alertCtrl.create({
                    message: 'UserName exist, try another !!',
                    buttons: ['Dismiss']
                });
                alertCtrl.present();
            }
            if (jsonData.success == 0) {
                var alertCtrl = _this.alertCtrl.create({
                    message: 'Email exist, try another !!',
                    buttons: ['Dismiss']
                });
                alertCtrl.present();
            }
            if (jsonData.success == 2) {
                var alertCtrl = _this.alertCtrl.create({
                    message: 'Phone exist, try another !!',
                    buttons: ['Dismiss']
                });
                alertCtrl.present();
            }
        }, function (error) {
            console.log(error);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/tes/ionic_app/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="form-signup">\n  <ion-list>\n    <form [formGroup]="form" (ngSubmit)="signup()">\n      <label for="">{{\'username\' | translate}}</label>\n      <ion-input formControlName="user_name" type="text"></ion-input>\n      <p class="err"  *ngIf="!form.controls.user_name.valid  && (form.controls.user_name.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n      \n      <label for="">{{\'fullname\' | translate}}</label>\n      <ion-input formControlName="full_name"  type="text"></ion-input>\n      <p class="err"  *ngIf="!form.controls.full_name.valid  && (form.controls.full_name.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n      \n      <label for="">{{\'email\' | translate}}</label>\n      <ion-input formControlName="email"  type="text"></ion-input>\n      <p class="err"  *ngIf="!form.controls.email.valid  && (form.controls.email.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n      \n      <label for="">{{\'phone\' | translate}}</label>\n      <ion-input formControlName="phone"  type="text"></ion-input>\n      <p class="err"  *ngIf="!form.controls.phone.valid  && (form.controls.phone.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n      \n      <label for="">{{\'address\' | translate}}</label>\n      <ion-input formControlName="address" type="text"></ion-input>\n      <p class="err"  *ngIf="!form.controls.address.valid && (form.controls.address.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n      \n      <label for="">{{\'password\' | translate}}</label>\n      <ion-input formControlName="pwd" type="password"></ion-input>\n      <p class="err"  *ngIf="!form.controls.pwd.valid && (form.controls.pwd.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n      \n      <label for="">{{\'repassword\' | translate}}</label>\n      <ion-input formControlName="repwd"  type="password"></ion-input>\n      <p class="err"  *ngIf="!form.controls.repwd.valid  && (form.controls.repwd.dirty || submitAttempt)">* More than 5 and less than 50 characters</p>\n\n      <ion-list style="display: none;" radio-group formControlName="send_code_method">\n        <ion-list-header>\n          {{\'get_verified_code_via\' | translate }} (sms verfication is disable for demo)\n        </ion-list-header>\n        <!-- <ion-item>\n          <ion-label><span style="font-size: 12px">{{\'sms\' | translate}}</span></ion-label>\n          <ion-radio value="0"></ion-radio>\n        </ion-item> -->\n        <ion-item>\n          <ion-label><span style="font-size: 12px">{{\'mail\' | translate}}</span></ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <div class="" padding>\n        <button ion-button block round color="danger" [disabled]="!form.valid" type="submit" >{{\'submit\' | translate}}</button>\n      </div>\n    </form>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tes/ionic_app/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "invalidEmail": true };
        }
        return null;
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
var PhoneValidator = /** @class */ (function () {
    function PhoneValidator() {
    }
    PhoneValidator.isValid = function (control) {
        var regExp = /^[0-9]{10}$/;
        if (!regExp.test(control.value)) {
            return { "invalidMobile": true };
        }
        return null;
    };
    return PhoneValidator;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNameValidator; });
var UserNameValidator = /** @class */ (function () {
    function UserNameValidator() {
    }
    UserNameValidator.isValid = function (control) {
        var regExp = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
        if (!regExp.test(control.value)) {
            return { "invalidUserName": true };
        }
        return null;
    };
    return UserNameValidator;
}());

//# sourceMappingURL=username.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
    }
    PasswordValidator.isMatch = function (control) {
        if (control.value == control.root.value['pwd']) {
            console.log('passwords  match');
            return null;
        }
        else {
            return { 'notMatch': true };
        }
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.js.map

/***/ })

});
//# sourceMappingURL=0.js.map