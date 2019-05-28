import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodDetailPage } from './food-detail';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FoodDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    FoodDetailPage
  ]
})
export class FoodDetailPageModule {}
