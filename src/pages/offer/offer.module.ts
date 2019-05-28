import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferPage } from './offer';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    OfferPage
  ],
  imports: [
    IonicPageModule.forChild(OfferPage),
    TranslateModule.forChild()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class OfferPageModule {

}
