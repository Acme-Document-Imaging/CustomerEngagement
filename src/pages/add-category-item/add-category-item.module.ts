import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCategoryItemPage } from './add-category-item';

@NgModule({
  declarations: [
    AddCategoryItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCategoryItemPage),
  ],
})
export class AddCategoryItemPageModule {}
