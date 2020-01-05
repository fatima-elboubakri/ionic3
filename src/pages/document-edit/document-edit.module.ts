import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentEditPage } from './document-edit';

@NgModule({
  declarations: [
    DocumentEditPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentEditPage),
  ],
})
export class DocumentEditPageModule {}
