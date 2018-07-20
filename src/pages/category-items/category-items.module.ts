import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryItemsPage } from './category-items';

@NgModule({
  declarations: [
    CategoryItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryItemsPage),
  ],
})
export class CategoryItemsPageModule {}
