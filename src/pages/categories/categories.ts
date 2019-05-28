import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
import { SearchPage } from '../search/search';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  list: any;
  base_url: any;
  total_card: any;
  settings:any='';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public http: Http, 
    public callNumber:CallNumber,
    public iab: InAppBrowser,
    public storage: Storage ) {
    this.base_url = Constant.domainConfig.base_url;
    this.http.get(Constant.domainConfig.base_url+'api/categories_api/categories').subscribe(data=>{
      this.list = data.json();
      console.log(data.json());
    })


    this.storage.ready().then(()=>{
      this.storage.get('settings').then(data=>{
        this.settings=data;
      })
    })
  }

  ionViewWillEnter(){
    this.storage.get('carts').then((obj)=>{
      this.total_card = obj.length;
    });
  }

  openPage(item) {
    this.navCtrl.push('FoodListPage', {id:item.id,name:item.name});
  }

  openCartPage(){
    this.navCtrl.push('CartPage');
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
