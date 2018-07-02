import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientNotesPage } from './client-notes';

@NgModule({
  declarations: [
    ClientNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientNotesPage),
  ],
})
export class ClientNotesPageModule {}
