import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritesPage } from './favorites';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FavoritesPage
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
    TranslateModule.forChild()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FavoritesPageModule {

}
