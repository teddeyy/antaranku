import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController ,AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import  * as Constant from '../../config/constants';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-settings',
 	templateUrl: 'settings.html',
 })
 export class SettingsPage {
 	radioOpen: boolean;
 	radioResult;
 	selectedLang: any=null;
 	constructor(
 		public navCtrl: NavController,
 		public navParams: NavParams,
 		public alertCtrl:AlertController,
 		public translate: TranslateService,
 		public storage: Storage, 
 		public modalCtrl:ModalController) {
 		this.storage.get('language').then((lang)=>{
 			this.selectedLang=lang;
 		})
 	}

 	ionViewDidLoad() {

 	}

 	push_setting() {
 		let modal = this.modalCtrl.create('PushSettingPage');
 		modal.present();
 	}

 	language() {
 		let boxalert = this.alertCtrl.create();
 		boxalert.setTitle('Languages');
 		let langs = Constant.languages;
 		for (let key in langs) {
 			if(key == this.selectedLang){
 				boxalert.addInput({
 					type: 'radio',
 					label: langs[key],
 					value: key,
 					checked: true
 				});
 			}else{
 				boxalert.addInput({
 					type: 'radio',
 					label: langs[key],
 					value: key
 				});
 			}
 		}

 		boxalert.addButton('Cancel');
 		boxalert.addButton({
 			text: 'OK',
 			handler: data => {
 				this.radioOpen = false;
 				this.radioResult = data;
 				this.storage.set('language',data);
 				this.translate.setDefaultLang(data);
 				this.selectedLang=data;
 			}
 		});
 		boxalert.present();
 	}
 }
