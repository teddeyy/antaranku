import { Component } from '@angular/core';
import { IonicPage,NavController, ModalController, NavParams,Events } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
import { CurrencyProvider } from '../../providers/currency';

import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  base_url: any;
  total_card: number;
  msg_err: any;
  list: Array<any>;
  favoriest_list: Array<any>;
  settings:any='';

  constructor(public navCtrl: NavController, 
    public socialSharing: SocialSharing,
    public callNumber:CallNumber,
    public iab: InAppBrowser,
    public navParams: NavParams,
    public http: Http, 
    public currencyProvider: CurrencyProvider,
    public storage: Storage, 
    public modalCtrl: ModalController,
    private events:Events) {

    this.base_url = Constant.domainConfig.base_url;

    this.list = new Array();

    this.storage.ready().then(() => {
      this.storage.get('settings').then(obj=>{
        this.settings=obj;
      })

      this.storage.get('favoriest_list').then((data)=>{
        this.favoriest_list = data;
      });
    })

    events.subscribe('user:add_cart', (user, time) => {
      this.total_card+=1;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter HomePage');
    this.storage.get('carts').then((obj)=>{
      this.total_card = obj.length;
    });
  }

  search(request){
    this.list= new Array();
    if(request == '' || request == null){
      this.list = null;
    }else{
      this.http.get(this.base_url+'api/foods_api/foods?title='+request).subscribe(data=>{
        if(data.json().empty == null){
          var jsonData = data.json();
          for (var i = 0; i < jsonData.length; i++) {
            if(this.favoriest_list.indexOf(jsonData[i].id) != -1){
              jsonData[i].favoriest = true;
            }else{
              jsonData[i].favoriest = false;
            }
            this.list.push(jsonData[i]);
          }
        }else{
          this.list = null;
          this.msg_err = 'Product not found matching the keyword';
        }
      });
    }
  }


  modalAddCart(item){
    console.log(item);
    let modal = this.modalCtrl.create('AddCartPage', { 'food_id': item.id, 'discount': item.discount_percent, 'price': item.price });
    modal.present();
  }

  openCartPage(){
    this.navCtrl.push('CartPage');
  }

  openPage(id) {
    this.navCtrl.push('FoodDetailPage', {id:id});
  }
  addFavoriest(item){
    if(item.favoriest){
      item.favoriest=false;
      let index_of = this.favoriest_list.indexOf(item.id);
      this.favoriest_list.splice(index_of,1);
    }else{
      item.favoriest=true;
      this.favoriest_list.push(item.id);
    }
    this.storage.set('favoriest_list', this.favoriest_list);
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
