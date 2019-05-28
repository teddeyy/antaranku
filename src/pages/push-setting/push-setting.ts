import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';
/**
 * Generated class for the PushSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 @IonicPage()
 @Component({
 	selector: 'page-push-setting',
 	templateUrl: 'push-setting.html',
 })
 export class PushSettingPage {
 	toggle:any;
 	constructor(public navCtrl: NavController,
 		public storage:Storage,
 		public onesginal:OneSignal,
 		public navParams: NavParams,
 		public viewCtrl: ViewController) {
 		this.storage.get('enable_push').then(val=>{
 			this.toggle=val;
 		})
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad PushSettingPage');
 	}

 	togglePush(){
 		this.storage.get('enable_push').then(val=>{
 			if(val==false){
 				this.storage.set('enable_push',true);
 				this.onesginal.setSubscription(true);
 			}else{
 				this.storage.set('enable_push',false);
 				this.onesginal.setSubscription(false);

 			}
 		})
 	}

 	dismiss(){
 		this.viewCtrl.dismiss();
 	}

 }
