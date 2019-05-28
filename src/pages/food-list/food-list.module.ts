import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodListPage } from './food-list';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FoodListPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodListPage),
    TranslateModule.forChild()
  ],
  exports: [
    FoodListPage
  ]
})
export class FoodListPageModule {}
