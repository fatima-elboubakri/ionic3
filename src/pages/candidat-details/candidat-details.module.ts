import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatDetailsPage } from './candidat-details';

@NgModule({
  declarations: [
    CandidatDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatDetailsPage),
  ],
})
export class CandidatDetailsPageModule {}
