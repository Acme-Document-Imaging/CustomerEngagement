import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectClientPage } from './select-client';

@NgModule({
  declarations: [
    SelectClientPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectClientPage),
  ],
})
export class SelectClientPageModule {}
