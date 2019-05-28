import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
import { SearchPage } from '../search/search';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CurrencyProvider } from '../../providers/currency';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  base_url: any;
  total_card: number;
  list: any;
  tax: any;
  ship_fee: any;
  pay: any;
  settings: any ='';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public callNumber:CallNumber,
    public iab: InAppBrowser,
    public storage: Storage,
    public currencyProvider: CurrencyProvider,
    public toastCtrl:ToastController) {

    this.currencyProvider;
    
    this.base_url = Constant.domainConfig.base_url;
    this.pay = new Array();

  }

  ionViewDidEnter(){
    this.storage.ready().then(() => {
      this.storage.get('settings').then(data=>{
        this.settings=data;
      })
      this.storage.get('carts').then((data)=>{
        this.list = data;
        let products_price = 0;
        for(var i in this.list){
          products_price = products_price + parseFloat(this.list[i].total_price)*parseInt(this.list[i].quantity);
        };

        this.pay = {
          products: products_price,
          tax: parseFloat(this.settings.tax),
          ship_fee: parseFloat(this.settings.ship_fee),
          total: parseFloat(this.settings.tax) / 100 * products_price + products_price + parseFloat(this.settings.ship_fee)
        }
      });
    })
  }

  minus(quantity, i){
    quantity = parseInt(quantity);
    if(quantity - 1 < 1){
      this.list[i].quantity = 1;
    }else{
      this.list[i].quantity = quantity - 1;
    }
    this.storage.set('carts', this.list);
    this.calc_price();
  }

  plus(quantity, i){
    quantity = parseInt(quantity);
    if(quantity + 1 > 99){
      this.list[i].quantity = 99;
    }else{
      this.list[i].quantity = quantity + 1;
    }
    this.storage.set('carts', this.list);
    this.calc_price();
  }

  enter_quantity(item){
    item.quantity = parseInt(item.quantity);
    if(item.quantity > 99){
      item.quantity = 99;
    }if(item.quantity < 1){
      item.quantity = 1;
    }
    this.storage.set('carts', this.list);
    this.calc_price();
  }

  calc_price(){
    let products_price = 0;

    for(var i in this.list){
      products_price = products_price + parseFloat(this.list[i].total_price)*parseFloat(this.list[i].quantity);
    };

    this.pay = {
      products: products_price,
      tax: parseFloat(this.settings.tax),
      ship_fee: parseFloat(this.settings.ship_fee),
      total: parseFloat(this.settings.tax) / 100 * products_price + products_price + parseFloat(this.settings.ship_fee)
    }
  }

  remove(index){
    this.storage.ready().then(() => {
      this.storage.get('carts').then((obj)=>{
        this.list.splice(index, 1);
        this.storage.set('carts', this.list);
        this.calc_price();
      });
    });

    let toast = this.toastCtrl.create({
      message:'Has Removed An Item',
      duration: 1000,
      position:'top'
    })
    toast.present();
    return;
  }

  removeAll(){
    this.storage.ready().then(() => {
      this.storage.get('carts').then((obj)=>{
        this.list.splice(0, 10000);
        this.storage.set('carts', this.list);
      });
    });
  }

  checkout() {
    this.navCtrl.push('CheckoutPage',{'total':this.pay.total});
  }

  openSearchPage(){
    this.navCtrl.push(SearchPage);
  }

  facebook(){
    let  browser = this.iab.create(this.settings.facebook);
  }

  twitter(){
    let  browser = this.iab.create(this.settings.twitter);
  }

  call(){
    this.callNumber.callNumber(this.settings.phone,true);
  }


}
