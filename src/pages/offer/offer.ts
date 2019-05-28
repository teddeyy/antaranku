import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController, ModalController,Events  } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
import { SearchPage } from '../search/search';
import { SocialSharing } from '@ionic-native/social-sharing';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CurrencyProvider } from '../../providers/currency';

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html'
})
export class OfferPage {
  base_url: any;
  list: Array<any>;
  first: number;
  total_card: any;
  favoriest_list: Array<any>;
  settings:any='';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http, 
    public socialSharing: SocialSharing,
    public storage: Storage, 
    public callNumber:CallNumber,
    public iab: InAppBrowser,
    public toastCtrl:ToastController, 
    public currencyProvider: CurrencyProvider,
    public modalCtrl: ModalController,   private events:Events) {
    this.base_url = Constant.domainConfig.base_url;
    events.subscribe('user:add_cart', (user, time) => {
      this.total_card+=1;
    });
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter OfferPage');

    this.storage.get('carts').then((obj)=>{
      this.total_card = obj.length;
    });
    
    this.storage.ready().then(() => {
      this.storage.get('settings').then(obj=>{
        this.settings=obj;
      })
      this.favoriest_list= new Array();
      this.storage.get('favoriest_list').then((data)=>{
        this.favoriest_list= data;
        this.first=-5;
        this.list=new Array();
        this.loadMore();
      });
    })

  }

  loadMore(infiniteScroll:any=null){
    this.first+=5;
    this.http.get(this.base_url+'api/foods_api/foods?is_offered=1'+'&first='+this.first+'&offset='+5).subscribe(data=>{

      var jsonData = data.json();
      for (var i = 0; i < jsonData.length; i++) {
        if(this.favoriest_list.indexOf(jsonData[i].id) != -1){
          jsonData[i].favoriest = true;
        }else{
          jsonData[i].favoriest = false;
        }
        this.list.push(jsonData[i]);
      }

      console.log(data.json());
      var jsonData=data.json();

      if(infiniteScroll){
        infiniteScroll.complete();
      }
    },error=>{
      if(infiniteScroll!=null){
        infiniteScroll.enable(false);
      }
    })
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
