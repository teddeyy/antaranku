import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
/*
  Generated class for the HelpersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class CurrencyProvider {
    currency_setting: any = null;

  	constructor(public events:Events, public http: HttpClient, public storage: Storage) {
      this.events.subscribe('settings: done', (data) => {
        this.currency_setting = data;
      })
  	}

  	formatMoney(money){
      const formatter= Intl.NumberFormat(this.currency_setting.language_code +'-'+ this.currency_setting.country_code,{
        style: 'currency',
        currency: this.currency_setting.currency_code
      })
      return formatter.format(money);

  	}


  }