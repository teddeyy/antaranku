import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushSettingPage } from './push-setting';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PushSettingPage
  ],
  imports: [
    IonicPageModule.forChild(PushSettingPage),
    TranslateModule.forChild()
  ],
  exports: [
    PushSettingPage
  ]
})

export class PushSettingPageModule {
	
}
