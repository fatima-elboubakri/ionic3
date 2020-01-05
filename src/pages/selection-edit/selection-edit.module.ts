import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectionEditPage } from './selection-edit';

@NgModule({
  declarations: [
    SelectionEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectionEditPage),
  ],
})
export class SelectionEditPageModule {}
