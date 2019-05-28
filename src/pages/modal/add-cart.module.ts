import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCartPage } from './add-cart';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AddCartPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCartPage),
    TranslateModule.forChild()
  ],
  exports: [
    AddCartPage
  ]
})
export class AddCartPageModule {}
