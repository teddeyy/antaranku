import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
import { CurrencyProvider } from '../../providers/currency';

import { SearchPage } from '../search/search';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  base_url: any;

  list: Array<any>;
  first: number;
  total_card: any;
  favoriest_list: Array<any>;
  settings:any='';

  constructor(
    public navCtrl: NavController,
    public socialSharing: SocialSharing,
    public navParams: NavParams,
    public http: Http, 
    public callNumber:CallNumber,
    public iab: InAppBrowser,
    public storage: Storage, 
    public currencyProvider: CurrencyProvider,
    public toastCtrl:ToastController, 
    public modalCtrl: ModalController) {

    this.base_url = Constant.domainConfig.base_url;
    this.favoriest_list= new Array();
  }

  ionViewWillEnter(){
    this.storage.ready().then(() => {
      this.storage.get('carts').then((obj)=>{
        this.total_card = obj.length;
      });
      
      this.storage.get('settings').then((data)=>{
        this.settings=data;
      })

      this.storage.get('favoriest_list').then((data)=>{
        this.favoriest_list = data;
        this.first=-5;
        this.list=new Array();
        this.loadMore();
      });
    })
  }

  loadMore(infiniteScroll:any=null){
    this.first+=5;
    let temp_favo = this.favoriest_list.slice(this.first, 5);
    for(var i = 0; i < temp_favo.length; i++ ){
      this.http.get(this.base_url+'api/foods_api/foods?product_id='+temp_favo[i]).subscribe(data=>{
        let tmp = data.json()[0];
        if(tmp!=undefined){
        tmp.favoriest=true;
        this.list.push(tmp);
      }
      });
    }
    if(infiniteScroll){
      infiniteScroll.complete();
    }

    if(temp_favo.length == 0 && infiniteScroll!=null){
      infiniteScroll.enable(false);
    }
  }


  modalAddCart(item){
    console.log(item);
    let modal = this.modalCtrl.create('AddCartPage', { 'food_id': item.id, 'discount': item.discount_percent, 'price': item.price });
    modal.present();
  }

  addFavoriest(item){
    if(item.favoriest){
      item.favoriest=false;
      let index_of = this.favoriest_list.indexOf(item.id);
      this.favoriest_list.splice(index_of,1);
      this.first=-5;
      this.list=new Array();
      this.loadMore();
    }else{
      item.favoriest=true;
      this.favoriest_list.push(item.id);
    }
    this.storage.set('favoriest_list', this.favoriest_list);
  }

  openPage(id) {
    this.navCtrl.push('FoodDetailPage', {id:id});
  }

  openCartPage(){
    this.navCtrl.push('CartPage');
  }

  openSearchPage(){
    this.navCtrl.push(SearchPage);
  }

  share(item){
    this.socialSharing.share(item.name, item.description, null , Constant.domainConfig.base_url+'food?id='+item.id); 
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
