import { Component, ViewChild, NgModule } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, Headers } from '@angular/http';
import  * as Constant from '../config/constants';
import { Storage } from '@ionic/storage';
import {TranslateService} from '@ngx-translate/core';
import { Events } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { CurrencyProvider } from '../providers/currency';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  base_url: any;
  user: Array<any>;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public http: Http,
    public events: Events,
    public storage: Storage,
    public currencyProvider: CurrencyProvider,
    public translate: TranslateService,
    public oneSignal:OneSignal
    ) {
    this.initializeApp();

    this.storage.ready().then(() => {
      this.http.get(this.base_url+'api/settings_api/settings').subscribe(data=>{
        this.storage.set('settings',data.json());
        this.events.publish('settings: done', data.json());
        this.currencyProvider;
      })
    })

    // used for an example of ngFor and navigation
    translate.setDefaultLang('en');

    this.base_url = Constant.domainConfig.base_url;
    this.pages = [
    { title: 'home', component: 'HomePage', icon: 'home'  },
    { title: 'menu', component: 'CategoriesPage', icon: 'list' },
    { title: 'offer', component: 'OfferPage', icon: 'star' },
    { title: 'favoriest', component: 'FavoritesPage', icon: 'heart' },
    { title: 'about', component: 'AboutPage', icon: 'information-circle' },
    { title: 'settings', component: 'SettingsPage', icon: 'settings' },
    ];

    this.user = new Array;
    this.events.subscribe('user: change', () => {
      this.storage.get('user').then((obj) => {
        
        this.user = new Array;
        if (obj == null) {
          this.user = null;
        } else {
          this.user = obj;
          this.nav.setRoot('ProfilePage');
          
        }

      });
    });

    this.events.subscribe('user: login', () => {
      this.nav.setRoot('HomePage');
      this.storage.get('user').then((obj) => {
        this.user = new Array;
        if (obj == null) {
          this.user = null;
        } else {
          this.user = obj;
        }

      });
    });
    this.initializeApp();
  }

  initializeApp() {
    this.storage.get('user').then((obj) => {
      this.user = new Array;
      if (obj == null) {
        this.user = null;
      } else {
        this.user = obj;
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (!this.platform.is('mobileweb') && !this.platform.is('core')) {
        this.oneSignal.startInit(Constant.onesignal_app_id, Constant.google_project_number);

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
          // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });

        this.storage.get('enable_push').then(val=>{
          if(val==null){
            this.storage.set('enable_push',true);
          }else{
            this.oneSignal.setSubscription(val);
          }
        });

        this.oneSignal.endInit();
      }



      this.storage.get('language').then(val=>{
        if(val==null){
          this.storage.set('language','en');
          this.translate.setDefaultLang('en');
        }else{
          this.translate.setDefaultLang(val);
        }
      })


    });
  }

  logout(){
    this.storage.ready().then(() => {
      this.nav.setRoot('HomePage');
      this.storage.remove('user').then(success=>{
        this.events.publish('user: change');
        this.initializeApp();
      });
    });
  }

  openLogin(){
    this.nav.setRoot('LoginPage');
    // this.navCtrl.push(LoginPage);
  }

  openProfile(){
    this.nav.setRoot('ProfilePage');
    // this.navCtrl.push(LoginPage);
  }

  openTransactions(){
    this.nav.setRoot('TransactionsPage');
    // this.navCtrl.push(LoginPage);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
