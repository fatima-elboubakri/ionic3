import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentAddPage } from './document-add';

@NgModule({
  declarations: [
    DocumentAddPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentAddPage),
  ],
})
export class DocumentAddPageModule {}
