import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams, ToastController, ModalController,Events } from 'ionic-angular';
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
  selector: 'page-food-list',
  templateUrl: 'food-list.html'
})
export class FoodListPage {
  base_url: any;
  favoriest_list: Array<any>;
  list: Array<any>;
  first: number;
  settings:any='';
  title:any='';
  total_card:any;

  constructor(public navCtrl: NavController,
    public socialSharing: SocialSharing,
    public navParams: NavParams,
    public http: Http,
    public storage: Storage, 
    public callNumber:CallNumber,
    public iab: InAppBrowser,
    public toastCtrl:ToastController,
    public currencyProvider: CurrencyProvider,
    public modalCtrl: ModalController,
    private events:Events) {
    this.base_url = Constant.domainConfig.base_url;
    this.title=this.navParams.get('name');
    events.subscribe('user:add_cart', (user, time) => {
      this.total_card+=1;
    });
  }

  ionViewWillEnter(){
    this.storage.ready().then(() => {
      this.storage.get('settings').then((data)=>{
        this.settings=data;
      })
      this.storage.get('favoriest_list').then((data)=>{
        this.favoriest_list = data;
        this.first=-5;
        this.list=new Array();
        this.loadMore();
      });
      this.storage.get('carts').then((obj)=>{
        this.total_card = obj.length;
      });
    })
  }

  loadMore(infiniteScroll:any=null){
    this.first+=5;
    this.http.get(this.base_url+'api/foods_api/foods?categories_id='+this.navParams.get('id')+'&first='+this.first+'&offset='+5).subscribe(data=>{

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



  modalAddCart(item){
    console.log(item);
    let modal = this.modalCtrl.create('AddCartPage', { 'food_id': item.id, 'discount': item.discount_percent, 'price': item.price });
    modal.present();
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
