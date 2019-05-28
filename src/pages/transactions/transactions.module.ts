import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionsPage } from './transactions';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TransactionsPage
  ],
  imports: [
    IonicPageModule.forChild(TransactionsPage),
    TranslateModule.forChild()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TransactionsPageModule {

}
