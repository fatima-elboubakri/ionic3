import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatAddPage } from './candidat-add';

@NgModule({
  declarations: [
    CandidatAddPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatAddPage),
  ],
})
export class CandidatAddPageModule {}
